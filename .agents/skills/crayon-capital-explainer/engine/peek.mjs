// node peek.mjs <projectDir> [all|f1,f2,...]  -> renders selected frames to <projectDir>/peek/
import { chromium } from 'playwright-core';
import fs from 'fs'; import path from 'path';
const dir = path.resolve(process.argv[2] || '.'); const sel = process.argv[3] || 'all';
const out = path.join(dir, 'peek'); fs.mkdirSync(out, { recursive: true });
const launchOpts = {
  args: ['--use-angle=swiftshader','--enable-unsafe-swiftshader','--no-sandbox','--disable-dev-shm-usage']
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
const page = await b.newPage({ viewport: { width: 1920, height: 1080 } });
let cur = -1;
page.on('pageerror', e => console.log('PAGE-EXC f' + cur + ':', e.message));
page.on('console', m => { if (m.type() === 'error') console.log('PAGE-ERR f' + cur + ':', m.text()); });
await page.goto('file://' + path.resolve(dir, 'render.html'));
await page.waitForFunction('window.ready === true', { timeout: 60000 });
let frames;
if (sel === 'all') {
  frames = await page.evaluate(() => (window.TM.shots || []).map(s => Math.floor(((s.start + s.end) / 2) * 30)));
  if (!frames.length || frames.some(isNaN)) frames = await page.evaluate(() => Object.keys(window.TM).join(','));
} else frames = sel.split(',').map(Number);
console.log('frames', JSON.stringify(frames));
if (Array.isArray(frames)) for (const f of frames) {
  cur = f;
  const d = await page.evaluate(ff => { window.renderFrame(ff); return document.getElementById('stage').toDataURL('image/jpeg', 0.85); }, f);
  fs.writeFileSync(path.join(out, String(f).padStart(5, '0') + '.jpg'), Buffer.from(d.split(',')[1], 'base64'));
}
// QA sweep: render every 10th frame (no save) to catch text that drifts off-screen at any point
const warns = await page.evaluate(() => {
  const N = Math.round((window.TM.DURATION || (window.TM.shots || []).reduce((m, s) => Math.max(m, s.end), 0)) * 30);
  for (let f = 0; f < N; f += 10) window.renderFrame(f);
  return window.TM.CC && window.TM.CC.warnList ? window.TM.CC.warnList() : [];
});
if (warns.length) { console.log(`WARNING: ${warns.length} text item(s) go off-screen:`); warns.forEach(w => console.log(`  t=${w.t}s  "${w.text}"`)); }
else console.log('QA: no off-screen text');
await b.close();
