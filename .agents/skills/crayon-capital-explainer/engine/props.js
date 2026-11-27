/* ============================================================================
 * props.js — animated props for the Timeless Moments style. Every prop takes a
 * 0..1 `p` progress (or frame f) so the shot drives its motion. All props carry
 * volume: panel seams, highlights, cast shadows. Plus particle helpers.
 * ==========================================================================*/
(function () {
  const TM = window.TM; const P = TM.PAL;

  /* ---- particle helpers ---- */
  TM.Particles = {
    steam(ctx, x, y, f, n, spread, col) {
      n = n || 6; spread = spread || 40; col = col || 'rgba(255,255,255,0.5)';
      for (let i = 0; i < n; i++) {
        const t = ((f / 30 * 0.6 + i / n) % 1);
        const px = x + TM.noise(f / 30 + i, i) * spread * 0.4 + Math.sin(i * 2) * spread * 0.3;
        const py = y - t * 120; const r = (6 + t * 18);
        ctx.save(); ctx.globalAlpha = (1 - t) * 0.5; ctx.fillStyle = col;
        ctx.beginPath(); ctx.arc(px, py, r, 0, TM.TAU); ctx.fill(); ctx.restore();
      }
    },
    dust(ctx, x, y, f, n, col) {
      n = n || 8; col = col || 'rgba(140,130,110,0.6)';
      for (let i = 0; i < n; i++) {
        const t = ((f / 30 * 0.9 + i / n) % 1);
        const ang = (i / n) * TM.TAU + TM.rand(i) * 2;
        const d = t * 70; ctx.save(); ctx.globalAlpha = (1 - t) * 0.6; ctx.fillStyle = col;
        ctx.beginPath(); ctx.arc(x + Math.cos(ang) * d, y - Math.abs(Math.sin(ang)) * d * 0.6, 4 + (1 - t) * 4, 0, TM.TAU); ctx.fill(); ctx.restore();
      }
    },
    sparkle(ctx, x, y, f, n, rad, col) {
      n = n || 5; rad = rad || 50; col = col || P.yellow;
      for (let i = 0; i < n; i++) {
        const t = ((f / 30 * 1.3 + i / n) % 1);
        const ang = (i / n) * TM.TAU + f / 30;
        const px = x + Math.cos(ang) * rad * (0.5 + t * 0.5), py = y + Math.sin(ang) * rad * (0.5 + t * 0.5);
        const s = (1 - t) * 10; ctx.save(); ctx.globalAlpha = 1 - t; ctx.fillStyle = col;
        ctx.translate(px, py); ctx.rotate(f / 10 + i);
        ctx.beginPath(); for (let k = 0; k < 4; k++) { const a = k / 4 * TM.TAU; ctx.lineTo(Math.cos(a) * s, Math.sin(a) * s); ctx.lineTo(Math.cos(a + 0.4) * s * 0.35, Math.sin(a + 0.4) * s * 0.35); } ctx.closePath(); ctx.fill(); ctx.restore();
      }
    },
    debris(ctx, x, y, f, n) {
      n = n || 10; for (let i = 0; i < n; i++) {
        const t = ((f / 30 + i / n) % 1); const ang = TM.rand(i) * TM.TAU;
        ctx.save(); ctx.globalAlpha = 1 - t; ctx.fillStyle = i % 2 ? P.choco : P.chocoLt;
        ctx.translate(x + Math.cos(ang) * t * 90, y - Math.sin(ang) * t * 90 + t * t * 60); ctx.rotate(f / 6 + i);
        ctx.fillRect(-5, -5, 10, 10); ctx.restore();
      }
    }
  };

  /* ---- a single chocolate bar (generic, no branding) ---- */
  TM.Props = {};
  TM.Props.chocoBar = function (ctx, x, y, w, h, col) {
    col = col || P.choco;
    TM.castShadow(ctx, x, y + h * 0.5 + 6, w * 0.6, 10, 0.18);
    TM.shape(ctx, c => TM.rr(c, x - w / 2, y - h / 2, w, h, 6), col, 4);
    // squares
    ctx.save(); ctx.beginPath(); TM.rr(ctx, x - w / 2, y - h / 2, w, h, 6); ctx.clip();
    ctx.strokeStyle = 'rgba(0,0,0,0.35)'; ctx.lineWidth = 2;
    for (let i = 1; i < 3; i++) { ctx.beginPath(); ctx.moveTo(x - w / 2 + i * w / 3, y - h / 2); ctx.lineTo(x - w / 2 + i * w / 3, y + h / 2); ctx.stroke(); }
    for (let j = 1; j < 4; j++) { ctx.beginPath(); ctx.moveTo(x - w / 2, y - h / 2 + j * h / 4); ctx.lineTo(x + w / 2, y - h / 2 + j * h / 4); ctx.stroke(); }
    ctx.restore();
    TM.streak(ctx, c => TM.rr(c, x - w / 2 + 4, y - h / 2 + 4, w * 0.3, h * 0.18, 3), 0.25);
  };

  /* ---- generic kids-meal carton (NO real brand marks). A small boxy carton
   *      with a folded-tab handle and a simple smiley; `wink` opens the lid. ---- */
  TM.Props.mealBox = function (ctx, x, y, s, f, wink) {
    s = s || 1; wink = wink || 0;
    const w = 150 * s, h = 150 * s, dp = 44 * s;       // front face + depth
    const bob = Math.sin((f || 0) / 30 * TM.TAU * 0.5) * 3 * s;
    y += bob;
    TM.castShadow(ctx, x, y + h * 0.5 + 10 * s, w * 0.6, 12 * s, 0.2);
    const box = '#E8322A', side = '#B81E18', accent = '#F5C518';
    // side face (depth)
    TM.shape(ctx, c => { c.moveTo(x + w / 2, y - h / 2); c.lineTo(x + w / 2 + dp, y - h / 2 - dp * 0.5); c.lineTo(x + w / 2 + dp, y + h / 2 - dp * 0.5); c.lineTo(x + w / 2, y + h / 2); }, side, 4);
    // top face
    TM.shape(ctx, c => { c.moveTo(x - w / 2, y - h / 2); c.lineTo(x - w / 2 + dp, y - h / 2 - dp * 0.5); c.lineTo(x + w / 2 + dp, y - h / 2 - dp * 0.5); c.lineTo(x + w / 2, y - h / 2); }, '#C9271F', 4);
    // front face
    TM.shape(ctx, c => TM.rr(c, x - w / 2, y - h / 2, w, h, 8 * s), box, 4);
    // folded-tab handle on top
    TM.shape(ctx, c => { c.moveTo(x - w * 0.18, y - h / 2); c.quadraticCurveTo(x, y - h / 2 - 34 * s - wink * 26 * s, x + w * 0.18, y - h / 2); }, 'rgba(0,0,0,0)', 5, side);
    ctx.save(); ctx.strokeStyle = side; ctx.lineWidth = 7 * s; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(x - w * 0.16, y - h / 2); ctx.quadraticCurveTo(x, y - h / 2 - 32 * s - wink * 24 * s, x + w * 0.16, y - h / 2); ctx.stroke(); ctx.restore();
    // simple yellow smiley on the front (generic — not a trademark)
    ctx.strokeStyle = accent; ctx.lineWidth = 9 * s; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.arc(x - w * 0.16, y - h * 0.08, 7 * s, 0, TM.TAU); ctx.fillStyle = accent; ctx.fill();
    ctx.beginPath(); ctx.arc(x + w * 0.16, y - h * 0.08, 7 * s, 0, TM.TAU); ctx.fill();
    ctx.beginPath(); ctx.arc(x, y + h * 0.06, w * 0.26, 0.12 * Math.PI, 0.88 * Math.PI); ctx.stroke();
    TM.streak(ctx, c => TM.rr(c, x - w / 2 + 8 * s, y - h / 2 + 8 * s, w * 0.28, h * 0.16, 4), 0.22);
  };

  /* ---- mixing bowl with falling chocolate chunks + stirring spoon ---- */
  // p: 0..1 where chunks fall in over first half, spoon stirs throughout
  TM.Props.bowlMixing = function (ctx, x, y, s, f, p) {
    s = s || 1;
    const bw = 230 * s, bh = 150 * s;
    TM.castShadow(ctx, x, y + bh * 0.5 + 10 * s, bw * 0.55, 18 * s, 0.2);
    // batter inside (draw before bowl front rim)
    // bowl back
    TM.shape(ctx, c => { c.ellipse(x, y - bh * 0.5, bw * 0.5, bh * 0.22, 0, Math.PI, 0); }, P.cream, 4);
    // falling chunks
    for (let i = 0; i < 5; i++) {
      const lt = TM.clamp(p * 1.6 - i * 0.12, 0, 1);
      if (lt <= 0 || lt >= 1) continue;
      const cx = x - bw * 0.2 + i * bw * 0.1;
      const cy = (y - bh * 1.7) + lt * (bh * 1.15);
      ctx.save(); ctx.translate(cx, cy); ctx.rotate((f / 10 + i));
      TM.shape(ctx, c => TM.rr(c, -11 * s, -11 * s, 22 * s, 22 * s, 4), i % 2 ? P.choco : P.chocoLt, 3);
      ctx.restore();
    }
    // bowl body
    TM.shape(ctx, c => { c.moveTo(x - bw * 0.5, y - bh * 0.5); c.quadraticCurveTo(x, y + bh * 0.9, x + bw * 0.5, y - bh * 0.5); }, P.white, 5);
    // batter surface with embedded chunks + stir swirl
    ctx.save(); ctx.beginPath(); c2(ctx, x, y, bw, bh); ctx.clip();
    ctx.fillStyle = P.cream; ctx.fillRect(x - bw, y - bh, bw * 2, bh * 2);
    ctx.strokeStyle = 'rgba(120,80,40,0.35)'; ctx.lineWidth = 6 * s;
    const sw = f / 30 * 4;
    ctx.beginPath(); for (let a = 0; a < Math.PI * 4; a += 0.3) { const rr = 10 * s + a * 7 * s; ctx.lineTo(x + Math.cos(a + sw) * rr, y - bh * 0.42 + Math.sin(a + sw) * rr * 0.35); } ctx.stroke();
    // embedded chunks
    const settled = Math.floor(TM.clamp(p * 1.6, 0, 1) * 5);
    for (let i = 0; i < settled; i++) { const cx = x - bw * 0.25 + i * bw * 0.12; TM.shape(ctx, c => TM.rr(c, cx - 8 * s, y - bh * 0.42 - 6 * s, 16 * s, 12 * s, 3), i % 2 ? P.choco : P.chocoLt, 2); }
    ctx.restore();
    function c2(c, x, y, bw, bh) { c.moveTo(x - bw * 0.5, y - bh * 0.5); c.quadraticCurveTo(x, y + bh * 0.9, x + bw * 0.5, y - bh * 0.5); c.lineTo(x - bw * 0.5, y - bh * 0.5); }
    // rim
    TM.shape(ctx, c => c.ellipse(x, y - bh * 0.5, bw * 0.5, bh * 0.22, 0, 0, TM.TAU), null, 5);
    // spoon stirring
    const sa = Math.sin(f / 30 * 5) * 0.5;
    ctx.save(); ctx.translate(x, y - bh * 0.42); ctx.rotate(sa);
    ctx.strokeStyle = P.ink; ctx.lineWidth = 12 * s; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(bw * 0.18, -bh * 1.3); ctx.stroke();
    ctx.strokeStyle = '#b8863f'; ctx.lineWidth = 8 * s; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(bw * 0.18, -bh * 1.3); ctx.stroke();
    TM.shape(ctx, c => c.ellipse(0, 0, 20 * s, 12 * s, 0, 0, TM.TAU), '#c89450', 3);
    ctx.restore();
  };

  /* ---- plate of cookies; p:0..1 empties the plate; a hand swoops in to grab ---- */
  TM.Props.cookiePlate = function (ctx, x, y, s, f, p) {
    s = s || 1; const pw = 260 * s;
    TM.castShadow(ctx, x, y + 12 * s, pw * 0.52, 16 * s, 0.2);
    TM.shape(ctx, c => c.ellipse(x, y, pw * 0.5, pw * 0.16, 0, 0, TM.TAU), '#dfe7ee', 5);
    TM.shape(ctx, c => c.ellipse(x, y - 4 * s, pw * 0.4, pw * 0.11, 0, 0, TM.TAU), '#eef3f7', 3);
    const total = 6; const left = Math.round(total * (1 - p));
    const positions = [[-0.28, -0.02], [0.0, -0.05], [0.28, -0.02], [-0.15, 0.04], [0.15, 0.04], [0.0, 0.06]];
    for (let i = 0; i < left; i++) {
      const cx = x + positions[i][0] * pw, cy = y + positions[i][1] * pw - 14 * s;
      TM.Props.cookie(ctx, cx, cy, 34 * s);
    }
    // a grabbing hand sweeps down to the next cookie, timed on p
    const grabCycle = (p * total) % 1;
    if (left < total && left >= 0) {
      const gx = x + (positions[Math.min(left, total - 1)][0]) * pw;
      const gy = y - 220 * s + grabCycle * 200 * s;
      ctx.save(); ctx.globalAlpha = 0.95;
      ctx.strokeStyle = P.ink; ctx.lineWidth = 16 * s; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(gx + 60 * s, gy - 120 * s); ctx.lineTo(gx, gy); ctx.stroke();
      ctx.strokeStyle = P.yellow; ctx.lineWidth = 11 * s; ctx.beginPath(); ctx.moveTo(gx + 60 * s, gy - 120 * s); ctx.lineTo(gx, gy); ctx.stroke();
      TM.shape(ctx, c => c.arc(gx, gy, 20 * s, 0, TM.TAU), P.white, 3);
      ctx.restore();
    }
  };
  TM.Props.cookie = function (ctx, x, y, r) {
    TM.castShadow(ctx, x, y + r * 0.5, r * 0.9, r * 0.3, 0.16);
    TM.shape(ctx, c => c.arc(x, y, r, 0, TM.TAU), '#C98A4B', 4);
    TM.shape(ctx, c => c.arc(x, y, r, 0, TM.TAU), null, 0);
    ctx.fillStyle = P.choco;
    const chips = [[-.3, -.2], [.3, -.1], [0, .25], [-.2, .3], [.35, .3], [-.4, .05], [.1, -.35]];
    for (const [a, b] of chips) { ctx.beginPath(); ctx.arc(x + a * r, y + b * r, r * 0.13, 0, TM.TAU); ctx.fill(); }
    TM.streak(ctx, c => c.ellipse(x - r * 0.3, y - r * 0.35, r * 0.25, r * 0.14, -0.5, 0, TM.TAU), 0.3);
  };

  /* ---- rising chart: a line spikes up + bars grow; p:0..1 ---- */
  TM.Props.chartSpike = function (ctx, x, y, w, h, f, p) {
    // frame
    TM.shape(ctx, c => TM.rr(c, x, y - h, w, h, 10), '#F4F7FA', 5);
    ctx.save(); ctx.translate(x, y); ctx.beginPath(); ctx.rect(0, -h, w, h); ctx.clip();
    // grid
    ctx.strokeStyle = 'rgba(0,0,0,0.08)'; ctx.lineWidth = 2;
    for (let i = 1; i < 5; i++) { ctx.beginPath(); ctx.moveTo(0, -i * h / 5); ctx.lineTo(w, -i * h / 5); ctx.stroke(); }
    // bars grow
    const nb = 6; for (let i = 0; i < nb; i++) {
      const target = Math.pow((i + 1) / nb, 1.8);
      const bh = h * 0.86 * target * TM.clamp(p * 1.3 - i * 0.05, 0, 1);
      TM.shape(ctx, c => TM.rr(c, 14 + i * (w - 28) / nb, -bh, (w - 28) / nb - 10, bh, 4), i >= nb - 2 ? P.red : P.cyan, 3);
    }
    // spiking line
    ctx.strokeStyle = P.red; ctx.lineWidth = 7; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    ctx.beginPath();
    const pts = 40; const prog = TM.clamp(p, 0, 1);
    for (let i = 0; i <= pts * prog; i++) {
      const u = i / pts; const yy = -h * (0.1 + Math.pow(u, 2.3) * 0.8) - Math.sin(u * 20) * 4;
      const xx = 14 + u * (w - 28); if (i === 0) ctx.moveTo(xx, yy); else ctx.lineTo(xx, yy);
    }
    ctx.stroke();
    // moving head dot
    const hu = prog; const hx = 14 + hu * (w - 28), hy = -h * (0.1 + Math.pow(hu, 2.3) * 0.8);
    TM.shape(ctx, c => c.arc(hx, hy, 9, 0, TM.TAU), P.yellow, 3);
    ctx.restore();
    // up-arrow when near full
    if (p > 0.6) TM.Particles.sparkle(ctx, x + w * 0.8, y - h * 0.85, f, 4, 30);
  };

  /* ---- dollar bill sliding across a table; p:0..1 slides left->right ---- */
  TM.Props.dollarSlide = function (ctx, x0, x1, y, s, f, p) {
    s = s || 1; const u = TM.easeOut(p);
    const x = TM.lerp(x0, x1, u); const bw = 150 * s, bh = 66 * s;
    TM.castShadow(ctx, x, y + bh * 0.5 + 6 * s, bw * 0.55, 10 * s, 0.18);
    ctx.save(); ctx.translate(x, y); ctx.rotate(Math.sin(f / 30 * 3) * 0.03);
    TM.shape(ctx, c => TM.rr(c, -bw / 2, -bh / 2, bw, bh, 6), '#9BC6A0', 3);
    TM.shape(ctx, c => c.arc(0, 0, bh * 0.3, 0, TM.TAU), '#C7E0CB', 2);
    ctx.fillStyle = '#3c6b43'; ctx.font = `bold ${26 * s}px Georgia`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('$1', 0, 0);
    ctx.strokeStyle = '#3c6b43'; ctx.lineWidth = 2; ctx.strokeRect(-bw / 2 + 8 * s, -bh / 2 + 7 * s, bw - 16 * s, bh - 14 * s);
    ctx.restore();
    // motion lines behind
    ctx.save(); ctx.globalAlpha = 0.3 * (1 - Math.abs(0.5 - p) * 2 + 0.5); ctx.strokeStyle = '#fff'; ctx.lineWidth = 3 * s;
    for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.moveTo(x - bw * 0.6 - i * 24 * s, y - 10 * s + i * 10 * s); ctx.lineTo(x - bw * 0.9 - i * 24 * s, y - 10 * s + i * 10 * s); ctx.stroke(); }
    ctx.restore();
  };

  /* ---- factory conveyor: belt scrolls, chocolate bars ride along; f drives ---- */
  TM.Props.conveyor = function (ctx, x, y, w, s, f) {
    s = s || 1; const bh = 46 * s;
    TM.shape(ctx, c => TM.rr(c, x, y, w, bh, 8), '#3a3a4a', 4);
    // rollers (spin)
    const rn = Math.floor(w / (46 * s));
    for (let i = 0; i <= rn; i++) {
      const rx = x + i * (w / rn); ctx.save(); ctx.translate(rx, y + bh * 0.5); ctx.rotate(f / 30 * 6);
      TM.shape(ctx, c => c.arc(0, 0, bh * 0.4, 0, TM.TAU), '#5a5a6a', 2);
      ctx.strokeStyle = '#2a2a38'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(-bh * 0.4, 0); ctx.lineTo(bh * 0.4, 0); ctx.stroke(); ctx.restore();
    }
    // belt scroll marks
    ctx.save(); ctx.beginPath(); TM.rr(ctx, x, y, w, bh, 8); ctx.clip();
    ctx.strokeStyle = 'rgba(255,255,255,0.12)'; ctx.lineWidth = 4;
    const off = (f / 30 * 140 * s) % (40 * s);
    for (let i = -1; i * 40 * s < w + 40 * s; i++) { const lx = x + i * 40 * s + off; ctx.beginPath(); ctx.moveTo(lx, y); ctx.lineTo(lx + 14 * s, y + bh); ctx.stroke(); }
    ctx.restore();
    // bars riding (move right, wrap)
    const spacing = 150 * s; const speed = 140 * s;
    const n = Math.ceil(w / spacing) + 2;
    for (let i = 0; i < n; i++) {
      let bx = x + ((i * spacing + (f / 30 * speed)) % (w + spacing)) - spacing * 0.5;
      const bob = Math.sin((bx) / 40 + f / 10) * 2 * s;
      TM.Props.chocoBar(ctx, bx, y - 26 * s + bob, 90 * s, 44 * s);
    }
  };

  /* ---- framed dollar on a wall; subtle gleam sweeps across ---- */
  TM.Props.framedDollar = function (ctx, x, y, s, f) {
    s = s || 1; const fw = 180 * s, fh = 230 * s;
    TM.castShadow(ctx, x + 10 * s, y + fh * 0.5 + 4 * s, fw * 0.5, 8 * s, 0.12);
    TM.shape(ctx, c => TM.rr(c, x - fw / 2, y - fh / 2, fw, fh, 8), P.yellow, 6); // gold frame
    TM.shape(ctx, c => TM.rr(c, x - fw / 2 + 16 * s, y - fh / 2 + 16 * s, fw - 32 * s, fh - 32 * s, 4), '#fff', 3);
    // the bill
    TM.shape(ctx, c => TM.rr(c, x - fw * 0.32, y - fh * 0.14, fw * 0.64, fh * 0.3, 5), '#9BC6A0', 2);
    TM.shape(ctx, c => c.arc(x, y + fh * 0.01, fh * 0.07, 0, TM.TAU), '#C7E0CB', 2);
    ctx.fillStyle = '#3c6b43'; ctx.font = `bold ${30 * s}px Georgia`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('$1', x, y + fh * 0.01);
    // little plaque
    TM.shape(ctx, c => TM.rr(c, x - 44 * s, y + fh * 0.26, 88 * s, 26 * s, 4), '#caa24a', 2);
    // gleam sweep
    const g = ((f / 30 * 0.4) % 1); ctx.save(); ctx.globalAlpha = 0.5;
    ctx.beginPath(); TM.rr(ctx, x - fw / 2, y - fh / 2, fw, fh, 8); ctx.clip();
    const gx = x - fw + g * fw * 2; const lg = ctx.createLinearGradient(gx - 40, 0, gx + 40, 0);
    lg.addColorStop(0, 'rgba(255,255,255,0)'); lg.addColorStop(0.5, 'rgba(255,255,255,0.6)'); lg.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = lg; ctx.save(); ctx.translate(gx, y); ctx.rotate(0.3); ctx.fillRect(-60, -fh, 120, fh * 2); ctx.restore();
    ctx.restore();
  };

  /* ---- generic building / signage (NO real brand). label is caller-supplied ---- */
  TM.Props.signboard = function (ctx, x, y, w, h, label, col) {
    TM.shape(ctx, c => TM.rr(c, x - w / 2, y - h / 2, w, h, 10), col || P.navy, 5);
    // a plain chocolate-bar icon
    TM.Props.chocoBar(ctx, x - w * 0.28, y, w * 0.18, h * 0.5, P.choco);
    if (label) { ctx.fillStyle = '#fff'; ctx.font = `bold ${h * 0.3}px Arial`; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.fillText(label, x - w * 0.12, y); }
  };
  TM.Props.inn = function (ctx, x, y, w, h) {
    // cosy inn building
    TM.shape(ctx, c => TM.rr(c, x - w / 2, y - h, w, h, 6), P.wallWarm, 5);
    TM.shape(ctx, c => { c.moveTo(x - w / 2 - 14, y - h); c.lineTo(x, y - h - 70); c.lineTo(x + w / 2 + 14, y - h); }, P.red, 5); // roof
    // door
    TM.shape(ctx, c => TM.rr(c, x - 36, y - 120, 72, 120, 6), P.choco, 4);
    // windows glow
    for (const wx of [-w * 0.3, w * 0.3]) TM.shape(ctx, c => TM.rr(c, x + wx - 34, y - h + 40, 68, 70, 6), P.yellow, 4);
  };
})();
