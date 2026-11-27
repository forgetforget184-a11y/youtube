/* ============================================================================
 * Timeless Moments procedural 2D-canvas engine — scene.js (core)
 * Story-agnostic. Creates the global TM namespace: easing, RNG, ink/cel
 * drawing helpers, background (sky/ground/vignette), a Camera, and the
 * hard-cut SHOT runner that drives window.renderFrame(f).
 * A project supplies TM.config({fps,duration,shots,phrases}) via story.js.
 * ==========================================================================*/
(function () {
  const TM = (window.TM = window.TM || {});
  const W = (TM.W = 1920), H = (TM.H = 1080);

  /* ---- palette (not negotiable) ---- */
  TM.PAL = {
    cyan: '#00BFFF', sky: '#8FD3F2', red: '#E8322A', yellow: '#F5C518',
    navy: '#1A1A2E', white: '#FFFFFF', ground: '#C8C5BE', groundDark: '#B2AEA4',
    ink: '#141420', wall: '#4A90D9', wallWarm: '#E7D9B8', choco: '#5A3620',
    chocoLt: '#7A4A2C', cream: '#F3E4C8'
  };

  /* ---- math / easing ---- */
  const clamp = (TM.clamp = (v, a, b) => Math.max(a, Math.min(b, v)));
  TM.lerp = (a, b, u) => a + (b - a) * u;
  TM.smooth = (u) => { u = clamp(u, 0, 1); return u * u * (3 - 2 * u); };
  // never-zero velocity blend: keeps motion continuous for the anim test
  TM.easeIO = (u) => 0.5 * clamp(u, 0, 1) + 0.5 * TM.smooth(u);
  TM.easeOut = (u) => { u = clamp(u, 0, 1); return 1 - (1 - u) * (1 - u); };
  TM.TAU = Math.PI * 2;

  // deterministic hash RNG so idle/blink are stable per character seed
  TM.rand = (seed) => { let x = Math.sin(seed * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
  TM.noise = (t, seed) => { // smooth 1-D value noise
    const i = Math.floor(t), fr = t - i;
    const a = TM.rand(i + seed * 57.0), b = TM.rand(i + 1 + seed * 57.0);
    return TM.lerp(a, b, TM.smooth(fr)) * 2 - 1;
  };

  /* ---- ink + cel helpers ---- */
  // Fill a path then stroke a heavy ink outline. pathFn draws the path on ctx.
  TM.shape = function (ctx, pathFn, fill, inkW, inkColor) {
    ctx.beginPath(); pathFn(ctx);
    if (fill) { ctx.fillStyle = fill; ctx.fill(); }
    if (inkW > 0) {
      ctx.lineJoin = 'round'; ctx.lineCap = 'round';
      ctx.lineWidth = inkW; ctx.strokeStyle = inkColor || TM.PAL.ink; ctx.stroke();
    }
  };
  TM.rr = function (ctx, x, y, w, h, r) {
    r = Math.min(r, w / 2, h / 2);
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  };
  // soft elliptical cast shadow on the ground
  TM.castShadow = function (ctx, x, y, rx, ry, a) {
    ctx.save(); ctx.globalAlpha = a == null ? 0.18 : a; ctx.fillStyle = '#20202a';
    ctx.beginPath(); ctx.ellipse(x, y, rx, ry, 0, 0, TM.TAU); ctx.fill(); ctx.restore();
  };
  // cel highlight streak
  TM.streak = function (ctx, pathFn, a) {
    ctx.save(); ctx.globalAlpha = a == null ? 0.5 : a; ctx.fillStyle = '#ffffff';
    ctx.beginPath(); pathFn(ctx); ctx.fill(); ctx.restore();
  };

  /* ---- backgrounds ---- */
  TM.sky = function (ctx, top, bot) {
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, top || '#BDE4F7'); g.addColorStop(1, bot || '#E9F4FB');
    ctx.fillStyle = g; ctx.fillRect(-2000, -2000, W + 4000, H + 4000);
  };
  TM.room = function (ctx, wall, floorY, floor) {
    ctx.fillStyle = wall; ctx.fillRect(-2000, -2000, W + 4000, floorY + 2000);
    ctx.fillStyle = floor; ctx.fillRect(-2000, floorY, W + 4000, H + 2000 - floorY);
    ctx.save(); ctx.globalAlpha = 0.35; ctx.strokeStyle = '#00000022'; ctx.lineWidth = 3;
    for (let i = -4; i < 12; i++) { ctx.beginPath(); ctx.moveTo(-200, floorY + i * 90); ctx.lineTo(W + 200, floorY + i * 70); ctx.stroke(); }
    ctx.restore();
  };
  TM.ground = function (ctx, y, col) {
    ctx.fillStyle = col || TM.PAL.ground; ctx.fillRect(-2000, y, W + 4000, H + 2000 - y);
    ctx.save(); ctx.globalAlpha = 0.25; ctx.fillStyle = TM.PAL.groundDark;
    ctx.fillRect(-2000, y, W + 4000, 10); ctx.restore();
  };
  // screen-space vignette (drawn after camera restore)
  TM.vignette = function (ctx) {
    const g = ctx.createRadialGradient(W / 2, H / 2, H * 0.55, W / 2, H / 2, H * 1.15);
    g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(10,8,20,0.16)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  };

  /* ---- camera ---- */
  // cam = {x,y,zoom}. World point (x,y) is centred on screen at scale zoom.
  TM.applyCam = function (ctx, cam) {
    ctx.translate(W / 2, H / 2); ctx.scale(cam.zoom, cam.zoom); ctx.translate(-cam.x, -cam.y);
  };
  TM.interpCam = function (from, to, u, kind) {
    if (!to) return from;
    let e = TM.easeIO(u);
    if (kind === 'whip') e = TM.easeOut(Math.min(1, u * 1.15)); // fast settle
    const zoom = from.zoom * Math.pow(to.zoom / from.zoom, e); // geometric => constant perceived speed
    return { x: TM.lerp(from.x, to.x, e), y: TM.lerp(from.y, to.y, e), zoom };
  };

  /* ---- config + shot runner ---- */
  TM.FPS = 30; TM.DURATION = 0; TM.shots = []; TM.phrases = [];
  TM.config = function (cfg) {
    TM.FPS = cfg.fps || 30; TM.DURATION = cfg.duration || 0;
    TM.shots = cfg.shots || []; TM.phrases = cfg.phrases || [];
    TM.N = Math.round(TM.DURATION * TM.FPS);
  };
  TM.currentShot = function (t) {
    for (const s of TM.shots) if (t >= s.start && t < s.end) return s;
    return TM.shots[TM.shots.length - 1];
  };

  let _ctx = null;
  TM.init = function (canvas) { _ctx = canvas.getContext('2d'); TM.ctx = _ctx; };

  window.renderFrame = function (f) {
    const ctx = _ctx; if (!ctx) return;
    const t = (f + 0.5) / TM.FPS;
    const shot = TM.currentShot(t);
    const len = shot.end - shot.start, lt = t - shot.start;
    const u = clamp(lt / len, 0, 1);
    TM.curShotStart = shot.start; TM.curShotLen = len;
    if (TM.CC) TM.CC.setFrame(f);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#E9F4FB'; ctx.fillRect(0, 0, W, H); // base
    ctx.save();
    // shot.cam: {from,to,kind} (legacy) or fn(lt,u,len) -> {x,y,zoom} (v2, see CC.cam)
    let cam = null;
    if (typeof shot.cam === 'function') cam = shot.cam(lt, u, len);
    else if (shot.cam) cam = TM.interpCam(shot.cam.from, shot.cam.to, u, shot.cam.kind);
    if (!cam) cam = { x: W / 2, y: H / 2, zoom: 1 };
    // whip-pan entrance: shot.whip = 'left' | 'right' (incoming motion direction)
    const WHIP = 0.22; let whipK = 1;
    if (shot.whip && lt < WHIP) { whipK = lt / WHIP; const d = shot.whip === 'left' ? -1 : 1; cam = { x: cam.x + d * W * 0.9 * Math.pow(1 - whipK, 2), y: cam.y, zoom: cam.zoom }; }
    TM.applyCam(ctx, cam);
    TM.camInv = ctx.getTransform().inverse();
    if (shot.whip && TM.CC) TM.CC.cue('whoosh', 0);
    if (shot.sfx && TM.CC) for (const [st, ty] of shot.sfx) TM.CC.cue(ty, st);
    shot.draw(ctx, { u, t: lt, lt, f, gf: f, cam, len });
    ctx.restore();
    if (shot.whip && whipK < 1) { // motion streaks
      ctx.save(); ctx.globalAlpha = 0.55 * (1 - whipK); ctx.fillStyle = '#ffffff';
      for (let i = 0; i < 26; i++) { const y = (i * 97 + f * 13) % H; ctx.fillRect(0, y, W, 3 + (i % 4) * 3); }
      ctx.restore();
    }
    if (TM.VIGNETTE !== false) TM.vignette(ctx);
    if (TM.CC) TM.CC.grain(ctx);
    // fades: shot.fadeIn / shot.fadeOut seconds (black)
    let fa = 0;
    if (shot.fadeIn && lt < shot.fadeIn) fa = Math.max(fa, 1 - lt / shot.fadeIn);
    if (shot.fadeOut && lt > len - shot.fadeOut) fa = Math.max(fa, (lt - (len - shot.fadeOut)) / shot.fadeOut);
    if (fa > 0) { ctx.fillStyle = 'rgba(0,0,0,' + clamp(fa, 0, 1) + ')'; ctx.fillRect(0, 0, W, H); }
    if (TM.drawCaptions) TM.drawCaptions(ctx, f);
  };
})();
