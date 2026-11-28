/* ============================================================================
 * cc.js — Crayon Capital v2 kit (TM.CC). Style bible: references/reference_breakdown.md
 *  - CLEAN LINES by default (CC.BOIL=false): no wiggle/jitter on strokes or text.
 *    Set CC.BOIL=true in a story only if a hand-drawn boil is explicitly wanted.
 *  - SMOOTH motion by default (CC.STEP_FPS=30). Set 12 for a stepped "on 2s" feel.
 *  - RIG: big round head (no neck) on a small rounded filled torso, single
 *    thick-line arms (no hands), thin stick legs + shoe blobs, dot eyes, arc
 *    mouth, floating brows, filled hair caps + accessories. ~15 presets.
 *  - ACTOR timeline: CC.actor(ctx, s, 'madoff', base, [events]) — see SKILL.md.
 *  - FX, speech/thought bubbles, scenes, camera helpers, SFX cue registry.
 *  - Legacy shim: overrides TM.C.person / TM.C.head so old stories get the rig.
 * ==========================================================================*/
(function () {
  const TM = window.TM, W = TM.W, H = TM.H, TAU = Math.PI * 2;
  const clamp = TM.clamp, lerp = TM.lerp;
  const CC = (TM.CC = {});
  const INK = (CC.INK = '#252525');
  CC.PAL = {
    sky: '#A9C5D5', skyLt: '#CFE0E8', tan: '#D8C3A0', tanDk: '#B9A27C', beige: '#E5D7BE', paper: '#F1EADB',
    grey: '#9A9EA3', greyDk: '#54585E', charcoal: '#2E3135', sage: '#A9B698', sageDk: '#7E8D6F', rose: '#C7A29C',
    slate: '#7D8C99', slateDk: '#5C6A77', navy: '#2D3953', black: '#141414', white: '#FAF8F2', skin: '#E0C4A8', skinLt: '#EBD0B2', skinDk: '#C8A484',
    red: '#C9473E', redLt: '#E07B70', blue: '#5A86B0', blueLt: '#A0C2DD', tear: '#5FB0EA', gold: '#E1B33C',
    green: '#6CA45A', greenDk: '#4A7E3E', money: '#93C47D', moneyDk: '#5A8E4D', brown: '#7A5838', brownLt: '#A27A52',
    purple: '#7C6596', orange: '#DF8A3D', yellow: '#F0C846', cream: '#F4EBD6', wood: '#9A6B43', water: '#6E9CB8'
  };
  const PAL = CC.PAL;

  /* ------------------------------------------------------------------ time */
  CC.STEP_FPS = 30;                      // motion sample rate (30 = smooth/clean; 12 = stepped "on 2s")
  CC.q = (lt) => Math.floor(lt * CC.STEP_FPS + 1e-6) / CC.STEP_FPS;
  CC.backOut = (u) => { u = clamp(u, 0, 1); const s = 2.2; u -= 1; return u * u * ((s + 1) * u + s) + 1; };
  CC.easeOut = (u) => { u = clamp(u, 0, 1); return 1 - (1 - u) * (1 - u); };
  CC.easeIn = (u) => { u = clamp(u, 0, 1); return u * u; };
  CC.smooth = (u) => TM.smooth(u);
  CC.prog = (lt, t0, d) => clamp((lt - t0) / d, 0, 1);
  CC.pop = (lt, t0, d) => (lt < t0 ? 0 : CC.backOut((lt - t0) / (d || 0.3)));

  /* ------------------------------------------------------------------ boil */
  let BS = 0;
  CC.BOIL = false;                       // clean, stable lines (user requirement). true = hand-drawn boil
  CC.BOIL_FRAMES = 2.5;                  // boil re-seed interval when CC.BOIL is on
  CC.BOIL_AMP = 1.8;                     // boil amplitude when CC.BOIL is on
  CC.AMP = 0;                            // effective default jitter (set by setFrame from CC.BOIL)
  CC.setFrame = (f) => { CC.f = f; BS = Math.floor(f / CC.BOIL_FRAMES); CC.AMP = CC.BOIL ? CC.BOIL_AMP : 0; };
  CC.boilStep = () => BS;
  const hh = (a, b, c) => { const x = Math.sin(a * 12.9898 + b * 78.233 + c * 37.719) * 43758.5453; return x - Math.floor(x); };
  CC.hash = hh;
  CC.jit = (seed, k) => (hh(seed, BS, k || 1) - 0.5) * 2;   // -1..1, changes per boil step
  function jpts(p, amp) {
    if (!CC.BOIL || !amp) return p;
    const o = new Array(p.length);
    for (let i = 0; i < p.length; i += 2) {
      const s = p[i] * 0.0137 + p[i + 1] * 0.0291;
      o[i] = p[i] + (hh(s, BS, 1.3) - 0.5) * 2 * amp; o[i + 1] = p[i + 1] + (hh(s, BS, 2.7) - 0.5) * 2 * amp;
    }
    return o;
  }
  function densify(p, closed, seg) {
    seg = seg || 44; const out = []; const n = p.length / 2; const m = closed ? n : n - 1;
    for (let i = 0; i < m; i++) {
      const j = (i + 1) % n, x0 = p[2 * i], y0 = p[2 * i + 1], x1 = p[2 * j], y1 = p[2 * j + 1];
      const k = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / seg));
      for (let s = 0; s < k; s++) out.push(x0 + (x1 - x0) * s / k, y0 + (y1 - y0) * s / k);
    }
    if (!closed) out.push(p[2 * (n - 1)], p[2 * (n - 1) + 1]);
    return out;
  }
  function trace(ctx, p, closed, smooth) {
    const n = p.length / 2; if (n < 2) return;
    if (!smooth || n < 3) {
      ctx.moveTo(p[0], p[1]); for (let i = 1; i < n; i++) ctx.lineTo(p[2 * i], p[2 * i + 1]);
      if (closed) ctx.closePath(); return;
    }
    const mx = (i, j) => (p[2 * i] + p[2 * j]) / 2, my = (i, j) => (p[2 * i + 1] + p[2 * j + 1]) / 2;
    if (closed) {
      ctx.moveTo(mx(n - 1, 0), my(n - 1, 0));
      for (let i = 0; i < n; i++) { const j = (i + 1) % n; ctx.quadraticCurveTo(p[2 * i], p[2 * i + 1], mx(i, j), my(i, j)); }
      ctx.closePath();
    } else {
      ctx.moveTo(p[0], p[1]);
      for (let i = 1; i < n - 1; i++) ctx.quadraticCurveTo(p[2 * i], p[2 * i + 1], mx(i, i + 1), my(i, i + 1));
      ctx.lineTo(p[2 * (n - 1)], p[2 * (n - 1) + 1]);
    }
  }
  // path builders (add to current path) — all boiled
  CC.path = (ctx, pts, closed, smooth, amp, seg) => trace(ctx, jpts(densify(pts, closed, seg), amp == null ? CC.AMP : amp), closed, smooth);
  CC.ellPts = function (cx, cy, rx, ry, a0, a1, n) {
    a0 = a0 == null ? 0 : a0; a1 = a1 == null ? TAU : a1;
    n = n || clamp(Math.round(Math.abs(a1 - a0) * Math.max(rx, ry) / 26), 8, 44);
    const closed = Math.abs(a1 - a0) >= TAU - 1e-3; const p = []; const cnt = closed ? n : n + 1;
    for (let i = 0; i < cnt; i++) { const a = a0 + (a1 - a0) * i / n; p.push(cx + Math.cos(a) * rx, cy + Math.sin(a) * ry); }
    return p;
  };
  CC.pathEllipse = (ctx, cx, cy, rx, ry, amp) => trace(ctx, jpts(CC.ellPts(cx, cy, rx, ry), amp == null ? CC.AMP : amp), true, true);
  CC.pathArc = (ctx, cx, cy, r, a0, a1, amp) => trace(ctx, jpts(CC.ellPts(cx, cy, r, r, a0, a1), amp == null ? CC.AMP : amp), false, true);
  CC.rrPts = function (x, y, w, h, r) {
    r = Math.min(r || 0, w / 2, h / 2); if (r < 1) return [x, y, x + w, y, x + w, y + h, x, y + h];
    const p = []; const cs = [[x + w - r, y + r, -Math.PI / 2], [x + w - r, y + h - r, 0], [x + r, y + h - r, Math.PI / 2], [x + r, y + r, Math.PI]];
    for (const [cx, cy, a] of cs) for (let i = 0; i <= 3; i++) { const t = a + i / 3 * Math.PI / 2; p.push(cx + Math.cos(t) * r, cy + Math.sin(t) * r); }
    return p;
  };
  CC.pathRect = (ctx, x, y, w, h, r, amp) => { const rr = r && r > 1; trace(ctx, jpts(densify(CC.rrPts(x, y, w, h, r), true), amp == null ? CC.AMP : amp), true, rr); };
  // draw = path + fill + ink stroke
  CC.draw = function (ctx, build, fill, lw, col) {
    ctx.beginPath(); build(ctx);
    if (fill) { ctx.fillStyle = fill; ctx.fill(); }
    if (lw) { ctx.lineWidth = lw; ctx.strokeStyle = col || INK; ctx.lineJoin = 'round'; ctx.lineCap = 'round'; ctx.stroke(); }
  };
  const LW = (CC.LW = 5);
  CC.rect = (ctx, x, y, w, h, fill, lw, r) => CC.draw(ctx, c => CC.pathRect(c, x, y, w, h, r), fill, lw == null ? LW : lw);
  CC.circle = (ctx, x, y, r, fill, lw, col) => CC.draw(ctx, c => CC.pathEllipse(c, x, y, r, r), fill, lw == null ? LW : lw, col);
  CC.ellipse = (ctx, x, y, rx, ry, fill, lw) => CC.draw(ctx, c => CC.pathEllipse(c, x, y, rx, ry), fill, lw == null ? LW : lw);
  CC.poly = (ctx, pts, fill, lw, smooth, col) => CC.draw(ctx, c => CC.path(c, pts, true, smooth), fill, lw == null ? LW : lw, col);
  // open stroke with optional draw-on reveal u (0..1 by length)
  CC.line = function (ctx, pts, lw, col, u, smooth, amp) {
    let p = densify(pts, false, 30);
    if (u != null && u < 1) {
      if (u <= 0) return null; let tot = 0; const L = [0];
      for (let i = 2; i < p.length; i += 2) { tot += Math.hypot(p[i] - p[i - 2], p[i + 1] - p[i - 1]); L.push(tot); }
      const cut = tot * u, q = [p[0], p[1]];
      for (let i = 1; i < L.length; i++) {
        if (L[i] <= cut) { q.push(p[2 * i], p[2 * i + 1]); continue; }
        const k = (cut - L[i - 1]) / Math.max(1e-6, L[i] - L[i - 1]);
        q.push(lerp(p[2 * i - 2], p[2 * i], k), lerp(p[2 * i - 1], p[2 * i + 1], k)); break;
      }
      p = q;
    }
    ctx.beginPath(); trace(ctx, jpts(p, amp == null ? CC.AMP : amp), false, smooth !== false);
    ctx.lineWidth = lw || LW; ctx.strokeStyle = col || INK; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.stroke();
    return { x: p[p.length - 2], y: p[p.length - 1] };
  };
  // whole-object boil for things drawn with plain canvas calls (text, legacy props)
  CC.boilT = function (ctx, seed, amt) {
    if (!CC.BOIL) return;
    amt = amt == null ? 1 : amt; ctx.translate(CC.jit(seed, 3) * 1.4 * amt, CC.jit(seed, 4) * 1.4 * amt); ctx.rotate(CC.jit(seed, 5) * 0.006 * amt);
  };

  /* ------------------------------------------------------------------ text */
  CC.font = (size, fam) => `${size}px ${fam || 'PHand'}, "Liberation Sans", Arial, sans-serif`;
  // measure multi-line text -> {w, h}
  CC.measure = function (ctx, str, size, font, lh) {
    ctx.save(); ctx.font = CC.font(size, font); const lines = String(str).split('\n');
    const w = Math.max(...lines.map(l => ctx.measureText(l).width)); ctx.restore();
    return { w, h: lines.length * size * (lh || 1.15) };
  };
  // largest size <= size whose widest line fits maxW
  CC.fitSize = function (ctx, str, size, maxW, font) {
    if (!maxW) return size; const w = CC.measure(ctx, str, size, font).w;
    return w <= maxW ? size : Math.max(10, Math.floor(size * maxW / w));
  };
  /* ---- frame-safety: anything with text must stay fully on screen ---- */
  CC.SAFE = 40;                          // px margin from the frame edge (screen space)
  CC.warnings = new Map();               // "str" -> first frame it went off-screen
  // screen-space bbox of local rect (x0,y0)-(x1,y1) under current transform
  CC.screenBox = function (ctx, x0, y0, x1, y1) {
    const m = ctx.getTransform(); const pts = [[x0, y0], [x1, y0], [x0, y1], [x1, y1]].map(([x, y]) => [m.a * x + m.c * y + m.e, m.b * x + m.d * y + m.f]);
    return { l: Math.min(...pts.map(p => p[0])), r: Math.max(...pts.map(p => p[0])), t: Math.min(...pts.map(p => p[1])), b: Math.max(...pts.map(p => p[1])), sx: Math.hypot(m.a, m.b) || 1, sy: Math.hypot(m.c, m.d) || 1 };
  };
  // local-space offset that pushes a local rect back inside the safe frame
  CC.safeShift = function (ctx, x0, y0, x1, y1, margin) {
    const M = margin == null ? CC.SAFE : margin, b = CC.screenBox(ctx, x0, y0, x1, y1); let dx = 0, dy = 0;
    if (b.r - b.l <= W - 2 * M) { if (b.l < M) dx = M - b.l; else if (b.r > W - M) dx = W - M - b.r; }
    if (b.b - b.t <= H - 2 * M) { if (b.t < M) dy = M - b.t; else if (b.b > H - M) dy = H - M - b.b; }
    return { dx: dx / b.sx, dy: dy / b.sy };
  };
  CC.checkOnScreen = function (ctx, str, x0, y0, x1, y1) {
    const b = CC.screenBox(ctx, x0, y0, x1, y1);
    if ((b.l < -1 || b.r > W + 1 || b.t < -1 || b.b > H + 1) && !CC.warnings.has(str)) CC.warnings.set(str, CC.f);
  };
  // o: {font, reveal, stroke, strokeCol, align, lh, maxW (auto-shrink to fit), safe:false to allow off-frame}
  CC.text = function (ctx, str, x, y, size, col, o) {
    o = o || {}; str = String(str); size = CC.fitSize(ctx, str, size, o.maxW, o.font || 'PHand');
    ctx.save(); ctx.translate(x, y); CC.boilT(ctx, x * 0.3 + y * 0.7 + size);
    const m = CC.measure(ctx, str, size, o.font || 'PHand', o.lh), al = o.align || 'center';
    const x0 = al === 'center' ? -m.w / 2 : al === 'right' ? -m.w : 0, x1 = x0 + m.w;
    if (o.safe !== false) { const d = CC.safeShift(ctx, x0, -m.h / 2, x1, m.h / 2); ctx.translate(d.dx, d.dy); }   // default: never cut off by the frame
    if (o.check !== false) CC.checkOnScreen(ctx, str, x0, -m.h / 2, x1, m.h / 2);
    TM.C.text(ctx, str, 0, 0, size, col || INK, { font: o.font || 'PHand', reveal: o.reveal, stroke: o.stroke, strokeCol: o.strokeCol, align: o.align, lh: o.lh });
    ctx.restore();
  };
  // handwritten draw-on (typewriter) with scribble cue
  CC.write = function (ctx, str, x, y, size, col, lt, t0, dur, o) {
    o = o || {}; dur = dur || Math.max(0.35, str.length * 0.035); if (!o.silent) CC.cue('scribble', t0);
    if (lt < t0) return; CC.text(ctx, str, x, y, size, col, Object.assign({}, o, { reveal: CC.prog(CC.q(lt), t0, dur) }));
  };
  // popping word
  CC.word = function (ctx, str, x, y, size, col, lt, t0, o) {
    o = o || {}; CC.cue('pop', t0); const sc = CC.pop(CC.q(lt), t0, 0.28); if (sc <= 0) return;
    ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0); ctx.scale(sc, sc);
    CC.text(ctx, str, 0, 0, size, col, { font: o.font || 'PMarker', stroke: o.stroke == null ? size * 0.12 : o.stroke, strokeCol: o.strokeCol });
    ctx.restore();
  };
  // rectangular callout box with draw-on text. o:{size,bg,col,font,pad,rot,write}
  CC.callout = function (ctx, str, x, y, lt, t0, o) {
    o = o || {}; const size = CC.fitSize(ctx, str, o.size || 60, o.maxW || W - 2 * CC.SAFE - 120, o.font); CC.cue('pop', t0); const lq = CC.q(lt);
    const sc = CC.pop(lq, t0, 0.25); if (sc <= 0) return;
    ctx.save(); ctx.font = CC.font(size, o.font); const lines = String(str).split('\n');
    const w = Math.max(...lines.map(l => ctx.measureText(l).width)) + size * (o.pad || 1.0), h = lines.length * size * 1.12 + size * 0.6; ctx.restore();
    ctx.save(); ctx.translate(x, y); ctx.rotate(o.rot || 0);
    if (o.safe !== false) { const d = CC.safeShift(ctx, -w / 2, -h / 2, w / 2, h / 2); ctx.translate(d.dx, d.dy); }   // never cut off by the frame
    ctx.scale(sc, sc);
    CC.rect(ctx, -w / 2, -h / 2, w, h, o.bg || PAL.white, o.border == null ? 5 : o.border, 6);
    const rev = o.write === false ? null : CC.prog(lq, t0 + 0.1, o.writeDur || Math.max(0.3, str.length * 0.03));
    if (o.write !== false) CC.cue('scribble', t0 + 0.1);
    CC.text(ctx, str, 0, size * 0.03, size, o.col || INK, { font: o.font, reveal: rev, lh: 1.12 });
    ctx.restore();
  };

  // CC.label = auto-sized sign/box (never hand-size a rect around text — it clips). Same args as CC.callout.
  CC.label = (ctx, str, x, y, lt, t0, o) => CC.callout(ctx, str, x, y, lt, t0, o);
  CC.warnList = () => [...CC.warnings.entries()].map(([str, f]) => ({ frame: f, t: +(f / 30).toFixed(2), text: str }));

  /* ------------------------------------------------------------------ SFX cues */
  CC._cues = new Map();
  CC.cue = function (type, tLocal) {
    if (tLocal == null || !isFinite(tLocal)) return;
    const s0 = TM.curShotStart || 0, len = TM.curShotLen == null ? 1e9 : TM.curShotLen;
    if (tLocal < -0.01 || tLocal > len - 0.02) return;                // only events that happen inside this shot
    const t = s0 + Math.max(0, tLocal), key = type + '@' + Math.round(t * 20);
    if (!CC._cues.has(key)) CC._cues.set(key, { type, t: +t.toFixed(3) });
  };
  CC.cueList = () => [...CC._cues.values()].sort((a, b) => a.t - b.t);

  /* ------------------------------------------------------------------ camera */
  // shot.cam may be a function (lt, u, len) -> {x,y,zoom}
  const C0 = { x: W / 2, y: H / 2, zoom: 1 };
  const camLerp = (a, b, e) => ({ x: lerp(a.x, b.x, e), y: lerp(a.y, b.y, e), zoom: a.zoom * Math.pow(b.zoom / a.zoom, e) });
  CC.cam = {
    static: () => null,
    // slow establishing zoom over the whole shot
    zoom: (z, x, y) => (lt, u) => camLerp(C0, { x: x == null ? W / 2 : x, y: y == null ? H / 2 : y, zoom: z || 1.06 }, TM.smooth(u)),
    // smooth push-in on a point starting at `at` (punchline)
    push: (x, y, z, at, dur) => (lt, u, len) => camLerp(C0, { x, y, zoom: z || 1.5 }, TM.smooth(CC.prog(lt, at || 0, dur || Math.max(0.3, len - (at || 0))))),
    // fast punch-in (0.18 s) that holds
    punch: (x, y, z, at) => (lt) => camLerp(C0, { x, y, zoom: z || 1.6 }, CC.easeOut(CC.prog(lt, at || 0, 0.18))),
    pan: (x0, y0, x1, y1, z, at, dur) => (lt, u, len) => camLerp({ x: x0, y: y0, zoom: z || 1 }, { x: x1, y: y1, zoom: z || 1 }, TM.smooth(CC.prog(lt, at || 0, dur || len))),
    // fixed framing (e.g. a close-up from the start)
    hold: (x, y, z) => () => ({ x, y, zoom: z })
  };

  /* ------------------------------------------------------------------ grain + scenes */
  let grainPat = null;
  CC.GRAIN = 0.10;
  CC.grain = function (ctx) {
    if (!CC.GRAIN) return;
    if (!grainPat) {
      const g = document.createElement('canvas'); g.width = g.height = 256; const gc = g.getContext('2d');
      const im = gc.createImageData(256, 256); let seed = 7;
      const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
      for (let i = 0; i < im.data.length; i += 4) { const v = 150 + rnd() * 105; im.data[i] = im.data[i + 1] = im.data[i + 2] = v; im.data[i + 3] = 255; }
      gc.putImageData(im, 0, 0); grainPat = ctx.createPattern(g, 'repeat');
    }
    ctx.save(); ctx.globalCompositeOperation = 'multiply'; ctx.globalAlpha = CC.GRAIN;
    ctx.translate((BS * 37) % 256, (BS * 91) % 256); ctx.fillStyle = grainPat; ctx.fillRect(-256, -256, W + 512, H + 512);
    ctx.restore();
  };
  CC.bg = function (ctx, col, o) {
    o = o || {}; ctx.fillStyle = col || PAL.beige; ctx.fillRect(-4000, -3000, W + 8000, H + 6000);
    if (o.floor != null) {
      ctx.fillStyle = o.floorCol || PAL.tanDk; ctx.fillRect(-4000, o.floor, W + 8000, H + 4000);
      CC.line(ctx, [-60, o.floor, W / 2, o.floor + 2, W + 60, o.floor], 5, INK, null, true, 2);
    }
  };
  CC.paper = (ctx, o) => CC.bg(ctx, PAL.paper, o);
  // dramatic black background with a spotlight cone at x
  CC.spot = function (ctx, x, floorY, o) {
    o = o || {}; const w = o.w || 300; floorY = floorY || 860;
    ctx.fillStyle = PAL.black; ctx.fillRect(-4000, -3000, W + 8000, H + 6000);
    ctx.save(); ctx.globalAlpha = o.alpha || 0.16; ctx.fillStyle = '#FFF6DA';
    ctx.beginPath(); CC.path(ctx, [x - 70, -60, x + 70, -60, x + w, floorY, x - w, floorY], true, false, 3); ctx.fill();
    ctx.globalAlpha = (o.alpha || 0.16) * 2.2; ctx.beginPath(); CC.pathEllipse(ctx, x, floorY, w * 1.05, w * 0.16, 2); ctx.fill();
    ctx.restore();
  };
  // black chapter card, white handwritten text writes on
  CC.chapter = function (ctx, s, title, o) {
    o = o || {}; ctx.fillStyle = PAL.black; ctx.fillRect(-4000, -3000, W + 8000, H + 6000);
    const lq = CC.q(s.lt), size = o.size || 104;
    if (o.kicker) CC.text(ctx, o.kicker, W / 2, H / 2 - size * 1.1, size * 0.45, '#BDBDBD', { font: 'PHand' });
    CC.write(ctx, title, W / 2, H / 2, size, PAL.white, lq, o.at == null ? 0.15 : o.at, o.dur || 0.8, { font: o.font || 'PMarker' });
    const u = CC.prog(lq, (o.at == null ? 0.15 : o.at) + (o.dur || 0.8), 0.35);
    if (u > 0) CC.line(ctx, [W / 2 - 300, H / 2 + size * 0.75, W / 2 + 300, H / 2 + size * 0.72], 6, PAL.white, u);
  };
  CC.city = function (ctx, floorY, col, o) {
    o = o || {}; const xs = o.xs || [90, 300, 520, 1400, 1620, 1830];
    xs.forEach((x, i) => TM.CC.P.skyscraper(ctx, x, floorY, { w: 180 + (i % 2) * 30, h: 330 + ((i * 97) % 230), col: col || PAL.slateDk, lit: o.lit, seed: i * 3 }));
  };
  CC.cloud = function (ctx, x, y, s) {
    ctx.save(); ctx.translate(x, y); ctx.scale(s || 1, s || 1);
    CC.draw(ctx, c => { CC.path(c, [-110, 20, -90, -20, -40, -45, 10, -50, 60, -35, 105, -5, 110, 25], true, true, 2.5); }, PAL.white, 4);
    ctx.restore();
  };

  /* ------------------------------------------------------------------ rig */
  const LEG = 92, TOR = 106, HR = 74;
  const HIP = -LEG, TOP = HIP - TOR, SHY = TOP + 16, HCY = TOP - HR + 22;
  CC.RIG = { LEG, TOR, HR, HIP, TOP, SHY, HCY, HEIGHT: -(HCY - HR) };
  const P = (o) => Object.assign({ skin: PAL.skin, shirt: PAL.blue, hair: 'short', hairCol: '#2A2A2A', size: 1, armCol: INK }, o);
  CC.CHARS = {
    madoff: P({ shirt: PAL.navy, suit: true, tie: PAL.red, hair: 'swept', hairCol: '#D6D6D6', old: true }),
    tycoon: P({ shirt: '#1E1E1E', suit: true, tie: '#8B2420', hat: 'tophat', mustache: 'walrus', hair: 'sides', hairCol: '#EDEDED', old: true }),
    techceo: P({ shirt: '#1C1C1C', turtleneck: true, glasses: 'round', hair: 'sides', hairCol: '#5C5C5C', beard: 'stubble' }),
    analyst: P({ shirt: PAL.blueLt, tie: PAL.navy, glasses: 'square', hair: 'parted', hairCol: '#3A2A1E' }),
    investor: P({ shirt: '#C9A05A', hair: 'short', hairCol: '#6B4A2E' }),
    investor2: P({ shirt: PAL.sageDk, hair: 'curly', hairCol: '#2A2A2A' }),
    woman: P({ shirt: PAL.red, dress: true, hair: 'long', hairCol: '#4A3222' }),
    grandma: P({ shirt: PAL.purple, dress: true, hair: 'bun', hairCol: '#E6E6E6', glasses: 'round', old: true }),
    cop: P({ shirt: PAL.navy, hat: 'police', badge: true, hair: 'short' }),
    son: P({ shirt: PAL.slateDk, suit: true, tie: PAL.gold, hair: 'short', hairCol: '#5A3E28' }),
    crook: P({ shirt: '#3A3A3A', hat: 'fedora', hatCol: '#222', shades: true, mustache: 'thin', hair: 'none' }),
    banker: P({ shirt: PAL.slate, suit: true, tie: PAL.red, hat: 'bowler', mustache: 'handlebar', hair: 'none' }),
    worker: P({ shirt: PAL.orange, hat: 'hardhat', hair: 'short', hairCol: '#3A2A1E' }),
    kid: P({ shirt: PAL.green, size: 0.72, hair: 'spiky', hairCol: '#6B4A2E' }),
    judge: P({ shirt: '#1A1A1A', robe: true, hair: 'sides', hairCol: '#EEE', glasses: 'half', old: true }),
    reporter: P({ shirt: PAL.brownLt, hair: 'bob', hairCol: '#2A2A2A', tie: null })
  };
  CC.char = (name, over) => Object.assign({}, CC.CHARS[name] || CC.CHARS.investor, over || {});

  // arm = [shoulderAngle (0 = down, +outward), elbowBend]; legs = angle outward
  const POSES = (CC.POSES = {
    idle: { aL: [0.4, 0.05], aR: [0.4, 0.05] },
    hang: { aL: [0.3, 0.05], aR: [0.3, 0.05] },
    point: { aL: [0.4, 0.05], aR: [1.55, 0.0], tilt: 0.09 },
    pointUp: { aL: [0.4, 0.05], aR: [2.6, 0.05], tilt: 0.04 },
    present: { aL: [0.4, 0.05], aR: [1.05, 0.55] },
    wave: { aL: [0.4, 0.05], aR: [2.4, -0.4] },
    cheer: { aL: [2.55, 0.15], aR: [2.55, 0.15] },
    shrug: { aL: [1.25, -2.0], aR: [1.25, -2.0] },
    hips: { aL: [0.65, -1.4], aR: [0.65, -1.4] },
    cross: { aL: [0.8, -2.05], aR: [0.8, -2.05] },
    hold: { aL: [0.4, 0.05], aR: [0.95, -1.15] },
    hold2: { aL: [0.9, -1.1], aR: [0.9, -1.1] },
    carry: { aL: [2.75, 0.25], aR: [2.75, 0.25] },
    give: { aL: [0.4, 0.05], aR: [1.4, -0.15], tilt: 0.06 },
    beg: { aL: [1.75, -0.7], aR: [1.75, -0.7] },
    face: { aL: [1.05, -2.55], aR: [1.05, -2.55] },
    think: { aL: [0.75, -2.1], aR: [0.95, -2.5] },
    write: { aL: [0.4, 0.05], aR: [1.0, -1.45] },
    clap: { aL: [1.15, -1.6], aR: [1.15, -1.6] },
    pocket: { aL: [0.35, -1.0], aR: [0.35, -1.0] },
    fist: { aL: [0.4, 0.05], aR: [2.7, 0.0] },
    thumb: { aL: [0.4, 0.05], aR: [2.05, -1.6] },
    reach: { aL: [0.4, 0.05], aR: [1.15, 0.45] },
    slump: { aL: [0.05, 0.0], aR: [0.05, 0.0], tilt: 0.0 },
    run: { aL: [0.9, -1.2], aR: [0.6, -1.3] }
  });
  const armOf = (pose, side) => {
    if (Array.isArray(pose)) return pose;
    const p = typeof pose === 'string' ? POSES[pose] || POSES.idle : pose || POSES.idle;
    return (side < 0 ? p.aL : p.aR) || [0.22, 0.05];
  };

  // expressions
  const EXPR = (CC.EXPR = {
    neutral: { brow: 0, mouth: 'flat' }, happy: { brow: -0.1, mouth: 'smile' }, joy: { eyes: 'arc', brow: -0.15, browY: -6, mouth: 'grin' },
    smug: { brow: 'smug', mouth: 'smirk', eyes: 'half' }, sad: { brow: -0.5, mouth: 'frown' }, worried: { brow: -0.45, mouth: 'wavy' },
    angry: { brow: 0.55, mouth: 'frown' }, furious: { brow: 0.6, mouth: 'growl' }, shock: { eyes: 'wide', brow: 0, browY: -16, mouth: 'O' },
    shocked: { eyes: 'wide', brow: 0, browY: -16, mouth: 'O' }, scared: { eyes: 'wide', brow: -0.45, mouth: 'wavy' },
    cry: { eyes: 'shut', brow: -0.55, mouth: 'frownOpen' }, sleep: { eyes: 'shut', brow: 0, mouth: 'o' }, curious: { brow: 'raise', mouth: 'flat' },
    scream: { eyes: 'wide', brow: -0.3, browY: -10, mouth: 'scream' }, grin: { brow: -0.05, mouth: 'grin' }, greedy: { eyes: 'dollar', brow: 0.2, mouth: 'grin' },
    confident: { brow: 0.15, mouth: 'smile' }, bored: { eyes: 'half', brow: 0, mouth: 'flat' }, disappointed: { eyes: 'half', brow: -0.3, mouth: 'frown' }
  });

  function drawFace(ctx, ch, st, lq) {
    const R = HR, ex = EXPR[st.expr] || EXPR.neutral, dx = (st.look || 0) * R * 0.24;
    const eyeY = -R * 0.04, eo = R * 0.3;
    // rare blink
    const seed = (ch.seed || 3) + (ch.shirt || '').length;
    const blink = !ex.eyes && ((lq + seed * 0.7) % 4.3) < 0.09;
    ctx.fillStyle = INK; ctx.strokeStyle = INK; ctx.lineCap = 'round';
    for (const sx of [-1, 1]) {
      const x = sx * eo + dx;
      if (!ch.shades) {
        const e = blink ? 'shut' : ex.eyes;
        if (e === 'wide') { CC.circle(ctx, x, eyeY, R * 0.15, PAL.white, 4); CC.circle(ctx, x, eyeY, R * 0.07, INK, 0); }
        else if (e === 'arc') CC.line(ctx, CC.ellPts(x, eyeY + R * 0.07, R * 0.12, R * 0.12, Math.PI * 1.15, Math.PI * 1.85, 6), 5, INK, null, true, 0.8);
        else if (e === 'shut') CC.line(ctx, [x - R * 0.11, eyeY + 2, x + R * 0.11, eyeY + 2], 5, INK, null, false, 0.8);
        else if (e === 'dollar') CC.text(ctx, '$', x, eyeY, R * 0.42, PAL.greenDk, { font: 'PMarker' });
        else {
          CC.circle(ctx, x, eyeY, R * 0.075, INK, 0);
          if (e === 'half') CC.line(ctx, [x - R * 0.12, eyeY - R * 0.06, x + R * 0.12, eyeY - R * 0.06], 5, INK, null, false, 0.6);
        }
      }
      // floating brows
      const L = R * 0.24; let tilt = ex.brow, by = eyeY - R * 0.3 + (ex.browY || 0);
      if (tilt === 'smug') { tilt = sx < 0 ? 0.1 : -0.15; if (sx > 0) by -= 6; }
      if (tilt === 'raise') { tilt = 0; if (sx > 0) by -= 12; }
      const xin = x - sx * L / 2, xout = x + sx * L / 2;
      CC.line(ctx, [xout, by - tilt * L * 0.55, xin, by + tilt * L * 0.55], 6, INK, null, false, 0.9);
    }
    // mouth
    let m = ex.mouth; const my = R * 0.4, mw = R * 0.36;
    if (st.talk) { const k = Math.floor(lq * 8); const h = hh(k, seed, 9); if (h > 0.62) m = 'O'; else if (h > 0.3) m = 'talk'; }
    const DARK = '#4A2328';
    switch (m) {
      case 'smile': CC.line(ctx, CC.ellPts(dx, my - R * 0.16, R * 0.22, R * 0.2, Math.PI * 0.2, Math.PI * 0.8, 8), 5, INK, null, true, 0.8); break;
      case 'frown': CC.line(ctx, CC.ellPts(dx, my + R * 0.16, R * 0.2, R * 0.16, Math.PI * 1.2, Math.PI * 1.8, 8), 5, INK, null, true, 0.8); break;
      case 'grin': CC.poly(ctx, [dx - mw / 2, my - 4, dx + mw / 2, my - 4, dx + mw * 0.3, my + R * 0.16, dx, my + R * 0.22, dx - mw * 0.3, my + R * 0.16], DARK, 4.5, true); break;
      case 'frownOpen': CC.poly(ctx, [dx - mw * 0.4, my + R * 0.14, dx - mw * 0.2, my, dx, my - R * 0.04, dx + mw * 0.2, my, dx + mw * 0.4, my + R * 0.14], DARK, 4.5, true); break;
      case 'O': CC.ellipse(ctx, dx, my + 2, R * 0.08, R * 0.1, DARK, 4); break;
      case 'o': CC.ellipse(ctx, dx, my, R * 0.05, R * 0.05, DARK, 3); break;
      case 'talk': CC.ellipse(ctx, dx, my + 2, R * 0.13, R * 0.07, DARK, 4); break;
      case 'scream': CC.ellipse(ctx, dx, my + 6, R * 0.16, R * 0.2, DARK, 4.5); break;
      case 'wavy': CC.line(ctx, [dx - mw / 2, my + 2, dx - mw / 4, my - 5, dx, my + 3, dx + mw / 4, my - 5, dx + mw / 2, my + 2], 5, INK, null, false, 0.6); break;
      case 'smirk': CC.line(ctx, [dx - mw * 0.45, my + 3, dx, my + 5, dx + mw * 0.45, my - 9], 5, INK, null, true, 0.6); break;
      case 'growl': CC.rect(ctx, dx - mw * 0.45, my - 6, mw * 0.9, R * 0.16, PAL.white, 4, 3); CC.line(ctx, [dx - mw * 0.45, my + 1, dx + mw * 0.45, my + 1], 3); break;
      default: CC.line(ctx, [dx - mw * 0.42, my, dx + mw * 0.42, my], 5, INK, null, false, 0.8);
    }
    // facial hair
    if (ch.mustache) {
      const mx = dx, yy = my - R * 0.12;
      if (ch.mustache === 'walrus') CC.poly(ctx, [mx - R * 0.32, yy + R * 0.1, mx - R * 0.2, yy - R * 0.06, mx, yy - R * 0.02, mx + R * 0.2, yy - R * 0.06, mx + R * 0.32, yy + R * 0.1, mx, yy + R * 0.05], ch.hairCol || '#EEE', 3.5, true);
      else if (ch.mustache === 'handlebar') { CC.poly(ctx, [mx - R * 0.2, yy, mx, yy - R * 0.06, mx + R * 0.2, yy, mx, yy + R * 0.04], INK, 3, true); CC.line(ctx, [mx - R * 0.2, yy, mx - R * 0.34, yy - R * 0.04, mx - R * 0.36, yy - R * 0.13], 4); CC.line(ctx, [mx + R * 0.2, yy, mx + R * 0.34, yy - R * 0.04, mx + R * 0.36, yy - R * 0.13], 4); }
      else CC.line(ctx, [mx - R * 0.18, yy + 2, mx + R * 0.18, yy + 2], 6, ch.mustacheCol || INK, null, false, 0.6);
    }
    if (ch.beard === 'full') CC.draw(ctx, c => CC.path(c, CC.ellPts(dx, R * 0.25, R * 0.82, R * 0.72, Math.PI * 0.05, Math.PI * 0.95, 10), false, true, 1.2), ch.hairCol, 4);
    if (ch.beard === 'stubble') { ctx.fillStyle = '#7A7A7A'; for (let i = 0; i < 18; i++) { const a = Math.PI * (0.15 + 0.7 * i / 17); ctx.fillRect(dx + Math.cos(a) * R * 0.66 - 1.5, R * 0.18 + Math.sin(a) * R * 0.58, 3, 3); } }
    // glasses
    if (ch.glasses) {
      for (const sx of [-1, 1]) {
        const x = sx * eo + dx;
        if (ch.glasses === 'square') CC.rect(ctx, x - R * 0.2, eyeY - R * 0.15, R * 0.4, R * 0.3, null, 4.5, 6);
        else if (ch.glasses === 'half') CC.line(ctx, [x - R * 0.19, eyeY + R * 0.05, x - R * 0.16, eyeY + R * 0.16, x + R * 0.16, eyeY + R * 0.16, x + R * 0.19, eyeY + R * 0.05, x - R * 0.19, eyeY + R * 0.05], 4.5);
        else CC.circle(ctx, x, eyeY, R * 0.19, null, 4.5);
      }
      CC.line(ctx, [dx - eo + R * 0.19, eyeY - 2, dx + eo - R * 0.19, eyeY - 2], 4, INK, null, false, 0.5);
    }
    if (ch.shades) for (const sx of [-1, 1]) CC.rect(ctx, sx * eo + dx - R * 0.22, eyeY - R * 0.13, R * 0.44, R * 0.26, '#111', 3, 8);
    if (ch.old) CC.line(ctx, [dx - R * 0.2, -R * 0.62, dx + R * 0.2, -R * 0.63], 3, '#8A8A8A', null, false, 0.6);
  }

  function hairBack(ctx, ch) {
    const R = HR, c = ch.hairCol;
    if (ch.hair === 'long') CC.draw(ctx, k => CC.path(k, CC.rrPts(-R * 1.12, -R * 0.75, R * 2.24, R * 2.0, R * 0.7), true, true), c, 5);
    if (ch.hair === 'bob') CC.draw(ctx, k => CC.path(k, CC.rrPts(-R * 1.1, -R * 0.8, R * 2.2, R * 1.45, R * 0.6), true, true), c, 5);
  }
  function hairFront(ctx, ch) {
    const R = HR, c = ch.hairCol, h = ch.hair;
    const cap = (hl, sideY) => {    // cap over skull: arc + hairline
      const p = CC.ellPts(0, 0, R * 1.05, R * 1.05, Math.PI * 1.0 + 0.12, Math.PI * 2 - 0.12, 12);
      p.push(R * 0.98, sideY, R * 0.62, hl + R * 0.08, R * 0.1, hl, -R * 0.45, hl + R * 0.06, -R * 0.98, sideY);
      CC.poly(ctx, p, c, 5, true);
    };
    if (h === 'short' || h === 'long' || h === 'bob') cap(-R * 0.52, -R * 0.2);
    else if (h === 'parted') { cap(-R * 0.5, -R * 0.25); CC.line(ctx, [-R * 0.3, -R * 0.98, -R * 0.2, -R * 0.55], 4); }
    else if (h === 'swept') {
      const p = CC.ellPts(0, 0, R * 1.07, R * 1.07, Math.PI * 1.0 - 0.05, Math.PI * 2 + 0.05, 12);
      p.push(R * 0.92, R * 0.05, R * 0.8, -R * 0.38, R * 0.3, -R * 0.6, -R * 0.35, -R * 0.62, -R * 0.82, -R * 0.38, -R * 0.92, R * 0.05);
      CC.poly(ctx, p, c, 5, true);
      CC.line(ctx, [-R * 0.5, -R * 0.82, R * 0.1, -R * 0.92, R * 0.55, -R * 0.75], 3, '#9A9A9A', null, true, 1);
    } else if (h === 'sides') { for (const sx of [-1, 1]) CC.ellipse(ctx, sx * R * 0.93, -R * 0.12, R * 0.2, R * 0.36, c, 4.5); }
    else if (h === 'spiky') {
      const p = []; for (let i = 0; i <= 8; i++) { const a = Math.PI * (1.02 + i * 0.12); const rr = i % 2 ? R * 1.32 : R * 1.0; p.push(Math.cos(a) * rr, Math.sin(a) * rr); }
      p.push(R * 0.8, -R * 0.45, -R * 0.8, -R * 0.45); CC.poly(ctx, p, c, 5);
    } else if (h === 'curly') {
      for (let i = 0; i < 7; i++) { const a = Math.PI * (1.06 + i * 0.147); CC.circle(ctx, Math.cos(a) * R * 0.95, Math.sin(a) * R * 0.95, R * 0.28, c, 4); }
    } else if (h === 'bun') { CC.circle(ctx, 0, -R * 1.12, R * 0.32, c, 5); cap(-R * 0.55, -R * 0.2); }
    // hats
    const hc = ch.hatCol;
    if (ch.hat === 'tophat') {
      CC.rect(ctx, -R * 0.58, -R * 2.05, R * 1.16, R * 1.25, hc || '#1A1A1A', 5, 4);
      CC.rect(ctx, -R * 0.58, -R * 1.05, R * 1.16, R * 0.2, ch.hatBand || '#7A2A26', 4);
      CC.ellipse(ctx, 0, -R * 0.82, R * 0.98, R * 0.14, hc || '#1A1A1A', 5);
    } else if (ch.hat === 'bowler') {
      CC.draw(ctx, k => CC.path(k, CC.ellPts(0, -R * 0.78, R * 0.72, R * 0.62, Math.PI, TAU, 10), true, true), hc || '#2A2A2A', 5);
      CC.ellipse(ctx, 0, -R * 0.78, R * 1.0, R * 0.13, hc || '#2A2A2A', 5);
    } else if (ch.hat === 'fedora') {
      CC.poly(ctx, [-R * 0.7, -R * 0.72, -R * 0.6, -R * 1.42, 0, -R * 1.3, R * 0.6, -R * 1.42, R * 0.7, -R * 0.72], hc || PAL.brown, 5, true);
      CC.rect(ctx, -R * 0.68, -R * 0.95, R * 1.36, R * 0.16, '#111', 3);
      CC.ellipse(ctx, 0, -R * 0.72, R * 1.35, R * 0.17, hc || PAL.brown, 5);
    } else if (ch.hat === 'police') {
      CC.poly(ctx, [-R * 0.92, -R * 0.55, -R * 1.02, -R * 1.12, R * 1.02, -R * 1.12, R * 0.92, -R * 0.55], hc || PAL.navy, 5);
      CC.ellipse(ctx, R * 0.15, -R * 0.52, R * 0.88, R * 0.14, '#111', 3);
      CC.circle(ctx, 0, -R * 0.85, R * 0.14, PAL.gold, 3.5);
    } else if (ch.hat === 'hardhat') {
      CC.draw(ctx, k => CC.path(k, CC.ellPts(0, -R * 0.6, R * 0.95, R * 0.75, Math.PI, TAU, 10), true, true), hc || PAL.yellow, 5);
      CC.rect(ctx, -R * 1.15, -R * 0.66, R * 2.3, R * 0.16, hc || PAL.yellow, 5, 4);
    } else if (ch.hat === 'cap') {
      CC.draw(ctx, k => CC.path(k, CC.ellPts(0, -R * 0.5, R * 1.0, R * 0.62, Math.PI, TAU, 10), true, true), hc || PAL.red, 5);
      CC.ellipse(ctx, R * 0.6, -R * 0.5, R * 0.7, R * 0.12, hc || PAL.red, 5);
    } else if (ch.hat === 'crown') {
      CC.poly(ctx, [-R * 0.6, -R * 0.75, -R * 0.7, -R * 1.35, -R * 0.3, -R * 1.05, 0, -R * 1.45, R * 0.3, -R * 1.05, R * 0.7, -R * 1.35, R * 0.6, -R * 0.75], PAL.gold, 5);
    }
  }

  function drawTorso(ctx, ch) {
    const tw = 40, bw = 47; let bot = HIP + 8, bwx = bw;
    if (ch.dress) { bot = HIP + 46; bwx = 74; }
    if (ch.robe) { bot = -14; bwx = 70; }
    const pts = [-tw, TOP + 12, -tw + 14, TOP, tw - 14, TOP, tw, TOP + 12, bwx, bot - 10, bwx - 12, bot, -bwx + 12, bot, -bwx, bot - 10];
    CC.poly(ctx, pts, ch.shirt, LW, true);
    if (ch.suit) {
      CC.poly(ctx, [-17, TOP + 1, 17, TOP + 1, 0, TOP + 52], PAL.white, 3.5);
      if (ch.tie) CC.poly(ctx, [-6, TOP + 6, 6, TOP + 6, 9, TOP + 44, 0, TOP + 56, -9, TOP + 44], ch.tie, 3);
      CC.line(ctx, [-17, TOP + 2, -6, TOP + 60, -20, TOP + 74], 3.5, INK, null, false, 1);
      CC.line(ctx, [17, TOP + 2, 6, TOP + 60, 20, TOP + 74], 3.5, INK, null, false, 1);
    } else if (ch.tie) CC.poly(ctx, [-6, TOP + 4, 6, TOP + 4, 9, TOP + 44, 0, TOP + 56, -9, TOP + 44], ch.tie, 3);
    if (ch.bowtie) CC.poly(ctx, [-18, TOP + 2, 0, TOP + 10, 18, TOP + 2, 18, TOP + 20, 0, TOP + 12, -18, TOP + 20], ch.bowtie, 3);
    if (ch.turtleneck) CC.rect(ctx, -26, TOP - 6, 52, 18, ch.shirt, 4, 7);
    if (ch.badge) TM.C.star && (() => { ctx.save(); ctx.translate(-20, TOP + 40); CC.poly(ctx, starPts(13), PAL.gold, 3); ctx.restore(); })();
    if (ch.robe) CC.line(ctx, [0, TOP + 20, 0, -20], 3, '#444', null, false, 1);
    if (ch.logo) CC.text(ctx, ch.logo, 0, TOP + 52, 30, ch.logoCol || PAL.white, { font: 'PMarker' });
  }
  const starPts = (r) => { const p = []; for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; p.push(Math.cos(a) * rr, Math.sin(a) * rr); } return p; };
  CC.starPts = starPts;

  function drawFX(ctx, st, lq) {
    const R = HR; const fx = st.fx || {};
    for (const name in fx) {
      const e = fx[name]; if (lq < e.t0 || lq >= e.until) continue; const k = lq - e.t0;
      const pop = CC.backOut(k / 0.25);
      if (name === 'sweat') {
        for (const [i, sx] of [[0, 1], [1, -1]]) {
          const ph = ((k * 1.4 + i * 0.5) % 1); const x = sx * R * 1.0, y = -R * 0.55 + ph * R * 0.8;
          CC.poly(ctx, [x, y - R * 0.22, x + R * 0.12, y, x, y + R * 0.08, x - R * 0.12, y], '#9FD8F5', 3.5, true);
        }
      } else if (name === 'tears') {
        for (const sx of [-1, 1]) {
          const x0 = sx * R * 0.3 + (st.look || 0) * R * 0.24, len = R * (0.5 + 0.9 * clamp(k / 0.4, 0, 1));
          const pts = []; for (let i = 0; i <= 6; i++) { const yy = R * 0.06 + i / 6 * len; pts.push(x0 + sx * (i / 6) * R * 0.12 + Math.sin(i + BS) * 2, yy); }
          ctx.save(); ctx.globalAlpha = 0.9; CC.line(ctx, pts, R * 0.13, PAL.tear, null, true, 1.5); ctx.restore();
          const dy = ((k * 2.2) % 1) * R * 0.7; CC.circle(ctx, x0 + sx * R * 0.14, R * 0.06 + len + dy, R * 0.07, PAL.tear, 0);
        }
      } else if (name === 'anger') {
        ctx.save(); ctx.translate(R * 0.68, -R * 0.72); const sc = 1.5 * pop * (1 + 0.12 * (BS % 2)); ctx.scale(sc, sc);
        for (let i = 0; i < 4; i++) { ctx.save(); ctx.rotate(i * Math.PI / 2 + Math.PI / 4); CC.line(ctx, CC.ellPts(R * 0.2, R * 0.2, R * 0.14, R * 0.14, Math.PI * 1.0, Math.PI * 1.5, 5), 6, PAL.red, null, true, 0.8); ctx.restore(); }
        ctx.restore();
      } else if (name === 'shock') {
        const n = 10; for (let i = 0; i < n; i++) {
          if ((i + BS) % 3 === 0) continue; const a = i / n * TAU + 0.15;
          const r0 = R * 1.22, r1 = R * (1.48 + 0.08 * CC.jit(i, 7));
          CC.line(ctx, [Math.cos(a) * r0, Math.sin(a) * r0, Math.cos(a) * r1, Math.sin(a) * r1], 5, INK, null, false, 0.8);
        }
      } else if (name === 'bulb') {
        ctx.save(); ctx.translate(R * 0.15, -R * 1.85); ctx.scale(pop, pop);
        for (let i = 0; i < 7; i++) { if ((i + BS) % 2 && k > 0.3) continue; const a = -Math.PI + i / 6 * Math.PI; CC.line(ctx, [Math.cos(a) * R * 0.55, Math.sin(a) * R * 0.55, Math.cos(a) * R * 0.78, Math.sin(a) * R * 0.78], 5, PAL.gold, null, false, 1); }
        CC.circle(ctx, 0, 0, R * 0.38, '#FFE36B', 5); CC.rect(ctx, -R * 0.16, R * 0.32, R * 0.32, R * 0.24, PAL.grey, 4, 3);
        CC.line(ctx, [-R * 0.1, R * 0.05, 0, -R * 0.1, R * 0.1, R * 0.05], 3.5, '#B88A1A', null, false, 0.6);
        ctx.restore();
      } else if (name === 'question' || name === 'exclaim') {
        ctx.save(); ctx.translate(R * 0.75, -R * 1.45); ctx.rotate(0.12); ctx.scale(pop, pop);
        CC.text(ctx, name === 'question' ? '?' : '!', 0, 0, R * 0.95, name === 'question' ? INK : PAL.red, { font: 'PMarker', stroke: 8, strokeCol: PAL.white });
        ctx.restore();
      } else if (name === 'zzz') {
        for (let i = 0; i < 3; i++) { const kk = ((k * 0.8 + i / 3) % 1); CC.text(ctx, 'z', R * (0.8 + kk * 0.6), -R * (0.9 + kk * 0.9), R * (0.3 + kk * 0.25), INK, { font: 'PMarker' }); }
      } else if (name === 'hearts') {
        for (let i = 0; i < 3; i++) { const kk = ((k * 0.7 + i / 3) % 1); ctx.save(); ctx.translate((i - 1) * R * 0.6, -R * (1.3 + kk * 0.8)); ctx.scale(0.5, 0.5); TM.CC.P.heart(ctx, 0, 0, 1); ctx.restore(); }
      } else if (name === 'blush') {
        ctx.save(); ctx.globalAlpha = 0.45; for (const sx of [-1, 1]) CC.ellipse(ctx, sx * R * 0.52, R * 0.2, R * 0.15, R * 0.08, '#F08C8C', 0); ctx.restore();
      }
    }
  }

  // figure. st: {x,y,s,sc,sx,sy,rot,flip,look,tilt,pose,prevPose,poseMix,expr,legs,talk,fx,alpha,jumpY,shakeX,osc,hold,carry,noLegs}
  CC.figure = function (ctx, ch, st, lq) {
    if (typeof ch === 'string') ch = CC.char(ch);
    lq = lq == null ? CC.q((CC.f || 0) / TM.FPS) : lq;
    const S = (st.s || 1) * (ch.size || 1) * (st.sc == null ? 1 : st.sc);
    const anchors = {};
    if (S <= 0.001 || st.alpha === 0) return anchors;
    ctx.save(); if (st.alpha != null) ctx.globalAlpha *= st.alpha;
    ctx.translate(st.x + (st.shakeX || 0), st.y + (st.jumpY || 0));
    if (st.rot) ctx.rotate(st.rot);
    ctx.scale(S * (st.sx || 1), S * (st.sy || 1));
    if (st.flip) ctx.scale(-1, 1);
    const legs = st.legs || 'stand', drop = legs === 'sit' ? 40 : legs === 'kneel' ? 56 : 0;
    ctx.translate(0, drop);
    // legs + shoes (thin stick lines)
    if (!st.noLegs && !ch.robe) {
      for (const sx of [-1, 1]) {
        const hx = sx * 15;
        if (legs === 'sit') { CC.line(ctx, [hx, HIP, sx * 44, HIP + 22, sx * 46, -drop], 5.5, INK, null, false, 1); CC.ellipse(ctx, sx * 52, -drop - 4, 16, 8, INK, 0); }
        else if (legs === 'kneel') { const fy = HIP + LEG - 56, kx = 34 + sx * 8; CC.line(ctx, [hx, HIP, kx, fy - 4, kx - 62, fy - 4], 5.5, INK, null, false, 1); CC.ellipse(ctx, kx - 66, fy - 9, 14, 7, INK, 0); }
        else {
          const a = (legs === 'wide' ? 0.3 : 0.07) + (st.legA || 0);
          const fx = hx + sx * Math.sin(a) * LEG, fy = HIP + Math.cos(a) * LEG;
          CC.line(ctx, [hx, HIP, fx, fy], 5.5, INK, null, false, 1); CC.ellipse(ctx, fx + 7, fy - 5, 16, 8, INK, 0);
        }
      }
    } else if (ch.robe && !st.noLegs) for (const sx of [-1, 1]) CC.ellipse(ctx, sx * 26, -6, 16, 8, INK, 0);
    // upper body pivots at the hip
    ctx.save(); ctx.translate(0, HIP);
    const pz = typeof st.pose === 'string' ? POSES[st.pose] || {} : st.pose || {};
    ctx.rotate((st.tilt || 0) + (pz.tilt || 0)); ctx.translate(0, -HIP);
    if (ch.hair === 'long' || ch.hair === 'bob') { ctx.save(); ctx.translate(0, HCY); hairBack(ctx, ch); ctx.restore(); }
    drawTorso(ctx, ch);
    // arms (single thick lines, no hands)
    const seg = 54; const hands = {};
    for (const side of [-1, 1]) {
      let a = armOf(st.pose, side);
      if (st.prevPose && st.poseMix != null && st.poseMix < 1) { const b = armOf(st.prevPose, side); a = [lerp(b[0], a[0], st.poseMix), lerp(b[1], a[1], st.poseMix)]; }
      if (st.osc) a = st.osc(side, a, lq) || a;
      const sx = side * 33, e1 = [sx + side * Math.sin(a[0]) * seg, SHY + Math.cos(a[0]) * seg];
      const a2 = a[0] + a[1], e2 = [e1[0] + side * Math.sin(a2) * seg, e1[1] + Math.cos(a2) * seg];
      CC.line(ctx, [sx, SHY, e1[0], e1[1], e2[0], e2[1]], 10, ch.armCol || INK, null, false, 1.1);
      hands[side] = e2;
    }
    // head (no neck: overlaps the shoulders) - shaded Crayon Capital vector style
    ctx.save(); ctx.translate(0, HCY);
    const skinCol = ch.skin || PAL.skin;
    CC.circle(ctx, 0, 0, HR, skinCol, LW);
    // soft ambient chin & jaw shade
    ctx.save();
    ctx.beginPath();
    ctx.arc(0, 0, HR - 2.5, 0.18 * Math.PI, 0.82 * Math.PI);
    ctx.lineWidth = 12;
    ctx.strokeStyle = ch.skinDk || PAL.skinDk;
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.restore();
    // subtle blush on cheeks
    ctx.save();
    ctx.globalAlpha = 0.28;
    ctx.fillStyle = '#E89088';
    ctx.beginPath(); ctx.arc(-HR * 0.48, HR * 0.15, HR * 0.16, 0, TAU); ctx.fill();
    ctx.beginPath(); ctx.arc(HR * 0.48, HR * 0.15, HR * 0.16, 0, TAU); ctx.fill();
    ctx.restore();
    if (st.fx && st.fx.flush && lq >= st.fx.flush.t0 && lq < st.fx.flush.until) {
      ctx.save(); ctx.globalAlpha = 0.42 * clamp((lq - st.fx.flush.t0) / 0.3, 0, 1); CC.draw(ctx, c => CC.pathEllipse(c, 0, 0, HR - 3, HR - 3, 1), PAL.red, 0); ctx.restore();
    }
    drawFace(ctx, ch, st, lq);
    hairFront(ctx, ch);
    drawFX(ctx, st, lq);
    anchors.head = CC.toWorld(ctx, 0, 0); anchors.headTop = CC.toWorld(ctx, 0, -HR * (ch.hat === 'tophat' ? 2.1 : 1.15));
    anchors.r = HR * S;
    ctx.restore();
    // held / carried props (parented to the arm)
    if (st.carry) { ctx.save(); ctx.translate(0, Math.min(hands[-1][1], hands[1][1]) + 4); ctx.scale(st.carry.s || 1, st.carry.s || 1); st.carry.draw(ctx, lq); ctx.restore(); }
    if (st.hold) {
      const hd = hands[st.hold.hand === 'L' ? -1 : 1], o = st.hold;
      ctx.save(); ctx.translate(hd[0] + (o.dx || 0), hd[1] + (o.dy || 0));
      if (st.flip) ctx.scale(-1, 1);
      if (o.shake) ctx.rotate(CC.jit(7, 9) * 0.06);
      ctx.rotate(o.rot || 0); ctx.scale(o.s || 1, o.s || 1); o.draw(ctx, lq); ctx.restore();
    }
    anchors.handR = CC.toWorld(ctx, hands[1][0], hands[1][1]); anchors.handL = CC.toWorld(ctx, hands[-1][0], hands[-1][1]);
    ctx.restore(); ctx.restore();
    anchors.x = st.x; anchors.y = st.y;
    return anchors;
  };
  CC.toWorld = function (ctx, x, y) {
    const m = ctx.getTransform(); const inv = TM.camInv || new DOMMatrix();
    const p = inv.multiply(m).transformPoint(new DOMPoint(x, y)); return { x: p.x, y: p.y };
  };

  /* ------------------------------------------------------------------ cinematic lighting */
  CC.spotlight = function (ctx, x, y, r, innerCol, outerCol) {
    ctx.save();
    const grad = ctx.createRadialGradient(x, y, 20, x, y, r || 650);
    grad.addColorStop(0, innerCol || 'rgba(255, 248, 230, 0.22)');
    grad.addColorStop(0.55, 'rgba(25, 28, 38, 0.55)');
    grad.addColorStop(1, outerCol || 'rgba(12, 14, 20, 0.92)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
    ctx.restore();
  };

  CC.vignette = function (ctx, strength) {
    ctx.save();
    const grad = ctx.createRadialGradient(W / 2, H / 2, 280, W / 2, H / 2, 1050);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0)');
    grad.addColorStop(1, `rgba(5, 7, 12, ${strength || 0.72})`);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
    ctx.restore();
  };

  /* ------------------------------------------------------------------ bubbles */
  // speech bubble whose tail points at (tx,ty). o:{side:1|-1, dx, dy, size, maxW}
  CC.speech = function (ctx, text, tx, ty, lt, t0, o) {
    o = o || {}; CC.cue('pop', t0); const sc = CC.pop(CC.q(lt), t0, 0.22); if (sc <= 0) return;
    const side = o.side || 1, size = o.size || 46;
    ctx.save(); ctx.font = CC.font(size); const lines = String(text).split('\n');
    const w = Math.max(...lines.map(l => ctx.measureText(l).width)) + size * 1.3, h = lines.length * size * 1.08 + size * 0.8; ctx.restore();
    let bx = tx + side * (o.dx == null ? w * 0.42 + 40 : o.dx), by = ty - (o.dy == null ? h / 2 + 70 : o.dy);
    { const d = CC.safeShift(ctx, bx - w / 2, by - h / 2, bx + w / 2, by + h / 2); bx += d.dx; by += d.dy; }   // keep bubble on screen
    ctx.save(); ctx.translate(tx, ty); ctx.scale(sc, sc); ctx.translate(-tx, -ty);
    CC.draw(ctx, c => { CC.path(c, CC.rrPts(bx - w / 2, by - h / 2, w, h, Math.min(h * 0.48, 46)), true, true, 1.6); }, PAL.white, 0);
    const b0 = bx - side * w * 0.12, by0 = by + h / 2 - 6;
    CC.poly(ctx, [b0 - 20, by0, b0 + 20, by0, tx + side * 6, ty], PAL.white, 0);
    CC.draw(ctx, c => CC.path(c, CC.rrPts(bx - w / 2, by - h / 2, w, h, Math.min(h * 0.48, 46)), true, true, 1.6), null, 5);
    ctx.fillStyle = PAL.white; ctx.fillRect(b0 - 17, by0 - 6, 34, 10);
    CC.line(ctx, [b0 - 20, by0 - 1, tx + side * 6, ty, b0 + 20, by0 - 1], 5, INK, null, false, 1);
    CC.text(ctx, text, bx, by + 2, size, INK, { lh: 1.08 });
    ctx.restore();
  };
  // thought bubble; content = string or fn(ctx) drawn centered at the cloud
  CC.thought = function (ctx, content, tx, ty, lt, t0, o) {
    o = o || {}; CC.cue('pop', t0); const lq = CC.q(lt); const sc = CC.pop(lq, t0 + 0.12, 0.25);
    const side = o.side || 1, w = o.w || 300, h = o.h || 200;
    const bx = tx + side * (o.dx == null ? w * 0.45 + 40 : o.dx), by = ty - (o.dy == null ? h / 2 + 110 : o.dy);
    for (let i = 0; i < 3; i++) { const k = CC.pop(lq, t0 + i * 0.05, 0.2); if (k <= 0) continue; const u = (i + 1) / 4; CC.circle(ctx, lerp(tx, bx - side * w * 0.25, u), lerp(ty, by + h * 0.45, u), (8 + i * 6) * k, PAL.white, 4); }
    if (sc <= 0) return;
    ctx.save(); ctx.translate(bx, by); ctx.scale(sc, sc);
    const p = []; const n = 11; for (let i = 0; i < n; i++) { const a = i / n * TAU; const r = 1 + 0.12 * ((i % 2) ? 1 : -1); p.push(Math.cos(a) * w / 2 * r, Math.sin(a) * h / 2 * r); }
    CC.poly(ctx, p, PAL.white, 5, true);
    if (typeof content === 'function') content(ctx, lq); else CC.text(ctx, content, 0, 0, o.size || 44, INK);
    ctx.restore();
  };

  /* ------------------------------------------------------------------ actor timeline */
  // track events (all `at` in shot-local seconds; `dur` default 0.5):
  // {pose} {expr} {look} {turn} {flip} {slideIn:'left'|'right',from} {slideOut,to} {slideTo,toY}
  // {walkAway, scale, dy, dx} {jump:h} {sit} {stand} {kneel} {collapse:'left'|'right'} {write} {clap} {wave} {cheer} {gesture}
  // {talk:true, until} {say:'txt', until, side} {think:'txt'|fn, until} {fx:'sweat'|[..], until} {hold:fn, hand, s, dx, dy, shake} {carry:fn}
  // {shake} {popIn} {popOut} {hide} {show} {cue:'ding'}
  const bob = (lq, at, s) => -Math.abs(Math.sin((lq - at) * Math.PI * 4.5)) * 12 * s;
  CC.actor = function (ctx, s, ch, base, track) {
    if (typeof ch === 'string') ch = CC.char(ch);
    const lq = CC.q(s.lt);
    const st = Object.assign({ x: W / 2, y: 860, s: 1, sc: 1, pose: 'idle', expr: 'neutral', flip: false, look: 0, tilt: 0, legs: 'stand', jumpY: 0, sx: 1, sy: 1, rot: 0, alpha: 1 }, base || {});
    st.fx = {}; if (base && base.fx) [].concat(base.fx).forEach(n => { st.fx[n] = { t0: -1, until: 1e9 }; });
    const S = st.s * (ch.size || 1); let say = null, think = null;
    for (const e of track || []) {
      const at = e.at || 0, d = e.dur || 0.5;
      // automatic SFX
      if (e.slideIn || e.slideOut || e.slideTo != null || e.walkAway) CC.cue('whoosh', at);
      if (e.popIn || e.say || e.think) CC.cue('pop', at);
      if (e.jump) CC.cue('boing', at);
      if (e.write) CC.cue('scribble', at);
      if (e.collapse || e.sit || e.kneel) CC.cue('thud', at + (e.collapse ? d : 0));
      if (e.fx === 'bulb' || (Array.isArray(e.fx) && e.fx.includes('bulb'))) CC.cue('ding', at);
      if (e.fx === 'shock' || (Array.isArray(e.fx) && e.fx.includes('shock'))) CC.cue('pop', at);
      if (e.cue) CC.cue(e.cue, at);
      if (lq < at) continue;
      const k = clamp((lq - at) / d, 0, 1), on = e.until == null ? true : lq < e.until;
      if (e.pose) { st.prevPose = st.pose; st.pose = e.pose; st.poseMix = (lq - at) < 1 / CC.STEP_FPS - 1e-6 ? 0.5 : 1; }
      if (e.expr) st.expr = e.expr;
      if (e.look != null) st.look = e.look;
      if (e.turn) { st.flip = !st.flip; st.look = -st.look; }
      if (e.flip != null) st.flip = e.flip;
      if (e.slideIn) { const fromX = e.from != null ? e.from : (e.slideIn === 'right' ? W + 300 : -300); st.x = lerp(fromX, st.x, CC.easeOut(k)); if (k < 1) st.jumpY += bob(lq, at, S); }
      if (e.slideOut) { const toX = e.to != null ? e.to : (e.slideOut === 'right' ? W + 320 : -320); st.x = lerp(st.x, toX, CC.easeIn(k)); if (k > 0 && k < 1) st.jumpY += bob(lq, at, S); }
      if (e.slideTo != null) { st.x = lerp(st.x, e.slideTo, TM.smooth(k)); if (e.toY != null) st.y = lerp(st.y, e.toY, TM.smooth(k)); if (k < 1) st.jumpY += bob(lq, at, S); }
      if (e.walkAway) { st.sc *= lerp(1, e.scale || 0.35, k); st.y += (e.dy == null ? -150 : e.dy) * k; st.x += (e.dx || 0) * k; if (k < 1) st.jumpY += bob(lq, at, S * st.sc); if (e.fade) st.alpha *= 1 - CC.easeIn(k); }
      if (e.jump) {
        const h = e.jump === true ? 160 : e.jump, dd = e.dur || 0.6, kk = clamp((lq - at) / dd, 0, 1.0001);
        if (kk < 0.16) { st.sy *= 0.84; st.sx *= 1.12; }
        else if (kk < 0.84) { const a = (kk - 0.16) / 0.68; st.jumpY -= h * Math.sin(a * Math.PI) * S; st.sy *= a < 0.5 ? 1.14 : 1.06; st.sx *= a < 0.5 ? 0.9 : 0.95; }
        else if (kk < 1) { st.sy *= 0.82; st.sx *= 1.14; }
      }
      if (e.sit) { st.legs = 'sit'; if (lq - at < 0.09) { st.sy *= 0.88; st.sx *= 1.08; } }
      if (e.stand) st.legs = 'stand';
      if (e.kneel) { st.legs = 'kneel'; if (lq - at < 0.09) { st.sy *= 0.9; } }
      if (e.collapse) { const dir = e.collapse === 'left' ? -1 : 1; st.rot = dir * Math.PI / 2 * CC.easeIn(k); if (k >= 1 && lq - at - d < 0.1) { st.sy *= 0.85; } if (k >= 1) st.pose = 'slump'; }
      if (e.write && on && lq < at + (e.dur || 1e9)) st.osc = (side, a, l) => side > 0 ? [a[0] + 0.16 * Math.sin(l * TAU * 3), a[1] - 0.22 * Math.cos(l * TAU * 3)] : a;
      if (e.clap && on) { st.pose = 'clap'; st.osc = (side, a, l) => [a[0], a[1] + (Math.floor(l * 6) % 2 ? 0.4 : -0.05)]; }
      if (e.wave && on) { st.pose = 'wave'; st.osc = (side, a, l) => side > 0 ? [a[0], a[1] + (Math.floor(l * 6) % 2 ? 0.55 : -0.2)] : a; }
      if (e.cheer && on) { st.pose = 'cheer'; st.osc = (side, a, l) => [a[0] + (Math.floor(l * 6 + (side > 0 ? 1 : 0)) % 2 ? 0.25 : -0.1), a[1]]; }
      if (e.gesture && on) st.osc = (side, a, l) => side > 0 ? [a[0] + 0.12 * Math.sin(l * 5), a[1]] : a;
      if ((e.wave || e.clap || e.cheer || e.write || e.gesture) && !on) st.osc = null;
      if (e.talk != null) st.talk = !!e.talk && on;
      if (e.say) say = on ? e : (say === e ? null : say);
      if (e.think) think = on ? e : (think === e ? null : think);
      if (e.fx) [].concat(e.fx).forEach(n => { st.fx[n] = { t0: at, until: e.until == null ? 1e9 : e.until }; });
      if (e.fxOff) [].concat(e.fxOff).forEach(n => { delete st.fx[n]; });
      if (e.hold !== undefined) st.hold = e.hold ? { draw: e.hold, hand: e.hand, s: e.s, dx: e.dx, dy: e.dy, rot: e.rot, shake: e.shake } : null;
      if (e.carry !== undefined) { st.carry = e.carry ? { draw: e.carry, s: e.s } : null; if (e.carry) st.pose = 'carry'; }
      if (e.shake && lq < at + d) st.shakeX = CC.jit(11, 3) * 10 * S;
      if (e.popIn) st.sc *= CC.backOut((lq - at) / (e.dur || 0.3));
      if (e.popOut) st.sc *= 1 - CC.easeIn(k);
      if (e.hide) st.alpha = 0; if (e.show) st.alpha = 1;
    }
    const a = CC.figure(ctx, ch, st, lq);
    if (a.head && say) CC.speech(ctx, say.say, a.head.x + (say.side || 1) * a.r * 0.7, a.head.y - a.r * 0.9, s.lt, say.at || 0, { side: say.side || 1, size: say.size });
    if (a.head && think) CC.thought(ctx, think.think, a.head.x + (think.side || 1) * a.r * 0.6, a.head.y - a.r * 1.0, s.lt, think.at || 0, { side: think.side || 1, w: think.w, h: think.h, size: think.size });
    return a;
  };

  /* ------------------------------------------------------------------ objects */
  // Generic object animator. o: {x,y,s,rot,at,in,dur,from,outAt,out,outDur,shake:{at,dur,amp}|true,flap,jiggle:[t..],bob,spin,cue}
  // in/out: 'pop' | 'slide-left' | 'slide-right' | 'slide-up' | 'slide-down' | 'drop' | 'grow' | 'draw' | 'fade' | 'none'
  CC.obj = function (ctx, s, o, draw) {
    const lq = CC.q(s.lt); const at = o.at || 0, inn = o.in || 'pop';
    const dIn = o.dur || (inn === 'pop' ? 0.3 : inn === 'drop' ? 0.35 : inn === 'draw' ? 0.8 : 0.45);
    const sfxIn = o.cue !== undefined ? o.cue : { pop: 'pop', drop: 'thud', grow: 'pop', draw: 'scribble', 'slide-left': 'whoosh', 'slide-right': 'whoosh', 'slide-up': 'whoosh', 'slide-down': 'whoosh' }[inn];
    if (sfxIn) CC.cue(sfxIn, inn === 'drop' ? at + dIn : at);
    if (o.out && o.outAt != null) CC.cue(o.out === 'pop' || o.out === 'puff' ? 'pop' : 'whoosh', o.outAt);
    if (inn !== 'none' && lq < at) return null;
    let x = o.x, y = o.y, sc = o.s || 1, rot = o.rot || 0, sx = 1, sy = 1, alpha = 1, u = 1; const k = (lq - at) / dIn;
    switch (inn) {
      case 'pop': sc *= CC.backOut(k); break;
      case 'grow': sy *= CC.backOut(k); break;
      case 'fade': alpha *= clamp(k, 0, 1); break;
      case 'draw': u = clamp(k, 0, 1); break;
      case 'drop': if (k < 1) y = lerp(y - (o.from || 900), y, CC.easeIn(k)); else if (k < 1 + 0.1 / dIn) { sy *= 0.82; sx *= 1.14; } break;
      default:
        if (inn.startsWith('slide')) {
          const e = CC.easeOut(k), dir = inn.split('-')[1];
          if (dir === 'left') x = lerp(o.from != null ? o.from : -420, x, e); if (dir === 'right') x = lerp(o.from != null ? o.from : W + 420, x, e);
          if (dir === 'up') y = lerp(o.from != null ? o.from : H + 500, y, e); if (dir === 'down') y = lerp(o.from != null ? o.from : -500, y, e);
        }
    }
    if (o.out && o.outAt != null && lq >= o.outAt) {
      const ko = clamp((lq - o.outAt) / (o.outDur || 0.3), 0, 1);
      if (ko >= 1 && o.out !== 'puff') return null;
      if (o.out === 'pop') sc *= ko < 0.3 ? 1 + ko * 0.4 : (1.12 * (1 - (ko - 0.3) / 0.7));
      else if (o.out === 'puff') { sc *= Math.max(0, 1 - ko * 1.6); TM.CC.P.puff(ctx, x, y - 40 * (o.s || 1), ko, o.s || 1); if (ko >= 1) return null; }
      else if (o.out === 'fade') alpha *= 1 - ko;
      else if (o.out === 'fall') { y += 900 * CC.easeIn(ko); rot += ko * 0.6; }
      else { const e = CC.easeIn(ko), dir = o.out.split('-')[1]; if (dir === 'left') x = lerp(x, -500, e); if (dir === 'right') x = lerp(x, W + 500, e); if (dir === 'up') y = lerp(y, -600, e); if (dir === 'down') y = lerp(y, H + 600, e); }
    }
    if (o.shake) { const sh = o.shake === true ? { at: -1, dur: 1e9, amp: 4 } : o.shake; if (lq >= sh.at && lq < sh.at + (sh.dur || 0.4)) { x += CC.jit(21, 1) * (sh.amp || 8); rot += CC.jit(21, 2) * 0.03; } }
    if (o.flap) rot += (Math.floor(lq * 8) % 2 ? 1 : -1) * (o.flap === true ? 0.06 : o.flap);
    if (o.jiggle) for (const tj of o.jiggle) { const kk = lq - tj; if (kk >= 0 && kk < 0.25) { const w = Math.cos(kk / 0.25 * Math.PI * 3) * (1 - kk / 0.25); sy *= 1 - 0.1 * w; sx *= 1 + 0.08 * w; } }
    if (o.bob) y += Math.sin(lq * TAU * 0.8) * o.bob;
    if (o.spin) rot += lq * o.spin;
    if (sc <= 0.001 || alpha <= 0) return null;
    ctx.save(); ctx.globalAlpha *= alpha; ctx.translate(x, y); ctx.rotate(rot); ctx.scale(sc * sx, sc * sy);
    draw(ctx, { u, lq, k: clamp(k, 0, 1), t: lq - at });
    ctx.restore();
    return { x, y, sc };
  };
  // sprite swap: draws a before t0, b after with pop + puff
  CC.swap = function (ctx, s, t0, x, y, drawA, drawB, size) {
    CC.cue('pop', t0); const lq = CC.q(s.lt);
    if (lq < t0) { ctx.save(); ctx.translate(x, y); drawA(ctx, lq); ctx.restore(); return 0; }
    const sc = CC.backOut((lq - t0) / 0.28); ctx.save(); ctx.translate(x, y); ctx.scale(sc, sc); drawB(ctx, lq); ctx.restore();
    TM.CC.P.puff(ctx, x, y - (size || 100) * 0.5, CC.prog(lq, t0, 0.4), (size || 100) / 120);
    return 1;
  };
  // arc position helper for hand-overs / tosses
  CC.arcPos = (x0, y0, x1, y1, u, h) => { u = clamp(u, 0, 1); return { x: lerp(x0, x1, u), y: lerp(y0, y1, u) - Math.sin(u * Math.PI) * (h == null ? 80 : h) }; };
  // move a prop from A to B over [t0, t0+dur] (hand-over); returns true while in flight
  CC.handOver = function (ctx, s, t0, dur, a, b, draw, o) {
    o = o || {}; CC.cue('whoosh', t0); const lq = CC.q(s.lt); if (lq < t0 || lq > t0 + dur) return false;
    const p = CC.arcPos(a.x, a.y, b.x, b.y, TM.smooth((lq - t0) / dur), o.h == null ? 40 : o.h);
    ctx.save(); ctx.translate(p.x, p.y); ctx.scale(o.s || 1, o.s || 1); draw(ctx, lq); ctx.restore(); return true;
  };

  /* ------------------------------------------------------------------ legacy shim */
  const C = TM.C;
  if (C) {
    const mapHair = { side: 'swept', short: 'short', long: 'long', spiky: 'spiky', none: 'none' };
    const mapExpr = { shocked: 'shock', scream: 'scream' };
    const pa = (q) => !q ? POSES.hang.aR : Array.isArray(q) ? q : typeof q === 'string' ? (TM.POSES[q] || POSES[q] && POSES[q].aR || POSES.hang.aR) : TM.poseTween(q.from, q.to, q.u);
    C.person = function (ctx, p, f, o) {
      o = o || {};
      const ch = {
        skin: PAL.skin, shirt: p.body || PAL.blue, suit: p.suit, tie: p.suit ? p.tie || PAL.red : null, armCol: INK,
        hair: p.hair ? mapHair[p.hair.type] || 'short' : 'none', hairCol: p.hair ? p.hair.color : INK,
        glasses: p.glasses ? 'round' : null, shades: p.shades, old: p.old, badge: !!p.emblem,
        hat: p.hat === 'cop' ? 'police' : p.hat === 'fedora' ? 'fedora' : null, hatCol: p.hatCol, seed: p.seed
      };
      const lq = CC.q(f / TM.FPS);
      const st = {
        x: p.x, y: p.y, s: (p.s || 1) * 1.12, pose: { aL: pa(o.armL), aR: pa(o.armR) }, expr: mapExpr[o.expr] || o.expr || 'neutral',
        flip: o.flip, look: o.faceDir || 0, tilt: o.lean || 0, talk: o.talk, noLegs: o.hide === 'legs', fx: {},
        jumpY: (o.walk ? bob(lq, 0, p.s || 1) : 0) + (o.jump ? -Math.abs(Math.sin(lq * TAU * 1.5)) * 36 * (p.s || 1) : 0)
      };
      if (o.sweat) st.fx.sweat = { t0: -1, until: 1e9 };
      if (o.expr === 'angry') st.fx.anger = { t0: -1, until: 1e9 };
      const a = CC.figure(ctx, ch, st, lq);
      p._handR = a.handR; p._handL = a.handL; p._head = a.head ? { x: a.head.x, y: a.head.y, r: a.r } : { x: p.x, y: p.y - 300, r: 70 };
      return p;
    };
    C.head = function (ctx, x, y, R, f, seed, expr, col) {
      const S = R / HR; const lq = CC.q(f / TM.FPS);
      ctx.save(); ctx.translate(x, y); ctx.scale(S, S);
      if (col) CC.rect(ctx, -HR * 0.75, HR * 0.72, HR * 1.5, HR * 0.9, col, LW, HR * 0.3);
      CC.circle(ctx, 0, 0, HR, PAL.skin, LW);
      drawFace(ctx, { seed, hair: 'short' }, { expr: mapExpr[expr] || expr || 'neutral' }, lq);
      hairFront(ctx, { hair: ['short', 'curly', 'parted', 'none', 'long'][seed % 5], hairCol: ['#3a2a20', '#222', '#6B4A2E', '#000', '#4A3222'][seed % 5] });
      ctx.restore();
    };
    // whole-object boil for every legacy prop drawn through C.at
    const at0 = C.at;
    C.at = function (ctx, x, y, sc, fn, rot) { if (!CC.BOIL) return at0(ctx, x, y, sc, fn, rot || 0); return at0(ctx, x + CC.jit(x * 0.01 + y * 0.02, 1) * 1.5, y + CC.jit(x * 0.01 + y * 0.02, 2) * 1.5, sc, fn, (rot || 0) + CC.jit(x + y, 3) * 0.007); };
  }
})();
