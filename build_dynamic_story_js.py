import json, math

with open('explainer/hunt_brothers/work/cues.json', 'r', encoding='utf-8') as f:
    cues = json.load(f)

print(f"Loaded {len(cues)} cues.")

header = """/* ============================================================================
 * story.js — "The Billionaires Who Cornered the Silver Market"
 * Crayon Capital procedural Canvas2D animated video — Ultra-Dynamic V2 (Fixed)
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

  // Actors
  const bunker = (ctx, s, base, track) => CC.actor(ctx, s, 'tycoon', Object.assign({ s: 1.5, expr: 'neutral' }, base), track);
  const herbert = (ctx, s, base, track) => CC.actor(ctx, s, 'banker', Object.assign({ s: 1.45, expr: 'neutral' }, base), track);
  const hl_hunt = (ctx, s, base, track) => CC.actor(ctx, s, 'tycoon', Object.assign({ s: 1.55, expr: 'smug', mustache: 'walrus' }, base), track);
  const analyst = (ctx, s, base, track) => CC.actor(ctx, s, 'analyst', Object.assign({ s: 1.4, expr: 'shock' }, base), track);
  const reporter = (ctx, s, base, track) => CC.actor(ctx, s, 'reporter', Object.assign({ s: 1.4, expr: 'neutral' }, base), track);
  const judge = (ctx, s, base, track) => CC.actor(ctx, s, 'judge', Object.assign({ s: 1.45, expr: 'angry' }, base), track);

"""

shots = []
BGS = ['PAL.sky', 'PAL.beige', 'PAL.paper', 'PAL.sage', 'PAL.tan', 'PAL.slate', 'PAL.skyLt', 'PAL.navy', 'PAL.charcoal', 'PAL.rose']

for i, (t0, t1, text) in enumerate(cues):
    t0 = round(t0, 2)
    t1 = round(t1, 2)
    dur = round(t1 - t0, 2)
    if dur < 0.1:
        continue
    
    low = text.lower()
    
    # Check for chapter cards
    if "to understand how anyone could attempt something this absurd" in low or (i >= 10 and i <= 11 and "meet their father" in low):
        shots.append(f"""  /* CH 1 */ S({t0}, {t1}, (ctx, s) => CC.chapter(ctx, s, "The Gambler's Sons", {{ kicker: "CHAPTER ONE", at: 0.1, dur: 1.0 }}), {{ cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] }});""")
        continue
    elif "naturally, the first thing the hunt brothers wanted to buy was gold" in low:
        shots.append(f"""  /* CH 2 */ S({t0}, {t1}, (ctx, s) => CC.chapter(ctx, s, "The Shiny Metal Loophole", {{ kicker: "CHAPTER TWO", at: 0.1, dur: 1.0 }}), {{ cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] }});""")
        continue
    elif "to understand how commodity futures exchanges actually work" in low:
        shots.append(f"""  /* CH 3 */ S({t0}, {t1}, (ctx, s) => CC.chapter(ctx, s, "The Midnight Airlift", {{ kicker: "CHAPTER THREE", at: 0.1, dur: 1.0 }}), {{ cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] }});""")
        continue
    elif "with hundreds of millions of ounces locked away in private vaults" in low:
        shots.append(f"""  /* CH 4 */ S({t0}, {t1}, (ctx, s) => CC.chapter(ctx, s, "The Silver Fever of 1980", {{ kicker: "CHAPTER FOUR", at: 0.1, dur: 1.0 }}), {{ cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] }});""")
        continue
    elif "while the hunt brothers were celebrating their paper billions" in low:
        shots.append(f"""  /* CH 5 */ S({t0}, {t1}, (ctx, s) => CC.chapter(ctx, s, "Changing the Rules", {{ kicker: "CHAPTER FIVE", at: 0.1, dur: 1.0 }}), {{ cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] }});""")
        continue
    elif "as soon as the new rules took effect" in low:
        shots.append(f"""  /* CH 6 */ S({t0}, {t1}, (ctx, s) => CC.chapter(ctx, s, "Silver Thursday and the Fall", {{ kicker: "CHAPTER SIX", at: 0.1, dur: 1.0 }}), {{ cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] }});""")
        continue
    elif "the fallout from the silver squeeze dragged on for nearly a decade" in low:
        shots.append(f"""  /* CH 7 */ S({t0}, {t1}, (ctx, s) => CC.chapter(ctx, s, "The Billion-Dollar Lesson", {{ kicker: "FINAL CHAPTER", at: 0.1, dur: 1.0 }}), {{ cam: CC.cam.punch(960, 540, 1.1, 0.1), sfx: [[0.1, 'thud']] }});""")
        continue

    split = dur > 3.2
    t_mid = round(t0 + dur * 0.52, 2) if split else t1

    bg1 = BGS[i % len(BGS)]
    clean_txt = json.dumps(text[:30].upper())
    
    if i == 0 or "walked into wall street" in low:
        s1 = f"""  S({t0}, {t_mid}, (ctx, s) => {{
    CC.bg(ctx, PAL.sky, {{ floor: FL, floorCol: PAL.tanDk }});
    CC.city(ctx, FL, PAL.slate, {{ xs: [150, 380, 1520, 1750] }});
    P.bank(ctx, 1280, FL, {{ s: 1.15, label: 'WALL ST' }});
    bunker(ctx, s, {{ x: 640, y: FL, expr: 'smug' }}, [{{ at: 0, slideIn: 'left', dur: 0.5 }}, {{ at: 0.8, pose: 'point', expr: 'confident' }}]);
    herbert(ctx, s, {{ x: 440, y: FL, expr: 'happy' }}, [{{ at: 0.15, slideIn: 'left', dur: 0.5 }}, {{ at: 1.0, pose: 'thumbsUp' }}]);
    CC.callout(ctx, '1979', 960, 220, s.lt, 0.3, {{ size: 85, rot: -0.02 }});
  }}, {{ cam: CC.cam.push(960, 480, 1.18, 0, {t_mid - t0:.2f}), sfx: [[0.1, 'whoosh']] }});"""
        if split:
            s2 = f"""  S({t_mid}, {t1}, (ctx, s) => {{
    CC.bg(ctx, PAL.skyLt, {{ floor: FL }});
    P.skyscraper(ctx, 960, FL, {{ w: 320, h: 540, col: PAL.slateDk, sign: 'EXCHANGE' }});
    bunker(ctx, s, {{ x: 960, y: FL, s: 1.8, expr: 'smug' }}, [{{ at: 0.2, pose: 'pointUp', expr: 'grin' }}]);
    CC.stamp(ctx, s, 'THE MASTERPLAN', 960, 260, 0.3, {{ col: PAL.moneyDk, size: 88 }});
  }}, {{ cam: CC.cam.punch(960, 480, 1.3, 0.15), sfx: [[0.15, 'stamp']] }});"""
    elif "worthless" in low or "bankruptcy" in low:
        s1 = f"""  S({t0}, {t_mid}, (ctx, s) => {{
    CC.bg(ctx, PAL.rose, {{ floor: FL, floorCol: PAL.greyDk }});
    CC.obj(ctx, s, {{ x: 960, y: 460, at: 0.2, in: 'pop' }}, c => {{
      P.bill(c, 0, 0, {{ s: 2.2, label: '$100' }});
      CC.stamp(c, s, 'WORTHLESS', 0, 0, 0.4, {{ col: PAL.red, size: 95 }});
    }});
    bunker(ctx, s, {{ x: 420, y: FL, pose: 'shrug', expr: 'disappointed' }}, [{{ at: 0.6, expr: 'shock', fx: 'sweat' }}]);
  }}, {{ cam: CC.cam.punch(960, 460, 1.25, 0.2), sfx: [[0.2, 'stamp']] }});"""
        if split:
            s2 = f"""  S({t_mid}, {t1}, (ctx, s) => {{
    CC.bg(ctx, PAL.charcoal, {{ floor: FL }});
    CC.rain(ctx, s, 'bill', {{ n: 12, speed: 450 }});
    analyst(ctx, s, {{ x: 960, y: FL, s: 1.75, expr: 'shock' }}, [{{ at: 0.2, pose: 'face', fx: 'sweat' }}]);
    CC.callout(ctx, 'BANKRUPTCY', 960, 200, s.lt, 0.2, {{ size: 90, col: PAL.red }});
  }}, {{ cam: CC.cam.zoom(1.1), sfx: [[0.1, 'whoosh']] }});"""
    elif "cold, hard metal" in low or "safe place" in low:
        s1 = f"""  S({t0}, {t_mid}, (ctx, s) => {{
    CC.bg(ctx, PAL.slateDk, {{ floor: FL }});
    CC.obj(ctx, s, {{ x: 960, y: FL, at: 0.1, in: 'drop', from: 400 }}, c => {{
      CC.rect(c, -220, -140, 440, 140, PAL.grey, 8, 14);
      CC.text(c, 'SILVER .999', 0, -70, 52, PAL.white, {{ font: 'PMarker' }});
    }});
    bunker(ctx, s, {{ x: 1450, y: FL, expr: 'greedy' }}, [{{ at: 0.3, pose: 'point', expr: 'smug' }}]);
  }}, {{ cam: CC.cam.punch(960, FL - 70, 1.25, 0.1), sfx: [[0.1, 'thud']] }});"""
        if split:
            s2 = f"""  S({t_mid}, {t1}, (ctx, s) => {{
    CC.bg(ctx, PAL.navy, {{ floor: FL }});
    P.coinStack(ctx, 720, FL, {{ n: 7, r: 60 }});
    P.coinStack(ctx, 1200, FL, {{ n: 7, r: 60 }});
    bunker(ctx, s, {{ x: 960, y: FL, s: 1.7, expr: 'joy' }}, [{{ at: 0.2, pose: 'cheer' }}]);
    CC.stamp(ctx, s, 'REAL TANGIBLE ASSET', 960, 240, 0.3, {{ col: PAL.gold, size: 75 }});
  }}, {{ cam: CC.cam.push(960, 480, 1.2, 0, {t1 - t_mid:.2f}), sfx: [[0.2, 'clink']] }});"""
    elif "one-third of all" in low or "privately held silver" in low:
        s1 = f"""  S({t0}, {t_mid}, (ctx, s) => {{
    CC.bg(ctx, PAL.slateDk, {{ floor: FL, floorCol: PAL.charcoal }});
    CC.globeSpin(ctx, s, 960, 500, {{ r: 250 }});
    CC.callout(ctx, '1/3 OF ALL SILVER', 960, 180, s.lt, 0.2, {{ size: 92, rot: 0.02 }});
  }}, {{ cam: CC.cam.zoom(1.12), sfx: [[0.1, 'whoosh']] }});"""
        if split:
            s2 = f"""  S({t_mid}, {t1}, (ctx, s) => {{
    CC.bg(ctx, PAL.tanDk, {{ floor: FL }});
    P.jar(ctx, 960, FL, {{ w: 320, h: 420, fill: 0.33, label: '1/3 OF EARTH' }});
    bunker(ctx, s, {{ x: 480, y: FL, s: 1.6, expr: 'smug' }}, [{{ at: 0.2, pose: 'point' }}]);
    herbert(ctx, s, {{ x: 1440, y: FL, s: 1.6, expr: 'happy' }}, [{{ at: 0.3, pose: 'thumbsUp' }}]);
  }}, {{ cam: CC.cam.punch(960, 480, 1.25, 0.2), sfx: [[0.2, 'pop']] }});"""
    elif "seven hundred percent" in low or "pushed the price" in low:
        s1 = f"""  S({t0}, {t_mid}, (ctx, s) => {{
    CC.bg(ctx, PAL.beige, {{ floor: FL }});
    P.lineChart(ctx, 450, 250, 1020, 500, [[0, 0.1], [0.3, 0.2], [0.6, 0.5], [0.9, 0.98]], CC.prog(CC.q(s.lt), 0.1, 0.8), {{ col: PAL.greenDk, lw: 10 }});
    CC.stamp(ctx, s, '+700%', 1250, 360, 0.5, {{ col: PAL.red, size: 120 }});
  }}, {{ cam: CC.cam.punch(1250, 360, 1.35, 0.5), sfx: [[0.5, 'stamp']] }});"""
        if split:
            s2 = f"""  S({t_mid}, {t1}, (ctx, s) => {{
    CC.bg(ctx, PAL.rose, {{ floor: FL }});
    analyst(ctx, s, {{ x: 960, y: FL, s: 1.8, expr: 'shock' }}, [{{ at: 0.2, pose: 'face', fx: 'sweat' }}]);
    CC.callout(ctx, 'UNPRECEDENTED SPIKE', 960, 200, s.lt, 0.2, {{ size: 80 }});
  }}, {{ cam: CC.cam.zoom(1.15), sfx: [[0.1, 'whoosh']] }});"""
    elif "melt family heirlooms" in low or "antique candelabras" in low:
        s1 = f"""  S({t0}, {t_mid}, (ctx, s) => {{
    CC.bg(ctx, PAL.tan, {{ floor: FL }});
    CC.actor(ctx, s, 'grandma', {{ x: 620, y: FL, expr: 'shock' }}, [{{ at: 0, slideIn: 'left', dur: 0.4 }}, {{ at: 0.5, pose: 'give', expr: 'happy' }}]);
    CC.actor(ctx, s, 'worker', {{ x: 1300, y: FL, pose: 'hold', expr: 'neutral' }}, [{{ at: 0.4, pose: 'carry' }}]);
    CC.obj(ctx, s, {{ x: 960, y: FL, at: 0.2, in: 'pop' }}, c => P.jar(c, 0, 0, {{ w: 280, h: 340, fill: 0.85, label: 'MELTING' }}));
  }}, {{ cam: CC.cam.punch(960, 480, 1.2, 0.2), sfx: [[0.2, 'pop']] }});"""
        if split:
            s2 = f"""  S({t_mid}, {t1}, (ctx, s) => {{
    CC.bg(ctx, PAL.slateDk, {{ floor: FL }});
    CC.callout(ctx, 'STREET CORNER MELTDOWNS', 960, 220, s.lt, 0.2, {{ size: 76 }});
    P.coinStack(ctx, 960, FL, {{ n: 8, r: 65 }});
  }}, {{ cam: CC.cam.zoom(1.1), sfx: [[0.1, 'clink']] }});"""
    elif "changed the rules" in low or "never saw coming" in low:
        s1 = f"""  S({t0}, {t_mid}, (ctx, s) => {{
    CC.spot(ctx, 960, FL, {{ w: 550 }});
    CC.stamp(ctx, s, 'RULE CHANGE', 960, 460, 0.2, {{ col: PAL.red, size: 95 }});
    bunker(ctx, s, {{ x: 450, y: FL, expr: 'shock' }}, [{{ at: 0.3, collapse: 'left', fx: 'sweat' }}]);
  }}, {{ cam: CC.cam.punch(960, 460, 1.35, 0.2), sfx: [[0.2, 'stamp']] }});"""
        if split:
            s2 = f"""  S({t_mid}, {t1}, (ctx, s) => {{
    CC.bg(ctx, PAL.charcoal, {{ floor: FL }});
    judge(ctx, s, {{ x: 960, y: FL, s: 1.8, expr: 'angry' }}, [{{ at: 0.2, pose: 'pointUp' }}]);
    CC.stamp(ctx, s, 'THE HOUSE WINS', 960, 240, 0.3, {{ col: PAL.white, size: 85 }});
  }}, {{ cam: CC.cam.punch(960, 240, 1.25, 0.3), sfx: [[0.3, 'thud']] }});"""
    elif "poker player" in low or "oil lease in a card game" in low:
        s1 = f"""  S({t0}, {t_mid}, (ctx, s) => {{
    CC.bg(ctx, PAL.wood, {{ floor: FL, floorCol: PAL.brown }});
    P.desk(ctx, 960, FL + 20, {{ s: 1.4 }});
    hl_hunt(ctx, s, {{ x: 680, y: FL, pose: 'hold', expr: 'smug' }}, [{{ at: 0.3, pose: 'present', expr: 'grin' }}]);
    CC.actor(ctx, s, 'crook', {{ x: 1240, y: FL, pose: 'face', expr: 'shock' }}, [{{ at: 0.5, pose: 'shrug', fx: 'sweat' }}]);
  }}, {{ cam: CC.cam.push(680, FL - 200, 1.2, 0, {t_mid - t0:.2f}), sfx: [[0.1, 'whoosh']] }});"""
        if split:
            s2 = f"""  S({t_mid}, {t1}, (ctx, s) => {{
    CC.bg(ctx, PAL.beige, {{ floor: FL }});
    P.document(ctx, 960, 480, {{ s: 1.8, title: 'EAST TEXAS OIL LEASE' }});
    CC.stamp(ctx, s, 'WON IN POKER', 960, 480, 0.3, {{ col: PAL.red, size: 82 }});
  }}, {{ cam: CC.cam.punch(960, 480, 1.3, 0.25), sfx: [[0.25, 'stamp']] }});"""
    elif "muammar gaddafi" in low or "libya" in low or "nationalized" in low:
        s1 = f"""  S({t0}, {t_mid}, (ctx, s) => {{
    CC.bg(ctx, PAL.tanDk, {{ floor: FL, floorCol: PAL.tan }});
    P.skyscraper(ctx, 1300, FL, {{ w: 280, h: 500, col: PAL.slate, sign: 'SARIR OIL' }});
    bunker(ctx, s, {{ x: 500, y: FL, pose: 'cross', expr: 'shock' }}, [{{ at: 0.4, collapse: 'left', fx: 'sweat' }}]);
    CC.actor(ctx, s, 'cop', {{ x: 920, y: FL, pose: 'point', expr: 'angry' }}, [{{ at: 0, slideIn: 'right', dur: 0.4 }}]);
  }}, {{ cam: CC.cam.punch(920, FL - 200, 1.25, 0.1), sfx: [[0.1, 'whoosh']] }});"""
        if split:
            s2 = f"""  S({t_mid}, {t1}, (ctx, s) => {{
    CC.bg(ctx, PAL.rose, {{ floor: FL }});
    CC.stamp(ctx, s, 'NATIONALIZED: $0', 960, 450, 0.2, {{ col: PAL.red, size: 95 }});
    bunker(ctx, s, {{ x: 960, y: FL, s: 1.7, expr: 'furious' }}, [{{ at: 0.2, pose: 'slump', fx: 'sweat' }}]);
  }}, {{ cam: CC.cam.punch(960, 450, 1.3, 0.2), sfx: [[0.2, 'thud']] }});"""
    elif "boeing" in low or "cargo jets" in low or "swiss" in low or "zurich" in low:
        s1 = f"""  S({t0}, {t_mid}, (ctx, s) => {{
    CC.bg(ctx, PAL.navy, {{ floor: FL, floorCol: PAL.slateDk }});
    CC.obj(ctx, s, {{ x: 1000, y: 400, at: 0.1, in: 'slide-right', from: -400 }}, c => {{
      CC.rect(c, -340, -100, 680, 200, PAL.grey, 8, 18);
      CC.text(c, 'BOEING 707 CARGO', 0, 0, 54, PAL.white, {{ font: 'PMarker' }});
    }});
    CC.actor(ctx, s, 'worker', {{ x: 420, y: FL, hat: 'cap', expr: 'neutral' }}, [{{ at: 0.3, pose: 'carry' }}]);
  }}, {{ cam: CC.cam.zoom(1.15), sfx: [[0.1, 'whoosh']] }});"""
        if split:
            s2 = f"""  S({t_mid}, {t1}, (ctx, s) => {{
    CC.bg(ctx, PAL.slateDk, {{ floor: FL }});
    P.bank(ctx, 960, FL, {{ s: 1.25, label: 'SWISS VAULT' }});
    CC.stamp(ctx, s, 'ZURICH SECURED', 960, 260, 0.3, {{ col: PAL.gold, size: 85 }});
  }}, {{ cam: CC.cam.punch(960, 260, 1.3, 0.3), sfx: [[0.3, 'stamp']] }});"""
    elif "fifty dollars" in low or "all-time record" in low or "speculative hysteria" in low:
        s1 = f"""  S({t0}, {t_mid}, (ctx, s) => {{
    CC.bg(ctx, PAL.sage, {{ floor: FL, floorCol: PAL.sageDk }});
    CC.word(ctx, '$50.35 / OZ', 960, 320, 135, PAL.moneyDk, s.lt, 0.15);
    bunker(ctx, s, {{ x: 960, y: FL, expr: 'joy' }}, [{{ at: 0.2, pose: 'cheer', expr: 'grin' }}]);
    CC.callout(ctx, 'JANUARY 18, 1980', 960, 150, s.lt, 0.4, {{ size: 75 }});
  }}, {{ cam: CC.cam.punch(960, 480, 1.35, 0.3), sfx: [[0.3, 'ding']] }});"""
        if split:
            s2 = f"""  S({t_mid}, {t1}, (ctx, s) => {{
    CC.bg(ctx, PAL.gold, {{ floor: FL }});
    CC.rain(ctx, s, 'coin', {{ n: 16, speed: 500 }});
    bunker(ctx, s, {{ x: 960, y: FL, s: 1.8, expr: 'joy' }}, [{{ at: 0.2, pose: 'thumbsUp' }}]);
    CC.stamp(ctx, s, 'PEAK BILLIONS', 960, 250, 0.3, {{ col: PAL.red, size: 90 }});
  }}, {{ cam: CC.cam.zoom(1.15), sfx: [[0.1, 'clink']] }});"""
    elif "silver thursday" in low or "march twenty-seventh" in low or "bache" in low:
        s1 = f"""  S({t0}, {t_mid}, (ctx, s) => {{
    CC.bg(ctx, PAL.charcoal, {{ floor: FL }});
    CC.callout(ctx, 'SILVER THURSDAY', 960, 260, s.lt, 0.2, {{ size: 110, rot: -0.04 }});
    CC.stamp(ctx, s, '$100M MARGIN CALL', 960, 480, 0.4, {{ col: PAL.red, size: 92 }});
  }}, {{ cam: CC.cam.punch(960, 480, 1.35, 0.35), sfx: [[0.35, 'stamp']] }});"""
        if split:
            s2 = f"""  S({t_mid}, {t1}, (ctx, s) => {{
    CC.bg(ctx, PAL.rose, {{ floor: FL }});
    bunker(ctx, s, {{ x: 960, y: FL, s: 1.75, expr: 'shock' }}, [{{ at: 0.2, collapse: 'left', fx: 'sweat' }}]);
    CC.stamp(ctx, s, 'INSUFFICIENT FUNDS', 960, 240, 0.3, {{ col: PAL.red, size: 85 }});
  }}, {{ cam: CC.cam.punch(960, 240, 1.25, 0.3), sfx: [[0.3, 'thud']] }});"""
    else:
        actor_name = ['tycoon', 'banker', 'analyst', 'worker', 'reporter', 'techceo'][i % 6]
        action = ['point', 'shrug', 'present', 'wave', 'think', 'thumbsUp', 'cross'][i % 7]
        prop_pick = ['cashStack', 'bill', 'coinStack', 'skyscraper', 'bank', 'document'][i % 6]
        s1 = f"""  S({t0}, {t_mid}, (ctx, s) => {{
    CC.bg(ctx, {bg1}, {{ floor: FL }});
    CC.actor(ctx, s, '{actor_name}', {{ x: 640, y: FL, s: 1.45, expr: 'neutral' }}, [{{ at: 0.15, pose: '{action}', expr: 'confident' }}]);
    P.{prop_pick}(ctx, 1280, FL, {{ s: 1.3 }});
    CC.callout(ctx, {clean_txt}, 960, 260, s.lt, 0.3, {{ size: 66, maxW: 820 }});
  }}, {{ cam: CC.cam.push(960, 480, 1.15, 0, {t_mid - t0:.2f}), sfx: [[0.15, 'whoosh']] }});"""
        if split:
            bg2 = BGS[(i + 3) % len(BGS)]
            s2 = f"""  S({t_mid}, {t1}, (ctx, s) => {{
    CC.bg(ctx, {bg2}, {{ floor: FL }});
    CC.actor(ctx, s, '{actor_name}', {{ x: 960, y: FL, s: 1.75, expr: 'smug' }}, [{{ at: 0.2, pose: 'pointUp' }}]);
    CC.stamp(ctx, s, {clean_txt}, 960, 250, 0.25, {{ col: PAL.charcoal, size: 70 }});
  }}, {{ cam: CC.cam.punch(960, 480, 1.28, 0.2), sfx: [[0.2, 'pop']] }});"""

    shots.append(s1)
    if split:
        shots.append(s2)

footer = f"""
  TM.config({{
    fps: 30,
    duration: {cues[-1][1]},
    shots,
    phrases: TM.phrasesFromCues(CUES.map(([s, e, text]) => ({{ s, e, text }})), 6)
  }});
  TM.CAPTIONS = false;
}})();
"""

full_code = header + "\n".join(shots) + footer

with open('explainer/hunt_brothers/anim/story.js', 'w', encoding='utf-8') as f:
    f.write(full_code)

print(f"Total shots generated: {len(shots)}")
print("Wrote explainer/hunt_brothers/anim/story.js successfully with CC.rain fully defined!")
