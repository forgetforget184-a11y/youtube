/* ============================================================================
 * story.js — "Bernie Madoff: The Biggest Lie on Wall Street"
 * Crayon-Capital-style 2D puppet explainer built on TM.C (crayon.js).
 * Every shot = flat muted bg + jointed white-head characters that move,
 * marker panels / bubbles / props that pop in on the beat, hard cuts.
 * ==========================================================================*/
(function () {
  const TM = window.TM, C = TM.C, K = C.K, W = TM.W, H = TM.H;
  const lerp = TM.lerp, clamp = TM.clamp;
  const FL = 860;            // floor line (feet)
  const CUES = [
    [0.10, 4.58, "For fifty years, Bernard Madoff ran the biggest lie in Wall Street history."],
    [4.58, 6.98, "Sixty-five billion dollars."], [6.98, 8.30, "Gone."], [8.30, 9.93, "Here's the thing."],
    [9.93, 13.04, "Bernie Madoff wasn't some back-alley fraudster."], [13.04, 15.81, "He was the former chairman of NASDAQ."],
    [15.81, 21.48, "He had a penthouse in Manhattan, a yacht, and a reputation that made grown men beg to give him their money."],
    [21.48, 23.91, "Clients didn't ask questions."],
    [23.91, 29.47, "When you're getting twelve percent every single year, no matter what the market does, you don't ask questions."],
    [29.47, 31.36, "That was the tell."], [31.36, 33.48, "Markets go up and down."], [33.48, 35.43, "That's the whole point."],
    [35.43, 38.08, "But Madoff's fund never went down."], [38.08, 40.86, "Not in crashes, not in corrections."],
    [40.86, 43.74, "Every single month, steady returns."], [43.74, 45.68, "It was too perfect."], [45.68, 47.50, "Because it was fake."],
    [47.50, 50.50, "Here's how the Ponzi scheme actually worked."], [50.50, 53.08, "New investors wire in their money."],
    [53.08, 55.51, "That money doesn't get invested."], [55.51, 58.03, "It goes straight into a bank account."],
    [58.03, 63.11, "When old investors want to withdraw, Madoff pays them with the new investors' deposits."],
    [63.11, 65.16, "He pockets the difference."],
    [65.16, 70.25, "As long as new money keeps coming in faster than old money goes out, the machine keeps running."],
    [70.25, 72.59, "And for fifty years, it did."], [72.59, 75.53, "The biggest banks in the world sent him money."],
    [75.53, 77.70, "Hedge funds sent him money."], [77.70, 79.73, "Charities sent him money."], [79.73, 81.99, "Celebrities sent him money."],
    [81.99, 88.33, "Even other investment managers sent him money, because they couldn't figure out how he did it, and they just wanted a piece."],
    [88.33, 92.57, "One analyst, Harry Markopolos, figured it out in four hours."],
    [92.57, 96.32, "He ran the numbers, and they were mathematically impossible."],
    [96.32, 99.39, "He took his findings to the SEC. Twice."], [99.39, 101.11, "They did nothing."], [101.11, 103.36, "Then 2008 happened."],
    [103.36, 107.25, "The market collapsed, and everyone needed their money back at once."],
    [107.25, 110.76, "Madoff needed seven billion dollars in withdrawals."], [110.76, 113.64, "He had three hundred million in the account."],
    [113.64, 115.50, "The machine stopped."], [115.50, 118.88, "He called his sons into his apartment and confessed."],
    [118.88, 121.60, "His sons turned him in the next morning."], [121.60, 125.20, "The day Bernie Madoff was arrested, he was worth nothing."],
    [125.20, 129.07, "He had spent decades as one of the most trusted names in finance."],
    [129.07, 133.58, "It ended with a pair of handcuffs and a one-hundred-and-fifty-year prison sentence."],
    [133.58, 137.53, "He died in prison in 2021, at eighty-two years old."], [137.53, 138.97, "The lesson?"],
    [138.97, 141.74, "The best scams don't look like scams."],
    [141.74, 145.728, "They look like the opportunity everyone else is too stupid to see."]
  ];
  const cues = CUES.map(c => ({ s: c[0], e: c[1], text: c[2] }));

  /* ---------------- cast ---------------- */
  const madoff = (x, y, s, extra) => Object.assign({ x, y: y == null ? FL : y, s: s || 1, seed: 7, body: K.navy, pants: K.navy, suit: true, tie: K.red, hair: { type: 'side', color: '#CFCFCF' }, old: true }, extra || {});
  const guy = (x, col, seed, hair, extra) => Object.assign({ x, y: FL, s: 0.9, seed, body: col, pants: K.ink, hair: hair || { type: 'short', color: '#3a2a20' } }, extra || {});
  const suitGuy = (x, col, seed, extra) => Object.assign({ x, y: FL, s: 0.9, seed, body: col, pants: K.navy, suit: true, tie: K.yellow, hair: { type: 'short', color: '#4a3a2a' } }, extra || {});
  const harry = (x, extra) => Object.assign({ x, y: FL, s: 1, seed: 21, body: K.blue, pants: K.ink, glasses: true, hair: { type: 'short', color: '#2b2b2b' } }, extra || {});
  const cop = (x, extra) => Object.assign({ x, y: FL, s: 1, seed: 33, body: K.navy, pants: K.navy, hat: 'cop', hatCol: K.navy, emblem: '★', emblemCol: K.yellow }, extra || {});
  const tw = (from, to, lt, t0, d) => ({ from, to, u: C.prog(lt, t0, d || 0.3) });
  const walkX = (lt, t0, dur, x0, x1) => lerp(x0, x1, C.smooth(lt, t0, dur));
  const walking = (lt, t0, dur) => lt >= t0 && lt < t0 + dur;
  const push = (z) => ({ from: { x: W / 2, y: H / 2, zoom: 1 }, to: { x: W / 2, y: H / 2, zoom: z || 1.07 } });
  const pan = (x0, y0, x1, y1, z) => ({ from: { x: x0, y: y0, zoom: z || 1 }, to: { x: x1, y: y1, zoom: z || 1 } });
  function skyline(ctx, col, lit) {
    const xs = [120, 330, 560, 1380, 1600, 1810];
    xs.forEach((x, i) => C.building(ctx, x, FL, 190, 380 + (i * 97 % 220), col, { lit, seed: i * 5 }));
  }
  function moneyHand(ctx, p, s) { if (p._handR) C.bill(ctx, p._handR.x, p._handR.y - 10, s || 0.55, -0.3); }

  const shots = [];
  const S = (start, end, draw, cam) => shots.push({ start, end, draw, cam });

  /* 1 — biggest lie */
  S(0, 4.58, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.slate); skyline(ctx, K.slateDk, true); C.floor(ctx, FL, K.slateDk);
    const x = walkX(lt, 0, 1.8, -200, 820);
    const p = madoff(x); C.person(ctx, p, f, { walk: walking(lt, 0, 1.8), expr: 'smug', armR: lt > 2 ? tw('hang', 'wave', lt, 2) : 'hang', armL: 'pocket', talk: lt > 2 });
    C.panel(ctx, 'BIGGEST LIE IN\nWALL STREET HISTORY', 1360, 230, lt, 2.4, { size: 66, write: true, writeDur: 0.9 });
    C.word(ctx, '50 YEARS', 380, 200, 90, K.yellow, lt, 0.6, { rot: -0.08 });
  }, push(1.08));

  /* 2 — $65 billion */
  S(4.58, 6.98, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.teal); C.floor(ctx, FL, K.tealDk);
    C.pile(ctx, 960, FL, 1.1, 6, C.prog(lt, 0, 1.6));
    C.billStream(ctx, lt, 0, 2.2, -100, 200, 960, 600, { gap: 0.08, fly: 0.6, s: 0.8, h: 60 });
    C.billStream(ctx, lt, 0.05, 2.2, 2020, 200, 960, 600, { gap: 0.09, fly: 0.6, s: 0.8, h: 60 });
    C.panel(ctx, '$65,000,000,000', 960, 200, lt, 0.25, { size: 110, bg: K.black, col: K.money, write: true, writeDur: 0.8 });
  }, push(1.05));

  /* 3 — Gone */
  S(6.98, 8.30, (ctx, s) => {
    const { lt } = s; C.bg(ctx, K.black);
    if (lt < 0.25) C.pile(ctx, 960, FL, 1.1, 6, 1);
    C.puff(ctx, 960, 700, C.prog(lt, 0.15, 0.9), 2.2);
    C.shake(ctx, lt, 0.3, 18, 0.4);
    C.stamp(ctx, 'GONE.', 960, 470, lt, 0.3, { col: K.red, size: 220, rot: -0.06 });
  });

  /* 4 — here's the thing */
  S(8.30, 9.93, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.beige);
    const p = madoff(700, 1180, 1.7); C.person(ctx, p, f, { expr: 'curious', faceDir: 1, armR: tw('hang', 'point', lt, 0.3), talk: true, hide: 'legs', noShadow: true });
    C.panel(ctx, "HERE'S THE THING", 1380, 300, lt, 0.2, { size: 80, rot: 0.04 });
  }, push(1.06));

  /* 5 — not a back-alley fraudster */
  S(9.93, 13.04, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.grey); C.floor(ctx, FL, K.greyDk);
    // alley side
    TM.shape(ctx, c => c.rect(0, 0, 820, FL), '#5a5f66', 0);
    C.trash(ctx, 160, FL, 1.2);
    const crook = guy(450, '#3b3b3b', 14, null, { hat: 'fedora', hatCol: K.ink, shades: true });
    C.person(ctx, crook, f, { expr: 'smug', armR: 'pocket', armL: 'pocket', lean: Math.sin(lt * 2) * 0.03 });
    C.xmark(ctx, 450, 470, 260, lt, 1.0);
    // Madoff side
    const p = madoff(1350); C.person(ctx, p, f, { expr: 'happy', armR: tw('hang', 'thumb', lt, 1.6), armL: 'pocket', talk: lt > 1.6 });
    C.panel(ctx, 'BACK-ALLEY CROOK?', 450, 170, lt, 0.2, { size: 54 });
    C.check(ctx, 1600, 330, 150, lt, 2.0);
  });

  /* 6 — chairman of NASDAQ */
  S(13.04, 15.81, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.navy); C.floor(ctx, FL, K.night);
    C.chart(ctx, 1150, 260, 600, 380, [[0, .1], [.25, .3], [.5, .45], [.75, .7], [1, .95]], C.prog(lt, 0.2, 1.8), { col: K.green, axisCol: K.white });
    const p = madoff(620); C.person(ctx, p, f, { expr: 'smug', armR: tw('hang', 'present', lt, 0.5), armL: 'wave', talk: true });
    C.podium(ctx, 620, FL, 300, 260, K.brown);
    C.text(ctx, 'NASDAQ', 620, FL - 150, 56, K.white, { stroke: 8 });
    C.panel(ctx, 'FORMER CHAIRMAN', 620, 180, lt, 0.6, { size: 62, bg: K.yellow, col: K.ink });
    for (let i = 0; i < 4; i++) C.sparkle(ctx, 300 + i * 220, 330 + (i % 2) * 90, 34, lt + i);
  }, push(1.07));

  /* 7 — penthouse */
  S(15.81, 18.55, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.night);
    for (let i = 0; i < 40; i++) TM.shape(ctx, c => c.arc((i * 211) % 1920, ((i * 97) % 500) - 900, 4, 0, Math.PI * 2), K.white, 0);
    C.building(ctx, 400, FL, 300, 900, K.slateDk, { lit: true, seed: 3 });
    C.building(ctx, 1520, FL, 320, 1000, K.slateDk, { lit: true, seed: 9 });
    C.building(ctx, 960, FL, 420, 1700, K.slate, { lit: true, seed: 5, top: K.gold });
    // penthouse occupant at top
    const p = madoff(960, FL - 1700, 0.55); C.person(ctx, p, f, { expr: 'happy', armR: 'wave', armL: 'hip', noShadow: true });
    C.panel(ctx, 'MANHATTAN PENTHOUSE', 960, -1100, lt, 1.4, { size: 62, bg: K.gold, col: K.ink });
  }, { from: { x: W / 2, y: 540, zoom: 1 }, to: { x: W / 2, y: -620, zoom: 1 } });

  /* 8 — yacht */
  S(18.55, 19.85, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, '#8FC6E0');
    TM.shape(ctx, c => c.arc(1600, 200, 90, 0, Math.PI * 2), K.yellow, 5);
    const yx = walkX(lt, 0, 1.3, 760, 1000);
    C.yacht(ctx, yx, 720, 1.3, lt);
    const p = madoff(yx - 40, 720 - 260, 0.6); C.person(ctx, p, f, { expr: 'smug', armR: 'wave', armL: 'hip', noShadow: true, hide: 'legs' });
    C.water(ctx, 760, lt, '#3E7CA8');
    C.word(ctx, 'YACHT', 420, 220, 120, K.white, lt, 0.15, { rot: -0.1 });
  });

  /* 9 — grown men beg */
  S(19.85, 21.48, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.cream); C.floor(ctx, FL, K.sepia);
    const p = madoff(1500); C.person(ctx, p, f, { expr: 'smug', armR: 'cross', armL: 'cross' });
    const cols = [K.green, K.purple, K.orange];
    cols.forEach((col, i) => {
      const g = suitGuy(300 + i * 280, col, 40 + i, { s: 0.85 });
      C.person(ctx, g, f + i * 9, { expr: 'worried', armR: 'reach', armL: 'up', lean: 0.15 + Math.sin(lt * 6 + i) * 0.04, jump: true });
      moneyHand(ctx, g, 0.6);
    });
    C.bubble(ctx, 'TAKE MY MONEY!', 560, 260, lt, 0.3, { size: 54, tail: 'r' });
  });

  /* 10 — no questions */
  S(21.48, 23.91, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.slate); C.floor(ctx, FL, K.slateDk);
    C.couch(ctx, 960, FL, 700, K.red);
    [[740, K.yellow, 51], [960, K.green, 52], [1180, K.blue, 53]].forEach(([x, col, sd]) => {
      C.person(ctx, guy(x, col, sd, null, { y: FL - 60, s: 0.8 }), f, { expr: 'happy', armR: 'hip', armL: 'hip', hide: 'legs' });
    });
    C.word(ctx, '?', 960, 260, 220, K.white, lt, 0.2);
    C.xmark(ctx, 960, 260, 240, lt, 1.0);
  }, push(1.05));

  /* 11 — 12% every year */
  S(23.91, 26.6, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.teal);
    const years = ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002'];
    const k = Math.min(years.length - 1, Math.floor(lt * 4.5));
    C.calendar(ctx, 500, 520, 1.5 + (lt * 4.5 % 1 < 0.15 ? 0.06 : 0), years[k], '12%', K.green);
    C.stamp(ctx, '12%', 1300, 330, lt, 0.2, { col: K.money, size: 230, rot: -0.08 });
    C.text(ctx, 'EVERY. SINGLE. YEAR.', 1300, 640, 70, K.white, { reveal: C.prog(lt, 0.8, 1.2) });
    C.stack(ctx, 1300, 900, 1, 1 + Math.floor(lt * 2));
  });

  /* 12 — no matter what the market does */
  S(26.6, 29.47, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.beige);
    C.chart(ctx, 240, 180, 900, 480, [[0, .5], [.1, .8], [.2, .3], [.3, .7], [.4, .15], [.5, .6], [.6, .25], [.7, .85], [.8, .35], [.9, .6], [1, .2]], C.prog(lt, 0, 2.4), { col: K.red, lw: 8 });
    C.chart(ctx, 240, 180, 900, 480, [[0, .2], [.5, .5], [1, .9]], C.prog(lt, 0, 2.4), { col: K.green, axes: false, lw: 12 });
    C.text(ctx, 'MARKET', 1250, 300, 50, K.red); C.text(ctx, 'MADOFF', 1250, 220, 50, K.greenDk);
    const g = guy(1560, K.orange, 61, null, { shades: true });
    C.person(ctx, g, f, { expr: 'happy', armR: 'cross', armL: 'cross', lean: -0.05 });
    C.bubble(ctx, 'Why ask?', 1560, 300, lt, 1.4, { size: 56, tail: 'l' });
  });

  /* 13 — that was the tell */
  S(29.47, 31.36, (ctx, s) => {
    const { lt } = s; C.bg(ctx, K.night);
    C.chart(ctx, 360, 260, 1200, 440, [[0, .1], [.25, .32], [.5, .55], [.75, .76], [1, .98]], 1, { col: K.green, axisCol: K.white, dot: false });
    const mx = lerp(500, 1250, C.smooth(lt, 0, 1.2));
    C.magnifier(ctx, mx, 470 - (mx - 360) / 1200 * 400, 1.2, 0);
    C.panel(ctx, 'THE TELL', 960, 150, lt, 0.9, { size: 100, bg: K.red });
  });

  /* 14 — markets go up and down */
  S(31.36, 33.48, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.cream);
    const pts = [[0, .3], [.12, .75], [.25, .25], [.38, .8], [.5, .2], [.62, .7], [.75, .3], [.88, .85], [1, .4]];
    const head = C.chart(ctx, 200, 200, 1050, 520, pts, C.prog(lt, 0, 2.0), { col: K.blue });
    const up = Math.sin(lt * 7) > 0;
    C.person(ctx, guy(1550, K.purple, 71), f, { expr: up ? 'happy' : 'shocked', armR: up ? 'up' : 'face', armL: up ? 'up' : 'face', jump: up });
    C.word(ctx, 'UP', head.x, head.y - 70, 60, K.green, lt, 0.4);
  });

  /* 15 — that's the whole point */
  S(33.48, 35.43, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.slate); C.floor(ctx, FL, K.slateDk);
    C.chart(ctx, 900, 260, 800, 420, [[0, .3], [.2, .7], [.4, .2], [.6, .8], [.8, .3], [1, .6]], 1, { col: K.yellow, axisCol: K.white, dot: false });
    C.person(ctx, harry(500, { glasses: false, body: K.orange }), f, { expr: 'happy', armR: tw('hang', 'present', lt, 0.2), talk: true });
    C.panel(ctx, "THAT'S THE\nWHOLE POINT", 500, 220, lt, 0.4, { size: 60 });
  });

  /* 16 — never went down */
  S(35.43, 38.08, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.teal); C.floor(ctx, FL, K.tealDk);
    for (let i = 0; i < 7; i++) C.bar(ctx, 1000 + i * 120, FL, 80, 70 + i * 70 * C.pop(lt, 0.2 + i * 0.22, 0.3), K.money);
    const p = madoff(560); C.person(ctx, p, f, { expr: 'smug', armR: tw('hang', 'thumb', lt, 0.8), armL: 'pocket', talk: true });
    C.panel(ctx, 'NEVER WENT DOWN', 1360, 180, lt, 1.2, { size: 64, bg: K.black, col: K.money });
  }, push(1.06));

  /* 17 — not in crashes, not in corrections */
  S(38.08, 40.86, (ctx, s) => {
    const { lt } = s; C.bg(ctx, K.beige);
    C.chart(ctx, 160, 220, 760, 460, [[0, .8], [.3, .9], [.45, .2], [.6, .5], [.75, .1], [1, .3]], C.prog(lt, 0, 1.6), { col: K.red });
    C.chart(ctx, 1040, 220, 720, 460, [[0, .25], [.5, .55], [1, .9]], C.prog(lt, 0, 2.2), { col: K.green });
    C.shake(ctx, lt, 0.6, 10, 0.3);
    C.stamp(ctx, 'CRASH', 540, 160, lt, 0.6, { col: K.red, size: 90, rot: -0.1 });
    C.stamp(ctx, 'CORRECTION', 540, 820, lt, 1.6, { col: K.orange, size: 80, rot: 0.06 });
    C.word(ctx, 'MADOFF FUND', 1400, 150, 64, K.greenDk, lt, 0.3, { stroke: 0 });
  });

  /* 18 — every month steady */
  S(40.86, 43.74, (ctx, s) => {
    const { lt } = s; C.bg(ctx, K.slate);
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const k = Math.min(11, Math.floor(lt * 4.4));
    C.calendar(ctx, 560, 500, 1.6, months[k], '+1%', K.blue);
    C.check(ctx, 760, 330, 120, lt % (1 / 4.4), 0);
    for (let i = 0; i <= k; i++) C.bill(ctx, 1150 + (i % 4) * 150, 780 - Math.floor(i / 4) * 90, 0.9, (i % 3 - 1) * 0.12);
    C.panel(ctx, 'STEADY RETURNS', 1380, 200, lt, 0.4, { size: 62, bg: K.black });
  });

  /* 19 — too perfect */
  S(43.74, 45.68, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.purple); C.floor(ctx, FL, '#5f3f9a');
    const p = madoff(960); C.person(ctx, p, f, { expr: 'happy', armR: 'up', armL: 'up' });
    for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2 + lt; C.sparkle(ctx, 960 + Math.cos(a) * 330, 600 + Math.sin(a) * 240, 40, lt + i); }
    C.word(ctx, 'TOO PERFECT', 960, 190, 120, K.yellow, lt, 0.4, { rot: -0.05 });
  });

  /* 20 — fake */
  S(45.68, 47.50, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.night); C.floor(ctx, FL, K.black);
    C.shake(ctx, lt, 0.35, 22, 0.4);
    const p = madoff(960); C.person(ctx, p, f, { expr: lt > 0.35 ? 'worried' : 'happy', sweat: lt > 0.35, armR: 'hang', armL: 'hang' });
    C.stamp(ctx, 'FAKE', 960, 480, lt, 0.35, { col: K.red, size: 260, rot: -0.12 });
  });

  /* 21 — how the Ponzi worked */
  S(47.50, 50.50, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.tealDk);
    C.gear(ctx, 380, 620, 150, lt * 1.2, K.grey, 12); C.gear(ctx, 600, 470, 100, -lt * 1.8 + 0.2, K.yellow, 9); C.gear(ctx, 1560, 640, 170, -lt, K.grey, 13);
    C.panel(ctx, 'HOW A PONZI\nSCHEME WORKS', 1060, 380, lt, 0.2, { size: 96, write: true, writeDur: 1.4, rot: -0.02 });
  }, push(1.08));

  /* 22 — new investors wire in */
  S(50.50, 53.08, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.beige); C.floor(ctx, FL, K.sepia);
    C.box(ctx, 1450, FL, 380, 380, 'MADOFF FUND', K.greyDk, C.prog(lt, 0.8, 1.8) * 0.6);
    [[180, K.green, 81], [380, K.orange, 82], [580, K.blue, 83]].forEach(([x, col, sd], i) => {
      const xx = walkX(lt, 0, 0.9, x - 500, x);
      const g = guy(xx, col, sd); C.person(ctx, g, f, { walk: walking(lt, 0, 0.9), expr: 'happy', armR: lt > 0.9 ? tw('hang', 'give', lt, 0.9 + i * 0.1) : 'hang' });
      if (lt > 1) moneyHand(ctx, g);
    });
    C.billStream(ctx, lt, 1.1, 1.5, 700, 560, 1400, 520, { gap: 0.12, s: 0.6 });
    C.panel(ctx, 'NEW INVESTORS', 380, 220, lt, 0.4, { size: 56, bg: K.green });
  });

  /* 23 — not invested */
  S(53.08, 55.51, (ctx, s) => {
    const { lt } = s; C.bg(ctx, K.slate); C.floor(ctx, FL, K.slateDk);
    C.box(ctx, 480, FL, 380, 380, 'MADOFF FUND', K.greyDk, 0.6);
    C.building(ctx, 1450, FL, 380, 520, K.cream, { top: K.navy });
    C.text(ctx, 'STOCKS', 1450, FL - 485, 50, K.white);
    C.arrow(ctx, 720, 640, 1200, 640, C.prog(lt, 0.1, 0.6), K.yellow, 16);
    C.xmark(ctx, 960, 640, 230, lt, 0.8);
    C.panel(ctx, 'NOT INVESTED', 960, 200, lt, 1.0, { size: 72, bg: K.red });
  });

  /* 24 — straight into a bank account */
  S(55.51, 58.03, (ctx, s) => {
    const { lt } = s; C.bg(ctx, K.cream); C.floor(ctx, FL, K.sepia);
    C.box(ctx, 420, FL, 360, 360, 'MADOFF FUND', K.greyDk, 0.6);
    C.bank(ctx, 1420, FL, 1.0, 'BANK', K.beige);
    C.billStream(ctx, lt, 0.2, 2.0, 600, 560, 1400, 640, { gap: 0.1, s: 0.65, h: 180 });
    C.pile(ctx, 1420, FL, 0.6, 4, C.prog(lt, 0.6, 1.8));
    C.panel(ctx, 'JUST SITS IN A\nBANK ACCOUNT', 940, 170, lt, 0.6, { size: 56 });
  });

  /* 25 — old investors paid with new money */
  S(58.03, 63.11, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.beige); C.floor(ctx, FL, K.sepia);
    C.box(ctx, 960, FL, 380, 380, 'MADOFF', K.greyDk, 0.55 + 0.1 * Math.sin(lt * 2));
    [[180, K.green, 91], [380, K.blue, 92]].forEach(([x, col, sd]) => { const g = guy(x, col, sd); C.person(ctx, g, f, { expr: 'happy', armR: 'give' }); moneyHand(ctx, g); });
    [[1560, K.orange, 93], [1760, K.purple, 94]].forEach(([x, col, sd]) => {
      const g = guy(x, col, sd, { type: 'short', color: '#DDDDDD' }, { old: true });
      C.person(ctx, g, f, { expr: lt > 2.4 ? 'happy' : 'curious', armL: lt > 2.4 ? 'up' : 'reach', armR: lt > 2.4 ? 'up' : 'hang', jump: lt > 2.4, flip: true });
    });
    C.billStream(ctx, lt, 0.4, 4.4, 470, 560, 900, 520, { gap: 0.18, s: 0.55 });
    C.billStream(ctx, lt, 1.5, 3.4, 1030, 520, 1620, 560, { gap: 0.18, s: 0.55 });
    C.panel(ctx, 'NEW MONEY', 280, 220, lt, 0.2, { size: 50, bg: K.green });
    C.panel(ctx, 'OLD INVESTORS', 1660, 220, lt, 0.8, { size: 50, bg: K.orange });
    C.bubble(ctx, 'Wow, 12%!', 1660, 380, lt, 2.6, { size: 50, tail: 'r' });
  });

  /* 26 — pockets the difference */
  S(63.11, 65.16, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.teal); C.floor(ctx, FL, K.tealDk);
    const p = madoff(960, FL, 1.15); C.person(ctx, p, f, { expr: 'smug', armR: lt % 0.6 < 0.3 ? 'pocket' : 'give', armL: 'hip' });
    C.billStream(ctx, lt, 0, 2, 200, 300, 990, 640, { gap: 0.15, s: 0.6 });
    C.billStream(ctx, lt, 0.07, 2, 1720, 300, 990, 640, { gap: 0.15, s: 0.6 });
    C.word(ctx, 'CHA-CHING!', 1450, 220, 90, K.yellow, lt, 0.5, { rot: 0.08 });
  });

  /* 27 — the machine keeps running */
  S(65.16, 70.25, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.slate); C.floor(ctx, FL, K.slateDk);
    TM.shape(ctx, c => TM.rr(c, 700, 300, 520, 500, 24), K.grey, 7);
    C.gear(ctx, 850, 470, 90, lt * 2, K.yellow, 10); C.gear(ctx, 1020, 600, 110, -lt * 1.6, K.white, 12); C.gear(ctx, 1080, 400, 60, lt * 3, K.orange, 8);
    C.arrow(ctx, 220, 450, 680, 450, C.prog(lt, 0.3, 0.6), K.green, 34);
    C.arrow(ctx, 1240, 650, 1700, 650, C.prog(lt, 1.8, 0.6), K.red, 12);
    C.text(ctx, 'NEW MONEY IN', 440, 360, 50, K.white, { stroke: 7 });
    C.text(ctx, 'OLD MONEY OUT', 1480, 570, 44, K.white, { stroke: 7 });
    const p = madoff(560, FL, 0.8); C.person(ctx, p, f, { expr: 'smug', armR: lt % 0.8 < 0.4 ? 'crank' : 'give', armL: 'hip' });
    C.panel(ctx, 'IN > OUT = KEEPS RUNNING', 960, 170, lt, 2.8, { size: 60, bg: K.black });
  }, push(1.05));

  /* 28 — for fifty years it did */
  S(70.25, 72.59, (ctx, s) => {
    const { lt } = s; C.bg(ctx, K.navy);
    const yr = Math.round(lerp(1960, 2008, C.smooth(lt, 0, 2.0)));
    C.calendar(ctx, 600, 520, 1.7, 'YEAR', String(yr), K.red);
    C.clock(ctx, 1320, 520, 210, lt * 18);
    C.word(ctx, '50 YEARS', 960, 140, 100, K.yellow, lt, 0.2);
  });

  /* 29–32 — who sent him money (shared layout) */
  function senders(ctx, s, label, bgc, drawSender) {
    const { lt, f } = s; C.bg(ctx, bgc); C.floor(ctx, FL, 'rgba(0,0,0,0.18)');
    drawSender(ctx, lt, f);
    const p = madoff(1560); C.person(ctx, p, f, { expr: 'smug', armR: 'reach', armL: 'reach', flip: true });
    C.billStream(ctx, lt, 0.3, 2.2, 700, 520, 1460, 560, { gap: 0.11, s: 0.6 });
    C.panel(ctx, label, 520, 160, lt, 0.15, { size: 62 });
  }
  S(72.59, 75.53, (ctx, s) => senders(ctx, s, 'BIG BANKS', K.slate, (c, lt) => {
    C.bank(c, 300, FL, 0.7, 'BANK', K.cream); C.bank(c, 620, FL, 0.55, 'BANK', K.beige);
  }));
  S(75.53, 77.70, (ctx, s) => senders(ctx, s, 'HEDGE FUNDS', K.teal, (c, lt, f) => {
    [[260, K.purple, 101], [480, K.greyDk, 102]].forEach(([x, col, sd]) => { const g = suitGuy(x, col, sd); C.person(c, g, f, { expr: 'happy', armR: 'give' }); moneyHand(c, g); });
  }));
  S(77.70, 79.73, (ctx, s) => senders(ctx, s, 'CHARITIES', K.beige, (c, lt, f) => {
    C.building(c, 420, FL, 340, 420, K.cream, { top: K.pink });
    C.heart(c, 420, FL - 320, 1.4 + 0.1 * Math.sin(lt * 8), K.red);
  }));
  S(79.73, 81.99, (ctx, s) => senders(ctx, s, 'CELEBRITIES', K.purple, (c, lt, f) => {
    const g = guy(420, K.red, 111, { type: 'long', color: '#F2C230' }, { shades: true }); C.person(c, g, f, { expr: 'happy', armR: 'give', armL: 'wave' }); moneyHand(c, g);
    for (let i = 0; i < 5; i++) C.star(c, 200 + i * 110, 350 + (i % 2) * 60, 26, K.yellow, lt * 2 + i);
  }));

  /* 33 — even investment managers (confused) */
  S(81.99, 85.0, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.cream); C.floor(ctx, FL, K.sepia);
    [[420, K.blue, 121], [760, K.green, 122], [1100, K.orange, 123]].forEach(([x, col, sd], i) => {
      C.person(ctx, suitGuy(x, col, sd), f + i * 7, { expr: 'curious', armR: 'face', armL: 'hip', faceDir: 1 });
      C.word(ctx, '?', x + 10, 380, 120, K.ink, lt, 0.3 + i * 0.25, { stroke: 0 });
    });
    C.person(ctx, madoff(1600), f, { expr: 'smug', armR: 'cross', armL: 'cross', flip: true });
    C.bubble(ctx, 'How does\nhe do it?', 760, 180, lt, 1.2, { size: 50, tail: 'l' });
  });
  /* 34 — just wanted a piece */
  S(85.0, 88.33, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.slate); C.floor(ctx, FL, K.slateDk);
    [[300, K.blue, 121], [560, K.green, 122], [820, K.orange, 123]].forEach(([x, col, sd], i) => {
      const xx = walkX(lt, 0, 1.2, x - 200, x + 100);
      const g = suitGuy(xx, col, sd); C.person(ctx, g, f + i * 7, { walk: walking(lt, 0, 1.2), expr: 'happy', armR: 'give' }); moneyHand(ctx, g);
    });
    C.person(ctx, madoff(1550), f, { expr: 'smug', armR: 'reach', armL: 'hip', flip: true, talk: true });
    C.billStream(ctx, lt, 1.2, 2, 950, 560, 1450, 560, { gap: 0.15, s: 0.55 });
    C.bubble(ctx, 'We want a piece!', 560, 260, lt, 1.0, { size: 54, tail: 'r' });
  });

  /* 35 — Harry Markopolos, 4 hours */
  S(88.33, 92.57, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.beige); C.floor(ctx, FL, K.sepia);
    C.person(ctx, harry(700), f, { expr: 'curious', armR: lt % 0.5 < 0.25 ? 'crank' : 'hold2', armL: 'hold2' });
    C.desk(ctx, 760, FL, 520, K.brown);
    for (let i = 0; i < 4; i++) C.paper(ctx, 600 + i * 90, FL - 200, 0.6, (i - 1.5) * 0.15, 4);
    C.clock(ctx, 1450, 420, 180, lt * 12);
    C.panel(ctx, 'HARRY MARKOPOLOS', 700, 170, lt, 0.4, { size: 60, bg: K.blue });
    C.stamp(ctx, '4 HOURS', 1450, 720, lt, 2.4, { col: K.red, size: 100 });
  });

  /* 36 — mathematically impossible */
  S(92.57, 96.32, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.cream);
    TM.shape(ctx, c => c.rect(820, 180, 900, 560), K.white, 6);
    C.text(ctx, '12% + 0 losses + $65B = ?', 1270, 300, 54, K.ink, { reveal: C.prog(lt, 0.2, 1.4) });
    C.chart(ctx, 900, 380, 720, 300, [[0, .1], [.33, .4], [.66, .65], [1, .95]], C.prog(lt, 0.6, 1), { col: K.green });
    C.person(ctx, harry(420), f, { expr: lt > 2 ? 'shocked' : 'curious', armR: lt > 2 ? 'point' : 'hold', armL: 'hip' });
    C.shake(ctx, lt, 2.1, 14, 0.3);
    C.stamp(ctx, 'IMPOSSIBLE', 1270, 560, lt, 2.1, { col: K.red, size: 110, rot: -0.1 });
  });

  /* 37 — to the SEC twice */
  S(96.32, 99.39, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.slate); C.floor(ctx, FL, K.slateDk);
    C.bank(ctx, 1450, FL, 0.95, 'SEC', K.cream);
    const x = walkX(lt, 0, 1.8, 200, 1000);
    const h = harry(x); C.person(ctx, h, f, { walk: walking(lt, 0, 1.8), expr: 'worried', armR: 'give' });
    C.folder(ctx, h._handR.x + 10, h._handR.y - 20, 0.6, -0.1, 'PROOF');
    C.stamp(ctx, 'TWICE', 600, 220, lt, 2.2, { col: K.yellow, size: 110 });
  });

  /* 38 — they did nothing */
  S(99.39, 101.11, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.grey); C.floor(ctx, FL, K.greyDk);
    C.person(ctx, suitGuy(900, K.greyDk, 131, { s: 1 }), f, { expr: 'sleep', armR: 'cross', armL: 'cross', lean: -0.08 });
    C.desk(ctx, 960, FL, 560, K.brown);
    C.trash(ctx, 1450, FL, 1.1);
    const fu = C.smooth(lt, 0.1, 0.6); C.folder(ctx, lerp(1150, 1450, fu), lerp(620, 740, fu) - Math.sin(fu * Math.PI) * 120, 0.5, fu * 2, 'PROOF');
    C.word(ctx, 'Z z z', 1000, 330, 80, K.white, lt, 0.2, { rot: -0.15 });
    C.panel(ctx, 'NOTHING.', 500, 220, lt, 0.5, { size: 80 });
  });

  /* 39 — 2008 */
  S(101.11, 103.36, (ctx, s) => {
    const { lt } = s; C.bg(ctx, K.red);
    C.shake(ctx, lt, 0.4, 20, 0.5);
    C.calendar(ctx, 960, 520, 2.0 + 0.4 * (1 - C.pop(lt, 0.2, 0.3)), 'SEPT', '2008', K.black);
  });

  /* 40 — market collapsed, everyone wants money back */
  S(103.36, 107.25, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.night); C.floor(ctx, FL, K.black);
    if (lt < 1.6) {
      C.chart(ctx, 300, 220, 1300, 500, [[0, .9], [.4, .8], [.55, .6], [.7, .3], [1, 0]], C.prog(lt, 0, 1.3), { col: K.red, axisCol: K.white, lw: 14 });
      C.stamp(ctx, 'CRASH!', 1300, 200, lt, 0.9, { col: K.red, size: 120 });
    } else {
      const cols = [K.green, K.orange, K.blue, K.purple, K.yellow];
      cols.forEach((col, i) => {
        const x = walkX(lt, 1.6, 1.0, -120 - i * 150, 380 + i * 250);
        C.person(ctx, guy(x, col, 141 + i, null, { s: 0.8 }), f + i * 5, { walk: true, expr: 'scream', armR: 'up', armL: 'up' });
      });
      C.bubble(ctx, 'MY MONEY!', 1400, 280, lt, 2.0, { size: 64, tail: 'l' });
    }
  });

  /* 41 — needed $7B */
  S(107.25, 110.76, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.beige); C.floor(ctx, FL, K.sepia);
    C.bar(ctx, 1150, FL, 240, 680 * C.ease(lt, 0.3, 1.2), K.red, lt > 1.5 ? '$7 BILLION' : '');
    C.text(ctx, 'NEEDED', 1150, FL + 60, 48, K.ink);
    C.person(ctx, madoff(520), f, { expr: 'worried', faceDir: 1, armR: 'hang', armL: 'hang', sweat: lt > 1.5 });
  });

  /* 42 — had $300M */
  S(110.76, 113.64, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.beige); C.floor(ctx, FL, K.sepia);
    C.bar(ctx, 1000, FL, 240, 680, K.red, '$7B');
    C.bar(ctx, 1400, FL, 240, 30 * C.ease(lt, 0.3, 0.6), K.money, lt > 0.6 ? '$300M' : '', K.ink);
    C.text(ctx, 'NEEDED', 1000, FL + 60, 48, K.ink); C.text(ctx, 'HAD', 1400, FL + 60, 48, K.ink);
    C.person(ctx, madoff(480), f, { expr: 'shocked', armR: 'face', armL: 'face', sweat: true });
  });

  /* 43 — machine stopped */
  S(113.64, 115.50, (ctx, s) => {
    const { lt } = s; C.bg(ctx, K.slateDk);
    const spin = Math.max(0, 1 - lt / 0.8); const a = (1 - Math.pow(1 - Math.min(lt, 0.8) / 0.8, 2)) * 0.8;
    TM.shape(ctx, c => TM.rr(c, 700, 300, 520, 500, 24), K.grey, 7);
    C.gear(ctx, 850, 470, 90, a * 2, K.yellow, 10); C.gear(ctx, 1020, 600, 110, -a * 1.6, K.white, 12);
    C.puff(ctx, 960, 300, C.prog(lt, 0.6, 1.0), 1.4);
    C.stamp(ctx, 'STOPPED', 960, 860, lt, 0.8, { col: K.red, size: 120 });
    void spin;
  });

  /* 44 — confessed to his sons */
  S(115.50, 118.88, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.cream); C.floor(ctx, FL, K.brown);
    C.windowFrame(ctx, 1600, 360, 300, 260, K.night);
    C.couch(ctx, 600, FL, 560, K.teal);
    C.person(ctx, madoff(600, FL - 70, 1), f, { expr: 'sad', armR: 'hang', armL: 'face', hide: 'legs' });
    [[1150, K.blue, 151], [1360, K.green, 152]].forEach(([x, col, sd], i) => {
      const xx = walkX(lt, 0, 1.2, x + 500, x);
      C.person(ctx, suitGuy(xx, col, sd, { s: 0.95 }), f, { walk: walking(lt, 0, 1.2), expr: lt > 2.2 ? 'shocked' : 'curious', flip: true, armR: lt > 2.2 ? 'face' : 'hang' });
    });
    C.bubble(ctx, "It's all\none big lie.", 600, 250, lt, 1.4, { size: 54, tail: 'l' });
  });

  /* 45 — sons turned him in */
  S(118.88, 121.60, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, '#BFD9E8'); C.floor(ctx, FL, K.slate);
    C.windowFrame(ctx, 960, 360, 360, 300, '#FFE7A0');
    TM.shape(ctx, c => c.arc(960, 330, 60, 0, Math.PI * 2), K.yellow, 4);
    const sn = suitGuy(560, K.blue, 151, { s: 1 }); C.person(ctx, sn, f, { expr: 'sad', armR: 'face', talk: true });
    C.phone(ctx, sn._handR.x, sn._handR.y - 30, 1.2, 0.2);
    const cx = walkX(lt, 0.8, 1.4, 2200, 1450);
    C.person(ctx, cop(cx), f, { walk: walking(lt, 0.8, 1.4), expr: 'angry', flip: true, armR: 'hang' });
    C.panel(ctx, 'NEXT MORNING', 560, 170, lt, 0.2, { size: 60 });
  });

  /* 46 — arrested, worth nothing */
  S(121.60, 125.20, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.slate); C.floor(ctx, FL, K.slateDk);
    C.person(ctx, madoff(760), f, { expr: 'sad', armR: 'hold2', armL: 'hold2' });
    C.handcuffs(ctx, 760, 600, 0.45, C.prog(lt, 0.5, 0.4));
    C.person(ctx, cop(1100), f, { expr: 'angry', armR: 'reach', armL: 'hip', flip: true });
    C.stamp(ctx, '$0', 1500, 330, lt, 1.6, { col: K.red, size: 200 });
    C.flash(ctx, 300, 300, 120, C.prog(lt, 0.3, 0.4)); C.flash(ctx, 1700, 250, 120, C.prog(lt, 1.1, 0.4));
  });

  /* 47 — most trusted names */
  S(125.20, 129.07, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.navy);
    TM.shape(ctx, c => c.rect(560, 120, 800, 760), K.gold, 8);
    TM.shape(ctx, c => c.rect(600, 160, 720, 680), K.cream, 6);
    C.person(ctx, madoff(960, 1010, 1.25), f, { expr: lt > 2.6 ? 'sad' : 'smug', hide: 'legs', noShadow: true, armR: 'cross', armL: 'cross' });
    C.text(ctx, 'MOST TRUSTED', 960, 220, 74, K.navy);
    for (let i = 0; i < 5; i++) C.star(ctx, 300 + (i % 2) * 1320, 260 + i * 120, 34, K.yellow, lt + i);
    C.xmark(ctx, 960, 500, 520, lt, 2.6);
  });

  /* 48 — 150 years */
  S(129.07, 133.58, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.brown); C.floor(ctx, FL, '#5a3c26');
    C.podium(ctx, 1300, FL, 520, 380, '#5a3c26');
    C.person(ctx, guy(1300, K.black, 161, { type: 'short', color: '#DDD' }, { old: true, glasses: true, y: FL - 360 }), f, { expr: 'angry', armR: 'hang', hide: 'legs', noShadow: true });
    const ang = lt > 1.8 ? lerp(-1.2, 0.3, C.ease(lt, 1.8, 0.15)) : -1.2 + Math.sin(lt * 3) * 0.05;
    C.gavel(ctx, 1050, 420, 0.9, ang);
    C.shake(ctx, lt, 1.95, 16, 0.3);
    C.person(ctx, madoff(500), f, { expr: 'sad', armR: 'hold2', armL: 'hold2' });
    C.handcuffs(ctx, 500, 600, 0.45, 1);
    C.stamp(ctx, '150 YEARS', 820, 200, lt, 2.0, { col: K.red, size: 130 });
  });

  /* 49 — died in prison 2021 */
  S(133.58, 137.53, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.night); C.floor(ctx, FL, K.black);
    C.person(ctx, madoff(900, FL, 1, { body: K.orange, pants: K.orange, suit: false }), f, { expr: 'sad', armR: 'hang', armL: 'hang', lean: 0.05 });
    C.bars(ctx, 900, FL + 30, 900, 860, 8);
    C.calendar(ctx, 1600, 420, 1.0, 'DIED', '2021', K.greyDk);
    C.word(ctx, 'AGE 82', 1600, 720, 80, K.white, lt, 1.6);
    if (lt > 3.2) { ctx.save(); ctx.globalAlpha = C.prog(lt, 3.2, 0.7); C.bg(ctx, K.black); ctx.restore(); }
  });

  /* 50 — the lesson */
  S(137.53, 138.97, (ctx, s) => {
    const { lt } = s; C.bg(ctx, K.black);
    C.panel(ctx, 'THE LESSON?', 960, 480, lt, 0.1, { size: 140, bg: K.yellow, col: K.ink });
  });

  /* 51 — best scams don't look like scams */
  S(138.97, 141.74, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.teal); C.floor(ctx, FL, K.tealDk);
    C.person(ctx, madoff(700), f, { expr: 'happy', armR: 'wave', armL: 'pocket', talk: true });
    C.sparkle(ctx, 560, 380, 40, lt); C.sparkle(ctx, 860, 340, 30, lt + 1);
    C.panel(ctx, "THE BEST SCAMS\nDON'T LOOK\nLIKE SCAMS", 1400, 420, lt, 0.3, { size: 76, write: true, writeDur: 1.6 });
  });

  /* 52 — the opportunity */
  S(141.74, 145.728, (ctx, s) => {
    const { lt, f } = s; C.bg(ctx, K.slateDk); C.floor(ctx, FL, K.night);
    C.door(ctx, 1500, FL, 260, 460, 1, lt);
    C.text(ctx, 'OPPORTUNITY', 1500, FL - 520, 64, K.yellow, { stroke: 9 });
    [K.green, K.orange, K.blue, K.purple].forEach((col, i) => {
      const x = walkX(lt, 0.2 + i * 0.25, 3.2, 100 + i * 170, 900 + i * 120);
      C.person(ctx, guy(x, col, 171 + i, null, { s: 0.8 }), f + i * 6, { walk: walking(lt, 0.2 + i * 0.25, 3.2), expr: 'happy', armR: 'reach' });
    });
    C.panel(ctx, "TOO GOOD TO MISS...\nRIGHT?", 560, 190, lt, 1.6, { size: 60, bg: K.black });
  }, push(1.06));

  TM.config({ fps: 30, duration: 145.728, shots, phrases: TM.phrasesFromCues(cues, 6) });
})();
