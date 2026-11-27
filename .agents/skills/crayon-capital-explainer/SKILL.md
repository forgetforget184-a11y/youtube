---
name: crayon-capital-explainer
description: Create Crayon Capital-style finance/business explainer YouTube videos. Offers 10 ELI5 topic ideas, writes the script in the channel's structure, asks the user to upload THEIR OWN voiceover, then builds a 1920×1080 MP4 with real animated characters and objects (clean stable lines, characters physically acting out every line, slide-ins, pop-in props, stamps, coin jars, draw-on charts, emotion FX), auto-cued SFX and a quiet music bed (10–20 % of the voice). Scripts are ~15 minutes long by default. Use whenever the user wants a faceless finance explainer, an ELI5 business channel, or a Crayon Capital-style video.
---

# Crayon Capital–Style Explainer: idea → script → user's voiceover → animated MP4

**Style bible:** `references/reference_breakdown.md` was written from watching the real channel videos (Nvidia/Jensen, J.P. Morgan, Steve Jobs). Read it before planning any shots. If anything in this file conflicts with it, the breakdown wins.

**The look:** stick-figure hybrids with big round heads and no neck, a small filled torso, single-line arms with no hands, stick legs with shoe blobs, dot eyes and an arc mouth. Lines are **clean and stable — no wiggle/boil** (user rule; `CC.BOIL=false` is the engine default, never turn it on unless the user asks). Motion is **smooth** (`CC.STEP_FPS=30`). Characters **act out the story**: whatever the narration says, a character physically does it on screen (see 4.2 Acting rules). Characters **slide** with a small step-bob; there are no walk cycles. Props **pop in** with overshoot, slide in, or **draw on**. Stamps slam down, coins drop into jars, cracks form. Backgrounds are muted and flat with grain. Black plus a spotlight is used for drama, and black chapter cards carry white handwritten titles. The camera is mostly static, with push/punch-ins on faces for punchlines and an occasional whip pan. Cuts are hard; chapter cards fade to black. Every object entrance gets a pop, whoosh, scribble, clink, stamp or ding.

**HARD RULES**
- **Real animation only.** The video body is always built by the procedural Canvas2D engine (`engine/`). Never make AI stills with Ken Burns zooms. AI image generation is only for thumbnails.
- **Never generate a voice.** No synthetic or AI voice of any kind. The user records and uploads their own voiceover. Timing comes from that file (see 4.1).
- Never edit or re-time the voice. The picture is timed to it.
- **Script length: ~15 minutes** (about 2,400–2,700 words) unless the user explicitly asks for a different length.
- **Clean look:** no line wiggle/boil, no idle jitter. Only intentional motion (actions, impacts, shakes on a hit).
- **Characters act, they don't stand.** Every clause is shown as a character doing the thing the narration describes.
- **Music bed at 10–20 % of the voice** (default 15 %). Never louder.

---

## Rules
- Ideas, characters and shots are always original. Never recreate another creator's video shot for shot.
- No burned-in captions unless the user asks (`TM.CAPTIONS=false`).
- **Audio levels:** the music bed sits at **15 % of the gated voice RMS (≈ −16.5 dB)**, allowed range 10–20 % (`--music-level 0.10–0.20`; `sfx.py` clamps anything outside that range), and is further ducked under speech. SFX peaks are capped at 40 % of the voice peak. `sfx.py mix` enforces both and prints the measured levels.
- Send a contact sheet (one frame per shot) before the full render, and wait for the user's go-ahead.
- Keep the user informed with a task list.

---

## Stage 1 — Intake (always first)

If a voiceover file is already attached, skip to Stage 4. If a script is attached too, use it for alignment. Otherwise ask:

**"Where are you starting from?"**
- **Voiceover ready** → ask for the upload plus the script text, then go to Stage 4.
- **Have a script, need to record** → tighten the script per Stage 3, give it back with recording tips, ask for the upload.
- **Need ideas and a script** → go to Stage 2.

Ask for the target length if not given. **The default is 15 minutes** (the channel's long-form format). Only go shorter if the user asks.

---

## Stage 2 — 10 Topic Ideas

Give exactly 10 numbered ideas in one reply and ask the user to reply with a number (or "more"). Each idea has:
- **Title** (5–8 words, curiosity-driven, e.g. "The Man Who Faked an Entire Economy").
- **Hook line**: the first spoken sentence, a dramatic contradiction stated bluntly.
- **The twist** in one line (the ironic payoff or present-day tie-back).
- **Why it animates well**: the 2–3 big visual moments (a coin jar filling then vanishing, a building cracking on a mountain, a stamp slamming "FRAUD").
- **True or legend**: documented history, disputed account, or folklore.

What makes a perfect idea:
- One surprising money story with visible cause and effect, and a central character whose decisions drive it.
- Stakes that escalate and collapse in a twist, plus rich props (buildings, globes, money, documents, charts, courtrooms).
- The 10 are mixed across sub-niches: frauds and Ponzi schemes, crashes, origin stories of giants, rogue traders, government disasters, everyday-money facts.
- Key facts are checked with a web search. Disputed stories are framed as "reports say". No living people as the butt of a joke, nothing graphic, nothing political.

---

## Stage 3 — Script (channel structure), then ask for the voiceover

Write narration only, at about **2.8 words/second** (≈ 168 words/min). **Default target: 15 minutes = 2,400–2,700 words.** (10 min ≈ 1,700; 20 min ≈ 3,350.) A 2-minute script is NOT acceptable unless the user asked for that length.

**15-minute blueprint** (word counts are targets — hit the total):
| Part | Length | Words |
|---|---|---|
| Hook (contradiction / cold open at the peak) | 0:00–0:30 | ~80 |
| Chapter 1 — Who they were / origin (childhood, first break, personality) | ~2 min | ~330 |
| Chapter 2 — The rise (first wins, the system, the people around them) | ~2.5 min | ~420 |
| Chapter 3 — How it actually worked (explain the mechanism step by step, ELI5 with analogies) | ~2.5 min | ~420 |
| Chapter 4 — Warning signs everyone ignored (the people who noticed, why nobody acted) | ~2 min | ~340 |
| Chapter 5 — The collapse (the trigger, the numbers, the night it ended) | ~2.5 min | ~420 |
| Chapter 6 — Aftermath (trials, victims, what happened to everyone) | ~2 min | ~330 |
| Ending — present-day tie-back + ironic last line | ~1 min | ~170 |

To fill 15 minutes with substance (not padding): research the story properly (web search: biographies, court records, news archives), include specific dates, names, amounts, quotes ("reports say" for disputed bits), small human scenes (a meeting, a phone call, a decision) that characters can act out, side-stories about secondary characters, and 1–2 "to understand this, you need to know…" mini-explainers. Re-hook the viewer every ~60–90 s with a question or a reveal ("But that wasn't even the worst part.").

**Channel structure** (from the breakdown):
1. **Hook (0–15 s):** a dramatic contradiction or event, with no setup. *"The biggest bank in the world… but before it was a bank, it was one man."*
2. **Chapters** (5–7 for a 15-minute video, each with a short title that goes on a black card, e.g. "The Golden Boy", "The Making of a Weapon"): rapid-fire facts, each clause a new visual. Use ironic juxtaposition humour ("mildly disappointed" → "extremely disappointed").
3. **Pivot → collapse:** short, fast lines with numbers and consequences.
4. **Ending:** tie back to the present day, or give a reflective takeaway with an ironic last line.

Use plain spoken English, contractions, and clauses of 8–15 words. Write numbers as words. Never describe what the viewer already sees.

Then reply with:
- The script in a copyable block (also saved as a `.md` file and presented, because 15 minutes of text is long), chapter titles marked as `[CHAPTER: …]` lines (these are not spoken), plus the **counted** word count (count it with a tool, don't estimate) and estimated length. If the count is under 2,400 words for a 15-minute target, expand before sending.
- A one-paragraph visual plan covering the 6–8 biggest animated moments.
- Recording tips: quiet room, one steady narrator voice, natural conversational pace, a clear pause at every sentence end (this makes alignment exact), MP3 or WAV, no music underneath.
- The ask: **"Please record this in your own voice and upload the voiceover file. I'll build the animated video from it."** Then stop and wait. Never generate a voice.

Keep the final script text. It drives alignment and shot timing.

---

## Stage 4 — Build (after the user's voiceover is uploaded)

Do everything without stopping, except the contact-sheet check in 4.4.

### 4.0 Setup
```bash
SKILL=/home/ubuntu/skills/crayon-capital-explainer/engine
SLUG=<slug>; P=/home/ubuntu/explainer/$SLUG
mkdir -p $P/{anim,audio,out,work}
cp $SKILL/{render.html,scene.js,characters.js,props.js,crayon.js,cc.js,cc_props.js,captions.js} $P/anim/
cp -r $SKILL/fonts $P/anim/
cp $SKILL/story.madoff.example.js $P/anim/story.js     # starting template
# playwright-core lives in $SKILL/node_modules — always run the engine scripts from $SKILL
```
Save the upload as `audio/voice.mp3` (or `.wav`).

### 4.1 Timing from the user's voiceover
Put one spoken clause per line in `work/script.txt`, leaving out `[CHAPTER]` lines. Then:
```bash
python3 $SKILL/align.py --voice $P/audio/voice.mp3 --script $P/work/script.txt --out $P/work/cues.json --vtt $P/audio/voice.vtt
```
- `align.py` uses **openai-whisper** word timestamps if it is importable (`pip install openai-whisper` if allowed). Otherwise it falls back to **silence alignment**: ffmpeg `silencedetect` pauses matched to the script lines by length.
- Check the printed table. Every boundary should sit in a pause. If a line is off, split or merge script lines and re-run.
- Paste the result as `const CUES = [[start, end, "text"], ...]` in story.js. Chapter cards go on a natural pause, or over the first clause of the chapter (e.g. "Here's the thing.").

### 4.2 Shot plan (`work/PLAN.md` before coding)
Write one row per clause, so each shot lasts 1.3–5 s and the visual changes on every new clause. A 15-minute video is ~220–320 shots: plan and write it **chapter by chapter** (one `PLAN.md` section and one block of `S(...)` calls per chapter), peek-checking each chapter before moving on. Each row lists: time range, background (muted flat / black+spotlight / chapter card), cast (preset names) with their actions, props with their animations, on-screen text (callout, stamp, written word), camera (static / punch / push / pan / whip), and expected SFX.

**Acting rules (most important — the user rejected shots where characters just stand):**
- Turn every clause into a verb the character performs. "He wired the money" → he slides a bag across a desk / hands it over; "nobody asked questions" → crowd shrugs, one character covers mouth; "he ran the numbers" → character writes on a board, chart draws on; "the market collapsed" → character jumps back as a chart line crashes, sweat FX.
- Each shot needs a **main action** by a character (hold/handOver/carry/write/point/jump/sit/kneel/collapse/walkAway/slideIn/slideOut/clap/wave/cheer/talk+say/think) that matches the narration, timed to the word it illustrates, plus a reaction (expr change or FX) from someone.
- Characters interact with props and with each other (hand-offs, pointing at, carrying, looking at each other with `look`/`flip`), not with the camera.
- No shot where everyone just stands while text appears. No character frozen longer than ~1 s.
- In the PLAN row, write the action column first; if a row has no character action, rewrite it.

Pacing:
- Hook: one strong image (skyline + character slides in, big number, spotlight).
- Every 3–6 shots: a camera emphasis (a punch-in on a face, or one whip pan between locations).
- One black chapter card per chapter, with `fadeIn/fadeOut`.
- Change the background colour on every cut so cuts read clearly.
- Ending: punch-in on a face plus the final line in a bubble or a stamp.

### 4.3 Write `anim/story.js` — the TM.CC v2 API
The template `engine/story.madoff.example.js` is the Madoff opening: 14 shots and 29.5 s, using every feature. `story.madoff.v1_legacy.js` is the old 145 s story; it still renders through the legacy shim, but new work uses `CC.*`.

```js
(function () {
  const TM = window.TM, CC = TM.CC, P = CC.P, PAL = CC.PAL, INK = CC.INK, W = TM.W, H = TM.H;
  const FL = 880;                                    // floor line (feet y)
  const CUES = [[0.10, 4.58, "…"], /* from align.py */];
  const shots = []; const S = (a, b, draw, o) => shots.push(Object.assign({ start: a, end: b, draw }, o || {}));
  S(0, 2.4, (ctx, s) => {                            // s = {lt (shot-local s), u (0..1), t, f, len}
    CC.bg(ctx, PAL.sky, { floor: FL });
    CC.city(ctx, FL, PAL.slate);
    CC.actor(ctx, s, 'madoff', { x: 700, y: FL, s: 1.45, expr: 'smug' }, [
      { at: 0, slideIn: 'left', dur: 0.6 }, { at: 0.75, pose: 'point', expr: 'confident' } ]);
    CC.obj(ctx, s, { x: 1260, y: 420, at: 0.8, in: 'pop' }, c => CC.text(c, '50 YEARS', 0, 0, 100, PAL.red));
  }, { /* cam, whip, fadeIn, fadeOut, sfx */ });
  TM.config({ fps: 30, duration: <VOICE_DURATION>, shots, phrases: TM.phrasesFromCues(CUES.map(([s, e, text]) => ({ s, e, text })), 6) });
  TM.CAPTIONS = false;
})();
```
All times inside a shot are **shot-local seconds** (`s.lt`). `CC.q(lt)` samples motion at `CC.STEP_FPS` (30 = smooth, the default); `CC.actor` and `CC.obj` already do this. Keep `CC.BOIL=false` (clean lines).

#### Characters (`engine/cc.js`)
- **Presets** (`CC.CHARS`, 16): `madoff tycoon techceo analyst investor investor2 woman grandma cop son crook banker worker kid judge reporter`. Custom: `CC.char('investor', { shirt: PAL.red, hair: 'curly', hairCol: '#222', glasses: 'round' })`.
- **Accessories:**
  - hair `short parted swept sides spiky curly bun long bob none` (+`hairCol`)
  - hat `tophat bowler fedora police hardhat cap crown`
  - `mustache: walrus|handlebar|thin`, `beard: full|stubble`, `glasses: round|square|half`, `shades`
  - clothing `shirt suit tie bowtie turtleneck dress robe badge logo old`
- **Poses** (snap; `CC.POSES`): `idle hang point pointUp present wave cheer shrug hips cross hold hold2 carry give beg face think write clap pocket fist thumb reach slump run`.
- **Expressions** (`CC.EXPR`): `neutral happy joy smug sad worried angry furious shock scared cry sleep curious scream grin greedy confident bored disappointed`.
- **`CC.actor(ctx, s, name|ch, base, track)`** returns anchors `{head, headTop, r, handR, handL}` in world coordinates.
  - `base` fields: `x y s pose expr look flip legs (stand|wide|sit|kneel) fx noLegs alpha`
  - `track` is a list of events `{at, dur, until, ...}`:

| Event | Effect |
|---|---|
| `{pose:'point'}` `{expr:'shock'}` `{look:0.5}` `{turn:true}` `{flip:true}` | snap pose / face / head-turn flip |
| `{slideIn:'left'\|'right', from}` `{slideOut, to}` `{slideTo:x, toY}` | slide with bob (whoosh) |
| `{walkAway:true, scale:0.35, dy:-150, fade}` | walk into the distance (scales down) |
| `{jump:true\|h, dur}` | jump with squash & stretch (boing) |
| `{sit:true}` `{stand:true}` `{kneel:true}` `{collapse:'left'\|'right'}` | drop / kneel / collapse (thud) |
| `{write:true, until}` `{clap}` `{wave}` `{cheer}` `{gesture}` | looping gestures (writing stroke = scribble) |
| `{talk:true, until}` | mouth flap |
| `{say:'text', until, side, size}` `{think:'text'\|fn, until}` | speech / thought bubble (pop) |
| `{fx:'sweat'\|[...], until}` `{fxOff}` | emotion FX |
| `{hold:fn, hand:'L', s, dx, dy, rot, shake}` `{hold:null}` `{carry:fn}` | prop parented to the hand / carried overhead |
| `{shake}` `{popIn}` `{popOut}` `{hide}` `{show}` `{cue:'ding'}` | misc |

- **Emotion FX** (`fx`): `sweat tears anger flush shock bulb question exclaim zzz hearts blush`. `bulb` auto-dings.
- **Hand-over:** `CC.handOver(ctx, s, t0, dur, a.handR, b.handR, drawFn)` moves the prop along an arc. Drop it from the giver (`{at:t0, hold:null}`) and give it to the receiver (`{at:t0+dur, hold:fn}`).
- **Bubbles:** `CC.speech(ctx, text, tx, ty, lt, t0, {side})`, `CC.thought(ctx, content, tx, ty, lt, t0, {w, h})`.

#### Objects & props
- **`CC.obj(ctx, s, o, draw)`** animates any drawing.
  - placement and entry: `x y s rot at`; `in: pop|grow|fade|draw|drop|slide-left|slide-right|slide-up|slide-down|none` with `dur, from`
  - exit: `outAt` with `out: pop|puff|fade|fall|slide-*` and `outDur`
  - loops: `shake:{at,dur,amp}|true`, `flap` (paper flap), `jiggle:[t…]`, `bob`, `spin`
  - `draw(c, {u, lq, k, t})` draws at the local origin; `u` is the draw-on progress
- **Composite animations:**
  - `CC.stamp(ctx, s, 'FRAUD', x, y, t0, {col, size, rot})` (slam + shake + stamp SFX)
  - `CC.cracks(ctx, s, x, y, t0, dur, {len, dir})`
  - `CC.coinJar(ctx, s, {x, y, w, h, t0, n, gap, fill0, fill1, label})` (coins fall, clink, jar jiggles)
  - `CC.globeSpin(ctx, s, x, y, {r, building, buildingLabel})`
  - `CC.swap(ctx, s, t0, x, y, drawA, drawB)` (sprite swap with puff)
  - `P.lineChart(ctx, x, y, w, h, pts, u, o)` (draw-on)
  - `P.barChart(ctx, s, x, y, w, h, vals, t0, {labels, under, cols, gap, max})` (bars pop up in sequence)
  - `P.arrow(ctx, x1, y1, x2, y2, u)`, `P.puff(ctx, x, y, u, s)`
- **Props** `P.name(ctx, x, y, o)`, where (x,y) is the base centre:
  - places: `skyscraper{w,h,col,lit,sign,antenna} bank{s,label} house mountain{w,h,snow} globe{r,rot,building}` (centre) `desk chair podium{label} frame{draw} sign{text} tree sun yacht`; `P.water(ctx, y, t)`
  - money: `coin coinStack{n} bill cashStack{n} moneyBag{label} jar{fill,label} cheque{amount,to,signed}`
  - paper and office: `document resume newspaper{headline} stampTool quill computer{text,draw} chip phone briefcase handcuffs bars gavel trophy`
  - marks: `heart star xmark checkmark`
- **Text:**
  - `CC.text(ctx, str, x, y, size, col, {font:'PHand'|'PMarker'})`
  - `CC.write(...)`: typewriter draw-on + scribble
  - `CC.word(...)`: pop-in word
  - `CC.callout(ctx, str, x, y, lt, t0, {size, rot, maxW})` / `CC.label(...)`: **auto-sized** box (shrinks text to fit, auto-shifts back inside the frame). Use this for every sign/label/date card.
  - `CC.text`/`CC.write` accept `{maxW}` (auto-shrink to that width). All text auto-shifts back inside the frame (pass `{safe:false}` only for deliberate off-frame text). Text wider than the frame is shrunk only if you pass `maxW`, so always give long labels a `maxW`.
  - **Never hand-size a `CC.rect` around text** — long labels like "SINGAPORE, 1992" or "BOTH JOBS. SAME PERSON" get clipped. If you must draw your own box, size it from `CC.measure(ctx, str, size, font).w` + padding.
- **Low-level drawing:** `CC.line rect circle ellipse poly draw path` (clean strokes; they only jitter if `CC.BOIL=true`).

#### Scenes & camera
- Backgrounds:
  - `CC.bg(ctx, PAL.sky, {floor: 880, floorCol})`: grain is added automatically
  - `CC.spot(ctx, x, floorY, {w})`: black + spotlight
  - `CC.chapter(ctx, s, 'Title', {kicker: 'PART ONE'})`: black card, white handwritten write-on
  - `CC.city(ctx, floorY, col)`, `CC.cloud(ctx, x, y, s)`
- Palette `PAL`: `sky skyLt tan tanDk beige paper grey greyDk charcoal sage sageDk rose slate slateDk navy black white red blue tear gold green money moneyDk brown purple orange yellow cream wood water`.
- Shot options (the 4th argument of `S`):
  - `cam`:
    - `CC.cam.punch(x, y, z, at)`: 0.18 s punch-in on a face
    - `CC.cam.push(x, y, z, at, dur)`: smooth push
    - `CC.cam.zoom(z)`: slow establishing zoom
    - `CC.cam.pan(x0, y0, x1, y1, z, at, dur)`, `CC.cam.hold(x, y, z)`
  - transitions: `whip: 'left'|'right'` (whip-pan entrance + whoosh), `fadeIn`/`fadeOut` (seconds, to black: use for chapter cards)
  - `sfx: [[t, 'ding'], ...]`: manual cues
  - Default is static camera and hard cut.

#### Shot-writing rules
- Every shot has a character **acting out the clause** (see 4.2 Acting rules) plus a prop/text entrance, and no character stays frozen longer than about 1 s.
- Recurring characters use the same preset all video.
- Key numbers go in a `CC.stamp`, `CC.callout`, `CC.word` or `CC.write`.
- Size guide: hero characters `s` 1.2–1.9 (the rig is about 300 px tall at s=1); crowds 0.8–1.1; `noLegs:true` with y below the frame for audience heads.

### 4.4 Look check (before the full render)
```bash
cd $SKILL && node peek.mjs $P/anim all            # one frame per shot midpoint → $P/anim/peek/
python3 $SKILL/contact.py $P/anim/peek $P/work/contact_sheet.jpg 4
```
View the sheet yourself and fix:
- empty shots (bad `start`/`end`, or an exception: peek prints `PAGE-EXC`)
- off-frame characters (check the camera targets)
- unreadable dark-on-dark figures, identical adjacent backgrounds, text overflowing its box
- **off-screen text:** `peek.mjs` sweeps every 10th frame and prints `WARNING: … go off-screen` with the time and text. Fix every warning (use `CC.callout`/`maxW`, move it inward). `render.mjs` repeats this check and writes `offscreen_text.json`.
- shots where nobody acts out the narration (see Acting rules) — rewrite them

Then send the sheet to the user and wait for the go-ahead. `node peek.mjs $P/anim 120,450` renders specific frames.

### 4.5 SFX & music
- `engine/sfx/` holds the synthesized library: `pop whoosh scribble clink stamp thud ding boing crack rustle`. Rebuild it with `python3 $SKILL/sfx.py gen`. To use real sounds, drop same-named WAVs into a folder and pass `--sfxdir`.
- SFX cues are **automatic**. Every actor/object event registers a cue, and `render.mjs` writes `$P/anim/cues.json`.
- Music bed: `--music auto` is a procedural quirky pizzicato/tuba/shaker loop at 104 bpm. Use `--music file.wav` for a user-supplied track, or `none`. `python3 $SKILL/sfx.py music --out bed.wav --dur 180` exports the bed by itself.
- `build.sh` runs `sfx.py mix` automatically: voice + SFX (peaks ≤ 40 % of the voice) + ducked music at **15 % of the voice** (`--music-level 0.10–0.20`). It prints the measured levels — confirm "music under voice" is between −20 and −14 dB.

### 4.6 Render
```bash
nohup bash -c "$SKILL/build.sh $P/anim $P/audio/voice.mp3 $P/out/<Title>.mp4 --music auto < /dev/null; echo \$? > $P/render.exit" > $P/render.log 2>&1 & echo $!
```
- Options: `--dur 30` renders and mixes only the first 30 s (a sample), `--music none|auto|file.wav`, `--music-level 0.15`, `--sfxdir DIR`. A 4th positional argument is a pre-made mix WAV.
- Speed is about 8–16 fps: a 15-minute video (27,000 frames, ~6 GB of frames under `/home/ubuntu`) takes roughly 30–60 min. Always background it; delete `anim/frames/` after the MP4 is verified.
- Wait on the PID with the `wait` tool, tail the log between waits, then check that `render.exit` is 0.

### 4.7 QA
```bash
ffprobe -v error -show_entries format=duration:stream=codec_name,width,height,r_frame_rate -of default=nw=1 $P/out/<Title>.mp4
```
Duration should match the voice ±0.5 s, at 1920×1080, 30 fps, H.264 + AAC. Spot-check frames at 25/50/75/100 % and listen for SFX that sit on top of words. If they do, lower them with `--sfx-gain 0.7`.

### 4.8 Delivery
Deliver `out/<Title>.mp4` plus the contact sheet. Summarise the shot count, runtime and audio levels. Offer a thumbnail or the next idea.

---

## Thumbnail formula
Generate at 1280×720 with an image model (the only place AI images are used):
- Prompt prefix: `flat 2D crayon doodle, big round white head stick figure, dot eyes, thick black outlines, muted flat background, finance explainer, Crayon Capital style`.
- Left: the protagonist with a strong expression. Right: the key number or verdict in giant handwritten text ("$65 BILLION", "FRAUD").

---

## Channel DNA (from `references/reference_breakdown.md`)
| Element | Spec |
|---|---|
| Format | 1920×1080, 30 fps, **~15 min default**; shots 1.3–5 s; visual changes on each clause |
| Characters | big round head, no neck, filled torso, line arms (no hands), stick legs + shoe blobs, dot eyes, arc mouth, floating brows, filled hair caps; identity from hair/hat/mustache/glasses/clothes |
| Motion | **clean stable lines (no boil)**, smooth motion, characters act out every clause, slide (no walk cycle), squash & stretch, emotion symbols |
| Objects | pop in with overshoot / slide / draw on; stamps, cracks, coin jars, sprite swaps |
| Backgrounds | muted flat colours + grain; black + spotlight for drama; black chapter cards |
| Camera | static; punch/push-in for punchlines; rare whip pan; hard cuts; fade for chapters |
| Sound | pop / whoosh / scribble / clink / stamp / ding; quirky pizzicato-tuba bed at 10–20 % of the VO |
| Narration | the USER'S own recorded voice: conversational, slightly ironic, punchy |
| Script | hook (contradiction) → chapters with title cards → collapse → present-day takeaway |

## Engine files
`render.html` (loads crayon.js → **cc.js** → **cc_props.js** → captions.js → story.js) · `scene.js` (shot loop, camera, whip, fades, grain, cue registration) · `cc.js` (rig, actions, FX, bubbles, camera, scenes, `CC.obj`) · `cc_props.js` (props + composite animations) · `crayon.js`/`characters.js`/`props.js` (legacy v1 kit, still loaded; `TM.C.person` is shimmed to the new rig) · `render.mjs` (frames + cues.json) · `peek.mjs` · `contact.py` · `align.py` · `sfx.py` · `build.sh`.

## Dependencies
- `ffmpeg`, `python3` with `numpy`, `scipy`, `Pillow` (optional: `openai-whisper` for word-level alignment)
- `node` 18+ with `playwright-core` (installed in `engine/node_modules`), `/usr/local/bin/chromium`
