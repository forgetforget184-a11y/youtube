/* ============================================================================
 * story.madoff.acting.js — Madoff opening (29.5 s) rebuilt under the ACTING RULES.
 * Same voiceover + cue times as story.madoff.example.js; every clause is now a
 * character DOING the thing the narration says (carry, hand over, grab, run,
 * snatch, bang, sit, beg, hush, flinch). Action column of the plan is in each header.
 * ==========================================================================*/
(function () {
  const TM = window.TM, CC = TM.CC, P = CC.P, PAL = CC.PAL, INK = CC.INK, W = TM.W, H = TM.H;
  const FL = 880;
  const SAMPLE_END = 29.5;
  const CUES = [
    [0.10, 4.58, "For fifty years, Bernard Madoff ran the biggest lie in Wall Street history."],
    [4.58, 6.98, "Sixty-five billion dollars."],
    [6.98, 8.30, "Gone."],
    [8.30, 9.93, "Here's the thing."],
    [9.93, 13.04, "Bernie Madoff wasn't some back-alley fraudster."],
    [13.04, 15.81, "He was the former chairman of NASDAQ."],
    [15.81, 21.48, "He had a penthouse in Manhattan, a yacht, and a reputation that made grown men beg to give him their money."],
    [21.48, 23.91, "Clients didn't ask questions."],
    [23.91, 29.47, "When you're getting twelve percent every single year, no matter what the market does, you don't ask questions."]
  ];
  const shots = [];
  const S = (a, b, draw, o) => shots.push(Object.assign({ start: a, end: b, draw }, o || {}));
  const bag = (label, s) => (c) => P.moneyBag(c, 0, 60, { s: s || 0.55, label });
  const cash = (c) => P.cashStack(c, 0, 40, { n: 2, s: 0.7 });
  const coinH = (c) => P.coin(c, 0, 30, { r: 26 });
  const lieBox = (c) => { CC.rect(c, -150, -230, 300, 170, PAL.tan, 6, 8); CC.text(c, 'THE LIE', 0, -145, 64, PAL.red, { font: 'PMarker' }); };

  /* 1 ─ 0.00–2.40 "For fifty years, Bernard Madoff"
     ACTION: Madoff walks in, tears calendar pages off one by one (years fly 1960→2008), then points at it smugly. */
  S(0, 2.4, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL, floorCol: PAL.tanDk });
    CC.cloud(ctx, 1550, 160, 0.9);
    CC.city(ctx, FL, PAL.slate, { xs: [110, 1700, 1880] });
    const lq = CC.q(s.lt);
    const tears = [0.65, 0.95, 1.25, 1.55], yr = 1960 + 12 * tears.filter(t => lq >= t).length;
    // calendar on an easel
    CC.line(ctx, [[1180, FL], [1260, 560]], 8, INK); CC.line(ctx, [[1420, FL], [1340, 560]], 8, INK);
    CC.rect(ctx, 1110, 300, 380, 330, PAL.white, 6, 10);
    CC.rect(ctx, 1110, 300, 380, 70, PAL.red, 6, 10);
    CC.text(ctx, 'YEAR', 1300, 336, 44, PAL.white, { font: 'PMarker' });
    CC.text(ctx, String(yr), 1300, 500, 120, INK, { font: 'PMarker' });
    // torn pages flying off every 0.15 s while counting
    for (let i = 0; i < 4; i++) {
      const t0 = tears[i], u = CC.prog(lq, t0, 0.55);
      if (u <= 0 || u >= 1) continue;
      if (lq - t0 < 1 / 30) CC.cue('whoosh', t0);
      ctx.save(); ctx.globalAlpha = 1 - u; ctx.translate(1300 + 520 * u, 465 - 300 * Math.sin(u * Math.PI) + 350 * u * u); ctx.rotate(u * 4);
      CC.rect(ctx, -90, -70, 180, 140, PAL.white, 4, 6); ctx.restore();
    }
    CC.actor(ctx, s, 'madoff', { x: 900, y: FL, s: 1.4, expr: 'smug', look: 0.5 }, [
      { at: 0, slideIn: 'left', dur: 0.55 },
      { at: 0.55, slideTo: 1020, dur: 0.2 },
      ...[0.65, 0.95, 1.25, 1.55].flatMap(t => [{ at: t - 0.12, pose: 'pointUp', expr: 'grin' }, { at: t, pose: 'present' }]),
      { at: 1.85, pose: 'point', expr: 'smug', cue: 'ding' }, { at: 1.85, talk: true, until: 2.35 }
    ]);
    CC.word(ctx, '50 YEARS', 1300, 200, 90, PAL.red, s.lt, 1.85);
  });

  /* 2 ─ 2.40–4.58 "ran the biggest lie in Wall Street history."
     ACTION: Madoff carries a huge box labelled THE LIE overhead into Wall St, bank guard waves him through, BIGGEST LIE stamp. */
  S(2.4, 4.58, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    P.bank(ctx, 1380, FL, { s: 1.1, label: 'WALL ST', col: PAL.cream });
    CC.actor(ctx, s, 'cop', { x: 1720, y: FL, s: 1.15, expr: 'happy', flip: true }, [
      { at: 0.7, wave: true, until: 1.6 }, { at: 0.7, expr: 'joy' }
    ]);
    CC.actor(ctx, s, 'madoff', { x: 260, y: FL, s: 1.3, expr: 'grin' }, [
      { at: 0, carry: lieBox }, { at: 0.05, slideTo: 1240, dur: 1.5 }, { at: 1.6, expr: 'smug' }
    ]);
    CC.stamp(ctx, s, 'BIGGEST LIE', 700, 260, 1.5, { size: 100 });
  });

  /* 3 ─ 4.58–6.98 "Sixty-five billion dollars."
     ACTION: three investors step up and toss money bags into Madoff's giant jar; jar fills; Madoff rubs hands (greedy). */
  S(4.58, 6.98, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL, floorCol: PAL.sageDk });
    const lq = CC.q(s.lt), tosses = [0.35, 0.95, 1.55];
    const landed = tosses.filter(t => lq >= t + 0.45).length;
    CC.obj(ctx, s, { x: 1150, y: FL, in: 'none', jiggle: tosses.map(t => t + 0.45) }, c => P.jar(c, 0, 0, { w: 320, h: 420, fill: 0.1 + 0.27 * landed, label: '$65B' }));
    CC.actor(ctx, s, 'madoff', { x: 1600, y: FL, s: 1.3, expr: 'greedy', flip: true, pose: 'clap' }, [{ at: 0.4, clap: true, until: 2.2 }]);
    const names = ['investor', 'woman', 'investor2'];
    names.forEach((n, i) => {
      const t = tosses[i];
      const a = CC.actor(ctx, s, n, { x: 640, y: FL, s: 1.1, expr: 'happy', pose: 'hold' }, [
        { at: 0, hide: true }, { at: t - 0.3, show: true }, { at: t - 0.3, slideIn: 'left', dur: 0.3, hold: bag('$') },
        { at: t, pose: 'give', hold: null }, { at: t + 0.3, slideOut: 'left', dur: 0.3 }
      ]);
      CC.handOver(ctx, s, t, 0.45, { x: 790, y: 560 }, { x: 1150, y: FL - 470 }, c => P.moneyBag(c, 0, 60, { s: 0.55, label: '$' }), { h: 160 });
    });
    CC.word(ctx, '$65,000,000,000', 900, 170, 100, PAL.moneyDk, s.lt, 1.0);
  });

  /* 4 ─ 6.98–8.30 "Gone."
     ACTION: spotlight — Madoff grabs the jar and sprints off right; the investor left behind turns, shocked & sweating. */
  S(6.98, 8.3, (ctx, s) => {
    CC.spot(ctx, 960, FL, { w: 420 });
    CC.actor(ctx, s, 'investor', { x: 560, y: FL, s: 1.2, expr: 'happy', look: -0.4 }, [
      { at: 0.55, turn: true, expr: 'shock', fx: 'shock' }, { at: 0.7, pose: 'face', fx: 'sweat' }
    ]);
    CC.actor(ctx, s, 'madoff', { x: 1080, y: FL, s: 1.2, expr: 'greedy', pose: 'hold2' }, [
      { at: 0, hold: (c) => P.jar(c, 0, 150, { w: 170, h: 220, fill: 0.9, label: '$65B' }), s: 1 },
      { at: 0.25, pose: 'run', expr: 'grin' }, { at: 0.3, slideOut: 'right', dur: 0.35 }
    ]);
    CC.write(ctx, 'GONE.', 960, 300, 150, PAL.white, s.lt, 0.6, 0.4, { font: 'PMarker' });
  });

  /* 5 ─ 8.30–9.93 "Here's the thing." — chapter card */
  S(8.3, 9.93, (ctx, s) => { CC.chapter(ctx, s, 'The Golden Boy', { kicker: 'PART ONE', at: 0.2, dur: 0.7 }); }, { fadeIn: 0.2, fadeOut: 0.2 });

  /* 6 ─ 9.93–11.55 "Bernie Madoff wasn't some back-alley fraudster."
     ACTION: a crook sneaks up in an alley and snatches a woman's purse; a giant red X slams on him; he bolts. */
  S(9.93, 11.55, (ctx, s) => {
    CC.bg(ctx, PAL.slateDk, { floor: FL, floorCol: PAL.greyDk });
    for (let r = 0; r < 7; r++) for (let i = 0; i < 9; i++) CC.rect(ctx, 60 + i * 210 + (r % 2) * 105, 120 + r * 100, 190, 80, '#6F7D89', 3, 4);
    const purse = (c) => { CC.rect(c, -40, 0, 80, 60, PAL.purple, 5, 10); CC.line(c, [[-25, 0], [0, -30], [25, 0]], 5, INK); };
    const w = CC.actor(ctx, s, 'woman', { x: 1150, y: FL, s: 1.15, expr: 'happy', flip: true }, [
      { at: 0, hold: purse, hand: 'R' }, { at: 0.45, hold: null }, { at: 0.5, expr: 'shock', fx: 'shock', pose: 'reach' }
    ]);
    const c = CC.actor(ctx, s, 'crook', { x: 780, y: FL, s: 1.25, pose: 'reach', expr: 'smug' }, [
      { at: 0, slideIn: 'left', from: -200, dur: 0.4 },
      { at: 0.75, hold: purse, hand: 'R', pose: 'run', expr: 'grin' },
      { at: 0.95, expr: 'scared', fx: 'sweat' },
      { at: 1.15, slideOut: 'left', dur: 0.35 }
    ]);
    CC.handOver(ctx, s, 0.45, 0.3, { x: w.handR.x, y: w.handR.y }, { x: c.handR.x, y: c.handR.y }, purse, { h: 30 });
    CC.obj(ctx, s, { x: 780, y: 560, at: 0.9, in: 'pop', cue: 'stamp' }, k => P.xmark(k, 0, 0, 380));
  }, { whip: 'right' });

  /* 7 ─ 11.55–13.04 punch-in: Madoff steps in, straightens his tie, turns to us — 'Me? Never.' */
  S(11.55, 13.04, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL, floorCol: PAL.tanDk });
    CC.actor(ctx, s, 'madoff', { x: 960, y: FL + 140, s: 1.9, expr: 'neutral', look: -0.5, pose: 'face' }, [
      { at: 0, slideIn: 'right', from: 1300, dur: 0.3 }, { at: 0.3, gesture: true, until: 0.6 },
      { at: 0.6, turn: true, expr: 'smug', pose: 'thumb', cue: 'ding' },
      { at: 0.7, say: 'Me? Never.', side: 1, size: 54 }, { at: 0.7, talk: true, until: 1.3 }
    ]);
  }, { cam: CC.cam.punch(960, 470, 1.3, 0.35) });

  /* 8 ─ 13.04–15.81 "He was the former chairman of NASDAQ."
     ACTION: a banker hands Madoff a gavel; he steps up to the podium and BANGS it; the crowd claps; chart climbs. */
  S(13.04, 15.81, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL, floorCol: PAL.slate });
    const lq = CC.q(s.lt);
    CC.obj(ctx, s, { x: 1450, y: 600, in: 'slide-up', at: 0 }, c => P.computer(c, 0, 0, { s: 1.5, screen: '#DDEEF6',
      draw: k => { CC.text(k, 'NASDAQ', 0, -70, 40, INK, { font: 'PMarker' }); P.lineChart(k, -120, -40, 240, 110, [[0, 0.1], [0.3, 0.35], [0.55, 0.3], [0.8, 0.7], [1, 0.95]], CC.prog(lq, 1.2, 1.2), { col: PAL.green, lw: 7, axes: false }); } }));
    const gav = (c) => P.gavel(c, 0, 20, { s: 0.55, rot: -0.3 });
    const banks = [1.6, 1.95, 2.3];
    const banging = banks.some(t => lq >= t && lq < t + 0.12);
    banks.forEach(t => CC.cue('thud', t));
    const b = CC.actor(ctx, s, 'banker', { x: 260, y: FL, s: 1.15, expr: 'happy', pose: 'give' }, [
      { at: 0, hold: gav }, { at: 0.35, hold: null }, { at: 0.5, clap: true }
    ]);
    const m = CC.actor(ctx, s, 'madoff', { x: 520, y: FL, s: 1.25, expr: 'happy', pose: 'reach' }, [
      { at: 0.85, hold: gav, pose: 'fist', expr: 'confident' }, { at: 0.9, slideTo: 800, toY: FL - 30, dur: 0.6 },
      ...banks.map(t => ({ at: t, pose: 'hold' })), ...banks.map(t => ({ at: t + 0.12, pose: 'fist' }))
    ]);
    CC.handOver(ctx, s, 0.35, 0.5, { x: b.handR.x, y: b.handR.y }, { x: m.handR.x, y: m.handR.y }, gav, { h: 60 });
    P.podium(ctx, 800, FL + 40, { label: 'NASDAQ', col: PAL.navy });
    if (banging) CC.text(ctx, 'BANG!', 960, 470, 70, PAL.red, { font: 'PMarker' });
    CC.callout(ctx, 'CHAIRMAN', 800, 140, s.lt, 1.6, { size: 72, rot: -0.04 });
    ['investor', 'woman', 'investor2'].forEach((n, i) =>
      CC.actor(ctx, s, n, { x: 300 + i * 600, y: H + 210, s: 1.1, expr: 'joy', noLegs: true }, [{ at: 1.7 + i * 0.1, clap: true }]));
  });

  /* 9 ─ 15.81–17.70 "He had a penthouse in Manhattan,"
     ACTION: camera climbs the tower; on the roof Madoff drops into a lounge chair, kicks back and stretches. */
  S(15.81, 17.7, (ctx, s) => {
    CC.bg(ctx, PAL.sky);
    CC.cloud(ctx, 400, -200, 1.1); CC.cloud(ctx, 1550, 60, 0.9);
    CC.city(ctx, 1500, PAL.slate, { xs: [200, 450, 1500, 1750] });
    P.skyscraper(ctx, 960, 1500, { w: 420, h: 1600, col: PAL.slateDk, lit: true, seed: 4, antenna: true });
    P.chair(ctx, 1070, -100, { col: PAL.red });
    CC.actor(ctx, s, 'madoff', { x: 820, y: -100, s: 1.0, expr: 'happy' }, [
      { at: 0.5, slideTo: 1070, dur: 0.35 }, { at: 0.9, sit: true, pose: 'cross', expr: 'joy' },
      { at: 1.3, pose: 'cheer', cue: 'ding' }
    ]);
    CC.callout(ctx, 'PENTHOUSE', 1480, -300, s.lt, 1.1, { size: 70, rot: 0.04 });
  }, { cam: CC.cam.pan(960, 900, 960, -20, 1, 0, 0.9) });

  /* 10 ─ 17.70–19.10 "a yacht," — yacht sails in; Madoff on deck tosses his hat in the air and catches it. */
  S(17.7, 19.1, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt);
    CC.obj(ctx, s, { x: 1550, y: 260, at: 0.1, in: 'pop' }, c => P.sun(c, 0, 0, { s: 1.2 }));
    const lq = CC.q(s.lt);
    const yx = 960 + 1100 * (1 - CC.easeOut(CC.prog(lq, 0, 0.6))), by = 780 + Math.sin(lq * 4) * 6;
    CC.cue('whoosh', 0);
    const m = CC.actor(ctx, s, 'madoff', { x: yx + 230, y: by - 75, s: 0.9, expr: 'joy', pose: 'hold' }, [
      { at: 0, hold: (c) => P.bill(c, 0, 20, { s: 0.6 }) }, { at: 0.65, pose: 'fist', hold: null, cue: 'whoosh' }, { at: 0.7, jump: 60, dur: 0.5 }, { at: 0.7, expr: 'grin' }
    ]);
    // bills he flings into the air flutter down
    for (let i = 0; i < 5; i++) {
      const u = CC.prog(lq, 0.65 + i * 0.04, 0.7); if (u <= 0) continue;
      ctx.save(); ctx.translate(yx + 230 + (i - 2) * 70 * u, by - 420 - 200 * Math.sin(u * Math.PI) + 160 * u); ctx.rotate(u * (i % 2 ? 3 : -3));
      P.bill(ctx, 0, 0, { s: 0.55 }); ctx.restore();
    }
    P.yacht(ctx, yx, by, { s: 1.3 });
    P.water(ctx, 820, s.lt);
    void m;
  });

  /* 11 ─ 19.10–21.48 "...a reputation that made grown men beg to give him their money."
     ACTION: Madoff turns his nose up and walks away; investors chase him, drop to their knees and BEG; he finally takes a bag. */
  S(19.1, 21.48, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    const m = CC.actor(ctx, s, 'madoff', { x: 1250, y: FL, s: 1.4, pose: 'cross', expr: 'smug', flip: false }, [
      { at: 0.1, slideTo: 1550, dur: 0.6 }, { at: 0.75, pose: 'hips', expr: 'bored', look: -0.4 }, { at: 1.0, shake: true, dur: 0.15 }, { at: 1.3, turn: true, expr: 'curious', pose: 'cross' }, { at: 1.75, pose: 'hold', expr: 'greedy', hold: bag('$') }
    ]);
    ['investor', 'grandma', 'investor2'].forEach((n, i) => {
      const a = CC.actor(ctx, s, n, { x: 200 + i * 260, y: FL, s: 1.05, pose: 'hold', expr: 'worried' }, [
        { at: 0, hold: bag('$') },
        { at: 0.1 + i * 0.1, slideTo: 520 + i * 260, dur: 0.6, pose: 'run' },
        { at: 0.75 + i * 0.12, kneel: true, pose: 'beg', fx: 'sweat' },
        ...(i === 2 ? [{ at: 1.3, hold: null, pose: 'give' }] : [])
      ]);
      if (i === 2) CC.handOver(ctx, s, 1.3, 0.45, { x: a.handR.x, y: a.handR.y }, { x: m.handR.x, y: m.handR.y }, c => P.moneyBag(c, 0, 60, { s: 0.55, label: '$' }));
    });
    CC.word(ctx, 'PLEASE!', 650, 230, 90, PAL.red, s.lt, 0.8, { rot: -0.06 });
  });

  /* 12 ─ 21.48–23.91 "Clients didn't ask questions."
     ACTION: a client raises his hand with a question — Madoff slaps a cash stack into it; the client grins and zips his lips;
     the client next to him covers her own mouth. */
  S(21.48, 23.91, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL, floorCol: PAL.sageDk });
    const c1 = CC.actor(ctx, s, 'investor', { x: 900, y: FL, s: 1.2, expr: 'curious', pose: 'pointUp' }, [
      { at: 0.1, fx: 'question', until: 1.0 }, { at: 1.0, pose: 'hold', hold: cash, expr: 'greedy' },
      { at: 1.5, pose: 'face', expr: 'happy' }
    ]);
    const m = CC.actor(ctx, s, 'madoff', { x: 1450, y: FL, s: 1.3, expr: 'smug', flip: true }, [
      { at: 0.4, pose: 'give', hold: cash }, { at: 0.6, hold: null }
    ]);
    CC.handOver(ctx, s, 0.6, 0.4, { x: m.handR.x, y: m.handR.y }, { x: c1.handR.x, y: c1.handR.y }, cash, { h: 70 });
    CC.actor(ctx, s, 'woman', { x: 450, y: FL, s: 1.15, expr: 'curious', pose: 'think' }, [
      { at: 0.2, fx: 'question', until: 1.2 }, { at: 1.2, look: 0.6, expr: 'worried' }, { at: 1.6, pose: 'face', expr: 'happy' }
    ]);
    CC.stamp(ctx, s, 'NO QUESTIONS', 960, 250, 1.6, { size: 96 });
  });

  /* 13 ─ 23.91–26.60 "When you're getting twelve percent every single year,"
     ACTION: Madoff flips a coin into the investor's jar every year; each throw pops a 12% bar; investor cheers. */
  S(23.91, 26.6, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    const lq = CC.q(s.lt), throws = [0.25, 0.65, 1.05, 1.45, 1.85];
    P.barChart(ctx, s, 560, 600, 800, 380, [12, 12, 12, 12, 12], 0.55, { cols: [PAL.green], labels: ['12%', '12%', '12%', '12%', '12%'], under: ['1992', '1995', '1998', '2001', '2004'], gap: 0.4, max: 15 });
    const landed = throws.filter(t => lq >= t + 0.35).length;
    CC.obj(ctx, s, { x: 1520, y: FL, in: 'none', jiggle: throws.map(t => t + 0.35) }, c => P.jar(c, 0, 0, { w: 200, h: 240, fill: 0.15 + 0.15 * landed, label: '12%' }));
    const m = CC.actor(ctx, s, 'madoff', { x: 300, y: FL, s: 1.15, expr: 'confident', pose: 'hold' }, [
      { at: 0, hold: coinH }, ...throws.flatMap(t => [{ at: t, pose: 'give' }, { at: t + 0.2, pose: 'hold' }])
    ]);
    throws.forEach(t => { CC.handOver(ctx, s, t, 0.35, { x: m.handR.x, y: m.handR.y }, { x: 1520, y: FL - 260 }, coinH, { h: 380 }); CC.cue('clink', t + 0.35); });
    CC.actor(ctx, s, 'investor2', { x: 1790, y: FL, s: 1.15, expr: 'happy', flip: true }, [{ at: 0.6, cheer: true }, { at: 0.6, expr: 'joy' }]);
    CC.write(ctx, 'EVERY. SINGLE. YEAR.', 960, 120, 70, PAL.red, s.lt, 1.7, 0.6, { font: 'PMarker', maxW: 1400 });
  });

  /* 14 ─ 26.60–29.50 "no matter what the market does, you don't ask questions."
     ACTION: the market chart crashes — an analyst jumps back and faints; the investor at the jar covers his eyes, grinning: 'No questions!' */
  S(26.6, SAMPLE_END, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL, floorCol: PAL.slate });
    const lq = CC.q(s.lt);
    CC.rect(ctx, 120, 160, 760, 520, PAL.white, 6, 10);
    CC.text(ctx, 'THE MARKET', 500, 215, 56, INK, { font: 'PMarker' });
    P.lineChart(ctx, 180, 260, 640, 360, [[0, 0.55], [0.2, 0.8], [0.35, 0.6], [0.5, 0.85], [0.65, 0.4], [0.8, 0.18], [1, 0.03]], CC.prog(lq, 0.1, 1.0), { col: PAL.red });
    CC.cue('scribble', 0.1);
    CC.actor(ctx, s, 'analyst', { x: 650, y: FL, s: 1.1, expr: 'worried', pose: 'point', look: -0.5, flip: true }, [
      { at: 0.75, jump: 90, dur: 0.45, expr: 'shock', fx: 'shock' }, { at: 1.2, pose: 'face', fx: 'sweat' },
      { at: 1.5, collapse: 'right', dur: 0.35, expr: 'scared' }
    ]);
    CC.coinJar(ctx, s, { x: 1260, y: FL, w: 240, h: 320, t0: 0.2, n: 4, gap: 0.35, fill0: 0.3, fill1: 0.85, label: '12%' });
    CC.actor(ctx, s, 'investor', { x: 1600, y: FL, s: 1.2, expr: 'happy', pose: 'hips', flip: true }, [
      { at: 0.8, look: -0.5, expr: 'curious' }, { at: 1.5, turn: true, pose: 'face', expr: 'grin' },
      { at: 1.8, say: 'No questions!', side: -1, size: 50 }
    ]);
  }, { cam: CC.cam.push(1150, 600, 1.2, 1.6, 0.5), fadeOut: 0.3 });

  TM.config({ fps: 30, duration: SAMPLE_END, shots, phrases: TM.phrasesFromCues(CUES.map(([s, e, text]) => ({ s, e, text })), 6) });
  TM.CAPTIONS = false;
})();
