/* ============================================================================
 * story.js — "Bernie Madoff: The Biggest Lie on Wall Street"   (v2 / TM.CC API)
 * Opening ~29.5 s (hook + first beats), cut on every clause of the voiceover.
 * Pattern for every shot:  bg → props (CC.obj / P.*) → actors (CC.actor) → text.
 * Times in CUES come from the user's own voiceover (align.py).
 * ==========================================================================*/
(function () {
  const TM = window.TM, CC = TM.CC, P = CC.P, PAL = CC.PAL, INK = CC.INK, W = TM.W, H = TM.H;
  const FL = 880;                       // floor line (feet)
  const SAMPLE_END = 29.5;              // render length (set to the full voice duration for a full video)
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
  const bag = (label) => (c) => P.moneyBag(c, 0, 60, { s: 0.55, label });

  /* 1 ─ 0.00–2.40  "For fifty years, Bernard Madoff…" — skyline, Madoff slides in, points at 50 YEARS */
  S(0, 2.4, (ctx, s) => {
    CC.bg(ctx, PAL.sky, { floor: FL, floorCol: PAL.tanDk });
    CC.cloud(ctx, 1500, 170, 1); CC.cloud(ctx, 380, 230, 0.7);
    CC.city(ctx, FL, PAL.slate, { xs: [110, 330, 1450, 1680, 1880] });
    CC.actor(ctx, s, 'madoff', { x: 700, y: FL, s: 1.45, expr: 'smug' }, [
      { at: 0, slideIn: 'left', dur: 0.6 }, { at: 0.75, pose: 'point', expr: 'confident' }, { at: 1.6, expr: 'grin' }
    ]);
    CC.obj(ctx, s, { x: 1260, y: 420, at: 0.8, in: 'pop' }, c => {
      CC.rect(c, -330, -110, 660, 220, PAL.white, 6, 10);
      CC.write(c, '50 YEARS', 0, 4, 100, PAL.red, s.lt - 0.8, 0.05, 0.5, { font: 'PMarker' });
    });
  });

  /* 2 ─ 2.40–4.58  "…ran the biggest lie in Wall Street history." — Wall St sign, LIE stamp */
  S(2.4, 4.58, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    P.bank(ctx, 1280, FL, { s: 1.15, label: 'WALL ST', col: PAL.cream });
    CC.actor(ctx, s, 'madoff', { x: 520, y: FL, s: 1.5, pose: 'present', expr: 'happy' }, [
      { at: 0.2, pose: 'hips', expr: 'smug' }, { at: 1.15, look: 0.6, expr: 'grin' }
    ]);
    CC.stamp(ctx, s, 'BIGGEST LIE', 1280, 560, 1.1, { size: 110 });
  });

  /* 3 ─ 4.58–6.98  "Sixty-five billion dollars." — coins drop into jar, cash stacks pop */
  S(4.58, 6.98, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL, floorCol: PAL.sageDk });
    CC.coinJar(ctx, s, { x: 960, y: FL, w: 300, h: 400, t0: 0.15, n: 6, gap: 0.3, fill0: 0.05, fill1: 0.9, label: '$65B' });
    [[560, 0.5], [1360, 0.8], [420, 1.1], [1500, 1.4]].forEach(([x, t], i) =>
      CC.obj(ctx, s, { x, y: FL, at: t, in: 'drop', from: 700 }, c => P.cashStack(c, 0, 0, { n: 3 + i % 2, s: 1.1 })));
    CC.word(ctx, '$65,000,000,000', 960, 190, 110, PAL.moneyDk, s.lt, 0.9);
  });

  /* 4 ─ 6.98–8.30  "Gone." — black + spotlight, jar puffs away, GONE writes on */
  S(6.98, 8.3, (ctx, s) => {
    CC.spot(ctx, 960, FL, { w: 330 });
    CC.obj(ctx, s, { x: 960, y: FL, in: 'none', outAt: 0.3, out: 'puff', outDur: 0.45 }, c => P.jar(c, 0, 0, { w: 300, h: 400, fill: 0.9, label: '$65B' }));
    CC.write(ctx, 'GONE.', 960, 330, 150, PAL.white, s.lt, 0.55, 0.45, { font: 'PMarker' });
  }, { sfx: [[0.3, 'whoosh']] });

  /* 5 ─ 8.30–9.93  "Here's the thing." — black chapter card (fade in/out) */
  S(8.3, 9.93, (ctx, s) => { CC.chapter(ctx, s, 'The Golden Boy', { kicker: 'PART ONE', at: 0.2, dur: 0.7 }); }, { fadeIn: 0.2, fadeOut: 0.2 });

  /* 6 ─ 9.93–11.55  "…wasn't some back-alley fraudster." — crook in alley gets a red X */
  S(9.93, 11.55, (ctx, s) => {
    CC.bg(ctx, PAL.slateDk, { floor: FL, floorCol: PAL.greyDk });
    for (let r = 0; r < 7; r++) for (let i = 0; i < 9; i++) CC.rect(ctx, 60 + i * 210 + (r % 2) * 105, 120 + r * 100, 190, 80, '#6F7D89', 3, 4);
    CC.obj(ctx, s, { x: 1450, y: FL, in: 'none' }, c => { CC.rect(c, -60, -110, 120, 110, PAL.greyDk, 5, 8); CC.rect(c, -70, -120, 140, 22, '#3A3A3A', 5, 4); });
    CC.actor(ctx, s, 'crook', { x: 860, y: FL, s: 1.4, pose: 'pocket', expr: 'smug', look: 0.5 }, [
      { at: 0, slideIn: 'right', from: 1250, dur: 0.35 }, { at: 0.75, expr: 'shock', pose: 'shrug', fx: 'sweat' }, { at: 1.1, slideOut: 'right', dur: 0.45 }
    ]);
    CC.obj(ctx, s, { x: 860, y: 560, at: 0.6, in: 'pop', outAt: 1.15, out: 'pop' }, c => P.xmark(c, 0, 0, 380));
  }, { whip: 'right' });

  /* 7 ─ 11.55–13.04  close-up on Madoff — punch-in, head-turn, smug thumbs up */
  S(11.55, 13.04, (ctx, s) => {
    CC.bg(ctx, PAL.rose, { floor: FL, floorCol: PAL.tanDk });
    CC.actor(ctx, s, 'madoff', { x: 960, y: FL + 140, s: 1.9, expr: 'neutral', look: -0.5 }, [
      { at: 0.35, turn: true, expr: 'smug' }, { at: 0.55, pose: 'thumb', cue: 'ding' }, { at: 0.55, talk: true, until: 1.4 }
    ]);
  }, { cam: CC.cam.punch(960, 470, 1.35, 0.35) });

  /* 8 ─ 13.04–15.81  "He was the former chairman of NASDAQ." — podium, chart draws on, crowd claps */
  S(13.04, 15.81, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL, floorCol: PAL.slate });
    CC.obj(ctx, s, { x: 1390, y: 640, in: 'slide-up', at: 0 }, c => P.computer(c, 0, 0, { s: 1.6, screen: '#DDEEF6',
      draw: k => { CC.text(k, 'NASDAQ', 0, -70, 40, INK, { font: 'PMarker' }); P.lineChart(k, -120, -40, 240, 110, [[0, 0.1], [0.25, 0.35], [0.5, 0.3], [0.75, 0.7], [1, 0.95]], CC.prog(CC.q(s.lt), 0.45, 1.0), { col: PAL.green, lw: 7, axes: false }); } }));
    CC.actor(ctx, s, 'madoff', { x: 640, y: FL - 30, s: 1.3, pose: 'present', expr: 'happy' }, [{ at: 0.6, pose: 'pointUp', expr: 'confident' }, { at: 1.8, pose: 'wave', expr: 'joy' }]);
    P.podium(ctx, 640, FL + 40, { label: 'NASDAQ', col: PAL.navy });
    CC.callout(ctx, 'CHAIRMAN', 640, 140, s.lt, 0.9, { size: 72, rot: -0.04 });
    ['investor', 'woman', 'investor2'].forEach((n, i) =>
      CC.actor(ctx, s, n, { x: 200 + i * 520, y: H + 210, s: 1.1, expr: 'joy', noLegs: true }, [{ at: 1.2 + i * 0.1, clap: true }]));
  });

  /* 9 ─ 15.81–17.70  "He had a penthouse in Manhattan," — pan up a tower to Madoff on the roof */
  S(15.81, 17.7, (ctx, s) => {
    CC.bg(ctx, PAL.sky);
    CC.cloud(ctx, 400, -200, 1.1); CC.cloud(ctx, 1550, 60, 0.9);
    CC.city(ctx, 1500, PAL.slate, { xs: [200, 450, 1500, 1750] });
    P.skyscraper(ctx, 960, 1500, { w: 420, h: 1600, col: PAL.slateDk, lit: true, seed: 4, antenna: true });
    CC.actor(ctx, s, 'madoff', { x: 1050, y: -100, s: 1.0, expr: 'joy' }, [{ at: 1.0, cheer: true, cue: 'ding' }]);
    CC.callout(ctx, 'PENTHOUSE', 1480, -300, s.lt, 1.05, { size: 70, rot: 0.04 });
  }, { cam: CC.cam.pan(960, 900, 960, -20, 1, 0, 1.0) });

  /* 10 ─ 17.70–19.10  "a yacht," — yacht slides in, Madoff waving from the deck */
  S(17.7, 19.1, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt);
    CC.obj(ctx, s, { x: 1550, y: 260, at: 0.1, in: 'pop' }, c => P.sun(c, 0, 0, { s: 1.2 }));
    const yx = 960 + 1100 * (1 - CC.easeOut(CC.prog(CC.q(s.lt), 0, 0.6))), by = 780 + Math.sin(CC.q(s.lt) * 4) * 6;
    CC.cue('whoosh', 0);
    CC.actor(ctx, s, 'madoff', { x: yx + 230, y: by - 75, s: 0.9, expr: 'joy' }, [{ at: 0.6, wave: true }]);
    P.yacht(ctx, yx, by, { s: 1.3 });
    P.water(ctx, 820, s.lt);
  });

  /* 11 ─ 19.10–21.48  "…a reputation that made grown men beg to give him their money." */
  S(19.1, 21.48, (ctx, s) => {
    CC.bg(ctx, PAL.beige, { floor: FL });
    const m = CC.actor(ctx, s, 'madoff', { x: 1450, y: FL, s: 1.4, pose: 'cross', expr: 'smug', flip: true }, [{ at: 1.7, pose: 'hold', expr: 'greedy', hold: bag('$'), hand: 'R' }]);
    ['investor', 'grandma', 'investor2'].forEach((n, i) => {
      const x = 380 + i * 280;
      const a = CC.actor(ctx, s, n, { x, y: FL, s: 1.05, pose: 'hold', expr: 'worried' }, [
        { at: 0, hold: bag('$') },
        { at: 0.15 + i * 0.12, kneel: true, pose: 'beg', fx: 'sweat' },
        ...(i === 2 ? [{ at: 1.2, hold: null }] : [])
      ]);
      if (i === 2) CC.handOver(ctx, s, 1.2, 0.5, { x: a.handR.x, y: a.handR.y }, { x: m.handR.x, y: m.handR.y }, c => P.moneyBag(c, 0, 60, { s: 0.55 }));
    });
    CC.word(ctx, 'PLEASE!', 650, 230, 90, PAL.red, s.lt, 0.5, { rot: -0.06 });
  });

  /* 12 ─ 21.48–23.91  "Clients didn't ask questions." — ? pops, gets crossed out, happy nods */
  S(21.48, 23.91, (ctx, s) => {
    CC.bg(ctx, PAL.sage, { floor: FL, floorCol: PAL.sageDk });
    ['woman', 'investor', 'grandma', 'investor2'].forEach((n, i) =>
      CC.actor(ctx, s, n, { x: 330 + i * 420, y: FL, s: 1.15, expr: 'curious', pose: 'think' }, [
        { at: 0.1 + i * 0.08, fx: 'question', until: 1.1 }, { at: 1.15, expr: 'happy', pose: 'thumb' }
      ]));
    CC.stamp(ctx, s, 'NO QUESTIONS', 960, 300, 1.15, { size: 100 });
  });

  /* 13 ─ 23.91–26.60  "When you're getting twelve percent every single year," — equal bars, 12% each */
  S(23.91, 26.6, (ctx, s) => {
    CC.bg(ctx, PAL.paper, { floor: FL });
    P.barChart(ctx, s, 640, 820, 1180, 460, [12, 12, 12, 12, 12], 0.25, { cols: [PAL.green], labels: ['12%', '12%', '12%', '12%', '12%'], under: ['1992', '1995', '1998', '2001', '2004'], gap: 0.3, max: 15 });
    CC.actor(ctx, s, 'madoff', { x: 340, y: FL, s: 1.25, expr: 'confident' }, [{ at: 0, pose: 'point', look: 0.6 }, { at: 1.8, expr: 'grin' }]);
    CC.write(ctx, 'EVERY. SINGLE. YEAR.', 1230, 200, 74, PAL.red, s.lt, 1.6, 0.6, { font: 'PMarker' });
  });

  /* 14 ─ 26.60–29.50  "no matter what the market does, you don't ask questions." — market crashes, jar keeps filling, punch-in */
  S(26.6, SAMPLE_END, (ctx, s) => {
    CC.bg(ctx, PAL.skyLt, { floor: FL, floorCol: PAL.slate });
    CC.rect(ctx, 120, 160, 760, 520, PAL.white, 6, 10);
    CC.text(ctx, 'THE MARKET', 500, 215, 56, INK, { font: 'PMarker' });
    P.lineChart(ctx, 180, 260, 640, 360, [[0, 0.5], [0.15, 0.8], [0.3, 0.3], [0.45, 0.65], [0.6, 0.1], [0.75, 0.55], [0.9, 0.05], [1, 0.3]], CC.prog(CC.q(s.lt), 0.1, 1.1), { col: PAL.red });
    CC.cue('scribble', 0.1);
    CC.coinJar(ctx, s, { x: 1260, y: FL, w: 240, h: 320, t0: 0.2, n: 4, gap: 0.3, fill0: 0.3, fill1: 0.8, label: '12%' });
    CC.actor(ctx, s, 'investor', { x: 1600, y: FL, s: 1.2, expr: 'happy', pose: 'hips', flip: true }, [
      { at: 1.6, expr: 'grin', pose: 'thumb' }, { at: 1.7, say: 'No questions!', side: -1, size: 50 }
    ]);
  }, { cam: CC.cam.push(1450, 600, 1.35, 1.5, 0.5), fadeOut: 0.3 });

  TM.config({ fps: 30, duration: SAMPLE_END, shots, phrases: TM.phrasesFromCues(CUES.map(([s, e, text]) => ({ s, e, text })), 6) });
  TM.CAPTIONS = false;   // channel style: no burned-in captions unless the user asks
})();
