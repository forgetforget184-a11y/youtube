/* ============================================================================
 * cc_props.js — Crayon Capital v2 prop library (TM.CC.P) + object animations.
 * Every prop is drawn with boiled primitives. Signature: P.name(ctx, x, y, o)
 * where (x,y) is the BASE-CENTRE of the prop (it stands on y). Use them inside
 * CC.obj(...) with x=y=0 to get pop/slide/drop/shake/flap/jiggle for free.
 * ==========================================================================*/
(function () {
  const TM = window.TM, CC = TM.CC, PAL = CC.PAL, INK = CC.INK, TAU = Math.PI * 2;
  const clamp = TM.clamp, lerp = TM.lerp;
  const P = (CC.P = {});
  const R = CC.rect, CI = CC.circle, EL = CC.ellipse, PO = CC.poly, LI = CC.line, TX = CC.text;
  const at = (ctx, x, y, s, fn, rot) => { ctx.save(); ctx.translate(x, y); if (rot) ctx.rotate(rot); if (s != null && s !== 1) ctx.scale(s, s); fn(ctx); ctx.restore(); };

  /* ---------------- buildings & places ---------------- */
  P.skyscraper = function (ctx, x, y, o) {
    o = o || {}; const w = o.w || 220, h = o.h || 520, col = o.col || PAL.slate;
    at(ctx, x, y, 1, c => {
      R(c, -w / 2, -h, w, h, col, 5);
      const cols = Math.max(2, Math.floor(w / 50)), rows = Math.max(2, Math.floor((h - 40) / 62));
      for (let r = 0; r < rows; r++) for (let i = 0; i < cols; i++) {
        const lit = o.lit && CC.hash(r * 13 + i * 7 + (o.seed || 0), 0, 1) > 0.45;
        const ww = w / cols * 0.52, wx = -w / 2 + (i + 0.24) * (w / cols), wy = -h + 26 + r * 62;
        R(c, wx, wy, ww, 32, lit ? '#F3D46A' : (o.win || '#C9D9E3'), 3);
      }
      if (o.antenna) LI(c, [0, -h, 0, -h - 90], 6);
      if (o.sign) { R(c, -w * 0.48, -h - 70, w * 0.96, 62, PAL.white, 5, 6); TX(c, o.sign, 0, -h - 39, Math.min(46, w * 0.9 / Math.max(4, o.sign.length) * 1.7), INK, { font: 'PMarker' }); }
      if (o.door !== false) R(c, -22, -64, 44, 64, '#3A3A3A', 4);
    });
  };
  P.bank = function (ctx, x, y, o) {
    o = o || {}; const col = o.col || PAL.cream;
    at(ctx, x, y, o.s || 1, c => {
      R(c, -240, -42, 480, 42, col, 5);
      for (let i = 0; i < 5; i++) R(c, -200 + i * 90, -300, 46, 258, col, 5);
      R(c, -225, -342, 450, 42, col, 5);
      PO(c, [-262, -342, 0, -470, 262, -342], col, 5);
      if (o.label) TX(c, o.label, 0, -386, 46, INK, { font: 'PMarker' });
    });
  };
  P.house = function (ctx, x, y, o) {
    o = o || {}; const w = o.w || 360, h = o.h || 240;
    at(ctx, x, y, 1, c => {
      R(c, -w / 2, -h, w, h, o.col || PAL.cream, 5);
      PO(c, [-w / 2 - 30, -h, 0, -h - w * 0.45, w / 2 + 30, -h], o.roof || PAL.red, 5);
      R(c, -30, -110, 60, 110, PAL.brown, 4);
      for (const sx of [-1, 1]) { R(c, sx * w * 0.3 - 40, -h + 50, 80, 70, '#C9D9E3', 4); LI(c, [sx * w * 0.3, -h + 50, sx * w * 0.3, -h + 120], 3); }
    });
  };
  P.mountain = function (ctx, x, y, o) {
    o = o || {}; const w = o.w || 900, h = o.h || 480;
    at(ctx, x, y, 1, c => {
      PO(c, [-w / 2, 0, -w * 0.18, -h * 0.72, -w * 0.06, -h * 0.62, w * 0.05, -h, w * 0.26, -h * 0.55, w / 2, 0], o.col || PAL.sageDk, 5);
      if (o.snow !== false) PO(c, [-w * 0.05, -h * 0.82, w * 0.05, -h, w * 0.14, -h * 0.8, w * 0.08, -h * 0.84, w * 0.03, -h * 0.78], PAL.white, 4);
    });
  };
  P.globe = function (ctx, x, y, o) {   // (x,y) = globe CENTRE. o:{r, rot, building, buildingLabel}
    o = o || {}; const r = o.r || 220, rot = o.rot || 0;
    at(ctx, x, y, 1, c => {
      CI(c, 0, 0, r, o.sea || '#7FAFD0', 5);
      c.save(); c.beginPath(); c.arc(0, 0, r - 3, 0, TAU); c.clip();
      const land = [[0.2, 0.3, 0.55, 0.35], [1.4, -0.35, 0.45, 0.3], [2.3, 0.1, 0.35, 0.5], [3.4, -0.2, 0.6, 0.28], [4.5, 0.45, 0.3, 0.22], [5.3, -0.5, 0.4, 0.25]];
      for (const [lon, lat, rw, rh] of land) {
        const a = lon + rot, z = Math.cos(a); if (z < -0.1) continue;
        const px = Math.sin(a) * r * Math.cos(lat), py = Math.sin(lat) * r;
        CC.draw(c, k => CC.pathEllipse(k, px, py, rw * r * 0.85 * Math.max(0.15, z), rh * r * 0.8, 2), o.land || PAL.green, 4);
      }
      c.restore();
      CI(c, 0, 0, r, null, 5);
      if (o.building) P.skyscraper(c, 0, -r + 12, { w: r * 0.42, h: r * 0.9, col: PAL.slateDk, sign: o.buildingLabel, door: false });
    });
  };
  P.desk = function (ctx, x, y, o) { o = o || {}; const w = o.w || 420; at(ctx, x, y, 1, c => { R(c, -w / 2 + 20, -160, 18, 160, INK, 0); R(c, w / 2 - 38, -160, 18, 160, INK, 0); R(c, -w / 2, -186, w, 32, o.col || PAL.wood, 5, 5); }); };
  P.chair = function (ctx, x, y, o) { o = o || {}; at(ctx, x, y, 1, c => { R(c, -60, -240, 120, 130, o.col || PAL.brown, 5, 10); R(c, -70, -120, 140, 26, o.col || PAL.brown, 5, 6); LI(c, [-55, -94, -60, 0], 7); LI(c, [55, -94, 60, 0], 7); }); };
  P.podium = function (ctx, x, y, o) { o = o || {}; at(ctx, x, y, 1, c => { PO(c, [-150, -260, 150, -260, 120, 0, -120, 0], o.col || PAL.wood, 5); if (o.label) TX(c, o.label, 0, -150, 50, PAL.white, { font: 'PMarker', stroke: 7 }); }); };
  P.frame = function (ctx, x, y, o) { // portrait frame; o.draw(ctx) paints the picture centred at (0,0)
    o = o || {}; const w = o.w || 360, h = o.h || 280;
    at(ctx, x, y, 1, c => {
      R(c, -w / 2 - 22, -h - 22, w + 44, h + 44, o.col || PAL.gold, 5, 4); R(c, -w / 2, -h, w, h, o.bg || PAL.cream, 4);
      c.save(); c.beginPath(); c.rect(-w / 2, -h, w, h); c.clip(); c.translate(0, -h / 2); if (o.draw) o.draw(c); c.restore();
    });
  };
  P.sign = function (ctx, x, y, o) { o = o || {}; at(ctx, x, y, 1, c => { LI(c, [0, 0, 0, -160], 8); R(c, -(o.w || 220) / 2, -260, o.w || 220, 110, o.col || PAL.white, 5, 6); TX(c, o.text || '', 0, -205, o.size || 44, INK, { font: 'PMarker' }); }); };
  P.tree = function (ctx, x, y, o) { o = o || {}; at(ctx, x, y, o.s || 1, c => { R(c, -16, -140, 32, 140, PAL.brown, 5); CI(c, 0, -200, 95, o.col || PAL.green, 5); }); };
  P.sun = function (ctx, x, y, o) { o = o || {}; at(ctx, x, y, o.s || 1, c => { for (let i = 0; i < 10; i++) { const a = i / 10 * TAU; LI(c, [Math.cos(a) * 80, Math.sin(a) * 80, Math.cos(a) * 112, Math.sin(a) * 112], 7, PAL.gold); } CI(c, 0, 0, 64, PAL.yellow, 5); }); };
  P.yacht = function (ctx, x, y, o) {
    o = o || {}; at(ctx, x, y, o.s || 1, c => {
      PO(c, [-300, -60, 330, -60, 240, 30, -260, 30], PAL.white, 5);
      R(c, -290, -24, 560, 14, PAL.blue, 0);
      PO(c, [-170, -60, -140, -140, 150, -140, 200, -60], PAL.white, 5);
      PO(c, [-90, -140, -70, -200, 90, -200, 110, -140], PAL.white, 5);
      for (let i = 0; i < 4; i++) R(c, -120 + i * 70, -122, 48, 32, '#9FCDE6', 4, 6);
    });
  };
  P.water = function (ctx, y, t, col) {
    ctx.fillStyle = col || PAL.water; ctx.beginPath(); ctx.moveTo(-3000, TM.H + 2000);
    for (let x = -3000; x <= TM.W + 3000; x += 60) ctx.lineTo(x, y + Math.sin(x * 0.012 + CC.q(t) * 2.4) * 9 + (CC.BOIL ? CC.jit(x, 1) * 1.5 : 0));
    ctx.lineTo(TM.W + 3000, TM.H + 2000); ctx.closePath(); ctx.fill(); ctx.strokeStyle = INK; ctx.lineWidth = 5; ctx.stroke();
  };

  /* ---------------- money ---------------- */
  P.coin = function (ctx, x, y, o) { o = o || {}; const r = o.r || 34; at(ctx, x, y, 1, c => { CI(c, 0, -r, r, PAL.gold, 4.5); CI(c, 0, -r, r * 0.68, null, 3, '#A9811E'); TX(c, '$', 0, -r, r * 0.95, '#8C6A12', { font: 'PMarker' }); }); };
  P.coinStack = function (ctx, x, y, o) { o = o || {}; const n = o.n || 5, r = o.r || 46; at(ctx, x, y, 1, c => { for (let i = 0; i < n; i++) { EL(c, 0, -i * 16 - 10, r, 14, PAL.gold, 4.5); } }); };
  P.bill = function (ctx, x, y, o) { o = o || {}; at(ctx, x, y, o.s || 1, c => { R(c, -62, -60, 124, 58, PAL.money, 4.5, 6); R(c, -50, -50, 100, 38, null, 3, 4); TX(c, '$', 0, -31, 36, PAL.moneyDk, { font: 'PMarker' }); }, o.rot); };
  P.cashStack = function (ctx, x, y, o) { o = o || {}; const n = o.n || 3; at(ctx, x, y, o.s || 1, c => { for (let i = 0; i < n; i++) { const yy = -i * 28; R(c, -72, yy - 28, 144, 28, PAL.money, 4.5, 5); R(c, -13, yy - 28, 26, 28, PAL.cream, 3); } }); };
  P.moneyBag = function (ctx, x, y, o) {
    o = o || {}; at(ctx, x, y, o.s || 1, c => {
      PO(c, [-30, -150, 30, -150, 18, -118, 70, -95, 92, -45, 70, 0, -70, 0, -92, -45, -70, -95, -18, -118], o.col || '#C9A46A', 5, true);
      LI(c, [-26, -120, 26, -120], 6);
      TX(c, o.label || '$', 0, -52, o.label && o.label.length > 2 ? 34 : 64, PAL.moneyDk, { font: 'PMarker' });
    });
  };
  P.jar = function (ctx, x, y, o) {   // o:{w,h,fill 0..1,label}
    o = o || {}; const w = o.w || 200, h = o.h || 260, f = clamp(o.fill == null ? 0 : o.fill, 0, 1);
    at(ctx, x, y, 1, c => {
      const body = CC.rrPts(-w / 2, -h, w, h, 34);
      if (f > 0) { c.save(); c.beginPath(); CC.path(c, body, true, true, 1); c.clip(); const fh = (h - 16) * f; c.fillStyle = PAL.gold; c.fillRect(-w, -8 - fh, w * 2, fh + 8);
        for (let i = 0; i < 9; i++) LI(c, [-w / 2 + 10, -8 - fh + 10 + (i % 3) * 14, w / 2 - 10, -8 - fh + 10 + (i % 3) * 14], 2.5, '#B48A1C'); c.restore(); }
      c.save(); c.globalAlpha = 0.25; CC.draw(c, k => CC.path(k, body, true, true, 1), '#DDEFF7', 0); c.restore();
      CC.draw(c, k => CC.path(k, body, true, true), null, 5);
      R(c, -w * 0.36, -h - 30, w * 0.72, 34, PAL.greyDk, 5, 6);
      LI(c, [-w / 2 + 22, -h + 40, -w / 2 + 22, -h * 0.45], 6, PAL.white);
      if (o.label) { R(c, -w * 0.32, -h * 0.62, w * 0.64, 56, PAL.cream, 4, 4); TX(c, o.label, 0, -h * 0.62 + 28, 36, INK, { font: 'PMarker' }); }
    });
  };
  P.cheque = function (ctx, x, y, o) {
    o = o || {}; at(ctx, x, y, o.s || 1, c => {
      R(c, -170, -150, 340, 150, '#E8F1DA', 5, 6);
      TX(c, o.bank || 'BANK', -110, -122, 26, PAL.moneyDk, { font: 'PMarker' });
      TX(c, 'PAY ' + (o.to || 'YOU'), -40, -82, 30, INK, { align: 'left' });
      R(c, 60, -66, 96, 40, PAL.white, 3.5, 4); TX(c, o.amount || '$$$', 108, -46, 30, INK, { font: 'PMarker' });
      LI(c, [-150, -24, 40, -24], 3); LI(c, [-150, -24, -150, -24], 1);
      if (o.signed) LI(c, [-140, -34, -110, -50, -90, -30, -60, -48, -30, -32], 3.5, PAL.blue);
    });
  };

  /* ---------------- paper & office ---------------- */
  P.document = function (ctx, x, y, o) { o = o || {}; at(ctx, x, y, o.s || 1, c => { R(c, -70, -190, 140, 190, PAL.white, 4.5, 3); if (o.title) TX(c, o.title, 0, -160, 26, INK, { font: 'PMarker' }); for (let i = 0; i < (o.lines || 6); i++) LI(c, [-48, -125 + i * 20, 48 - (i % 3) * 14, -125 + i * 20], 3.5, PAL.greyDk); }, o.rot); };
  P.resume = (ctx, x, y, o) => { o = o || {}; at(ctx, x, y, o.s || 1, c => { R(c, -75, -200, 150, 200, PAL.white, 4.5, 3); CI(c, -38, -158, 20, PAL.cream, 3.5); TX(c, o.name || 'RESUME', 20, -160, 22, INK, { font: 'PMarker' }); for (let i = 0; i < 6; i++) LI(c, [-55, -110 + i * 18, 55 - (i % 2) * 20, -110 + i * 18], 3.5, PAL.greyDk); }, o.rot); };
  P.newspaper = function (ctx, x, y, o) {
    o = o || {}; const w = o.w || 300, h = o.h || 380;
    at(ctx, x, y, o.s || 1, c => {
      R(c, -w / 2, -h, w, h, '#F4F1E8', 5, 2);
      TX(c, o.paper || 'THE DAILY NEWS', 0, -h + 30, 26, INK, { font: 'PMarker' }); LI(c, [-w / 2 + 14, -h + 52, w / 2 - 14, -h + 52], 3);
      TX(c, o.headline || 'HEADLINE', 0, -h + 100, o.hs || 40, INK, { font: 'PMarker' });
      R(c, -w / 2 + 20, -h + 150, w * 0.45, h * 0.38, PAL.grey, 3.5);
      for (let i = 0; i < 7; i++) LI(c, [10, -h + 160 + i * 20, w / 2 - 22, -h + 160 + i * 20], 3, PAL.greyDk);
      for (let i = 0; i < 4; i++) LI(c, [-w / 2 + 20, -h + 170 + h * 0.38 + i * 20, w / 2 - 22, -h + 170 + h * 0.38 + i * 20], 3, PAL.greyDk);
    }, o.rot);
  };
  P.stampTool = (ctx, x, y, o) => { o = o || {}; at(ctx, x, y, o.s || 1, c => { R(c, -60, -36, 120, 36, PAL.red, 5, 4); R(c, -18, -100, 36, 64, PAL.wood, 4.5, 4); CI(c, 0, -122, 30, PAL.wood, 4.5); }, o.rot); };
  P.quill = (ctx, x, y, o) => { o = o || {}; at(ctx, x, y, o.s || 1, c => { PO(c, [0, 0, 18, -50, 40, -130, 24, -180, 6, -120, -6, -40], PAL.white, 4.5, true); LI(c, [0, 0, 26, -150], 3); }, o.rot == null ? 0.25 : o.rot); };
  P.computer = function (ctx, x, y, o) {
    o = o || {}; at(ctx, x, y, o.s || 1, c => {
      R(c, -40, -40, 80, 40, PAL.greyDk, 4.5); R(c, -170, -260, 340, 225, PAL.greyDk, 5, 10); R(c, -150, -242, 300, 188, o.screen || '#8FC7E6', 4);
      if (o.text) TX(c, o.text, 0, -148, 44, INK, { font: 'PMarker' });
      if (o.draw) { c.save(); c.translate(0, -148); o.draw(c); c.restore(); }
    });
  };
  P.chip = (ctx, x, y, o) => { o = o || {}; at(ctx, x, y, o.s || 1, c => { for (let i = 0; i < 5; i++) for (const sx of [-1, 1]) { LI(c, [sx * 70, -140 + i * 25 + 15, sx * 95, -140 + i * 25 + 15], 6); LI(c, [-50 + i * 25, sx < 0 ? -140 : 0, -50 + i * 25, sx < 0 ? -165 : 25], 6); } R(c, -70, -140, 140, 140, '#3A3F45', 5, 10); R(c, -40, -110, 80, 80, '#5D6670', 4, 6); TX(c, o.label || 'CHIP', 0, -70, 24, PAL.white, { font: 'PMarker' }); }); };
  P.phone = (ctx, x, y, o) => { o = o || {}; at(ctx, x, y, o.s || 1, c => { R(c, -32, -120, 64, 120, '#222', 4.5, 12); R(c, -24, -108, 48, 92, o.screen || '#8FC7E6', 3, 4); }, o.rot); };
  P.briefcase = (ctx, x, y, o) => { o = o || {}; at(ctx, x, y, o.s || 1, c => { R(c, -30, -128, 60, 30, null, 7, 8); R(c, -85, -110, 170, 110, o.col || PAL.brown, 5, 10); LI(c, [-85, -70, 85, -70], 4); R(c, -12, -80, 24, 18, PAL.gold, 3); }); };
  P.handcuffs = (ctx, x, y, o) => { o = o || {}; at(ctx, x, y, o.s || 1, c => { for (const sx of [-1, 1]) { CI(c, sx * 70, -60, 50, null, 18, INK); CI(c, sx * 70, -60, 50, null, 10, '#C8CDD2'); } for (let i = -1; i <= 1; i++) EL(c, i * 22, -60, 13, 9, '#C8CDD2', 4); }); };
  P.bars = (ctx, x, y, o) => { o = o || {}; const w = o.w || 600, h = o.h || 520, n = o.n || 7; at(ctx, x, y, 1, c => { R(c, -w / 2, -h, w, 26, PAL.greyDk, 5); R(c, -w / 2, -26, w, 26, PAL.greyDk, 5); for (let i = 0; i < n; i++) { const bx = -w / 2 + (i + 0.5) * w / n; R(c, bx - 9, -h + 26, 18, h - 52, '#A9B0B6', 4); } }); };
  P.gavel = (ctx, x, y, o) => { o = o || {}; at(ctx, x, y, o.s || 1, c => { R(c, -10, -20, 20, 190, PAL.brown, 4.5, 8); R(c, -78, -70, 156, 68, PAL.brown, 5, 12); }, o.rot); };
  P.trophy = (ctx, x, y, o) => { o = o || {}; at(ctx, x, y, o.s || 1, c => { R(c, -60, -30, 120, 30, PAL.brown, 4.5); R(c, -14, -90, 28, 60, PAL.gold, 4.5); PO(c, [-70, -200, 70, -200, 50, -110, 0, -88, -50, -110], PAL.gold, 5, true); }); };

  /* ---------------- marks & effects ---------------- */
  P.heart = (ctx, x, y, s, col) => at(ctx, x, y, s || 1, c => PO(c, [0, 34, -60, -10, -55, -48, -22, -58, 0, -34, 22, -58, 55, -48, 60, -10], col || PAL.red, 5, true));
  P.star = (ctx, x, y, r, col) => at(ctx, x, y, 1, c => PO(c, CC.starPts(r || 40), col || PAL.yellow, 5));
  P.xmark = (ctx, x, y, size) => at(ctx, x, y, 1, c => { for (const d of [1, -1]) { LI(c, [-size / 2, -d * size / 2, size / 2, d * size / 2], size * 0.26, INK, null, false); LI(c, [-size / 2, -d * size / 2, size / 2, d * size / 2], size * 0.16, PAL.red, null, false); } });
  P.checkmark = (ctx, x, y, size) => at(ctx, x, y, 1, c => { LI(c, [-size / 2, 0, -size * 0.12, size * 0.38, size / 2, -size * 0.4], size * 0.26, INK, null, false); LI(c, [-size / 2, 0, -size * 0.12, size * 0.38, size / 2, -size * 0.4], size * 0.16, PAL.green, null, false); });
  P.arrow = function (ctx, x1, y1, x2, y2, u, col, w) {
    u = clamp(u == null ? 1 : u, 0, 1); if (u <= 0) return; w = w || 12; const x = lerp(x1, x2, u), y = lerp(y1, y2, u), a = Math.atan2(y2 - y1, x2 - x1);
    LI(ctx, [x1, y1, x, y], w, col || INK, null, false);
    PO(ctx, [x + Math.cos(a) * w * 2.2, y + Math.sin(a) * w * 2.2, x + Math.cos(a + 2.4) * w * 2.4, y + Math.sin(a + 2.4) * w * 2.4, x + Math.cos(a - 2.4) * w * 2.4, y + Math.sin(a - 2.4) * w * 2.4], col || INK, 4);
  };
  P.puff = function (ctx, x, y, u, s) {
    if (u <= 0 || u >= 1) return; s = s || 1; ctx.save(); ctx.globalAlpha *= 1 - u;
    for (let i = 0; i < 7; i++) { const a = i / 7 * TAU; const d = u * 120 * s; CI(ctx, x + Math.cos(a) * d, y + Math.sin(a) * d * 0.7, (34 + 28 * u) * s, '#EDEDED', 4); }
    ctx.restore();
  };

  /* ---------------- charts (draw-on) ---------------- */
  // line chart in box (x,y)=top-left; pts normalised [[x,y]..] (y up). u = reveal. o:{col,lw,axes,axisCol,dot}
  P.lineChart = function (ctx, x, y, w, h, pts, u, o) {
    o = o || {}; if (o.axes !== false) LI(ctx, [x, y - 10, x, y + h, x + w + 10, y + h], 6, o.axisCol || INK, null, false);
    const flat = []; for (const q of pts) flat.push(x + q[0] * w, y + h - q[1] * h);
    const head = LI(ctx, flat, o.lw || 10, o.col || PAL.red, u, false);
    if (head && o.dot !== false && u > 0) CI(ctx, head.x, head.y, (o.lw || 10) * 1.1, o.col || PAL.red, 4);
    return head;
  };
  // bar chart; bars grow one after another from t0 every `gap` s. (x,y) = baseline-left. o:{cols,labels,top,gap,labelCol}
  P.barChart = function (ctx, s, x, y, w, h, vals, t0, o) {
    o = o || {}; const lq = CC.q(s.lt), n = vals.length, bw = w / n * 0.62, gap = o.gap == null ? 0.25 : o.gap, mx = o.max || Math.max(...vals);
    LI(ctx, [x - 10, y, x + w + 10, y], 6, o.axisCol || INK, null, false);
    vals.forEach((v, i) => {
      const t = t0 + i * gap; CC.cue('pop', t); if (lq < t) return;
      const g = CC.backOut((lq - t) / 0.3), bh = v / mx * h * g, bx = x + (i + 0.19) * w / n;
      R(ctx, bx, y - bh, bw, bh, (o.cols && o.cols[i % o.cols.length]) || o.col || PAL.green, 5);
      if (o.labels && o.labels[i]) TX(ctx, o.labels[i], bx + bw / 2, y - bh - 32, o.ls || 36, o.labelCol || INK, { font: 'PMarker' });
      if (o.under && o.under[i]) TX(ctx, o.under[i], bx + bw / 2, y + 34, 28, o.labelCol || INK);
    });
  };

  /* ---------------- composite object animations ---------------- */
  // stamp slam (big -> 1 + shake + thud). o:{col,size,rot}
  CC.stamp = function (ctx, s, str, x, y, t0, o) {
    o = o || {}; CC.cue('stamp', t0); const lq = CC.q(s.lt); if (lq < t0) return;
    const size = o.size || 120, col = o.col || PAL.red, k = clamp((lq - t0) / 0.13, 0, 1);
    const sc = lerp(2.3, 1, CC.easeIn(k)); ctx.save(); ctx.font = CC.font(size, 'PMarker'); const w = ctx.measureText(str).width + size * 0.8, h = size * 1.35; ctx.restore();
    ctx.save(); ctx.translate(x, y); if (k >= 1 && lq - t0 < 0.35) ctx.translate(CC.jit(5, 1) * 8, CC.jit(5, 2) * 5);
    ctx.rotate(o.rot == null ? -0.12 : o.rot); ctx.scale(sc, sc); ctx.globalAlpha *= clamp(k * 2, 0, 1);
    CC.draw(ctx, c => CC.pathRect(c, -w / 2, -h / 2, w, h, size * 0.12, 2.5), null, size * 0.09, col);
    CC.text(ctx, str, 0, size * 0.04, size, col, { font: 'PMarker' });
    ctx.restore();
  };
  // jagged cracks growing from (x,y) downward-ish over [t0, t0+dur]. o:{len, seed, lw, col, dir}
  CC.cracks = function (ctx, s, x, y, t0, dur, o) {
    o = o || {}; CC.cue('crack', t0); const u = CC.prog(CC.q(s.lt), t0, dur || 0.6); if (u <= 0) return;
    const len = o.len || 260, sd = o.seed || 1, dir = o.dir == null ? Math.PI / 2 : o.dir;
    const branch = (x0, y0, a, L, depth, si) => {
      const pts = [x0, y0]; let px = x0, py = y0; const n = 6;
      for (let i = 1; i <= n; i++) { const aa = a + (CC.hash(si, i, 3) - 0.5) * 1.1; px += Math.cos(aa) * L / n; py += Math.sin(aa) * L / n; pts.push(px, py); }
      LI(ctx, pts, (o.lw || 7) * (depth ? 0.6 : 1), o.col || INK, clamp(u * (depth ? 1.6 : 1.1) - depth * 0.35, 0, 1), false, 1.2);
      if (depth < 1) for (let b = 0; b < 2; b++) { const j = 2 + b * 2; branch(pts[j * 2], pts[j * 2 + 1], a + (b ? 0.8 : -0.8), L * 0.45, depth + 1, si * 7 + b + 1); }
    };
    branch(x, y, dir, len, 0, sd);
  };
  // coins dropping into a jar with jiggle + clink. o:{x,y,w,h,t0,n,gap,fill0,fill1,label}
  CC.coinJar = function (ctx, s, o) {
    const lq = CC.q(s.lt), n = o.n || 5, gap = o.gap || 0.35, t0 = o.t0 || 0, fall = 0.3, h = o.h || 260;
    let landed = 0; const jig = [];
    for (let i = 0; i < n; i++) { const tl = t0 + i * gap + fall; CC.cue('clink', tl); if (lq >= tl) { landed++; jig.push(tl); } }
    const fill = lerp(o.fill0 || 0.05, o.fill1 == null ? 0.85 : o.fill1, landed / n);
    CC.obj(ctx, s, { x: o.x, y: o.y, in: o.in || 'none', at: o.at || 0, jiggle: jig }, c => P.jar(c, 0, 0, { w: o.w, h, fill, label: o.label }));
    for (let i = 0; i < n; i++) {
      const ts = t0 + i * gap, k = (lq - ts) / fall; if (k < 0 || k >= 1) continue;
      ctx.save(); ctx.translate(o.x + (i % 2 ? 14 : -10), lerp(o.y - h - 380, o.y - h * 0.4, CC.easeIn(k))); ctx.rotate(k * 3); P.coin(ctx, 0, 0, { r: 30 }); ctx.restore();
    }
  };
  // rotating globe with an optional building on top
  CC.globeSpin = (ctx, s, x, y, o) => { o = o || {}; P.globe(ctx, x, y, Object.assign({}, o, { rot: CC.q(s.lt) * (o.speed || 0.9) + (o.rot0 || 0) })); };
})();
