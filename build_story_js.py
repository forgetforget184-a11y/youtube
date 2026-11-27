import json, os

cues_path = 'c:/Users/forge/OneDrive/Desktop/youtube/explainer/hunt_brothers/work/cues.json'
cues = json.load(open(cues_path, 'r', encoding='utf-8'))

# Palettes and presets
# CC.CHARS: madoff tycoon techceo analyst investor investor2 woman grandma cop son crook banker worker kid judge reporter

js_code = """/* ============================================================================
 * story.js — "The Billionaires Who Cornered the Silver Market"
 * Crayon Capital procedural Canvas2D animated video
 * ==========================================================================*/
(function () {
  const TM = window.TM, CC = TM.CC, P = CC.P, PAL = CC.PAL, INK = CC.INK, W = TM.W, H = TM.H;
  const FL = 880;

  const CUES = """ + json.dumps(cues) + """;

  const shots = [];
  const S = (a, b, draw, o) => shots.push(Object.assign({ start: a, end: b, draw }, o || {}));

  // Helper characters
  const bunker = (ctx, s, base, track) => CC.actor(ctx, s, 'tycoon', Object.assign({ s: 1.5, expr: 'neutral' }, base), track);
  const herbert = (ctx, s, base, track) => CC.actor(ctx, s, 'banker', Object.assign({ s: 1.45, expr: 'neutral' }, base), track);
  const hl_hunt = (ctx, s, base, track) => CC.actor(ctx, s, 'tycoon', Object.assign({ s: 1.55, expr: 'smug', mustache: 'walrus' }, base), track);

"""

plan_md = "# Shot Plan: The Billionaires Who Cornered the Silver Market\n\n"
plan_md += "| Shot | Time (s) | Scene / Action | Background | Cast & Props |\n"
plan_md += "|---|---|---|---|---|\n"

# Define rich scene generators for blocks of cues
# We will create individual modular shots
shots_js = []

for i, (start, end, text) in enumerate(cues):
    t_start = round(start, 2)
    t_end = round(end, 2)
    dur = round(t_end - t_start, 2)
    if dur < 0.1:
        continue

    shot_num = i + 1
    # Categorize scene based on text keywords and progression
    low = text.lower()
    
    # 1. Chapter cards
    is_chapter = False
    chapter_title = ""
    kicker = ""
    if "to understand how anyone could attempt something this absurd" in low or (i >= 10 and i <= 11 and "meet their father" in low):
        is_chapter = True; chapter_title = "The Gambler's Sons"; kicker = "CHAPTER ONE"
    elif "naturally, the first thing the hunt brothers wanted to buy was gold" in low:
        is_chapter = True; chapter_title = "The Shiny Metal Loophole"; kicker = "CHAPTER TWO"
    elif "to understand how commodity futures exchanges actually work" in low:
        is_chapter = True; chapter_title = "The Midnight Airlift"; kicker = "CHAPTER THREE"
    elif "with hundreds of millions of ounces locked away in private vaults" in low:
        is_chapter = True; chapter_title = "The Silver Fever of 1980"; kicker = "CHAPTER FOUR"
    elif "while the hunt brothers were celebrating their paper billions" in low:
        is_chapter = True; chapter_title = "Changing the Rules"; kicker = "CHAPTER FIVE"
    elif "as soon as the new rules took effect" in low:
        is_chapter = True; chapter_title = "Silver Thursday and the Fall"; kicker = "CHAPTER SIX"
    elif "the fallout from the silver squeeze dragged on for nearly a decade" in low:
        is_chapter = True; chapter_title = "The Billion-Dollar Lesson"; kicker = "FINAL CHAPTER"

    if is_chapter:
        body = f"""  /* {shot_num} ─ {t_start}–{t_end}  Chapter Card: {chapter_title} */
  S({t_start}, {t_end}, (ctx, s) => {{
    CC.chapter(ctx, s, {json.dumps(chapter_title)}, {{ kicker: {json.dumps(kicker)}, at: 0.1, dur: {min(dur * 0.7, 1.2):.2f} }});
  }}, {{ fadeIn: 0.15, fadeOut: 0.15 }});\n"""
        plan_md += f"| {shot_num} | {t_start}–{t_end} | Black Chapter Card: {chapter_title} | Black | Text write-on |\n"
        shots_js.append(body)
        continue

    # Specific key narrative moments
    if shot_num == 1:
        body = f"""  /* {shot_num} ─ {t_start}–{t_end}  Hook: 1979 Wall Street entrance */
  S({t_start}, {t_end}, (ctx, s) => {{
    CC.bg(ctx, PAL.sky, {{ floor: FL, floorCol: PAL.tanDk }});
    CC.city(ctx, FL, PAL.slate, {{ xs: [120, 360, 1500, 1720] }});
    P.bank(ctx, 1280, FL, {{ s: 1.1, label: 'WALL ST' }});
    bunker(ctx, s, {{ x: 620, y: FL, expr: 'smug' }}, [
      {{ at: 0, slideIn: 'left', dur: 0.7 }}, {{ at: 1.5, pose: 'point', expr: 'confident' }}
    ]);
    herbert(ctx, s, {{ x: 420, y: FL, expr: 'happy' }}, [
      {{ at: 0.2, slideIn: 'left', dur: 0.7 }}, {{ at: 2.0, pose: 'thumbsUp' }}
    ]);
    CC.callout(ctx, '1979', 960, 220, s.lt, 0.5, {{ size: 80, rot: -0.03 }});
  }});\n"""
    elif "paper money was completely worthless" in low or "heading for bankruptcy" in low:
        body = f"""  /* {shot_num} ─ {t_start}–{t_end}  Burning dollar bill / bankruptcy */
  S({t_start}, {t_end}, (ctx, s) => {{
    CC.bg(ctx, PAL.rose, {{ floor: FL, floorCol: PAL.greyDk }});
    CC.obj(ctx, s, {{ x: 960, y: 460, at: 0.3, in: 'pop' }}, c => {{
      P.bill(c, 0, 0, {{ s: 2.2, label: '$100' }});
      CC.stamp(c, s, 'WORTHLESS', 0, 0, 0.8, {{ col: PAL.red, size: 90 }});
    }});
    bunker(ctx, s, {{ x: 450, y: FL, pose: 'shrug', expr: 'disappointed' }}, [
      {{ at: 0.8, expr: 'shock', fx: 'sweat' }}
    ]);
  }});\n"""
    elif "cold, hard metal" in low or "safe place" in low:
        body = f"""  /* {shot_num} ─ {t_start}–{t_end}  Silver bullion drop */
  S({t_start}, {t_end}, (ctx, s) => {{
    CC.bg(ctx, PAL.skyLt, {{ floor: FL }});
    CC.obj(ctx, s, {{ x: 960, y: FL, at: 0.2, in: 'drop', from: 400 }}, c => {{
      CC.rect(c, -200, -120, 400, 120, PAL.grey, 8, 12);
      CC.text(c, 'SILVER .999', 0, -60, 48, PAL.white, {{ font: 'PMarker' }});
    }});
    bunker(ctx, s, {{ x: 1450, y: FL, expr: 'greedy' }}, [
      {{ at: 0.4, pose: 'point', expr: 'smug' }}
    ]);
    CC.stamp(ctx, s, 'REAL ASSET', 960, 360, 0.6, {{ col: PAL.moneyDk, size: 85 }});
  }});\n"""
    elif "one-third of all" in low or "privately held silver" in low:
        body = f"""  /* {shot_num} ─ {t_start}–{t_end}  Globe + 1/3 silver */
  S({t_start}, {t_end}, (ctx, s) => {{
    CC.bg(ctx, PAL.slateDk, {{ floor: FL, floorCol: PAL.charcoal }});
    CC.globeSpin(ctx, s, 960, 500, {{ r: 240 }});
    CC.callout(ctx, '1/3 OF ALL SILVER', 960, 180, s.lt, 0.4, {{ size: 88, rot: 0.02 }});
    bunker(ctx, s, {{ x: 420, y: FL, expr: 'confident' }}, [
      {{ at: 0.2, pose: 'cheer', expr: 'joy' }}
    ]);
  }});\n"""
    elif "seven hundred percent" in low or "pushed the price" in low:
        body = f"""  /* {shot_num} ─ {t_start}–{t_end}  Rocket chart +700% */
  S({t_start}, {t_end}, (ctx, s) => {{
    CC.bg(ctx, PAL.beige, {{ floor: FL }});
    P.lineChart(ctx, 480, 260, 960, 480, [[0, 0.1], [0.3, 0.18], [0.6, 0.45], [0.9, 0.95]], CC.prog(CC.q(s.lt), 0.2, 1.2), {{ col: PAL.green, lw: 9 }});
    CC.stamp(ctx, s, '+700%', 1200, 380, 0.7, {{ col: PAL.red, size: 110 }});
    CC.actor(ctx, s, 'analyst', {{ x: 340, y: FL, pose: 'think', expr: 'shock' }}, [
      {{ at: 0.5, pose: 'face', fx: 'sweat' }}
    ]);
  }});\n"""
    elif "antique candelabras" in low or "melt family heirlooms" in low:
        body = f"""  /* {shot_num} ─ {t_start}–{t_end}  Melting antique silver */
  S({t_start}, {t_end}, (ctx, s) => {{
    CC.bg(ctx, PAL.tan, {{ floor: FL }});
    CC.actor(ctx, s, 'grandma', {{ x: 620, y: FL, expr: 'shock' }}, [
      {{ at: 0, slideIn: 'left', dur: 0.5 }}, {{ at: 0.8, pose: 'give', expr: 'happy' }}
    ]);
    CC.actor(ctx, s, 'worker', {{ x: 1300, y: FL, pose: 'hold', expr: 'neutral' }}, [
      {{ at: 0.6, pose: 'carry' }}
    ]);
    CC.obj(ctx, s, {{ x: 960, y: FL, at: 0.2, in: 'pop' }}, c => {{
      P.jar(c, 0, 0, {{ w: 260, h: 320, fill: 0.8, label: 'MELTING' }});
    }});
  }});\n"""
    elif "changed the rules" in low or "never saw coming" in low:
        body = f"""  /* {shot_num} ─ {t_start}–{t_end}  The Rule Change slam */
  S({t_start}, {t_end}, (ctx, s) => {{
    CC.spot(ctx, 960, FL, {{ w: 500 }});
    CC.stamp(ctx, s, 'RULE CHANGE', 960, 480, 0.3, {{ col: PAL.red, size: 85 }});
    bunker(ctx, s, {{ x: 450, y: FL, expr: 'shock' }}, [
      {{ at: 0.3, collapse: 'left', fx: 'sweat' }}
    ]);
  }}, {{ sfx: [[0.3, 'stamp']] }});\n"""
    elif "poker player" in low or "gambling dens" in low or "oil lease in a card game" in low:
        body = f"""  /* {shot_num} ─ {t_start}–{t_end}  H.L. Hunt poker game */
  S({t_start}, {t_end}, (ctx, s) => {{
    CC.bg(ctx, PAL.wood, {{ floor: FL, floorCol: PAL.brown }});
    P.desk(ctx, 960, FL + 20, {{ s: 1.4 }});
    hl_hunt(ctx, s, {{ x: 680, y: FL, pose: 'hold', expr: 'smug' }}, [
      {{ at: 0.5, pose: 'present', expr: 'grin' }}
    ]);
    CC.actor(ctx, s, 'crook', {{ x: 1240, y: FL, pose: 'face', expr: 'shock', look: -0.6 }}, [
      {{ at: 0.8, pose: 'shrug', fx: 'sweat' }}
    ]);
    CC.callout(ctx, 'OIL LEASE', 960, 360, s.lt, 0.6, {{ size: 68 }});
  }});\n"""
    elif "east texas oil field" in low or "pennies on the dollar" in low:
        body = f"""  /* {shot_num} ─ {t_start}–{t_end}  East Texas oil gusher */
  S({t_start}, {t_end}, (ctx, s) => {{
    CC.bg(ctx, PAL.sky, {{ floor: FL, floorCol: PAL.tanDk }});
    P.mountain(ctx, 960, FL, {{ w: 600, h: 400, col: PAL.charcoal }});
    hl_hunt(ctx, s, {{ x: 480, y: FL, pose: 'pointUp', expr: 'joy' }}, [
      {{ at: 0.4, pose: 'cheer' }}
    ]);
    CC.coinJar(ctx, s, {{ x: 1400, y: FL, w: 240, h: 360, t0: 0.2, n: 5, fill0: 0.1, fill1: 0.95, label: 'OIL' }});
    CC.word(ctx, 'BILLIONS', 960, 200, 96, PAL.moneyDk, s.lt, 0.5);
  }});\n"""
    elif "muammar gaddafi" in low or "libya" in low or "nationalized" in low:
        body = f"""  /* {shot_num} ─ {t_start}–{t_end}  Libya nationalization */
  S({t_start}, {t_end}, (ctx, s) => {{
    CC.bg(ctx, PAL.tanDk, {{ floor: FL, floorCol: PAL.tan }});
    P.skyscraper(ctx, 1300, FL, {{ w: 280, h: 500, col: PAL.slate, sign: 'SARIR OIL' }});
    bunker(ctx, s, {{ x: 500, y: FL, pose: 'cross', expr: 'shock' }}, [
      {{ at: 0.6, collapse: 'left', fx: 'sweat' }}
    ]);
    CC.actor(ctx, s, 'cop', {{ x: 920, y: FL, pose: 'point', expr: 'angry' }}, [
      {{ at: 0, slideIn: 'right', dur: 0.5 }}
    ]);
    CC.stamp(ctx, s, 'SEIZED $0', 960, 380, 0.6, {{ col: PAL.red, size: 95 }});
  }});\n"""
    elif "nixon" in low or "gold standard" in low or "dollar and gold" in low:
        body = f"""  /* {shot_num} ─ {t_start}–{t_end}  Nixon closes gold window */
  S({t_start}, {t_end}, (ctx, s) => {{
    CC.bg(ctx, PAL.paper, {{ floor: FL }});
    P.podium(ctx, 960, FL + 30, {{ label: '1971' }});
    CC.actor(ctx, s, 'techceo', {{ x: 960, y: FL - 30, pose: 'present', expr: 'confident' }}, [
      {{ at: 0.5, pose: 'point', expr: 'serious' }}
    ]);
    CC.swap(ctx, s, 0.7, 1400, 500, c => P.coin(c, 0, 0, {{ s: 1.8, col: PAL.gold }}), c => P.bill(c, 0, 0, {{ s: 1.5 }}));
    CC.stamp(ctx, s, 'FIAT CURRENCY', 960, 220, 0.8, {{ col: PAL.red, size: 84 }});
  }});\n"""
    elif "illegal" in low or "gold bullion" in low or "roosevelt" in low or "prison" in low:
        body = f"""  /* {shot_num} ─ {t_start}–{t_end}  Gold ownership illegal / jail */
  S({t_start}, {t_end}, (ctx, s) => {{
    CC.bg(ctx, PAL.slateDk, {{ floor: FL, floorCol: PAL.greyDk }});
    CC.obj(ctx, s, {{ x: 960, y: 520, in: 'none' }}, c => P.bars(c, 0, 0, {{ w: 700, h: 500 }}));
    CC.actor(ctx, s, 'tycoon', {{ x: 960, y: FL, pose: 'face', expr: 'worried' }}, [
      {{ at: 0.5, pose: 'slump', fx: 'sweat' }}
    ]);
    CC.callout(ctx, 'EXECUTIVE ORDER 6102', 960, 160, s.lt, 0.4, {{ size: 68 }});
  }});\n"""
    elif "kodak" in low or "film" in low or "electronics" in low or "x-ray" in low:
        body = f"""  /* {shot_num} ─ {t_start}–{t_end}  Industrial silver demand */
  S({t_start}, {t_end}, (ctx, s) => {{
    CC.bg(ctx, PAL.skyLt, {{ floor: FL }});
    P.computer(ctx, 640, FL, {{ s: 1.4, screen: PAL.slate }});
    CC.obj(ctx, s, {{ x: 1280, y: 520, at: 0.3, in: 'pop' }}, c => {{
      CC.rect(c, -160, -120, 320, 240, PAL.yellow, 6, 8);
      CC.text(c, 'KODAK FILM', 0, 0, 44, PAL.black, {{ font: 'PMarker' }});
    }});
    CC.stamp(ctx, s, 'SUPPLY DEFICIT', 960, 220, 0.7, {{ col: PAL.red, size: 85 }});
  }});\n"""
    elif "saudi" in low or "prince" in low or "middle east" in low or "petrodollars" in low:
        body = f"""  /* {shot_num} ─ {t_start}–{t_end}  Saudi alliance / handshake */
  S({t_start}, {t_end}, (ctx, s) => {{
    CC.bg(ctx, PAL.tan, {{ floor: FL, floorCol: PAL.tanDk }});
    bunker(ctx, s, {{ x: 620, y: FL, pose: 'give', expr: 'smug' }}, [
      {{ at: 0.4, pose: 'wave', expr: 'happy' }}
    ]);
    CC.actor(ctx, s, 'tycoon', {{ x: 1300, y: FL, robe: true, hair: 'none', expr: 'confident' }}, [
      {{ at: 0.2, slideIn: 'right', dur: 0.5 }}, {{ at: 0.7, pose: 'point' }}
    ]);
    CC.callout(ctx, 'PETRODOLLAR ALLIANCE', 960, 240, s.lt, 0.5, {{ size: 76 }});
  }});\n"""
    elif "boeing" in low or "cargo jets" in low or "swiss" in low or "zurich" in low or "cowboy" in low:
        body = f"""  /* {shot_num} ─ {t_start}–{t_end}  Boeing 707 midnight airlift */
  S({t_start}, {t_end}, (ctx, s) => {{
    CC.bg(ctx, PAL.navy, {{ floor: FL, floorCol: PAL.slateDk }});
    CC.actor(ctx, s, 'worker', {{ x: 480, y: FL, hat: 'cap', expr: 'neutral' }}, [
      {{ at: 0.3, pose: 'carry' }}
    ]);
    CC.obj(ctx, s, {{ x: 1100, y: 440, at: 0.2, in: 'slide-right', from: -300 }}, c => {{
      CC.rect(c, -300, -90, 600, 180, PAL.grey, 8, 16);
      CC.text(c, 'BOEING 707 CARGO', 0, 0, 50, PAL.white, {{ font: 'PMarker' }});
    }});
    CC.stamp(ctx, s, 'TO SWITZERLAND', 960, 200, 0.7, {{ col: PAL.gold, size: 84 }});
  }});\n"""
    elif "fifty dollars" in low or "all-time record" in low or "speculative hysteria" in low:
        body = f"""  /* {shot_num} ─ {t_start}–{t_end}  Peak $50.35 record */
  S({t_start}, {t_end}, (ctx, s) => {{
    CC.bg(ctx, PAL.sage, {{ floor: FL, floorCol: PAL.sageDk }});
    CC.word(ctx, '$50.35 / OZ', 960, 320, 130, PAL.moneyDk, s.lt, 0.2);
    bunker(ctx, s, {{ x: 960, y: FL, expr: 'joy' }}, [
      {{ at: 0.3, pose: 'cheer', expr: 'grin' }}
    ]);
    CC.callout(ctx, 'JANUARY 18, 1980', 960, 150, s.lt, 0.6, {{ size: 72 }});
  }}, {{ cam: CC.cam.punch(960, 480, 1.3, 0.4) }});\n"""
    elif "tiffany" in low or "unconscionable" in low or "advertisement" in low:
        body = f"""  /* {shot_num} ─ {t_start}–{t_end}  Tiffany & Co. New York Times ad */
  S({t_start}, {t_end}, (ctx, s) => {{
    CC.bg(ctx, PAL.paper, {{ floor: FL }});
    CC.obj(ctx, s, {{ x: 960, y: 500, at: 0.2, in: 'pop' }}, c => {{
      P.newspaper(ctx, 0, 0, {{ headline: 'TIFFANY & CO: UNCONSCIONABLE' }});
    }});
    CC.actor(ctx, s, 'reporter', {{ x: 420, y: FL, pose: 'point', expr: 'shock' }}, [
      {{ at: 0.4, pose: 'write' }}
    ]);
  }});\n"""
    elif "liquidation only" in low or "banned from making any bids" in low:
        body = f"""  /* {shot_num} ─ {t_start}–{t_end}  Liquidation Only rule */
  S({t_start}, {t_end}, (ctx, s) => {{
    CC.spot(ctx, 960, FL, {{ w: 600 }});
    CC.stamp(ctx, s, 'LIQUIDATION ONLY', 960, 450, 0.2, {{ col: PAL.red, size: 80 }});
    CC.actor(ctx, s, 'judge', {{ x: 480, y: FL, expr: 'angry' }}, [
      {{ at: 0.4, pose: 'pointUp' }}
    ]);
  }});\n"""
    elif "paul volcker" in low or "federal reserve" in low:
        body = f"""  /* {shot_num} ─ {t_start}–{t_end}  Paul Volcker shuts credit lines */
  S({t_start}, {t_end}, (ctx, s) => {{
    CC.bg(ctx, PAL.slate, {{ floor: FL, floorCol: PAL.charcoal }});
    P.bank(ctx, 1340, FL, {{ s: 1.1, label: 'FED RESERVE' }});
    CC.actor(ctx, s, 'banker', {{ x: 620, y: FL, pose: 'cross', expr: 'furious' }}, [
      {{ at: 0.3, pose: 'point', expr: 'furious' }}
    ]);
    CC.stamp(ctx, s, 'CREDIT SHUTDOWN', 960, 240, 0.6, {{ col: PAL.red, size: 84 }});
  }});\n"""
    elif "silver thursday" in low or "march twenty-seventh" in low or "bache" in low:
        body = f"""  /* {shot_num} ─ {t_start}–{t_end}  Silver Thursday March 27, 1980 */
  S({t_start}, {t_end}, (ctx, s) => {{
    CC.bg(ctx, PAL.charcoal, {{ floor: FL }});
    CC.callout(ctx, 'SILVER THURSDAY', 960, 260, s.lt, 0.2, {{ size: 105, rot: -0.04 }});
    CC.stamp(ctx, s, '$100M MARGIN CALL', 960, 480, 0.6, {{ col: PAL.red, size: 90 }});
    bunker(ctx, s, {{ x: 480, y: FL, expr: 'shock' }}, [
      {{ at: 0.5, collapse: 'left', fx: 'sweat' }}
    ]);
  }});\n"""
    elif "freefall" in low or "twenty-one dollars down to ten" in low or "pandemonium" in low:
        body = f"""  /* {shot_num} ─ {t_start}–{t_end}  Trading pit price collapse */
  S({t_start}, {t_end}, (ctx, s) => {{
    CC.bg(ctx, PAL.rose, {{ floor: FL }});
    P.lineChart(ctx, 420, 240, 1080, 520, [[0, 0.95], [0.3, 0.6], [0.6, 0.3], [1, 0.1]], CC.prog(CC.q(s.lt), 0.1, 1.0), {{ col: PAL.red, lw: 10 }});
    CC.actor(ctx, s, 'analyst', {{ x: 1550, y: FL, expr: 'furious' }}, [
      {{ at: 0.2, pose: 'face', fx: 'sweat' }}
    ]);
    CC.stamp(ctx, s, 'CRASH', 960, 360, 0.5, {{ col: PAL.red, size: 130 }});
  }});\n"""
    elif "bankruptcy" in low or "chapter eleven" in low or "auction" in low:
        body = f"""  /* {shot_num} ─ {t_start}–{t_end}  Bankruptcy courtroom */
  S({t_start}, {t_end}, (ctx, s) => {{
    CC.bg(ctx, PAL.wood, {{ floor: FL, floorCol: PAL.brown }});
    P.podium(ctx, 1320, FL + 30, {{ label: 'AUCTION' }});
    CC.actor(ctx, s, 'judge', {{ x: 1320, y: FL - 30, expr: 'neutral' }}, [
      {{ at: 0.4, pose: 'point' }}
    ]);
    bunker(ctx, s, {{ x: 540, y: FL, pose: 'slump', expr: 'disappointed' }}, [
      {{ at: 0.5, fx: 'sweat' }}
    ]);
    CC.stamp(ctx, s, 'BANKRUPT', 960, 300, 0.6, {{ col: PAL.red, size: 100 }});
  }});\n"""
    elif "rewrites the rules" in low or "breaks the house" in low or "billion-dollar lesson" in low:
        body = f"""  /* {shot_num} ─ {t_start}–{t_end}  Final punchline: The House Rewrites the Rules */
  S({t_start}, {t_end}, (ctx, s) => {{
    CC.spot(ctx, 960, FL, {{ w: 540 }});
    bunker(ctx, s, {{ x: 960, y: FL + 100, s: 1.8, expr: 'disappointed' }}, [
      {{ at: 0.4, expr: 'neutral', turn: true }}
    ]);
    CC.stamp(ctx, s, 'THE HOUSE REWRITES THE RULES', 960, 320, 0.6, {{ col: PAL.white, size: 70 }});
  }}, {{ cam: CC.cam.punch(960, 480, 1.35, 0.4) }});\n"""
    else:
        # Default alternating dynamic shot
        bg_col = ['PAL.sky', 'PAL.beige', 'PAL.paper', 'PAL.sage', 'PAL.tan', 'PAL.slate', 'PAL.skyLt'][i % 7]
        actor_name = ['tycoon', 'banker', 'analyst', 'worker', 'reporter'][i % 5]
        action = ['point', 'shrug', 'present', 'wave', 'think', 'thumbsUp'][i % 6]
        callout_str = json.dumps(text[:25].upper())
        body = f"""  /* {shot_num} ─ {t_start}–{t_end}  Clause: "{text[:40]}..." */
  S({t_start}, {t_end}, (ctx, s) => {{
    CC.bg(ctx, {bg_col}, {{ floor: FL }});
    CC.actor(ctx, s, '{actor_name}', {{ x: {680 if i % 2 == 0 else 1240}, y: FL, s: 1.45, expr: 'neutral' }}, [
      {{ at: 0.2, pose: '{action}', expr: 'confident' }}
    ]);
    CC.callout(ctx, {callout_str}, 960, 320, s.lt, 0.4, {{ size: 64, maxW: 800 }});
  }});\n"""

    shots_js.append(body)
    plan_md += f"| {shot_num} | {t_start}–{t_end} | {text[:50]}... | Dynamic | Dynamic action & prop |\n"

js_code += "\n".join(shots_js)

js_code += f"""
  TM.config({{
    fps: 30,
    duration: {cues[-1][1]},
    shots,
    phrases: TM.phrasesFromCues(CUES.map(([s, e, text]) => ({{ s, e, text }})), 6)
  }});
  TM.CAPTIONS = false;
}})();
"""

with open('c:/Users/forge/OneDrive/Desktop/youtube/explainer/hunt_brothers/anim/story.js', 'w', encoding='utf-8') as f:
    f.write(js_code)

with open('c:/Users/forge/OneDrive/Desktop/youtube/explainer/hunt_brothers/work/PLAN.md', 'w', encoding='utf-8') as f:
    f.write(plan_md)

print("Generated story.js and PLAN.md successfully!")
print(f"Total shots written: {len(shots_js)}")
