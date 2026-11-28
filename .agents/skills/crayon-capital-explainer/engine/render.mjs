/* ============================================================================
 * render.mjs — drive render.html headlessly with Playwright (SwiftShader) and
 * write frames/%05d.jpg with parallel worker concurrency & optional matrix sharding.
 * Usage:
 *   node render.mjs <projectDir> [N] [shardIndex] [numShards]
 * ==========================================================================*/
import { chromium } from 'playwright-core';
import fs from 'fs';
import path from 'path';
import os from 'os';

const projectDir = path.resolve(process.argv[2] || '.');
let N = process.argv[3] ? parseInt(process.argv[3], 10) : 0;
const shardIndex = process.argv[4] !== undefined ? parseInt(process.argv[4], 10) : -1;
const numShards = process.argv[5] !== undefined ? parseInt(process.argv[5], 10) : 1;

const framesDir = path.join(projectDir, 'frames');
fs.mkdirSync(framesDir, { recursive: true });

const launchOpts = {
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist',
         '--no-sandbox', '--disable-dev-shm-usage', '--force-color-profile=srgb']
};
if (process.env.PW_CHROMIUM) {
  launchOpts.executablePath = process.env.PW_CHROMIUM;
} else if (process.platform === 'win32') {
  launchOpts.executablePath = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
    ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    : 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
} else if (fs.existsSync('/usr/bin/chromium-browser')) {
  launchOpts.executablePath = '/usr/bin/chromium-browser';
} else if (fs.existsSync('/usr/bin/chromium')) {
  launchOpts.executablePath = '/usr/bin/chromium';
}

const b = await chromium.launch(launchOpts);
const url = 'file://' + path.resolve(projectDir, 'render.html');

// Probe N and cues from an initial page
const probePage = await b.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
await probePage.goto(url, { waitUntil: 'load' });
await probePage.waitForFunction('window.ready === true', { timeout: 60000 });
if (!N) N = await probePage.evaluate('window.TM.N');

const cuesPath = path.join(projectDir, 'cues.json');
if (!fs.existsSync(cuesPath) || shardIndex <= 0) {
  const cues = await probePage.evaluate('window.TM.CC ? window.TM.CC.cueList() : []');
  fs.writeFileSync(cuesPath, JSON.stringify(cues, null, 0));
  console.log('cues.json:', cues.length, 'SFX events');
}
await probePage.close();

// Multi-worker concurrency (optimally matches vCPU cores to eliminate CPU throttling)
const NUM_WORKERS = Math.max(1, Math.min(os.cpus().length, 4));
const shardInfo = numShards > 1 ? ` (Shard ${shardIndex + 1}/${numShards})` : '';
console.log(`Starting ${NUM_WORKERS} parallel render worker(s)${shardInfo}... Total N=${N}`);

const workers = await Promise.all(Array.from({ length: NUM_WORKERS }, async (_, i) => {
  const p = await b.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
  await p.goto(url, { waitUntil: 'load' });
  await p.waitForFunction('window.ready === true', { timeout: 60000 });
  return p;
}));

let completed = 0;
const t0 = Date.now();

// Assign frame tasks round-robin (respecting shard filter if set)
const workerTasks = Array.from({ length: NUM_WORKERS }, () => []);
let assignedCount = 0;

for (let f = 0; f < N; f++) {
  if (numShards > 1 && (f % numShards !== shardIndex)) {
    continue; // Belongs to another shard runner
  }
  const frameFile = path.join(framesDir, String(f).padStart(5, '0') + '.jpg');
  if (fs.existsSync(frameFile) && fs.statSync(frameFile).size > 1000) {
    completed++;
    continue;
  }
  workerTasks[assignedCount % NUM_WORKERS].push(f);
  assignedCount++;
}

const totalForThisShard = assignedCount + completed;
if (completed > 0) {
  console.log(`Resuming: already found ${completed}/${totalForThisShard} completed frames for this shard.`);
}

console.log(`Assigned ${assignedCount} frames across ${NUM_WORKERS} workers.`);

await Promise.all(workers.map(async (page, wIndex) => {
  const tasks = workerTasks[wIndex];
  for (const f of tasks) {
    const frameFile = path.join(framesDir, String(f).padStart(5, '0') + '.jpg');
    const dataUrl = await page.evaluate((ff) => {
      window.renderFrame(ff);
      return document.getElementById('stage').toDataURL('image/jpeg', 0.80);
    }, f);
    const buf = Buffer.from(dataUrl.split(',')[1], 'base64');
    fs.writeFileSync(frameFile, buf);
    completed++;
    if (completed % 100 === 0 || completed === totalForThisShard) {
      const el = (Date.now() - t0) / 1000;
      const fps = el > 0 ? (completed / el).toFixed(1) : '0';
      const pct = totalForThisShard > 0 ? ((completed / totalForThisShard) * 100).toFixed(1) : '100';
      console.log(`Progress: frame ${completed}/${totalForThisShard} (${pct}%) | ${el.toFixed(1)}s elapsed | ${fps} fps`);
    }
  }
  await page.close();
}));

console.log(`Shard complete: ${completed}/${totalForThisShard} frames in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
await b.close();
