/* ============================================================================
 * render.mjs — drive render.html headlessly with Playwright (SwiftShader) and
 * write frames/f%05d.jpg. Usage:
 *   node render.mjs <projectDir> <N>
 * projectDir must contain render.html + engine files + story.js.
 * N = number of frames (if omitted, read window.TM.N after load).
 * ==========================================================================*/
import { chromium } from 'playwright-core';
import fs from 'fs';
import path from 'path';

const projectDir = process.argv[2] || '.';
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
const page = await b.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
page.on('console', m => { if (m.type() === 'error') console.log('PAGE-ERR:', m.text()); });
page.on('pageerror', e => console.log('PAGE-EXC:', e.message));

const url = 'file://' + path.resolve(projectDir, 'render.html');
await page.goto(url, { waitUntil: 'load' });
await page.waitForFunction('window.ready === true', { timeout: 60000 });
if (!N) N = await page.evaluate('window.TM.N');
console.log('Rendering', N, 'frames ->', framesDir);

const t0 = Date.now();
for (let f = 0; f < N; f++) {
  const frameFile = path.join(framesDir, String(f).padStart(5, '0') + '.jpg');
  if (fs.existsSync(frameFile) && fs.statSync(frameFile).size > 1000) {
    if (f % 1000 === 0) console.log(`Resuming: skipped existing frame ${f}/${N}`);
    continue;
  }
  const dataUrl = await page.evaluate((ff) => {
    window.renderFrame(ff);
    return document.getElementById('stage').toDataURL('image/jpeg', 0.92);
  }, f);
  const buf = Buffer.from(dataUrl.split(',')[1], 'base64');
  fs.writeFileSync(frameFile, buf);
  if (f % 60 === 0 || f === N - 1) {
    const el = (Date.now() - t0) / 1000;
    console.log(`frame ${f + 1}/${N}  ${el.toFixed(1)}s  ${((f + 1) / el).toFixed(1)} fps`);
  }
}
// export auto-cued SFX events (pop/whoosh/scribble/clink/stamp/ding/...) for sfx.py mix
const cues = await page.evaluate('window.TM.CC ? window.TM.CC.cueList() : []');
fs.writeFileSync(path.join(projectDir, 'cues.json'), JSON.stringify(cues, null, 0));
console.log('cues.json:', cues.length, 'SFX events');
// QA: text that went (partly) off the frame
const warns = await page.evaluate('window.TM.CC && window.TM.CC.warnList ? window.TM.CC.warnList() : []');
fs.writeFileSync(path.join(projectDir, 'offscreen_text.json'), JSON.stringify(warns, null, 1));
if (warns.length) { console.log(`WARNING: ${warns.length} text item(s) went off-screen — fix before delivery:`); warns.slice(0, 40).forEach(w => console.log(`  t=${w.t}s  "${w.text}"`)); }
else console.log('QA: no off-screen text');
await b.close();
console.log('DONE', N, 'frames in', ((Date.now() - t0) / 1000).toFixed(1), 's');
