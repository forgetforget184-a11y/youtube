/* ============================================================================
 * render.mjs — drive render.html headlessly with Playwright (SwiftShader) and
 * write frames/f%05d.jpg with parallel worker concurrency. Usage:
 *   node render.mjs <projectDir> <N>
 * ==========================================================================*/
import { chromium } from 'playwright-core';
import fs from 'fs';
import path from 'path';
import os from 'os';

const projectDir = path.resolve(process.argv[2] || '.');
let N = process.argv[3] ? parseInt(process.argv[3], 10) : 0;
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
console.log('Rendering', N, 'frames ->', framesDir);

const cues = await probePage.evaluate('window.TM.CC ? window.TM.CC.cueList() : []');
fs.writeFileSync(path.join(projectDir, 'cues.json'), JSON.stringify(cues, null, 0));
console.log('cues.json:', cues.length, 'SFX events');
await probePage.close();

// Multi-worker concurrency
const NUM_WORKERS = Math.max(1, Math.min(os.cpus().length, 4));
console.log(`Starting ${NUM_WORKERS} parallel render worker(s)...`);

const workers = await Promise.all(Array.from({ length: NUM_WORKERS }, async (_, i) => {
  const p = await b.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
  await p.goto(url, { waitUntil: 'load' });
  await p.waitForFunction('window.ready === true', { timeout: 60000 });
  return p;
}));

let completed = 0;
const t0 = Date.now();

// Assign frame tasks round-robin
const workerTasks = Array.from({ length: NUM_WORKERS }, () => []);
for (let f = 0; f < N; f++) {
  const frameFile = path.join(framesDir, String(f).padStart(5, '0') + '.jpg');
  if (fs.existsSync(frameFile) && fs.statSync(frameFile).size > 1000) {
    completed++;
    continue;
  }
  workerTasks[f % NUM_WORKERS].push(f);
}

if (completed > 0) {
  console.log(`Resuming: already found ${completed}/${N} completed frames.`);
}

await Promise.all(workers.map(async (page, wIndex) => {
  const tasks = workerTasks[wIndex];
  for (const f of tasks) {
    const frameFile = path.join(framesDir, String(f).padStart(5, '0') + '.jpg');
    const dataUrl = await page.evaluate((ff) => {
      window.renderFrame(ff);
      return document.getElementById('stage').toDataURL('image/jpeg', 0.88);
    }, f);
    const buf = Buffer.from(dataUrl.split(',')[1], 'base64');
    fs.writeFileSync(frameFile, buf);
    completed++;
    if (completed % 100 === 0 || completed === N) {
      const el = (Date.now() - t0) / 1000;
      const fps = el > 0 ? (completed / el).toFixed(1) : '0';
      const pct = ((completed / N) * 100).toFixed(1);
      console.log(`Progress: frame ${completed}/${N} (${pct}%) | ${el.toFixed(1)}s elapsed | ${fps} fps`);
    }
  }
  await page.close();
}));

console.log(`All ${N} frames rendered in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
await b.close();
