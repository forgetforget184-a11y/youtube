/* ============================================================================
 * characters.js — the Timeless Moments cast, fully procedural & animated.
 * A character spec:
 *   { x, y, scale, seed, body, outfit:'solid'|'pinstripe', tie, head:'round'|
 *     'square', hair:{type:'none'|'bowl'|'side'|'bald', color}, hat:{type,color},
 *     mustache:bool, face:'light' }
 * drawChar(ctx, c, f, opts) where opts = { expr, armL, armR, talk, walk, sweat,
 *     faceDir, bobAmp } . All motion (idle breathe/sway, blink, head bob, arm
 *     tween, mouth, walk cycle, sweat) is computed here from f + seed.
 * ==========================================================================*/
(function () {
  const TM = window.TM; const P = TM.PAL;

  /* arm poses: [shoulderAngle, elbowAngle] radians, 0 = pointing down, +ve = fwd/out (screen-right) */
  const POSES = {
    hang: [0.12, 0.05], hip: [0.55, -1.25], point: [1.45, 0.15], up: [2.5, 0.2],
    present: [1.0, 0.65], reach: [1.15, 0.45], wave: [2.2, -0.5], cross: [0.75, -1.9],
    hold: [0.95, -1.15]
  };
  TM.POSES = POSES;
  function poseAngles(p) {
    if (!p) return POSES.hang;
    if (Array.isArray(p)) return p;
    if (typeof p === 'string') return POSES[p] || POSES.hang;
    // tween form {from,to,u}
    const a = POSES[p.from] || POSES.hang, b = POSES[p.to] || POSES.hang, u = TM.easeIO(p.u);
    return [TM.lerp(a[0], b[0], u), TM.lerp(a[1], b[1], u)];
  }
  TM.poseTween = (from, to, u) => poseAngles({ from, to, u });

  function blink(f, seed) {
    // eye openness 0..1, quick blinks every ~2.5-4s
    const period = 2.5 + TM.rand(seed) * 1.6;
    const ph = ((f / 30) % period) / period;
    const bt = 0.93; // blink starts at 93% of period
    if (ph > bt) { const k = (ph - bt) / (1 - bt); return Math.abs(Math.cos(k * Math.PI)); }
    return 1;
  }

  function drawArm(ctx, sx, sy, angle, elbow, len, w, col) {
    const seg = len * 0.52;
    const ex = sx + Math.sin(angle) * seg, ey = sy + Math.cos(angle) * seg;
    const a2 = angle + elbow;
    const hx = ex + Math.sin(a2) * seg, hy = ey + Math.cos(a2) * seg;
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.strokeStyle = P.ink; ctx.lineWidth = w + 2;
    ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(ex, ey); ctx.lineTo(hx, hy); ctx.stroke();
    ctx.strokeStyle = col; ctx.lineWidth = w;
    ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(ex, ey); ctx.lineTo(hx, hy); ctx.stroke();
    // white glove hand
    TM.shape(ctx, c => c.arc(hx, hy, w * 0.85, 0, TM.TAU), P.white, 3);
    return { hx, hy };
  }

  function drawLeg(ctx, hx, hy, swing, len, w) {
    const kx = hx + Math.sin(swing) * len * 0.5, ky = hy + Math.cos(swing) * len * 0.5;
    const fx = kx + Math.sin(swing * 0.4) * len * 0.5, fy = ky + len * 0.5 * Math.cos(swing * 0.4);
    ctx.lineCap = 'round'; ctx.strokeStyle = P.ink; ctx.lineWidth = w + 2;
    ctx.beginPath(); ctx.moveTo(hx, hy); ctx.lineTo(kx, ky); ctx.lineTo(fx, fy); ctx.stroke();
    ctx.strokeStyle = P.navy; ctx.lineWidth = w;
    ctx.beginPath(); ctx.moveTo(hx, hy); ctx.lineTo(kx, ky); ctx.lineTo(fx, fy); ctx.stroke();
    // shoe
    TM.shape(ctx, c => TM.rr(c, fx - w * 0.9, fy - w * 0.4, w * 2.0, w * 0.9, w * 0.4), P.ink, 0);
  }

  /* ---- expressions: eyes + mouth drawn on the head at (cx,cy), radius R ---- */
  function drawFace(ctx, cx, cy, R, expr, open, talk, faceDir) {
    const dx = (faceDir || 0) * R * 0.14;
    const eyeY = cy - R * 0.05, eo = R * 0.34; // eye offset
    const ex1 = cx - eo + dx, ex2 = cx + eo + dx;
    ctx.fillStyle = P.ink; ctx.strokeStyle = P.ink; ctx.lineWidth = R * 0.07; ctx.lineCap = 'round';
    const eye = (x, shape) => {
      if (shape === 'happy') { // upward arc ^
        ctx.beginPath(); ctx.arc(x, eyeY + R * 0.04, R * 0.16, Math.PI * 1.15, Math.PI * 1.85); ctx.stroke();
      } else if (shape === 'shock') {
        TM.shape(ctx, c => c.arc(x, eyeY, R * 0.17, 0, TM.TAU), P.white, R * 0.05);
        TM.shape(ctx, c => c.arc(x, eyeY, R * 0.08, 0, TM.TAU), P.ink, 0);
      } else { // dot, scaled by openness
        ctx.beginPath(); ctx.ellipse(x, eyeY, R * 0.11, R * 0.11 * open, 0, 0, TM.TAU); ctx.fill();
      }
    };
    let es = 'dot';
    if (expr === 'happy') es = 'happy';
    if (expr === 'surprised' || expr === 'shocked') es = 'shock';
    eye(ex1, es); eye(ex2, es);
    // brows for worried/smug
    ctx.lineWidth = R * 0.06;
    if (expr === 'worried') {
      ctx.beginPath(); ctx.moveTo(ex1 - R * 0.14, eyeY - R * 0.34); ctx.lineTo(ex1 + R * 0.12, eyeY - R * 0.22); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(ex2 + R * 0.14, eyeY - R * 0.34); ctx.lineTo(ex2 - R * 0.12, eyeY - R * 0.22); ctx.stroke();
    } else if (expr === 'smug') {
      ctx.beginPath(); ctx.moveTo(ex1 - R * 0.1, eyeY - R * 0.26); ctx.lineTo(ex1 + R * 0.16, eyeY - R * 0.33); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(ex2 + R * 0.1, eyeY - R * 0.26); ctx.lineTo(ex2 - R * 0.16, eyeY - R * 0.33); ctx.stroke();
    }
    // mouth
    const my = cy + R * 0.42; const mo = talk ? open : 1;
    ctx.lineWidth = R * 0.07; ctx.strokeStyle = P.ink; ctx.fillStyle = P.ink;
    if (expr === 'surprised' || expr === 'shocked') {
      const h = R * (0.14 + 0.16 * mo);
      TM.shape(ctx, c => c.ellipse(cx + dx, my, R * 0.15, h, 0, 0, TM.TAU), '#5a2630', R * 0.05);
    } else if (talk && mo > 0.35) {
      TM.shape(ctx, c => c.ellipse(cx + dx, my, R * 0.14, R * 0.12 * mo, 0, 0, TM.TAU), '#5a2630', R * 0.05);
    } else if (expr === 'happy') {
      ctx.beginPath(); ctx.arc(cx + dx, my - R * 0.06, R * 0.22, 0.15 * Math.PI, 0.85 * Math.PI); ctx.stroke();
    } else if (expr === 'worried') {
      ctx.beginPath(); ctx.arc(cx + dx, my + R * 0.18, R * 0.18, 1.18 * Math.PI, 1.82 * Math.PI); ctx.stroke();
    } else if (expr === 'smug') {
      ctx.beginPath(); ctx.arc(cx + dx - R * 0.05, my - R * 0.02, R * 0.2, 0.08 * Math.PI, 0.6 * Math.PI); ctx.stroke();
    } else {
      ctx.beginPath(); ctx.moveTo(cx + dx - R * 0.13, my); ctx.lineTo(cx + dx + R * 0.13, my); ctx.stroke();
    }
  }

  function drawHairHat(ctx, cx, cy, R, c) {
    const hair = c.hair || { type: 'none' }, hat = c.hat || { type: 'none' };
    if (hair.type === 'bowl') {
      TM.shape(ctx, cc => { cc.arc(cx, cy - R * 0.1, R * 1.02, Math.PI * 1.05, Math.PI * 1.95); cc.lineTo(cx + R * 0.7, cy - R * 0.1); cc.lineTo(cx - R * 0.7, cy - R * 0.1); }, hair.color || '#2a2320', 4);
    } else if (hair.type === 'side') {
      ctx.fillStyle = hair.color || '#8a8a8a';
      TM.shape(ctx, cc => cc.ellipse(cx - R * 0.78, cy - R * 0.1, R * 0.28, R * 0.42, 0, 0, TM.TAU), hair.color || '#8a8a8a', 3);
      TM.shape(ctx, cc => cc.ellipse(cx + R * 0.78, cy - R * 0.1, R * 0.28, R * 0.42, 0, 0, TM.TAU), hair.color || '#8a8a8a', 3);
    }
    if (hat.type === 'bowler') {
      TM.shape(ctx, cc => cc.ellipse(cx, cy - R * 0.78, R * 1.1, R * 0.22, 0, 0, TM.TAU), hat.color || P.navy, 4);
      TM.shape(ctx, cc => { cc.ellipse(cx, cy - R * 0.92, R * 0.68, R * 0.55, 0, Math.PI, 0); }, hat.color || P.navy, 4);
    } else if (hat.type === 'cap') {
      TM.shape(ctx, cc => { cc.moveTo(cx - R * 0.7, cy - R * 0.72); cc.quadraticCurveTo(cx, cy - R * 1.35, cx + R * 0.7, cy - R * 0.72); }, hat.color || P.cyan, 4);
      TM.shape(ctx, cc => TM.rr(cc, cx + R * 0.4, cy - R * 0.84, R * 0.8, R * 0.2, R * 0.1), hat.color || P.cyan, 4);
    } else if (hat.type === 'ballcap') {
      // fuller baseball cap: rounded crown over top ~55% of head + forward brim
      const col = hat.color || P.navy;
      TM.shape(ctx, cc => { cc.arc(cx, cy - R * 0.08, R * 1.02, Math.PI * 1.02, Math.PI * 1.98); cc.closePath(); }, col, 4);
      // forward brim (faces faceDir; default screen-right)
      const d = (hat.dir != null ? hat.dir : 1);
      TM.shape(ctx, cc => cc.ellipse(cx + d * R * 0.72, cy - R * 0.5, R * 0.62, R * 0.2, 0, 0, TM.TAU), col, 4);
      // button + optional simple emblem (a plain shape — never a real logo)
      TM.shape(ctx, cc => cc.arc(cx, cy - R * 1.02, R * 0.08, 0, TM.TAU), col, 2);
      if (hat.emblem) { ctx.fillStyle = hat.emblem; ctx.font = `bold ${Math.round(R * 0.5)}px Arial`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('★', cx, cy - R * 0.42); }
    } else if (hat.type === 'chef') {
      TM.shape(ctx, cc => TM.rr(cc, cx - R * 0.6, cy - R * 0.95, R * 1.2, R * 0.3, R * 0.1), P.white, 4);
      TM.shape(ctx, cc => cc.ellipse(cx, cy - R * 1.1, R * 0.62, R * 0.4, 0, 0, TM.TAU), P.white, 4);
    }
  }

  /* ---- minimalist stick-figure style (round white head, thin black limbs,
   *      dot eyes + smile + blush). Still fully animated. ---- */
  function stickArm(ctx, sx, sy, angle, elbow, len, w) {
    const seg = len * 0.52;
    const ex = sx + Math.sin(angle) * seg, ey = sy + Math.cos(angle) * seg;
    const a2 = angle + elbow;
    const hx = ex + Math.sin(a2) * seg, hy = ey + Math.cos(a2) * seg;
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.strokeStyle = P.ink; ctx.lineWidth = w;
    ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(ex, ey); ctx.lineTo(hx, hy); ctx.stroke();
    return { hx, hy };
  }
  function stickLeg(ctx, hx, hy, swing, len, w) {
    const kx = hx + Math.sin(swing) * len * 0.5, ky = hy + Math.cos(swing) * len * 0.5;
    const fx = kx + Math.sin(swing * 0.4) * len * 0.5, fy = ky + len * 0.5 * Math.cos(swing * 0.4);
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.strokeStyle = P.ink; ctx.lineWidth = w;
    ctx.beginPath(); ctx.moveTo(hx, hy); ctx.lineTo(kx, ky); ctx.lineTo(fx, fy); ctx.stroke();
  }
  function drawStick(ctx, c, f, opts) {
    const s = c.scale || 1, seed = c.seed || 1;
    const R = 70 * s;                       // head radius
    const limbW = 7 * s;                    // thin ink limbs
    const legLen = 150 * s, armLen = 150 * s, torsoH = 150 * s;
    const breathe = Math.sin(f / 30 * TM.TAU * 0.33 + seed) * (opts.bobAmp != null ? opts.bobAmp : 3) * s;
    const sway = TM.noise(f / 30 * 0.4, seed) * 0.02;
    const walkOn = !!opts.walk;
    const walkPh = (opts.walkPhase != null ? opts.walkPhase : f / 30 * 6.5);
    const bx = c.x + (walkOn ? 0 : TM.noise(f / 30 * 0.25, seed + 3) * 2 * s);
    const by = c.y + breathe + (walkOn ? Math.abs(Math.sin(walkPh)) * -6 * s : 0);

    ctx.save();
    ctx.translate(bx, by);
    ctx.rotate(sway);
    TM.castShadow(ctx, 0, 6 * s, R * 0.9, 16 * s, 0.18);

    const hipY = -legLen;
    const shoulderY = hipY - torsoH;
    const headCy = shoulderY - R * 0.95 + Math.sin(f / 30 * TM.TAU * 0.33 + seed + 1) * 1.2 * s;

    // legs
    if (walkOn) {
      stickLeg(ctx, -R * 0.12, hipY, Math.sin(walkPh) * 0.5, legLen, limbW);
      stickLeg(ctx, R * 0.12, hipY, Math.sin(walkPh + Math.PI) * 0.5, legLen, limbW);
    } else {
      stickLeg(ctx, -R * 0.12, hipY, -0.14, legLen, limbW);
      stickLeg(ctx, R * 0.12, hipY, 0.14, legLen, limbW);
    }
    // thin torso line
    ctx.lineCap = 'round'; ctx.strokeStyle = P.ink; ctx.lineWidth = limbW;
    ctx.beginPath(); ctx.moveTo(0, hipY); ctx.lineTo(0, shoulderY); ctx.stroke();

    // arms off the upper torso (shoulders)
    const shY = shoulderY + R * 0.12;
    const aR = poseAngles(opts.armR || 'hang'), aL = poseAngles(opts.armL || 'hang');
    const gestR = Math.sin(f / 30 * TM.TAU * 0.5 + seed) * (opts.gesture ? 0.12 : 0.03);
    const handR = stickArm(ctx, 0, shY, aR[0] + gestR, aR[1], armLen, limbW);
    const handL = stickArm(ctx, 0, shY, -(aL[0]) - gestR * 0.7, -aL[1], armLen, limbW);
    c._handR = { x: bx + handR.hx, y: by + handR.hy }; c._handL = { x: bx + handL.hx, y: by + handL.hy };

    // head (white, thin ink outline)
    const open = blink(f, seed);
    ctx.lineWidth = Math.max(4, R * 0.06);
    TM.shape(ctx, cc => cc.arc(0, headCy, R, 0, TM.TAU), P.white, Math.max(4, R * 0.06));
    // blush cheeks
    ctx.save(); ctx.globalAlpha = 0.85; ctx.fillStyle = '#F7A8B8';
    const chY = headCy + R * 0.26;
    ctx.beginPath(); ctx.ellipse(-R * 0.5, chY, R * 0.17, R * 0.11, 0, 0, TM.TAU); ctx.fill();
    ctx.beginPath(); ctx.ellipse(R * 0.5, chY, R * 0.17, R * 0.11, 0, 0, TM.TAU); ctx.fill();
    ctx.restore();
    // face: dot eyes + simple smile (talk opens it)
    const dx = (opts.faceDir || 0) * R * 0.12;
    const eyeY = headCy - R * 0.02, eo = R * 0.3;
    const talkOpen = !!opts.talk ? (Math.sin(f / 30 * 22 + seed) * 0.5 + 0.5) : 0;
    ctx.fillStyle = P.ink;
    ctx.beginPath(); ctx.ellipse(-eo + dx, eyeY, R * 0.09, R * 0.09 * open, 0, 0, TM.TAU); ctx.fill();
    ctx.beginPath(); ctx.ellipse(eo + dx, eyeY, R * 0.09, R * 0.09 * open, 0, 0, TM.TAU); ctx.fill();
    ctx.strokeStyle = P.ink; ctx.lineWidth = R * 0.06; ctx.lineCap = 'round';
    const my = headCy + R * 0.4;
    if (opts.talk && talkOpen > 0.4) {
      TM.shape(ctx, cc => cc.ellipse(dx, my, R * 0.12, R * 0.1 * talkOpen, 0, 0, TM.TAU), '#5a2630', R * 0.04);
    } else if (opts.expr === 'surprised' || opts.expr === 'shocked') {
      TM.shape(ctx, cc => cc.ellipse(dx, my, R * 0.12, R * 0.14, 0, 0, TM.TAU), '#5a2630', R * 0.04);
    } else {
      ctx.beginPath(); ctx.arc(dx, my - R * 0.08, R * 0.2, 0.15 * Math.PI, 0.85 * Math.PI); ctx.stroke();
    }
    // hat / hair on top
    drawHairHat(ctx, 0, headCy, R, c);
    ctx.restore();
    return c;
  }

  TM.drawChar = function (ctx, c, f, opts) {
    opts = opts || {};
    if (c.style === 'stick' || opts.style === 'stick') return drawStick(ctx, c, f, opts);
    const s = c.scale || 1, seed = c.seed || 1;
    const R = 78 * s;                 // head radius
    const bodyW = 116 * s, bodyH = 165 * s, legLen = 150 * s, armLen = 150 * s, limbW = 15 * s;
    // idle breathing + sway (continuous — guarantees intra-shot motion)
    const breathe = Math.sin(f / 30 * TM.TAU * 0.33 + seed) * (opts.bobAmp != null ? opts.bobAmp : 3) * s;
    const sway = TM.noise(f / 30 * 0.4, seed) * 0.02;
    const walkOn = !!opts.walk;
    const walkPh = (opts.walkPhase != null ? opts.walkPhase : f / 30 * 6.5);
    const bx = c.x + (walkOn ? 0 : TM.noise(f / 30 * 0.25, seed + 3) * 2 * s);
    const by = c.y + breathe + (walkOn ? Math.abs(Math.sin(walkPh)) * -6 * s : 0);

    ctx.save();
    ctx.translate(bx, by);
    ctx.rotate(sway);

    // cast shadow (world)
    TM.castShadow(ctx, 0, 6 * s, bodyW * 0.62, 20 * s, 0.2);

    const hipY = -legLen;
    const shoulderY = hipY - bodyH * 0.86;
    const headCy = shoulderY - R * 0.82 + Math.sin(f / 30 * TM.TAU * 0.33 + seed + 1) * 1.2 * s; // subtle head bob

    // legs
    if (walkOn) {
      drawLeg(ctx, -bodyW * 0.18, hipY, Math.sin(walkPh) * 0.5, legLen, limbW);
      drawLeg(ctx, bodyW * 0.18, hipY, Math.sin(walkPh + Math.PI) * 0.5, legLen, limbW);
    } else {
      drawLeg(ctx, -bodyW * 0.17, hipY, -0.04, legLen, limbW);
      drawLeg(ctx, bodyW * 0.17, hipY, 0.04, legLen, limbW);
    }

    // body capsule (outfit)
    const col = c.body || P.cyan;
    TM.shape(ctx, cc => TM.rr(cc, -bodyW / 2, shoulderY, bodyW, bodyH + (hipY - shoulderY) - bodyH + bodyH, bodyW * 0.44), col, 5);
    // fix: draw capsule from shoulderY to hipY
    TM.shape(ctx, cc => TM.rr(cc, -bodyW / 2, shoulderY, bodyW, (hipY - shoulderY) + bodyH * 0.08, bodyW * 0.42), col, 5);
    // pinstripes
    if (c.outfit === 'pinstripe') {
      ctx.save(); ctx.beginPath(); TM.rr(ctx, -bodyW / 2, shoulderY, bodyW, (hipY - shoulderY) + bodyH * 0.08, bodyW * 0.42); ctx.clip();
      ctx.globalAlpha = 0.25; ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 2.5 * s;
      for (let i = -3; i < 6; i++) { ctx.beginPath(); ctx.moveTo(-bodyW / 2 + i * 16 * s, shoulderY); ctx.lineTo(-bodyW / 2 + i * 16 * s + 20 * s, hipY + 30 * s); ctx.stroke(); }
      ctx.restore();
    }
    // collar + tie
    TM.shape(ctx, cc => { cc.moveTo(-R * 0.4, shoulderY + 4 * s); cc.lineTo(0, shoulderY + R * 0.5); cc.lineTo(R * 0.4, shoulderY + 4 * s); }, P.white, 3);
    if (c.tie) {
      ctx.fillStyle = c.tie;
      TM.shape(ctx, cc => { cc.moveTo(0, shoulderY + R * 0.18); cc.lineTo(-9 * s, shoulderY + R * 0.5); cc.lineTo(0, bodyH * 0.0 + shoulderY + R * 1.6); cc.lineTo(9 * s, shoulderY + R * 0.5); }, c.tie, 3);
    }
    if (c.pocket) { TM.shape(ctx, cc => TM.rr(cc, bodyW * 0.22, shoulderY + R * 0.55, 22 * s, 16 * s, 3), c.pocket, 3); }

    // arms (behind/over body). Right arm first (screen right), then left.
    const shL = -bodyW * 0.44, shR = bodyW * 0.44, shY = shoulderY + R * 0.3;
    const aR = poseAngles(opts.armR || 'hang'), aL = poseAngles(opts.armL || 'hang');
    const gestR = Math.sin(f / 30 * TM.TAU * 0.5 + seed) * (opts.gesture ? 0.12 : 0.03);
    const handR = drawArm(ctx, shR, shY, aR[0] + gestR, aR[1], armLen, limbW, col);
    const handL = drawArm(ctx, shL, shY, -(aL[0]) - gestR * 0.7, -aL[1], armLen, limbW, col);
    c._handR = { x: bx + handR.hx, y: by + handR.hy }; c._handL = { x: bx + handL.hx, y: by + handL.hy };

    // head
    const open = blink(f, seed);
    if (c.head === 'square') TM.shape(ctx, cc => TM.rr(cc, -R, headCy - R, R * 2, R * 2, R * 0.5), P.white, 6);
    else TM.shape(ctx, cc => cc.arc(0, headCy, R, 0, TM.TAU), P.white, 6);
    // head highlight
    TM.streak(ctx, cc => cc.ellipse(-R * 0.35, headCy - R * 0.4, R * 0.28, R * 0.18, -0.5, 0, TM.TAU), 0.5);
    drawFace(ctx, 0, headCy, R, opts.expr || 'calm', opts.open != null ? opts.open : open, !!opts.talk && (Math.sin(f / 30 * 22 + seed) * 0.5 + 0.5), opts.faceDir || 0);
    if (c.mustache) {
      ctx.fillStyle = '#2a2320';
      TM.shape(ctx, cc => { cc.ellipse(-R * 0.16, headCy + R * 0.3, R * 0.2, R * 0.09, 0.3, 0, TM.TAU); }, '#2a2320', 0);
      TM.shape(ctx, cc => { cc.ellipse(R * 0.16, headCy + R * 0.3, R * 0.2, R * 0.09, -0.3, 0, TM.TAU); }, '#2a2320', 0);
    }
    drawHairHat(ctx, 0, headCy, R, c);

    // sweat drops
    if (opts.sweat) {
      const n = 2; for (let i = 0; i < n; i++) {
        const dp = ((f / 30 * 1.5 + i * 0.5 + seed) % 1);
        const sxp = R * 0.95, syp = headCy - R * 0.3 + dp * R * 1.4;
        ctx.save(); ctx.globalAlpha = 1 - dp * 0.6; ctx.fillStyle = '#9fd8ff';
        TM.shape(ctx, cc => cc.ellipse(sxp, syp, 6 * s, 9 * s, 0, 0, TM.TAU), '#9fd8ff', 2); ctx.restore();
      }
    }
    ctx.restore();
    return c;
  };
})();
