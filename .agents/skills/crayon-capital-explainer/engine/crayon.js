/* ============================================================================
 * crayon.js — Crayon-Capital-style 2D explainer toolkit (TM.C)
 * Flat muted backgrounds, white-head puppet characters with jointed limbs,
 * handwritten marker text that pops / writes on, speech bubbles, finance
 * props (cash, charts, banks, gears, stamps, handcuffs...). Every helper is
 * time-driven: pass the shot-local time `lt` and an appear time `t0`.
 * Fonts: 'PMarker' (headings), 'PHand' (bubbles/captions) — see render.html.
 * ==========================================================================*/
(function () {
  const TM = window.TM; const W = TM.W, H = TM.H;
  const C = (TM.C = {});
  const clamp = TM.clamp, lerp = TM.lerp, TAU = Math.PI * 2;
  const K = (C.K = {
    slate: '#5E7387', slateDk: '#455869', teal: '#2E5E63', tealDk: '#22474B',
    grey: '#9CA2A8', greyDk: '#6B7177', beige: '#E6D8BC', cream: '#F3ECDC',
    black: '#161616', ink: '#151515', white: '#FFFFFF', red: '#D8413A',
    yellow: '#F2C230', green: '#58B35A', greenDk: '#3D8C40', purple: '#7E57C2',
    blue: '#3C78C8', orange: '#EE8A2E', navy: '#22304A', brown: '#7A5235',
    money: '#8FCB7C', moneyDk: '#4E8F45', gold: '#E8B923', pink: '#F2A7B5',
    night: '#1F2A3A', sepia: '#C9B48E'
  });

  /* ---------------- timing ---------------- */
  C.backOut = (u) => { u = clamp(u, 0, 1); const s = 1.9; u -= 1; return u * u * ((s + 1) * u + s) + 1; };
  C.pop = (lt, t0, dur) => { dur = dur || 0.28; if (lt < t0) return 0; return C.backOut((lt - t0) / dur); };
  C.prog = (lt, t0, dur) => clamp((lt - t0) / dur, 0, 1);
  C.ease = (lt, t0, dur) => TM.easeOut(C.prog(lt, t0, dur));
  C.smooth = (lt, t0, dur) => TM.smooth(C.prog(lt, t0, dur));
  C.at = function (ctx, x, y, sc, fn, rot) {
    if (sc <= 0.001) return; ctx.save(); ctx.translate(x, y); if (rot) ctx.rotate(rot); ctx.scale(sc, sc); fn(ctx); ctx.restore();
  };
  C.shake = function (ctx, lt, t0, amp, dur) {
    dur = dur || 0.35; const k = lt - t0; if (k < 0 || k > dur) return;
    const a = amp * (1 - k / dur); ctx.translate(Math.sin(k * 90) * a, Math.cos(k * 71) * a * 0.6);
  };

  /* ---------------- backgrounds ---------------- */
  C.bg = (ctx, col) => { ctx.fillStyle = col; ctx.fillRect(-6000, -4000, W + 12000, H + 8000); };
  C.floor = function (ctx, y, col) {
    ctx.fillStyle = col; ctx.fillRect(-6000, y, W + 12000, H + 4000);
    ctx.strokeStyle = K.ink; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(-6000, y); ctx.lineTo(W + 6000, y); ctx.stroke();
  };
  C.grid = function (ctx, col, step) { // faint chalk grid for "board" scenes
    step = step || 80; ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 2; ctx.globalAlpha = 0.25;
    for (let x = -2000; x < W + 2000; x += step) { ctx.beginPath(); ctx.moveTo(x, -500); ctx.lineTo(x, H + 500); ctx.stroke(); }
    for (let y = -500; y < H + 500; y += step) { ctx.beginPath(); ctx.moveTo(-2000, y); ctx.lineTo(W + 2000, y); ctx.stroke(); }
    ctx.restore();
  };

  /* ---------------- text ---------------- */
  C.font = (size, fam) => `${size}px ${fam || 'PMarker'}, "Liberation Sans", Arial, sans-serif`;
  // multi-line text; o: {font, align, reveal(0..1), stroke, strokeCol, lh}
  C.text = function (ctx, str, x, y, size, col, o) {
    o = o || {}; ctx.save(); ctx.font = C.font(size, o.font); ctx.textBaseline = 'middle';
    const lines = String(str).split('\n'); const lh = size * (o.lh || 1.15);
    const total = str.length; let budget = o.reveal == null ? 1e9 : Math.ceil(total * clamp(o.reveal, 0, 1));
    lines.forEach((ln, i) => {
      const yy = y + (i - (lines.length - 1) / 2) * lh;
      const full = ctx.measureText(ln).width;
      const s = ln.slice(0, Math.max(0, budget)); budget -= ln.length + 1;
      if (!s) return;
      let xx = x; const al = o.align || 'center';
      if (al === 'center') xx = x - full / 2; else if (al === 'right') xx = x - full;
      ctx.textAlign = 'left';
      if (o.stroke) { ctx.lineJoin = 'round'; ctx.lineWidth = o.stroke; ctx.strokeStyle = o.strokeCol || K.ink; ctx.strokeText(s, xx, yy); }
      ctx.fillStyle = col; ctx.fillText(s, xx, yy);
    });
    ctx.restore();
  };
  // popping marker word(s): scale-bounce in at t0
  C.word = function (ctx, str, x, y, size, col, lt, t0, o) {
    o = o || {}; const sc = C.pop(lt, t0, o.dur || 0.26);
    C.at(ctx, x, y, sc, (c) => C.text(c, str, 0, 0, size, col, { stroke: o.stroke == null ? size * 0.14 : o.stroke, strokeCol: o.strokeCol, font: o.font }), o.rot || 0);
  };
  // black (or coloured) panel with white marker text. o: {size,bg,col,rot,write,writeDur,pad}
  C.panel = function (ctx, str, x, y, lt, t0, o) {
    o = o || {}; const size = o.size || 72; const sc = C.pop(lt, t0, 0.26); if (sc <= 0) return;
    ctx.save(); ctx.font = C.font(size, o.font);
    const lines = String(str).split('\n');
    const w = Math.max(...lines.map(l => ctx.measureText(l).width)) + size * (o.pad || 1.1);
    const h = lines.length * size * 1.15 + size * 0.7; ctx.restore();
    const rev = o.write ? C.prog(lt, t0 + 0.12, o.writeDur || 0.7) : null;
    C.at(ctx, x, y, sc, (c) => {
      TM.shape(c, cc => TM.rr(cc, -w / 2, -h / 2, w, h, size * 0.22), o.bg || K.black, o.border == null ? 6 : o.border, K.ink);
      C.text(c, str, 0, size * 0.04, size, o.col || K.white, { reveal: rev, font: o.font });
    }, o.rot || 0);
  };
  // speech bubble. o: {size, tail:'l'|'r'|'none', tailLen, font}
  C.bubble = function (ctx, str, x, y, lt, t0, o) {
    o = o || {}; const size = o.size || 48; const sc = C.pop(lt, t0, 0.22); if (sc <= 0) return;
    ctx.save(); ctx.font = C.font(size, o.font || 'PHand');
    const lines = String(str).split('\n');
    const w = Math.max(...lines.map(l => ctx.measureText(l).width)) + size * 1.2;
    const h = lines.length * size * 1.1 + size * 0.7; ctx.restore();
    C.at(ctx, x, y, sc, (c) => {
      TM.shape(c, cc => TM.rr(cc, -w / 2, -h / 2, w, h, Math.min(h * 0.45, 50)), K.white, 5);
      if (o.tail !== 'none') {
        const d = o.tail === 'r' ? 1 : -1; const tx = d * w * 0.22, L = o.tailLen || 46;
        c.fillStyle = K.white; c.beginPath(); c.moveTo(tx - 18, h / 2 - 4); c.lineTo(tx + 18, h / 2 - 4); c.lineTo(tx + d * 34, h / 2 + L); c.closePath(); c.fill();
        c.strokeStyle = K.ink; c.lineWidth = 5; c.lineJoin = 'round';
        c.beginPath(); c.moveTo(tx - 18, h / 2); c.lineTo(tx + d * 34, h / 2 + L); c.lineTo(tx + 18, h / 2); c.stroke();
      }
      C.text(c, str, 0, 2, size, o.col || K.ink, { font: o.font || 'PHand', lh: 1.1 });
    });
  };
  // slam-in stamp (starts big, settles). o: {col,size,rot}
  C.stamp = function (ctx, str, x, y, lt, t0, o) {
    o = o || {}; if (lt < t0) return; const size = o.size || 110; const col = o.col || K.red;
    const k = C.prog(lt, t0, 0.18); const sc = lerp(2.4, 1, TM.easeOut(k));
    ctx.save(); ctx.font = C.font(size); const w = ctx.measureText(str).width + size * 0.8, h = size * 1.35; ctx.restore();
    ctx.save(); ctx.globalAlpha = clamp(k * 2, 0, 1);
    C.at(ctx, x, y, sc, (c) => {
      c.strokeStyle = col; c.lineWidth = size * 0.1; c.beginPath(); TM.rr(c, -w / 2, -h / 2, w, h, size * 0.15); c.stroke();
      C.text(c, str, 0, size * 0.04, size, col);
    }, o.rot == null ? -0.12 : o.rot);
    ctx.restore();
  };

  /* ---------------- characters ---------------- */
  const POSES = TM.POSES;
  const pa = (q) => !q ? POSES.hang : Array.isArray(q) ? q : typeof q === 'string' ? (POSES[q] || POSES.hang) : TM.poseTween(q.from, q.to, q.u);
  C.POSES = POSES;
  POSES.thumb = [2.05, -1.6]; POSES.shrug = [1.25, -2.1]; POSES.give = [1.35, -0.2]; POSES.pocket = [0.35, -1.0];
  POSES.face = [1.1, -2.6]; POSES.crank = [1.2, -0.9]; POSES.hold2 = [0.85, -1.0]; POSES.fist = [2.7, 0.0];
  function blink(t, seed) { const per = 2.6 + TM.rand(seed) * 1.5; const ph = ((t + seed) % per) / per; return ph > 0.94 ? Math.abs(Math.cos((ph - 0.94) / 0.06 * Math.PI)) : 1; }
  function limb(ctx, pts, w, col) {
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.strokeStyle = K.ink; ctx.lineWidth = w + 7; ctx.beginPath(); ctx.moveTo(pts[0], pts[1]);
    for (let i = 2; i < pts.length; i += 2) ctx.lineTo(pts[i], pts[i + 1]); ctx.stroke();
    if (col) { ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(pts[0], pts[1]); for (let i = 2; i < pts.length; i += 2) ctx.lineTo(pts[i], pts[i + 1]); ctx.stroke(); }
  }
  function face(ctx, cy, R, expr, t, seed, o) {
    const dx = (o.faceDir || 0) * R * 0.16; const eyeY = cy - R * 0.02, eo = R * 0.32;
    const open = blink(t, seed);
    ctx.fillStyle = K.ink; ctx.strokeStyle = K.ink; ctx.lineCap = 'round'; ctx.lineWidth = R * 0.08;
    for (const sx of [-1, 1]) {
      const ex = sx * eo + dx;
      if (expr === 'shocked') {
        TM.shape(ctx, c => c.arc(ex, eyeY, R * 0.17, 0, TAU), K.white, R * 0.06);
        ctx.fillStyle = K.ink; ctx.beginPath(); ctx.arc(ex, eyeY, R * 0.07, 0, TAU); ctx.fill();
      } else if (expr === 'happy') {
        ctx.beginPath(); ctx.arc(ex, eyeY + R * 0.06, R * 0.14, Math.PI * 1.15, Math.PI * 1.85); ctx.stroke();
      } else if (expr === 'sleep') {
        ctx.beginPath(); ctx.arc(ex, eyeY - R * 0.02, R * 0.12, Math.PI * 0.15, Math.PI * 0.85); ctx.stroke();
      } else {
        ctx.beginPath(); ctx.ellipse(ex, eyeY, R * 0.095, R * 0.095 * open, 0, 0, TAU); ctx.fill();
        if (expr === 'smug') { ctx.lineWidth = R * 0.07; ctx.beginPath(); ctx.moveTo(ex - R * 0.13, eyeY - R * 0.05); ctx.lineTo(ex + R * 0.13, eyeY - R * 0.05); ctx.stroke(); ctx.lineWidth = R * 0.08; }
      }
      // brows
      ctx.lineWidth = R * 0.07;
      if (expr === 'angry') { ctx.beginPath(); ctx.moveTo(ex - sx * R * 0.16, eyeY - R * 0.3); ctx.lineTo(ex + sx * R * 0.12, eyeY - R * 0.18); ctx.stroke(); }
      if (expr === 'sad' || expr === 'worried') { ctx.beginPath(); ctx.moveTo(ex - sx * R * 0.16, eyeY - R * 0.2); ctx.lineTo(ex + sx * R * 0.12, eyeY - R * 0.32); ctx.stroke(); }
      if (expr === 'shocked') { ctx.beginPath(); ctx.arc(ex, eyeY - R * 0.2, R * 0.16, Math.PI * 1.2, Math.PI * 1.8); ctx.stroke(); }
      if (expr === 'curious' && sx === 1) { ctx.beginPath(); ctx.arc(ex, eyeY - R * 0.16, R * 0.15, Math.PI * 1.15, Math.PI * 1.85); ctx.stroke(); }
      ctx.lineWidth = R * 0.08;
    }
    const my = cy + R * 0.42;
    const talkOpen = o.talk ? ((Math.floor(t * 8.5 + seed * 3) % 3) !== 0 ? 0.55 + 0.45 * Math.abs(Math.sin(t * 13 + seed)) : 0) : 0;
    ctx.strokeStyle = K.ink; ctx.lineWidth = R * 0.08;
    if (expr === 'shocked' || expr === 'scream') {
      TM.shape(ctx, c => c.ellipse(dx, my, R * 0.15, R * (0.17 + 0.05 * talkOpen), 0, 0, TAU), '#5a2630', R * 0.06);
    } else if (talkOpen > 0.3) {
      TM.shape(ctx, c => c.ellipse(dx, my, R * 0.17, R * 0.13 * talkOpen, 0, 0, TAU), '#5a2630', R * 0.06);
    } else if (expr === 'happy') {
      ctx.beginPath(); ctx.arc(dx, my - R * 0.1, R * 0.22, 0.15 * Math.PI, 0.85 * Math.PI); ctx.stroke();
    } else if (expr === 'smug') {
      ctx.beginPath(); ctx.moveTo(dx - R * 0.16, my); ctx.quadraticCurveTo(dx + R * 0.05, my + R * 0.08, dx + R * 0.2, my - R * 0.1); ctx.stroke();
    } else if (expr === 'sad' || expr === 'worried' || expr === 'angry') {
      ctx.beginPath(); ctx.arc(dx, my + R * 0.16, R * 0.18, 1.2 * Math.PI, 1.8 * Math.PI); ctx.stroke();
    } else if (expr === 'sleep') {
      TM.shape(ctx, c => c.ellipse(dx, my, R * 0.08, R * 0.06, 0, 0, TAU), '#5a2630', R * 0.05);
    } else {
      ctx.beginPath(); ctx.moveTo(dx - R * 0.13, my); ctx.lineTo(dx + R * 0.13, my); ctx.stroke();
    }
    if (o.sweat) {
      const k = (t * 1.3 + seed) % 1;
      TM.shape(ctx, c => { const x = R * 0.95, y = cy - R * 0.4 + k * R * 0.6; c.moveTo(x, y - R * 0.2); c.quadraticCurveTo(x + R * 0.13, y, x, y + R * 0.06); c.quadraticCurveTo(x - R * 0.13, y, x, y - R * 0.2); }, '#8FD3F2', 3);
    }
  }
  function hair(ctx, cy, R, p, back) {
    const hc = (p.hair && p.hair.color) || K.ink; const ht = p.hair ? p.hair.type : 'none';
    if (back) { if (ht === 'long') TM.shape(ctx, c => TM.rr(c, -R * 1.12, cy - R * 0.9, R * 2.24, R * 2.0, R * 0.9), hc, 5); return; }
    if (ht === 'side') {
      TM.shape(ctx, c => c.ellipse(-R * 0.92, cy - R * 0.05, R * 0.24, R * 0.42, 0, 0, TAU), hc, 4);
      TM.shape(ctx, c => c.ellipse(R * 0.92, cy - R * 0.05, R * 0.24, R * 0.42, 0, 0, TAU), hc, 4);
      ctx.strokeStyle = hc; ctx.lineWidth = R * 0.12; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.arc(0, cy, R * 0.9, Math.PI * 1.25, Math.PI * 1.45); ctx.stroke();
    } else if (ht === 'short' || ht === 'long') {
      TM.shape(ctx, c => { c.arc(0, cy, R * 1.04, Math.PI * 1.05, Math.PI * 1.95); c.quadraticCurveTo(R * 0.3, cy - R * 0.45, -R * 0.2, cy - R * 0.55); c.quadraticCurveTo(-R * 0.7, cy - R * 0.45, -R * 1.0, cy - R * 0.15); }, hc, 5);
    } else if (ht === 'spiky') {
      TM.shape(ctx, c => { c.moveTo(-R, cy - R * 0.2); for (let i = 0; i <= 6; i++) { const a = Math.PI * (1.05 + i * 0.15); c.lineTo(Math.cos(a) * R * (i % 2 ? 1.35 : 1.02), cy + Math.sin(a) * R * (i % 2 ? 1.35 : 1.02)); } c.closePath(); }, hc, 5);
    }
    const hat = p.hat;
    if (hat === 'cop') {
      TM.shape(ctx, c => { c.moveTo(-R * 0.95, cy - R * 0.5); c.lineTo(-R * 1.05, cy - R * 1.05); c.lineTo(R * 1.05, cy - R * 1.05); c.lineTo(R * 0.95, cy - R * 0.5); c.closePath(); }, K.navy, 5);
      TM.shape(ctx, c => c.ellipse(R * 0.25, cy - R * 0.45, R * 0.9, R * 0.16, 0, 0, TAU), K.ink, 0);
      TM.shape(ctx, c => c.arc(0, cy - R * 0.78, R * 0.15, 0, TAU), K.gold, 3);
    } else if (hat === 'fedora') {
      TM.shape(ctx, c => c.ellipse(0, cy - R * 0.7, R * 1.45, R * 0.25, 0, 0, TAU), p.hatCol || K.brown, 5);
      TM.shape(ctx, c => { c.moveTo(-R * 0.75, cy - R * 0.72); c.lineTo(-R * 0.6, cy - R * 1.4); c.lineTo(R * 0.6, cy - R * 1.4); c.lineTo(R * 0.75, cy - R * 0.72); c.closePath(); }, p.hatCol || K.brown, 5);
    } else if (hat === 'shades') { /* drawn in glasses */ }
    if (p.glasses) {
      ctx.strokeStyle = K.ink; ctx.lineWidth = R * 0.07;
      const dx = 0; ctx.beginPath(); ctx.arc(-R * 0.32 + dx, cy - R * 0.02, R * 0.22, 0, TAU); ctx.stroke();
      ctx.beginPath(); ctx.arc(R * 0.32 + dx, cy - R * 0.02, R * 0.22, 0, TAU); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-R * 0.1, cy - R * 0.04); ctx.lineTo(R * 0.1, cy - R * 0.04); ctx.stroke();
    }
    if (p.shades) {
      TM.shape(ctx, c => { TM.rr(c, -R * 0.62, cy - R * 0.2, R * 0.52, R * 0.3, R * 0.1); TM.rr(c, R * 0.1, cy - R * 0.2, R * 0.52, R * 0.3, R * 0.1); }, K.ink, 0);
    }
  }
  // p: {x,y,s,seed,body,pants,suit,tie,hair:{type,color},glasses,hat,shades,old}
  // o: {expr,armL,armR,talk,walk,jump,flip,lean,faceDir,sweat,hide:'legs'}
  C.person = function (ctx, p, f, o) {
    o = o || {}; const s = p.s || 1, seed = p.seed || 1, t = f / 30;
    const R = 60 * s, leg = 118 * s, torso = 132 * s, arm = 124 * s, lw = 9 * s;
    const walk = !!o.walk, ph = t * 7.5 + seed;
    const bob = walk ? -Math.abs(Math.sin(ph)) * 9 * s : 0;   // no idle sway (clean look)
    const jump = o.jump ? -Math.abs(Math.sin(t * TAU * 1.5 + seed)) * 36 * s : 0;
    ctx.save(); ctx.translate(p.x, p.y);
    if (!o.noShadow) TM.castShadow(ctx, 0, 4 * s, 70 * s, 13 * s, 0.2);
    ctx.translate(0, bob + jump); if (o.flip) ctx.scale(-1, 1);
    ctx.rotate(o.lean || 0);
    const hipY = -leg, shY = hipY - torso + 18 * s, headCy = hipY - torso - R * 0.78;
    // legs
    if (o.hide !== 'legs') {
      const sw = walk ? Math.sin(ph) * 0.5 : 0.09;
      for (const d of [-1, 1]) {
        const a = walk ? sw * d : 0.09 * d; const hx = d * 16 * s;
        const kx = hx + Math.sin(a) * leg * 0.5, ky = hipY + Math.cos(a) * leg * 0.5;
        const bend = walk ? Math.max(0, Math.sin(ph + (d > 0 ? 0 : Math.PI))) * 0.5 : 0;
        const fx = kx + Math.sin(a - bend) * leg * 0.5, fy = ky + Math.cos(a - bend) * leg * 0.5;
        limb(ctx, [hx, hipY, kx, ky, fx, fy], lw * 1.3, p.pants || K.ink);
        TM.shape(ctx, c => c.ellipse(fx + 10 * s, fy - 2 * s, 20 * s, 10 * s, 0, 0, TAU), K.ink, 0);
      }
    }
    // back arm
    const aL = pa(o.armL), aR = pa(o.armR);
    const gest = o.talk ? Math.sin(t * 5 + seed) * 0.1 : Math.sin(t * 1.4 + seed) * 0.03;
    const armPts = (sx, ang, elb) => { const seg = arm * 0.52; const ex = sx + Math.sin(ang) * seg, ey = shY + Math.cos(ang) * seg; const a2 = ang + elb; return [sx, shY, ex, ey, ex + Math.sin(a2) * seg, ey + Math.cos(a2) * seg]; };
    const lp = armPts(-30 * s, -(aL[0]) - gest * 0.6, -aL[1]);
    limb(ctx, lp, lw * 1.5, p.body || K.blue);
    TM.shape(ctx, c => c.arc(lp[4], lp[5], 11 * s, 0, TAU), K.white, 4);
    // torso
    const tw = 74 * s, bw = 62 * s, top = hipY - torso + 10 * s;
    TM.shape(ctx, c => { c.moveTo(-tw / 2, top + 14 * s); c.quadraticCurveTo(-tw / 2, top, -tw / 2 + 16 * s, top); c.lineTo(tw / 2 - 16 * s, top); c.quadraticCurveTo(tw / 2, top, tw / 2, top + 14 * s); c.lineTo(bw / 2, hipY + 8 * s); c.lineTo(-bw / 2, hipY + 8 * s); c.closePath(); }, p.body || K.blue, 5 * s > 4 ? 5 : 4);
    if (p.suit) {
      TM.shape(ctx, c => { c.moveTo(-14 * s, top); c.lineTo(14 * s, top); c.lineTo(0, top + 46 * s); c.closePath(); }, K.white, 3);
      TM.shape(ctx, c => { c.moveTo(-5 * s, top + 4 * s); c.lineTo(5 * s, top + 4 * s); c.lineTo(8 * s, top + 52 * s); c.lineTo(0, top + 62 * s); c.lineTo(-8 * s, top + 52 * s); c.closePath(); }, p.tie || K.red, 3);
    }
    if (p.emblem) C.text(ctx, p.emblem, 0, top + 55 * s, 44 * s, p.emblemCol || K.white, { stroke: 4, strokeCol: K.ink });
    // front arm
    const rp = armPts(30 * s, aR[0] + gest, aR[1]);
    limb(ctx, rp, lw * 1.5, p.body || K.blue);
    TM.shape(ctx, c => c.arc(rp[4], rp[5], 11 * s, 0, TAU), K.white, 4);
    // head
    hair(ctx, headCy, R, p, true);
    TM.shape(ctx, c => c.arc(0, headCy, R, 0, TAU), K.white, Math.max(4, R * 0.08));
    if (p.old) { ctx.strokeStyle = K.greyDk; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(-R * 0.25, headCy - R * 0.55); ctx.lineTo(R * 0.25, headCy - R * 0.55); ctx.stroke(); }
    face(ctx, headCy, R, o.expr || 'neutral', t, seed, o);
    hair(ctx, headCy, R, p, false);
    ctx.restore();
    const fl = o.flip ? -1 : 1, yy = p.y + bob + jump;
    p._handR = { x: p.x + fl * rp[4], y: yy + rp[5] }; p._handL = { x: p.x + fl * lp[4], y: yy + lp[5] };
    p._head = { x: p.x, y: yy + headCy, r: R };
    return p;
  };
  // floating head only (for crowds / pyramid diagrams)
  C.head = function (ctx, x, y, R, f, seed, expr, col) {
    ctx.save(); ctx.translate(x, y + Math.sin(f / 30 * 3 + seed) * 2);
    if (col) TM.shape(ctx, c => TM.rr(c, -R * 0.75, R * 0.7, R * 1.5, R * 0.9, R * 0.3), col, 4);
    TM.shape(ctx, c => c.arc(0, 0, R, 0, TAU), K.white, Math.max(3, R * 0.08));
    face(ctx, 0, R, expr || 'neutral', f / 30, seed, {}); ctx.restore();
  };

  /* ---------------- props ---------------- */
  C.bill = function (ctx, x, y, s, rot) {
    C.at(ctx, x, y, s, (c) => {
      TM.shape(c, cc => TM.rr(cc, -60, -28, 120, 56, 6), K.money, 4);
      c.strokeStyle = K.moneyDk; c.lineWidth = 3; c.beginPath(); TM.rr(c, -50, -19, 100, 38, 4); c.stroke();
      C.text(c, '$', 0, 2, 40, K.moneyDk);
    }, rot || 0);
  };
  C.stack = function (ctx, x, y, s, n) { // cash bricks piled
    n = n || 1;
    C.at(ctx, x, y, s, (c) => {
      for (let i = 0; i < n; i++) {
        const yy = -i * 26;
        TM.shape(c, cc => TM.rr(cc, -70, yy - 26, 140, 26, 5), K.money, 4);
        TM.shape(c, cc => cc.rect(-12, yy - 26, 24, 26), K.cream, 3);
      }
    });
  };
  C.pile = function (ctx, x, y, s, n, sc) { // pyramid of bricks; n rows, sc 0..1 grows the count
    const rows = n || 4; let k = 0; const total = rows * (rows + 1) / 2; const show = Math.round(total * (sc == null ? 1 : sc));
    C.at(ctx, x, y, s, (c) => {
      for (let r = 0; r < rows; r++) for (let i = 0; i < rows - r; i++) {
        if (k++ >= show) return;
        const xx = (i - (rows - r - 1) / 2) * 144, yy = -r * 28;
        TM.shape(c, cc => TM.rr(cc, xx - 70, yy - 28, 140, 28, 5), K.money, 4);
        TM.shape(c, cc => cc.rect(xx - 12, yy - 28, 24, 28), K.cream, 3);
      }
    });
  };
  C.bag = function (ctx, x, y, s) {
    C.at(ctx, x, y, s, (c) => {
      TM.shape(c, cc => { cc.moveTo(-30, -95); cc.lineTo(30, -95); cc.lineTo(18, -70); cc.bezierCurveTo(95, -40, 85, 0, 60, 0); cc.lineTo(-60, 0); cc.bezierCurveTo(-85, 0, -95, -40, -18, -70); cc.closePath(); }, '#C9A46A', 5);
      c.strokeStyle = K.ink; c.lineWidth = 6; c.beginPath(); c.moveTo(-22, -74); c.lineTo(22, -74); c.stroke();
      C.text(c, '$', 0, -34, 54, K.moneyDk);
    });
  };
  C.arcPos = function (x0, y0, x1, y1, u, h) { u = clamp(u, 0, 1); return { x: lerp(x0, x1, u), y: lerp(y0, y1, u) - Math.sin(u * Math.PI) * (h == null ? 120 : h) }; };
  // a stream of bills flying x0,y0 -> x1,y1 during [t0, t0+dur], `n` bills, period `gap`
  C.billStream = function (ctx, lt, t0, dur, x0, y0, x1, y1, o) {
    o = o || {}; const gap = o.gap || 0.22, fly = o.fly || 0.7, s = o.s || 0.7;
    for (let k = 0; k * gap < dur; k++) {
      const st = t0 + k * gap; const u = (lt - st) / fly; if (u < 0 || u > 1) continue;
      const pnt = C.arcPos(x0, y0, x1, y1, TM.smooth(u), o.h);
      C.bill(ctx, pnt.x, pnt.y, s, Math.sin(u * 6 + k) * 0.5);
    }
  };
  C.building = function (ctx, x, y, w, h, col, o) { // y = base
    o = o || {}; TM.shape(ctx, c => c.rect(x - w / 2, y - h, w, h), col, 5);
    const cols = Math.max(2, Math.floor(w / 46)), rows = Math.max(2, Math.floor(h / 60));
    const ww = w / cols * 0.5, wh = 26;
    for (let r = 0; r < rows - 1; r++) for (let i = 0; i < cols; i++) {
      const lit = o.lit ? (TM.rand(r * 13 + i * 7 + (o.seed || 0)) > 0.45) : false;
      const wx = x - w / 2 + (i + 0.25) * (w / cols), wy = y - h + 24 + r * 60;
      TM.shape(ctx, c => c.rect(wx, wy, ww, wh), lit ? K.yellow : (o.win || '#BFD3E0'), 3);
    }
    if (o.top) TM.shape(ctx, c => c.rect(x - w / 2, y - h, w, 70), o.top, 5);
  };
  C.bank = function (ctx, x, y, s, label, col) {
    C.at(ctx, x, y, s, (c) => {
      const fill = col || K.cream;
      TM.shape(c, cc => cc.rect(-230, -40, 460, 40), fill, 5);
      for (let i = 0; i < 5; i++) TM.shape(c, cc => cc.rect(-195 + i * 90, -300, 44, 260), fill, 5);
      TM.shape(c, cc => cc.rect(-215, -340, 430, 40), fill, 5);
      TM.shape(c, cc => { cc.moveTo(-250, -340); cc.lineTo(0, -470); cc.lineTo(250, -340); cc.closePath(); }, fill, 5);
      if (label) C.text(c, label, 0, -385, 50, K.ink);
    });
  };
  // line chart. pts normalized [[x,y]...] (0..1, y up). u = draw progress. o:{col,lw,axes,dot,grid}
  C.chart = function (ctx, x, y, w, h, pts, u, o) {
    o = o || {};
    if (o.axes !== false) {
      ctx.strokeStyle = o.axisCol || K.ink; ctx.lineWidth = 6; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(x, y - 10); ctx.lineTo(x, y + h); ctx.lineTo(x + w + 10, y + h); ctx.stroke();
    }
    const n = pts.length; const segF = clamp(u, 0, 1) * (n - 1); const last = Math.floor(segF);
    const P = (q) => [x + q[0] * w, y + h - q[1] * h];
    ctx.strokeStyle = o.col || K.red; ctx.lineWidth = o.lw || 10; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    ctx.beginPath(); let p0 = P(pts[0]); ctx.moveTo(p0[0], p0[1]);
    let head = p0;
    for (let i = 1; i <= last && i < n; i++) { head = P(pts[i]); ctx.lineTo(head[0], head[1]); }
    if (last < n - 1) { const a = P(pts[last]), b = P(pts[last + 1]), k = segF - last; head = [lerp(a[0], b[0], k), lerp(a[1], b[1], k)]; ctx.lineTo(head[0], head[1]); }
    ctx.stroke();
    if (o.dot !== false && u > 0) TM.shape(ctx, c => c.arc(head[0], head[1], (o.lw || 10) * 1.1, 0, TAU), o.col || K.red, 4);
    return { x: head[0], y: head[1] };
  };
  C.arrow = function (ctx, x1, y1, x2, y2, u, col, w) {
    u = clamp(u == null ? 1 : u, 0, 1); if (u <= 0) return; w = w || 12;
    const x = lerp(x1, x2, u), y = lerp(y1, y2, u), a = Math.atan2(y2 - y1, x2 - x1);
    ctx.strokeStyle = K.ink; ctx.lineCap = 'round'; ctx.lineWidth = w + 7; ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x, y); ctx.stroke();
    ctx.strokeStyle = col || K.yellow; ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x, y); ctx.stroke();
    TM.shape(ctx, c => { c.moveTo(x + Math.cos(a) * w * 2.2, y + Math.sin(a) * w * 2.2); c.lineTo(x + Math.cos(a + 2.4) * w * 2.4, y + Math.sin(a + 2.4) * w * 2.4); c.lineTo(x + Math.cos(a - 2.4) * w * 2.4, y + Math.sin(a - 2.4) * w * 2.4); c.closePath(); }, col || K.yellow, 5);
  };
  C.xmark = function (ctx, x, y, size, lt, t0) {
    const sc = lt == null ? 1 : C.pop(lt, t0, 0.2);
    C.at(ctx, x, y, sc, (c) => { for (const d of [1, -1]) { c.lineCap = 'round'; c.strokeStyle = K.ink; c.lineWidth = size * 0.26; c.beginPath(); c.moveTo(-size / 2, -d * size / 2); c.lineTo(size / 2, d * size / 2); c.stroke(); c.strokeStyle = K.red; c.lineWidth = size * 0.17; c.beginPath(); c.moveTo(-size / 2, -d * size / 2); c.lineTo(size / 2, d * size / 2); c.stroke(); } });
  };
  C.check = function (ctx, x, y, size, lt, t0) {
    const sc = lt == null ? 1 : C.pop(lt, t0, 0.2);
    C.at(ctx, x, y, sc, (c) => { for (const [w, col] of [[size * 0.26, K.ink], [size * 0.17, K.green]]) { c.lineCap = 'round'; c.lineJoin = 'round'; c.strokeStyle = col; c.lineWidth = w; c.beginPath(); c.moveTo(-size / 2, 0); c.lineTo(-size * 0.12, size * 0.38); c.lineTo(size / 2, -size * 0.4); c.stroke(); } });
  };
  C.box = function (ctx, x, y, w, h, label, fill, fillLevel) { // account/vault box, y = base
    TM.shape(ctx, c => TM.rr(c, x - w / 2, y - h, w, h, 14), fill || K.greyDk, 6);
    if (fillLevel != null) { const fh = (h - 30) * clamp(fillLevel, 0, 1); ctx.save(); ctx.beginPath(); TM.rr(ctx, x - w / 2 + 15, y - h + 15, w - 30, h - 30, 8); ctx.clip(); ctx.fillStyle = K.money; ctx.fillRect(x - w / 2, y - 15 - fh, w, fh); ctx.restore(); ctx.strokeStyle = K.ink; ctx.lineWidth = 4; ctx.beginPath(); TM.rr(ctx, x - w / 2 + 15, y - h + 15, w - 30, h - 30, 8); ctx.stroke(); }
    if (label) C.panel(ctx, label, x, y - h - 40, 1, 0, { size: 40, bg: K.black });
  };
  C.gear = function (ctx, x, y, r, rot, col, teeth) {
    teeth = teeth || 10; ctx.save(); ctx.translate(x, y); ctx.rotate(rot);
    TM.shape(ctx, c => { for (let i = 0; i < teeth * 2; i++) { const a0 = i / (teeth * 2) * TAU, a1 = (i + 1) / (teeth * 2) * TAU, rr = i % 2 ? r : r * 1.2; c.lineTo(Math.cos(a0) * rr, Math.sin(a0) * rr); c.lineTo(Math.cos(a1) * rr, Math.sin(a1) * rr); } c.closePath(); }, col || K.yellow, 5);
    TM.shape(ctx, c => c.arc(0, 0, r * 0.32, 0, TAU), K.ink, 0); ctx.restore();
  };
  C.desk = function (ctx, x, y, w, col) { // y = floor
    TM.shape(ctx, c => c.rect(x - w / 2 + 20, y - 150, 16, 150), K.ink, 0);
    TM.shape(ctx, c => c.rect(x + w / 2 - 36, y - 150, 16, 150), K.ink, 0);
    TM.shape(ctx, c => TM.rr(c, x - w / 2, y - 175, w, 30, 6), col || K.brown, 5);
  };
  C.calendar = function (ctx, x, y, s, top, big, col) {
    C.at(ctx, x, y, s, (c) => {
      TM.shape(c, cc => TM.rr(cc, -110, -120, 220, 240, 14), K.white, 5);
      TM.shape(c, cc => { cc.moveTo(-110, -60); cc.lineTo(-110, -106); cc.arcTo(-110, -120, -96, -120, 14); cc.lineTo(96, -120); cc.arcTo(110, -120, 110, -106, 14); cc.lineTo(110, -60); cc.closePath(); }, col || K.red, 5);
      C.text(c, top, 0, -90, 40, K.white);
      C.text(c, big, 0, 30, 92, K.ink);
    });
  };
  C.handcuffs = function (ctx, x, y, s, close) {
    C.at(ctx, x, y, s, (c) => {
      const gap = lerp(260, 120, TM.easeOut(clamp(close, 0, 1)));
      for (const d of [-1, 1]) { c.strokeStyle = K.ink; c.lineWidth = 30; c.beginPath(); c.arc(d * gap / 2 + d * 70, 0, 70, 0, TAU); c.stroke(); c.strokeStyle = '#C8CDD2'; c.lineWidth = 20; c.beginPath(); c.arc(d * gap / 2 + d * 70, 0, 70, 0, TAU); c.stroke(); }
      for (let i = -2; i <= 2; i++) TM.shape(c, cc => cc.ellipse(i * gap / 6, 0, gap / 12 + 4, 10, 0, 0, TAU), '#C8CDD2', 4);
    });
  };
  C.bars = function (ctx, x, y, w, h, n) {
    n = n || 7; TM.shape(ctx, c => c.rect(x - w / 2, y - h, w, 26), K.greyDk, 5); TM.shape(ctx, c => c.rect(x - w / 2, y - 26, w, 26), K.greyDk, 5);
    for (let i = 0; i < n; i++) { const bx = x - w / 2 + (i + 0.5) * w / n; TM.shape(ctx, c => c.rect(bx - 9, y - h + 26, 18, h - 52), '#A9B0B6', 4); }
  };
  C.water = function (ctx, y, t, col) {
    ctx.fillStyle = col || '#3E7CA8'; ctx.beginPath(); ctx.moveTo(-6000, H + 3000);
    for (let x = -6000; x <= W + 6000; x += 40) ctx.lineTo(x, y + Math.sin(x * 0.012 + t * 2.2) * 8);
    ctx.lineTo(W + 6000, H + 3000); ctx.closePath(); ctx.fill(); ctx.strokeStyle = K.ink; ctx.lineWidth = 5; ctx.stroke();
  };
  C.yacht = function (ctx, x, y, s, t) {
    C.at(ctx, x, y + Math.sin(t * 2) * 6, s, (c) => {
      TM.shape(c, cc => { cc.moveTo(-300, -60); cc.lineTo(320, -60); cc.lineTo(240, 30); cc.lineTo(-260, 30); cc.closePath(); }, K.white, 6);
      TM.shape(c, cc => cc.rect(-300, -20, 600, 14), K.blue, 0);
      TM.shape(c, cc => { cc.moveTo(-180, -60); cc.lineTo(-150, -140); cc.lineTo(150, -140); cc.lineTo(200, -60); cc.closePath(); }, K.white, 6);
      TM.shape(c, cc => { cc.moveTo(-100, -140); cc.lineTo(-80, -200); cc.lineTo(90, -200); cc.lineTo(110, -140); cc.closePath(); }, K.white, 6);
      for (let i = 0; i < 4; i++) TM.shape(c, cc => TM.rr(cc, -130 + i * 72, -122, 50, 34, 8), '#8FD3F2', 4);
    }, Math.sin(t * 1.6) * 0.02);
  };
  C.magnifier = function (ctx, x, y, s, rot) {
    C.at(ctx, x, y, s, (c) => {
      c.strokeStyle = K.ink; c.lineCap = 'round'; c.lineWidth = 34; c.beginPath(); c.moveTo(70, 70); c.lineTo(170, 170); c.stroke();
      c.strokeStyle = K.brown; c.lineWidth = 22; c.beginPath(); c.moveTo(80, 80); c.lineTo(165, 165); c.stroke();
      c.save(); c.globalAlpha = 0.35; c.fillStyle = '#CFEFFF'; c.beginPath(); c.arc(0, 0, 95, 0, TAU); c.fill(); c.restore();
      c.strokeStyle = K.ink; c.lineWidth = 22; c.beginPath(); c.arc(0, 0, 95, 0, TAU); c.stroke();
      c.strokeStyle = '#C8CDD2'; c.lineWidth = 12; c.beginPath(); c.arc(0, 0, 95, 0, TAU); c.stroke();
    }, rot || 0);
  };
  C.clock = function (ctx, x, y, r, ang) {
    TM.shape(ctx, c => c.arc(x, y, r, 0, TAU), K.white, 7);
    for (let i = 0; i < 12; i++) { const a = i / 12 * TAU; ctx.strokeStyle = K.ink; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(x + Math.cos(a) * r * 0.8, y + Math.sin(a) * r * 0.8); ctx.lineTo(x + Math.cos(a) * r * 0.92, y + Math.sin(a) * r * 0.92); ctx.stroke(); }
    ctx.lineCap = 'round'; ctx.lineWidth = 9; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.sin(ang / 12) * r * 0.5, y - Math.cos(ang / 12) * r * 0.5); ctx.stroke();
    ctx.lineWidth = 6; ctx.strokeStyle = K.red; ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.sin(ang) * r * 0.75, y - Math.cos(ang) * r * 0.75); ctx.stroke();
    TM.shape(ctx, c => c.arc(x, y, 10, 0, TAU), K.ink, 0);
  };
  C.star = function (ctx, x, y, r, col, rot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(rot || 0);
    TM.shape(ctx, c => { for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.45 : r; c.lineTo(Math.cos(a) * rr, Math.sin(a) * rr); } c.closePath(); }, col || K.yellow, 5); ctx.restore();
  };
  C.heart = function (ctx, x, y, s, col) {
    C.at(ctx, x, y, s, (c) => TM.shape(c, cc => { cc.moveTo(0, 30); cc.bezierCurveTo(-70, -20, -40, -70, 0, -38); cc.bezierCurveTo(40, -70, 70, -20, 0, 30); }, col || K.red, 5));
  };
  C.sparkle = function (ctx, x, y, r, t) {
    const k = 0.6 + 0.4 * Math.abs(Math.sin(t * 5 + x)); ctx.save(); ctx.translate(x, y); ctx.scale(k, k);
    TM.shape(ctx, c => { c.moveTo(0, -r); c.quadraticCurveTo(0, 0, r, 0); c.quadraticCurveTo(0, 0, 0, r); c.quadraticCurveTo(0, 0, -r, 0); c.quadraticCurveTo(0, 0, 0, -r); }, K.yellow, 3); ctx.restore();
  };
  C.puff = function (ctx, x, y, u, s) {
    if (u <= 0 || u >= 1) return; s = s || 1; ctx.save(); ctx.globalAlpha = 1 - u;
    for (let i = 0; i < 7; i++) { const a = i / 7 * TAU; const d = u * 120 * s; TM.shape(ctx, c => c.arc(x + Math.cos(a) * d, y + Math.sin(a) * d * 0.7, (40 + 30 * u) * s, 0, TAU), '#E8E8E8', 4); }
    ctx.restore();
  };
  C.gavel = function (ctx, x, y, s, ang) {
    C.at(ctx, x, y, s, (c) => {
      TM.shape(c, cc => TM.rr(cc, -12, -10, 24, 200, 10), K.brown, 5);
      TM.shape(c, cc => TM.rr(cc, -80, -50, 160, 70, 14), K.brown, 5);
    }, ang || 0);
  };
  C.windowFrame = function (ctx, x, y, w, h, sky) {
    TM.shape(ctx, c => c.rect(x - w / 2, y - h / 2, w, h), sky || '#8FD3F2', 8);
    ctx.strokeStyle = K.ink; ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(x, y - h / 2); ctx.lineTo(x, y + h / 2); ctx.moveTo(x - w / 2, y); ctx.lineTo(x + w / 2, y); ctx.stroke();
  };
  C.door = function (ctx, x, y, w, h, glow, t) { // y = base
    if (glow) { ctx.save(); const g = ctx.createRadialGradient(x, y - h / 2, 10, x, y - h / 2, h * 1.1); g.addColorStop(0, 'rgba(255,230,140,' + (0.65 * glow) + ')'); g.addColorStop(1, 'rgba(255,230,140,0)'); ctx.fillStyle = g; ctx.fillRect(x - h * 1.2, y - h * 1.7, h * 2.4, h * 2.4); ctx.restore(); }
    TM.shape(ctx, c => c.rect(x - w / 2 - 18, y - h - 18, w + 36, h + 18), K.brown, 6);
    TM.shape(ctx, c => c.rect(x - w / 2, y - h, w, h), glow ? '#FFF1B8' : K.ink, 5);
  };
  C.podium = function (ctx, x, y, w, h, col) { TM.shape(ctx, c => { c.moveTo(x - w / 2, y - h); c.lineTo(x + w / 2, y - h); c.lineTo(x + w * 0.4, y); c.lineTo(x - w * 0.4, y); c.closePath(); }, col || K.brown, 6); };
  C.paper = function (ctx, x, y, s, rot, lines) {
    C.at(ctx, x, y, s, (c) => { TM.shape(c, cc => cc.rect(-60, -80, 120, 160), K.white, 4); c.strokeStyle = K.greyDk; c.lineWidth = 5; for (let i = 0; i < (lines || 5); i++) { c.beginPath(); c.moveTo(-40, -50 + i * 24); c.lineTo(40, -50 + i * 24); c.stroke(); } }, rot || 0);
  };
  C.folder = function (ctx, x, y, s, rot, label) {
    C.at(ctx, x, y, s, (c) => { TM.shape(c, cc => { cc.moveTo(-90, -60); cc.lineTo(-30, -60); cc.lineTo(-15, -75); cc.lineTo(40, -75); cc.lineTo(50, -60); cc.lineTo(90, -60); cc.lineTo(90, 60); cc.lineTo(-90, 60); cc.closePath(); }, K.yellow, 5); if (label) C.text(c, label, 0, 0, 34, K.ink); }, rot || 0);
  };
  C.trash = function (ctx, x, y, s) {
    C.at(ctx, x, y, s, (c) => { TM.shape(c, cc => { cc.moveTo(-60, -130); cc.lineTo(60, -130); cc.lineTo(48, 0); cc.lineTo(-48, 0); cc.closePath(); }, K.grey, 5); c.strokeStyle = K.ink; c.lineWidth = 4; for (const xx of [-25, 0, 25]) { c.beginPath(); c.moveTo(xx, -110); c.lineTo(xx * 0.8, -15); c.stroke(); } });
  };
  C.couch = function (ctx, x, y, w, col) {
    TM.shape(ctx, c => TM.rr(c, x - w / 2, y - 190, w, 120, 30), col || K.red, 6);
    TM.shape(ctx, c => TM.rr(c, x - w / 2 - 20, y - 110, w + 40, 80, 24), col || K.red, 6);
    TM.shape(ctx, c => c.rect(x - w / 2, y - 30, 18, 30), K.ink, 0); TM.shape(ctx, c => c.rect(x + w / 2 - 18, y - 30, 18, 30), K.ink, 0);
  };
  C.phone = function (ctx, x, y, s, rot) {
    C.at(ctx, x, y, s, (c) => { TM.shape(c, cc => TM.rr(cc, -26, -48, 52, 96, 10), K.ink, 0); TM.shape(c, cc => TM.rr(cc, -20, -38, 40, 70, 4), '#8FD3F2', 0); }, rot || 0);
  };
  C.flash = function (ctx, x, y, r, u) { if (u <= 0 || u >= 1) return; ctx.save(); ctx.globalAlpha = 1 - u; C.star(ctx, x, y, r * (0.6 + u), K.white); ctx.restore(); };
  C.bar = function (ctx, x, y, w, h, col, label, labCol) { // y = base
    if (h <= 0) return; TM.shape(ctx, c => c.rect(x - w / 2, y - h, w, h), col, 5);
    if (label) C.text(ctx, label, x, y - h - 40, 48, labCol || K.white, { stroke: 7 });
  };
})();
