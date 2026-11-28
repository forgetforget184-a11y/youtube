import json, re

with open('explainer/hunt_brothers/work/cues_christopher.json', 'r', encoding='utf-8') as f:
    cues = json.load(f)

print(f"Loaded {len(cues)} cues.")

header = """/* ============================================================================
 * story.js — "The Billionaires Who Cornered the Silver Market"
 * Crayon Capital procedural Canvas2D animated video — Full Narrative Edition
 * ==========================================================================*/
(function () {
  const TM = window.TM, CC = TM.CC, P = CC.P, PAL = CC.PAL, INK = CC.INK, W = TM.W, H = TM.H;
  const FL = 880;

  const CUES = """ + json.dumps(cues) + """;

  const shots = [];
  const S = (a, b, draw, o) => shots.push(Object.assign({ start: a, end: b, draw }, o || {}));

  // Ensure CC.rain is safely defined
  CC.rain = function (ctx, s, kind, o) {
    o = o || {};
    const n = o.n || 12, speed = o.speed || 400;
    const lq = CC.q(s.lt);
    for (let i = 0; i < n; i++) {
      const x = ((i * 173 + 80) % 1800) + 60;
      const y0 = ((i * 241) % 1000) - 200;
      const y = (y0 + lq * speed) % 1200 - 100;
      const rot = (i * 0.4 + lq * 2) % (Math.PI * 2);
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      if (kind === 'coin') {
        P.coin(ctx, 0, 0, { r: 28 });
      } else {
        P.bill(ctx, 0, 0, { s: 1.1 });
      }
      ctx.restore();
    }
  };

  // Custom actors
  const bunker = (ctx, s, base, track) => CC.actor(ctx, s, 'tycoon', Object.assign({ s: 1.5, expr: 'neutral' }, base), track);
  const herbert = (ctx, s, base, track) => CC.actor(ctx, s, 'banker', Object.assign({ s: 1.45, expr: 'neutral' }, base), track);
  const hl_hunt = (ctx, s, base, track) => CC.actor(ctx, s, 'tycoon', Object.assign({ s: 1.55, expr: 'smug', mustache: 'walrus' }, base), track);
  const analyst = (ctx, s, base, track) => CC.actor(ctx, s, 'analyst', Object.assign({ s: 1.4, expr: 'shock' }, base), track);
  const reporter = (ctx, s, base, track) => CC.actor(ctx, s, 'reporter', Object.assign({ s: 1.4, expr: 'neutral' }, base), track);
  const judge = (ctx, s, base, track) => CC.actor(ctx, s, 'judge', Object.assign({ s: 1.45, expr: 'angry' }, base), track);
  const worker = (ctx, s, base, track) => CC.actor(ctx, s, 'worker', Object.assign({ s: 1.45, expr: 'neutral' }, base), track);
  const trader = (ctx, s, base, track) => CC.actor(ctx, s, 'banker', Object.assign({ s: 1.4, expr: 'scared' }, base), track);

"""

# Build rich contextual shots for all cues
shot_blocks = []

def format_shot(t0, t1, draw_body, cam=None, sfx="[[0.1, 'whoosh']]"):
    d = round(t1 - t0, 2)
    if cam is None:
        cam = f"CC.cam.push(960, 480, 1.15, 0, {d:.2f})"
    elif "{dur" in cam or "dur" in cam:
        cam = cam.replace("{dur:.2f}", str(d)).replace("dur", str(d))
    return f"""  S({t0:.2f}, {t1:.2f}, (ctx, s) => {{
{draw_body}
  }}, {{ cam: {cam}, sfx: {sfx} }});"""

for i, (t0, t1, text) in enumerate(cues):
    t0 = round(t0, 2)
    t1 = round(t1, 2)
    dur = round(t1 - t0, 2)
    low = text.lower()
    split = dur > 3.8
    t_mid = round(t0 + dur * 0.5, 2) if split else t1

    # Chapter cards
    if i == 10:
        shot_blocks.append(f"""  /* CH 1 */ S({t0}, {t1}, (ctx, s) => CC.chapter(ctx, s, "The Gambler's Sons", {{ kicker: "CHAPTER ONE", at: 0.1, dur: 1.0 }}), {{ cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] }});""")
        continue
    elif i == 27:
        shot_blocks.append(f"""  /* CH 2 */ S({t0}, {t1}, (ctx, s) => CC.chapter(ctx, s, "The Shiny Metal Loophole", {{ kicker: "CHAPTER TWO", at: 0.1, dur: 1.0 }}), {{ cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] }});""")
        continue
    elif i == 68:
        shot_blocks.append(f"""  /* CH 3 */ S({t0}, {t1}, (ctx, s) => CC.chapter(ctx, s, "The Midnight Airlift", {{ kicker: "CHAPTER THREE", at: 0.1, dur: 1.0 }}), {{ cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] }});""")
        continue
    elif i == 106:
        shot_blocks.append(f"""  /* CH 4 */ S({t0}, {t1}, (ctx, s) => CC.chapter(ctx, s, "The Silver Fever of 1980", {{ kicker: "CHAPTER FOUR", at: 0.1, dur: 1.0 }}), {{ cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] }});""")
        continue
    elif i == 135:
        shot_blocks.append(f"""  /* CH 5 */ S({t0}, {t1}, (ctx, s) => CC.chapter(ctx, s, "Changing the Rules", {{ kicker: "CHAPTER FIVE", at: 0.1, dur: 1.0 }}), {{ cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] }});""")
        continue
    elif i == 160:
        shot_blocks.append(f"""  /* CH 6 */ S({t0}, {t1}, (ctx, s) => CC.chapter(ctx, s, "Silver Thursday and the Fall", {{ kicker: "CHAPTER SIX", at: 0.1, dur: 1.0 }}), {{ cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] }});""")
        continue
    elif i == 185:
        shot_blocks.append(f"""  /* CH 7 */ S({t0}, {t1}, (ctx, s) => CC.chapter(ctx, s, "The Billion-Dollar Lesson", {{ kicker: "FINAL CHAPTER", at: 0.1, dur: 1.0 }}), {{ cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] }});""")
        continue

    # Semantic routing
    if i == 0:
        s1 = format_shot(t0, 3.80, """    CC.bg(ctx, PAL.sky, { floor: FL, floorCol: PAL.tanDk });
    CC.city(ctx, FL, PAL.slate, { xs: [150, 380, 1520, 1750] });
    P.bank(ctx, 1280, FL, { s: 1.15, label: 'WALL ST' });
    bunker(ctx, s, { x: 640, y: FL, expr: 'smug' }, [{ at: 0, slideIn: 'left', dur: 0.5 }, { at: 0.8, pose: 'point', expr: 'confident' }]);
    herbert(ctx, s, { x: 440, y: FL, expr: 'happy' }, [{ at: 0.15, slideIn: 'left', dur: 0.5 }, { at: 1.0, pose: 'thumbsUp' }]);
    CC.callout(ctx, '1979', 960, 220, s.lt, 0.3, { size: 85, rot: -0.02 });
    CC.vignette(ctx, 0.35);""", cam=f"CC.cam.push(960, 480, 1.18, 0, 3.62)")
        s2 = format_shot(3.80, t1, """    CC.bg(ctx, PAL.skyLt, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 480, y: FL, expr: 'laugh' }, [{ at: 0.2, pose: 'laugh' }]);
    CC.actor(ctx, s, 'analyst', { x: 1440, y: FL, expr: 'shock' }, [{ at: 0.3, pose: 'point' }]);
    bunker(ctx, s, { x: 960, y: FL, s: 1.65, expr: 'smug' }, [{ at: 0.1, pose: 'pointUp', expr: 'grin' }]);
    CC.stamp(ctx, s, 'CRAZY IDEA', 960, 240, 0.3, { col: PAL.crimson, size: 95 });
    CC.vignette(ctx, 0.4);""", cam="CC.cam.punch(960, 480, 1.25, 0.2)", sfx="[[0.2, 'stamp']]")
        shot_blocks.extend([s1, s2])
    elif i == 1:
        s1 = format_shot(t0, 12.00, """    CC.bg(ctx, PAL.rose, { floor: FL, floorCol: PAL.greyDk });
    CC.obj(ctx, s, { x: 960, y: 460, at: 0.15, in: 'pop' }, c => {
      P.bill(c, 0, 0, { s: 2.5, label: '$100' });
      CC.stamp(c, s, 'WORTHLESS', 0, 0, 0.35, { col: PAL.red, size: 105 });
    });
    bunker(ctx, s, { x: 380, y: FL, pose: 'shrug', expr: 'disappointed' }, [{ at: 0.5, expr: 'shock', fx: 'sweat' }]);
    CC.vignette(ctx, 0.45);""", cam="CC.cam.punch(960, 460, 1.25, 0.2)", sfx="[[0.2, 'stamp']]")
        s2 = format_shot(12.00, t1, """    CC.bg(ctx, '#181A20', { floor: FL, floorCol: '#101216' });
    P.bank(ctx, 960, FL, { s: 1.15, label: 'US TREASURY', col: '#DFDAD0', shade: '#9F978A' });
    CC.rain(ctx, s, 'bill', { n: 14, speed: 420 });
    analyst(ctx, s, { x: 380, y: FL, s: 1.5, expr: 'shock' }, [{ at: 0.2, pose: 'face', fx: 'sweat' }]);
    CC.callout(ctx, 'BANKRUPTCY', 960, 220, s.lt, 0.25, { size: 92, col: PAL.red });
    CC.spotlight(ctx, 960, 520, 680, 'rgba(255,245,225,0.18)', 'rgba(10,12,18,0.85)');""", cam="CC.cam.zoom(1.12)")
        shot_blocks.extend([s1, s2])
    elif i == 2:
        s1 = format_shot(t0, 18.20, """    CC.bg(ctx, PAL.slateDk, { floor: FL });
    P.bank(ctx, 960, FL, { s: 1.2, label: 'SWISS VAULT' });
    bunker(ctx, s, { x: 420, y: FL, expr: 'confident' }, [{ at: 0.2, pose: 'point' }]);
    CC.callout(ctx, 'SAFE VAULT', 960, 220, s.lt, 0.2, { size: 80, rot: -0.02 });
    CC.vignette(ctx, 0.5);""", cam="CC.cam.push(960, 480, 1.15, 0, 1.77)")
        s2 = format_shot(18.20, t1, """    CC.bg(ctx, '#141824', { floor: FL });
    CC.obj(ctx, s, { x: 960, y: FL, at: 0.1, in: 'drop', from: 450 }, c => {
      CC.rect(c, -240, -150, 480, 150, '#B8BAC0', 8, 14);
      c.fillStyle = '#8E9199'; c.fillRect(-230, -145, 460, 20);
      CC.text(c, 'SILVER .999', 0, -75, 56, PAL.white, { font: 'Georgia, serif' });
    });
    bunker(ctx, s, { x: 1450, y: FL, s: 1.6, expr: 'greedy' }, [{ at: 0.25, pose: 'point', expr: 'smug' }]);
    CC.stamp(ctx, s, 'COLD HARD METAL', 960, 240, 0.25, { col: PAL.gold, size: 85 });
    CC.spotlight(ctx, 960, FL - 75, 600, 'rgba(230,240,255,0.22)', 'rgba(8,10,18,0.88)');""", cam="CC.cam.punch(960, FL - 75, 1.3, 0.15)", sfx="[[0.15, 'thud']]")
        shot_blocks.extend([s1, s2])
    elif i == 3:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, '#22181C', { floor: FL });
    bunker(ctx, s, { x: 960, y: FL, s: 1.8, expr: 'smug' }, [{ at: 0.1, pose: 'cross', expr: 'confident' }]);
    CC.stamp(ctx, s, 'NOT A LITTLE BIT', 960, 250, 0.2, { col: PAL.red, size: 90 });
    CC.spotlight(ctx, 960, 520, 550, 'rgba(255,235,225,0.25)', 'rgba(15,8,12,0.85)');""", cam="CC.cam.punch(960, 480, 1.25, 0.15)", sfx="[[0.15, 'stamp']]")
        shot_blocks.append(s1)
    elif i == 4:
        s1 = format_shot(t0, 24.50, """    CC.bg(ctx, '#0E131E', { floor: FL });
    P.globe(ctx, 960, 520, { r: 240, sea: '#2A4D6E', land: '#5A8A4A' });
    CC.stamp(ctx, s, '1/3 OF EARTH', 960, 180, 0.2, { col: PAL.gold, size: 96 });
    CC.spotlight(ctx, 960, 520, 700, 'rgba(255,255,255,0.15)', 'rgba(6,8,14,0.9)');""", cam="CC.cam.zoom(1.12)")
        s2 = format_shot(24.50, t1, """    CC.bg(ctx, PAL.tanDk, { floor: FL });
    P.jar(ctx, 960, FL, { w: 340, h: 440, fill: 0.33, label: '1/3 OF SILVER' });
    bunker(ctx, s, { x: 480, y: FL, s: 1.6, expr: 'smug' }, [{ at: 0.2, pose: 'point' }]);
    herbert(ctx, s, { x: 1440, y: FL, s: 1.6, expr: 'happy' }, [{ at: 0.3, pose: 'thumbsUp' }]);
    CC.vignette(ctx, 0.4);""", cam="CC.cam.punch(960, 480, 1.25, 0.2)", sfx="[[0.2, 'pop']]")
        shot_blocks.extend([s1, s2])
    elif i == 5:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, PAL.beige, { floor: FL });
    P.lineChart(ctx, 450, 250, 1020, 500, [[0, 0.1], [0.3, 0.2], [0.6, 0.5], [0.9, 0.98]], CC.prog(CC.q(s.lt), 0.1, 0.8), { col: PAL.greenDk, lw: 10 });
    CC.stamp(ctx, s, '+700%', 1250, 360, 0.4, { col: PAL.red, size: 125 });
    CC.vignette(ctx, 0.35);""", cam="CC.cam.punch(1250, 360, 1.35, 0.4)", sfx="[[0.4, 'stamp']]")
        shot_blocks.append(s1)
    elif i == 6: # melt heirlooms
        s1 = format_shot(t0, t_mid, """    CC.bg(ctx, PAL.tan, { floor: FL });
    CC.actor(ctx, s, 'grandma', { x: 620, y: FL, expr: 'shock' }, [{ at: 0, slideIn: 'left', dur: 0.4 }, { at: 0.5, pose: 'give', expr: 'happy' }]);
    CC.actor(ctx, s, 'worker', { x: 1300, y: FL, pose: 'hold', expr: 'neutral' }, [{ at: 0.4, pose: 'carry' }]);
    CC.callout(ctx, 'MELTING HEIRLOOMS', 960, 220, s.lt, 0.2, { size: 76 });
    CC.vignette(ctx, 0.4);""", cam="CC.cam.punch(960, 480, 1.2, 0.2)")
        s2 = format_shot(t_mid, t1, """    CC.bg(ctx, PAL.slateDk, { floor: FL });
    CC.stamp(ctx, s, 'STREET CORNER MELTDOWNS', 960, 220, 0.2, { col: PAL.gold, size: 76 });
    P.coinStack(ctx, 960, FL, { n: 8, r: 65 });
    CC.vignette(ctx, 0.45);""", cam="CC.cam.zoom(1.1)", sfx="[[0.1, 'clink']]")
        shot_blocks.extend([s1, s2])
    elif i == 7: # thought they owned the world
        s1 = format_shot(t0, t1, """    CC.bg(ctx, '#1A2234', { floor: FL });
    bunker(ctx, s, { x: 960, y: FL, s: 1.8, expr: 'joy' }, [{ at: 0.2, pose: 'cheer' }]);
    CC.stamp(ctx, s, 'KINGS OF THE WORLD', 960, 240, 0.3, { col: PAL.gold, size: 88 });
    CC.spotlight(ctx, 960, 480, 650);""", cam="CC.cam.push(960, 480, 1.2, 0, {dur:.2f})")
        shot_blocks.append(s1)
    elif i == 8: # financial system did something
        s1 = format_shot(t0, t1, """    CC.bg(ctx, PAL.charcoal, { floor: FL });
    CC.actor(ctx, s, 'banker', { x: 600, y: FL, s: 1.6, expr: 'furious' }, [{ at: 0.1, pose: 'point' }]);
    CC.actor(ctx, s, 'banker', { x: 1320, y: FL, s: 1.6, expr: 'angry' }, [{ at: 0.2, pose: 'cross' }]);
    CC.callout(ctx, 'THE ESTABLISHMENT', 960, 220, s.lt, 0.2, { size: 80, col: PAL.red });
    CC.vignette(ctx, 0.5);""", cam="CC.cam.punch(960, 480, 1.25, 0.2)")
        shot_blocks.append(s1)
    elif i == 9: # simply changed the rules
        s1 = format_shot(t0, t1, """    CC.bg(ctx, '#2A181C', { floor: FL });
    P.gavel(ctx, 960, FL, { s: 1.6 });
    CC.stamp(ctx, s, 'CHANGING THE RULES', 960, 260, 0.2, { col: PAL.crimson, size: 94 });
    CC.spotlight(ctx, 960, 480, 600);""", cam="CC.cam.punch(960, 480, 1.35, 0.2)", sfx="[[0.2, 'thud']]")
        shot_blocks.append(s1)
    elif "h.l. hunt" in low or "haroldson" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, PAL.beige, { floor: FL, floorCol: PAL.tanDk });
    hl_hunt(ctx, s, { x: 960, y: FL, s: 1.8, expr: 'smug' }, [{ at: 0.2, pose: 'present' }]);
    CC.callout(ctx, 'H.L. HUNT', 960, 220, s.lt, 0.2, { size: 92 });
    CC.vignette(ctx, 0.4);""", cam="CC.cam.push(960, 480, 1.15, 0, {dur:.2f})")
        shot_blocks.append(s1)
    elif "richest private citizen" in low or "nineteen thirties" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, PAL.gold, { floor: FL });
    CC.rain(ctx, s, 'coin', { n: 16, speed: 500 });
    hl_hunt(ctx, s, { x: 960, y: FL, s: 1.85, expr: 'joy' }, [{ at: 0.2, pose: 'thumbsUp' }]);
    CC.stamp(ctx, s, 'RICHEST MAN ON EARTH', 960, 240, 0.25, { col: PAL.red, size: 84 });
    CC.spotlight(ctx, 960, 500, 650);""", cam="CC.cam.punch(960, 480, 1.3, 0.25)", sfx="[[0.25, 'ding']]")
        shot_blocks.append(s1)
    elif "poker player" in low or "gambling dens" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, '#1C2E20', { floor: FL });
    P.document(ctx, 960, FL, { s: 1.3 });
    hl_hunt(ctx, s, { x: 500, y: FL, s: 1.6, expr: 'smug' }, [{ at: 0.2, pose: 'point' }]);
    CC.stamp(ctx, s, 'POKER GAMBLER', 960, 240, 0.25, { col: PAL.gold, size: 88 });
    CC.spotlight(ctx, 960, 500, 600);""", cam="CC.cam.push(960, 480, 1.18, 0, {dur:.2f})")
        shot_blocks.append(s1)
    elif "east texas oil field" in low or "card game" in low or "wildcatter" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, PAL.tanDk, { floor: FL });
    P.skyscraper(ctx, 960, FL, { w: 280, h: 500, col: '#1E1E1E', sign: 'OIL DERRICK' });
    hl_hunt(ctx, s, { x: 440, y: FL, s: 1.7, expr: 'joy' }, [{ at: 0.2, pose: 'cheer' }]);
    CC.stamp(ctx, s, 'EAST TEXAS OIL', 960, 220, 0.3, { col: PAL.moneyDk, size: 90 });
    CC.vignette(ctx, 0.45);""", cam="CC.cam.punch(960, 480, 1.25, 0.3)", sfx="[[0.3, 'stamp']]")
        shot_blocks.append(s1)
    elif "brown paper bag" in low or "beat-up car" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, PAL.beige, { floor: FL });
    P.document(ctx, 1200, FL, { s: 1.2 });
    hl_hunt(ctx, s, { x: 600, y: FL, s: 1.65, expr: 'neutral' }, [{ at: 0.15, pose: 'present' }]);
    CC.callout(ctx, 'PAPER BAG LUNCH', 960, 220, s.lt, 0.2, { size: 78 });
    CC.vignette(ctx, 0.35);""", cam="CC.cam.push(960, 480, 1.15, 0, {dur:.2f})")
        shot_blocks.append(s1)
    elif "died in nineteen seventy-four" in low or "left behind billions" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, '#1E222A', { floor: FL });
    P.bank(ctx, 960, FL, { s: 1.2, label: 'HUNT ESTATE' });
    bunker(ctx, s, { x: 640, y: FL, s: 1.5, expr: 'neutral' }, [{ at: 0.2, pose: 'cross' }]);
    herbert(ctx, s, { x: 1280, y: FL, s: 1.5, expr: 'neutral' }, [{ at: 0.2, pose: 'cross' }]);
    CC.stamp(ctx, s, '$5 BILLION INHERITANCE', 960, 240, 0.3, { col: PAL.gold, size: 76 });
    CC.spotlight(ctx, 960, 500, 700);""", cam="CC.cam.punch(960, 480, 1.2, 0.3)", sfx="[[0.3, 'stamp']]")
        shot_blocks.append(s1)
    elif "nelson bunker hunt" in low or "william herbert" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, PAL.sky, { floor: FL });
    bunker(ctx, s, { x: 700, y: FL, s: 1.7, expr: 'confident' }, [{ at: 0.1, pose: 'point' }]);
    herbert(ctx, s, { x: 1220, y: FL, s: 1.6, expr: 'confident' }, [{ at: 0.2, pose: 'thumbsUp' }]);
    CC.callout(ctx, 'THE HUNT BROTHERS', 960, 220, s.lt, 0.2, { size: 84 });
    CC.vignette(ctx, 0.35);""", cam="CC.cam.push(960, 480, 1.15, 0, {dur:.2f})")
        shot_blocks.append(s1)
    elif "libya" in low or "gaddafi" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, '#2A1418', { floor: FL });
    CC.actor(ctx, s, 'worker', { x: 600, y: FL, s: 1.6, expr: 'furious' }, [{ at: 0.1, pose: 'cross' }]);
    P.skyscraper(ctx, 1200, FL, { w: 260, h: 480, col: '#1E1E1E', sign: 'LIBYAN OIL' });
    CC.stamp(ctx, s, 'GADDAFI MILITARY COUP', 960, 240, 0.25, { col: PAL.red, size: 80 });
    CC.spotlight(ctx, 960, 500, 650);""", cam="CC.cam.punch(960, 480, 1.3, 0.25)", sfx="[[0.25, 'thud']]")
        shot_blocks.append(s1)
    elif "nationalized" in low or "single dime" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, PAL.rose, { floor: FL });
    bunker(ctx, s, { x: 960, y: FL, s: 1.75, expr: 'shock' }, [{ at: 0.2, pose: 'face', fx: 'sweat' }]);
    CC.stamp(ctx, s, 'NATIONALIZED: $0', 960, 250, 0.3, { col: PAL.red, size: 92 });
    CC.vignette(ctx, 0.45);""", cam="CC.cam.punch(960, 480, 1.35, 0.3)", sfx="[[0.3, 'stamp']]")
        shot_blocks.append(s1)
    elif "richard nixon" in low or "dollar and gold" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, PAL.charcoal, { floor: FL });
    P.bank(ctx, 960, FL, { s: 1.15, label: 'US DOLLAR' });
    CC.stamp(ctx, s, 'GOLD STANDARD ENDS', 960, 220, 0.25, { col: PAL.red, size: 84 });
    CC.spotlight(ctx, 960, 500, 650);""", cam="CC.cam.punch(960, 480, 1.25, 0.25)", sfx="[[0.25, 'thud']]")
        shot_blocks.append(s1)
    elif "inflation" in low or "bread, milk, and gasoline" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, PAL.rose, { floor: FL });
    CC.rain(ctx, s, 'bill', { n: 14, speed: 450 });
    analyst(ctx, s, { x: 960, y: FL, s: 1.7, expr: 'shock' }, [{ at: 0.2, pose: 'face', fx: 'sweat' }]);
    CC.callout(ctx, 'INFLATION SPIRAL', 960, 220, s.lt, 0.2, { size: 86, col: PAL.red });
    CC.vignette(ctx, 0.4);""", cam="CC.cam.zoom(1.12)")
        shot_blocks.append(s1)
    elif "illegal" in low and "gold" in low or "roosevelt" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, '#1C2028', { floor: FL });
    P.handcuffs(ctx, 960, FL - 120, 1.4);
    CC.stamp(ctx, s, 'GOLD BULLION ILLEGAL', 960, 240, 0.25, { col: PAL.crimson, size: 82 });
    CC.spotlight(ctx, 960, 500, 600);""", cam="CC.cam.punch(960, 480, 1.3, 0.25)", sfx="[[0.25, 'stamp']]")
        shot_blocks.append(s1)
    elif "forgotten little brother" in low or "silver was completely legal" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, PAL.navy, { floor: FL });
    CC.obj(ctx, s, { x: 960, y: FL, at: 0.1, in: 'drop', from: 400 }, c => {
      CC.rect(c, -220, -140, 440, 140, '#D0D4DC', 8, 14);
      CC.text(c, 'SILVER IS 100% LEGAL', 0, -70, 46, PAL.white, { font: 'Georgia, serif' });
    });
    bunker(ctx, s, { x: 420, y: FL, s: 1.6, expr: 'joy' }, [{ at: 0.2, pose: 'thumbsUp' }]);
    CC.spotlight(ctx, 960, FL - 70, 650);""", cam="CC.cam.punch(960, FL - 70, 1.25, 0.15)", sfx="[[0.15, 'thud']]")
        shot_blocks.append(s1)
    elif "one dollar and fifty cents" in low or "shockingly cheap" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, PAL.sage, { floor: FL });
    P.coin(ctx, 960, FL - 160, { r: 120 });
    CC.stamp(ctx, s, '$1.50 PER OUNCE', 960, 240, 0.25, { col: PAL.moneyDk, size: 92 });
    CC.vignette(ctx, 0.35);""", cam="CC.cam.punch(960, 480, 1.3, 0.25)", sfx="[[0.25, 'stamp']]")
        shot_blocks.append(s1)
    elif "eastman kodak" in low or "camera film" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, '#262214', { floor: FL });
    P.skyscraper(ctx, 960, FL, { w: 320, h: 500, col: '#E0B820', sign: 'KODAK FILM' });
    CC.stamp(ctx, s, 'MILLIONS OF OUNCES', 960, 240, 0.25, { col: PAL.red, size: 82 });
    CC.spotlight(ctx, 960, 480, 650);""", cam="CC.cam.punch(960, 480, 1.25, 0.25)", sfx="[[0.25, 'stamp']]")
        shot_blocks.append(s1)
    elif "electronics" in low or "x-ray" in low or "medical" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, PAL.slateDk, { floor: FL });
    P.document(ctx, 960, FL, { s: 1.3 });
    analyst(ctx, s, { x: 500, y: FL, s: 1.5, expr: 'shock' }, [{ at: 0.15, pose: 'point' }]);
    CC.callout(ctx, 'INDUSTRIAL SHORTAGE', 960, 220, s.lt, 0.2, { size: 80 });
    CC.vignette(ctx, 0.4);""", cam="CC.cam.push(960, 480, 1.15, 0, {dur:.2f})")
        shot_blocks.append(s1)
    elif "saudi" in low or "middle east" in low or "prince" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, '#1C261E', { floor: FL });
    bunker(ctx, s, { x: 550, y: FL, s: 1.6, expr: 'smug' }, [{ at: 0.2, pose: 'present' }]);
    CC.actor(ctx, s, 'sheikh', { x: 1370, y: FL, s: 1.6, expr: 'happy' }, [{ at: 0.3, pose: 'thumbsUp' }]);
    CC.stamp(ctx, s, 'SAUDI PETRODOLLARS', 960, 240, 0.3, { col: PAL.gold, size: 82 });
    CC.spotlight(ctx, 960, 500, 700);""", cam="CC.cam.punch(960, 480, 1.25, 0.3)", sfx="[[0.3, 'stamp']]")
        shot_blocks.append(s1)
    elif "international metals investment" in low or "partnership" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, PAL.navy, { floor: FL });
    P.bank(ctx, 960, FL, { s: 1.2, label: 'IMIC PARTNERSHIP' });
    CC.stamp(ctx, s, 'THE TRAP IS SET', 960, 220, 0.25, { col: PAL.gold, size: 88 });
    CC.spotlight(ctx, 960, 500, 650);""", cam="CC.cam.punch(960, 480, 1.3, 0.25)", sfx="[[0.25, 'stamp']]")
        shot_blocks.append(s1)
    elif "futures contract" in low or "chicago board" in low or "comex" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, PAL.tan, { floor: FL });
    P.bank(ctx, 960, FL, { s: 1.2, label: 'COMEX EXCHANGE' });
    trader(ctx, s, { x: 440, y: FL, s: 1.5, expr: 'shock' }, [{ at: 0.2, pose: 'wave' }]);
    CC.callout(ctx, 'FUTURES TRADING', 960, 220, s.lt, 0.2, { size: 82 });
    CC.vignette(ctx, 0.4);""", cam="CC.cam.push(960, 480, 1.15, 0, {dur:.2f})")
        shot_blocks.append(s1)
    elif "physical delivery" in low or "bring us our silver" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, '#141E28', { floor: FL });
    bunker(ctx, s, { x: 600, y: FL, s: 1.75, expr: 'smug' }, [{ at: 0.1, pose: 'pointUp' }]);
    CC.stamp(ctx, s, 'DEMAND PHYSICAL DELIVERY', 960, 240, 0.25, { col: PAL.gold, size: 76 });
    CC.spotlight(ctx, 960, 480, 650);""", cam="CC.cam.punch(960, 480, 1.35, 0.25)", sfx="[[0.25, 'stamp']]")
        shot_blocks.append(s1)
    elif "armored trucks" in low or "thirty-two-pound bars" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, PAL.slateDk, { floor: FL });
    P.cashStack(ctx, 960, FL, { n: 12 });
    worker(ctx, s, { x: 500, y: FL, s: 1.5, expr: 'neutral' }, [{ at: 0.2, pose: 'carry' }]);
    CC.stamp(ctx, s, '32-LB SILVER BARS', 960, 220, 0.3, { col: PAL.white, size: 84 });
    CC.vignette(ctx, 0.45);""", cam="CC.cam.punch(960, 480, 1.25, 0.3)", sfx="[[0.3, 'thud']]")
        shot_blocks.append(s1)
    elif "boeing" in low or "cargo jets" in low or "atlantic" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, '#0C101A', { floor: FL });
    P.skyscraper(ctx, 960, FL, { w: 400, h: 260, col: '#334', sign: 'BOEING 707' });
    CC.stamp(ctx, s, 'MIDNIGHT AIRLIFT', 960, 220, 0.25, { col: PAL.gold, size: 86 });
    CC.spotlight(ctx, 960, 480, 600);""", cam="CC.cam.push(960, 480, 1.2, 0, {dur:.2f})", sfx="[[0.1, 'whoosh']]")
        shot_blocks.append(s1)
    elif "zurich" in low or "swiss bank vaults" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, '#141824', { floor: FL });
    P.bank(ctx, 960, FL, { s: 1.25, label: 'SWISS VAULT - ZURICH' });
    CC.stamp(ctx, s, 'LOCKED IN SWISS VAULTS', 960, 220, 0.3, { col: PAL.gold, size: 76 });
    CC.spotlight(ctx, 960, 500, 650);""", cam="CC.cam.punch(960, 480, 1.25, 0.3)", sfx="[[0.3, 'stamp']]")
        shot_blocks.append(s1)
    elif "two hundred million ounces" in low or "half of all" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, PAL.gold, { floor: FL });
    P.jar(ctx, 960, FL, { w: 380, h: 480, fill: 0.5, label: '200M OUNCES' });
    bunker(ctx, s, { x: 440, y: FL, s: 1.7, expr: 'joy' }, [{ at: 0.2, pose: 'thumbsUp' }]);
    CC.stamp(ctx, s, '50% OF WESTERN SILVER', 960, 220, 0.3, { col: PAL.red, size: 78 });
    CC.spotlight(ctx, 960, 480, 700);""", cam="CC.cam.punch(960, 480, 1.3, 0.3)", sfx="[[0.3, 'stamp']]")
        shot_blocks.append(s1)
    elif "fifty dollars and thirty-five cents" in low or "all-time record high" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, '#182414', { floor: FL });
    P.lineChart(ctx, 450, 250, 1020, 500, [[0, 0.1], [0.5, 0.4], [0.8, 0.6], [1.0, 1.0]], 1.0, { col: PAL.green, lw: 12 });
    CC.stamp(ctx, s, '$50.35 ALL-TIME HIGH', 1200, 340, 0.25, { col: PAL.gold, size: 96 });
    CC.spotlight(ctx, 1200, 340, 600);""", cam="CC.cam.punch(1200, 340, 1.4, 0.25)", sfx="[[0.25, 'ding']]")
        shot_blocks.append(s1)
    elif "tiffany" in low or "new york times" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, PAL.charcoal, { floor: FL });
    P.newspaper(ctx, 960, FL, { s: 1.3, headline: 'NY TIMES: UNCONSCIONABLE' });
    CC.stamp(ctx, s, 'TIFFANY & CO OUTRAGE', 960, 220, 0.3, { col: PAL.red, size: 82 });
    CC.vignette(ctx, 0.5);""", cam="CC.cam.punch(960, 480, 1.25, 0.3)", sfx="[[0.3, 'stamp']]")
        shot_blocks.append(s1)
    elif "billion dollars just was not" in low or "laughed off" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, PAL.sky, { floor: FL });
    bunker(ctx, s, { x: 960, y: FL, s: 1.8, expr: 'smug' }, [{ at: 0.15, pose: 'shrug', expr: 'grin' }]);
    CC.speech(ctx, "A billion just isn't what it used to be.", 960, FL - 280, s.lt, 0.2, { size: 48, side: 1 });
    CC.vignette(ctx, 0.35);""", cam="CC.cam.push(960, 480, 1.15, 0, {dur:.2f})")
        shot_blocks.append(s1)
    elif "liquidation only" in low or "banned from making any bids" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, '#2A1014', { floor: FL });
    P.gavel(ctx, 960, FL, { s: 1.5 });
    CC.stamp(ctx, s, 'RULE: LIQUIDATION ONLY', 960, 240, 0.2, { col: PAL.red, size: 86 });
    CC.spotlight(ctx, 960, 480, 600);""", cam="CC.cam.punch(960, 480, 1.35, 0.2)", sfx="[[0.2, 'thud']]")
        shot_blocks.append(s1)
    elif "paul volcker" in low or "federal reserve" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, PAL.charcoal, { floor: FL });
    P.bank(ctx, 960, FL, { s: 1.2, label: 'FEDERAL RESERVE' });
    CC.actor(ctx, s, 'banker', { x: 420, y: FL, s: 1.6, expr: 'angry' }, [{ at: 0.2, pose: 'point' }]);
    CC.stamp(ctx, s, 'PAUL VOLCKER INTERVENES', 960, 220, 0.3, { col: PAL.gold, size: 76 });
    CC.spotlight(ctx, 960, 500, 650);""", cam="CC.cam.punch(960, 480, 1.25, 0.3)", sfx="[[0.3, 'stamp']]")
        shot_blocks.append(s1)
    elif "margin call" in low or "bache" in low or "one hundred million" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, '#2D1418', { floor: FL });
    P.phone(ctx, 960, FL - 120, 1.4);
    analyst(ctx, s, { x: 440, y: FL, s: 1.6, expr: 'shock' }, [{ at: 0.15, pose: 'face' }]);
    CC.stamp(ctx, s, '$100M MARGIN CALL', 960, 240, 0.25, { col: PAL.crimson, size: 92 });
    CC.spotlight(ctx, 960, 500, 600);""", cam="CC.cam.punch(960, 480, 1.35, 0.25)", sfx="[[0.25, 'stamp']]")
        shot_blocks.append(s1)
    elif "silver thursday" in low or "freefall" in low or "twenty-one dollars down to ten" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, '#1C1014', { floor: FL });
    P.lineChart(ctx, 450, 250, 1020, 500, [[0, 0.9], [0.3, 0.7], [0.7, 0.3], [1.0, 0.05]], 1.0, { col: PAL.red, lw: 12 });
    CC.stamp(ctx, s, 'SILVER THURSDAY CRASH', 1200, 360, 0.25, { col: PAL.red, size: 84 });
    CC.spotlight(ctx, 960, 480, 650);""", cam="CC.cam.punch(1200, 360, 1.35, 0.25)", sfx="[[0.25, 'stamp']]")
        shot_blocks.append(s1)
    elif "chapter eleven" in low or "personal bankruptcy" in low or "auctioneers" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, '#20181E', { floor: FL });
    judge(ctx, s, { x: 500, y: FL, s: 1.6, expr: 'angry' }, [{ at: 0.2, pose: 'present' }]);
    bunker(ctx, s, { x: 1380, y: FL, s: 1.5, expr: 'disappointed' }, [{ at: 0.3, pose: 'shrug' }]);
    CC.stamp(ctx, s, 'PERSONAL BANKRUPTCY', 960, 240, 0.3, { col: PAL.crimson, size: 82 });
    CC.spotlight(ctx, 960, 500, 650);""", cam="CC.cam.punch(960, 480, 1.3, 0.3)", sfx="[[0.3, 'stamp']]")
        shot_blocks.append(s1)
    elif "when the little guy breaks the rules" in low or "jail" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, '#141416', { floor: FL });
    P.bars(ctx, 960, FL, { s: 1.4 });
    CC.actor(ctx, s, 'worker', { x: 960, y: FL, s: 1.5, expr: 'sad' }, [{ at: 0.2, pose: 'hold' }]);
    CC.stamp(ctx, s, 'LITTLE GUY GOES TO JAIL', 960, 240, 0.25, { col: PAL.red, size: 80 });
    CC.spotlight(ctx, 960, 500, 600);""", cam="CC.cam.punch(960, 480, 1.3, 0.25)", sfx="[[0.25, 'thud']]")
        shot_blocks.append(s1)
    elif "when the big guy breaks the house" in low or "rewrites the rules" in low:
        s1 = format_shot(t0, t1, """    CC.bg(ctx, '#182030', { floor: FL });
    P.bank(ctx, 960, FL, { s: 1.25, label: 'THE SYSTEM' });
    CC.stamp(ctx, s, 'THE HOUSE REWRITES THE RULES', 960, 240, 0.25, { col: PAL.gold, size: 76 });
    CC.spotlight(ctx, 960, 500, 700);""", cam="CC.cam.punch(960, 480, 1.35, 0.25)", sfx="[[0.25, 'stamp']]")
        shot_blocks.append(s1)
    else:
        # Contextual narrative fallback based on keywords
        topic_title = " ".join([w.upper().replace("'", "") for w in text.split()[:4] if len(w) > 2][:3])
        if len(topic_title) < 4:
            topic_title = "WALL STREET CRISIS"
        
        bg_col = ['#181E28', '#221C28', '#1C2622', '#2A241C', '#22262E'][i % 5]
        s1 = format_shot(t0, t1, f"""    CC.bg(ctx, '{bg_col}', {{ floor: FL }});
    bunker(ctx, s, {{ x: 600, y: FL, s: 1.6, expr: 'neutral' }}, [{{ at: 0.15, pose: 'point', expr: 'confident' }}]);
    P.bank(ctx, 1300, FL, {{ s: 1.1, label: 'FINANCE' }});
    CC.callout(ctx, {json.dumps(topic_title)}, 960, 230, s.lt, 0.2, {{ size: 78 }});
    CC.vignette(ctx, 0.45);""", cam="CC.cam.push(960, 480, 1.15, 0, {dur:.2f})")
        shot_blocks.append(s1)

footer = f"""
  TM.config({{
    fps: 30,
    duration: {cues[-1][1]},
    shots: shots
  }});
}})();
"""

full_content = header + "\n".join(shot_blocks) + footer

with open('explainer/hunt_brothers/anim/story.js', 'w', encoding='utf-8') as f:
    f.write(full_content)

print(f"Successfully generated story.js with {len(shot_blocks)} shots!")
