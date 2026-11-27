# Crayon Capital Explainer & Thumbnail Rules (Persistent Project Guidelines)

This workspace is dedicated to creating authentic Crayon Capital-style business and finance explainer videos and thumbnails. Every future session must strictly follow these rules:

---

## 1. YouTube Thumbnail Formula (Reference Standard)

Every generated thumbnail must match the layout, character rig, and typography seen in the channel standard (e.g., "$1 TRILLION FROM NOODLES"):

- **Dimensions:** Exact 1280 × 720 pixels (16:9 aspect ratio, high-quality JPG).
- **Background:** Flat vibrant solid canvas (primary blue, royal blue, or flat red/green) with authentic colored-pencil wax crayon crosshatch texture.
- **Character (Left Side):**
  - **Head:** Pure white circle head (never skin tones), no neck, thick black outlines.
  - **Face:** Black dot eyes, optional round glasses, and an exaggerated wide-open excited/shocked mouth (dark red interior with black border).
  - **Hair:** Neatly parted or stylized black hair.
  - **Attire:** Professional suit (dark blue, black, or brown) colored with wax crayon pencil strokes, crisp white shirt collar, and red tie.
  - **Detail Badge:** Small rectangular year/context badge on the lapel (e.g., `1938`, `1979`).
  - **Action / Props:** Character must be physically interacting with a tangible item (holding chopsticks pulling noodles, using tongs to lift a glowing silver bar, pouring gold coins).
- **Center-Right Typography (Hierarchy):**
  - **Top Line:** Giant chunky bright-yellow 3D numbers/letters with heavy black outlines and deep black offset drop-shadow (e.g., `$1 BILLION`, `$1 TRILLION`, `1/3`).
  - **Bottom Line:** Bold white sans-serif handwritten text with thick black outline directly below the yellow text (e.g., `IN SILVER`, `FROM NOODLES`).
- **Top-Right Accents:**
  - Modern smartphone displaying a mini icon or financial chart.
  - Minimalist modern skyscraper with a company/exchange sign (`GLOBAL`, `WALL ST`, `NASDAQ`) and small green trees at the base.

---

## 2. Animation & Video Engine Rules

- **Procedural Canvas2D Only:** All video body frames are built with the procedural engine (`.agents/skills/crayon-capital-explainer/engine/`). Never use AI video stills with Ken Burns zooms.
- **Clean Stable Lines (No Boil):** `CC.BOIL = false` is permanent. No line jitter or boiling.
- **Frame Rate & Pacing:** 1920 × 1080 @ 30 fps. Shots last 1.2 to 2.8 seconds maximum (matching Crayon Capital's *The Wolf of Wall Street* reference). Every spoken paragraph must contain multiple visual cutaways and scene switches.
- **Dynamic Camera Zooms & Punch-ins:** Use `CC.cam.punch()`, `CC.cam.push()`, and `CC.cam.zoom()` on key words, dramatic moments, and emotional character reactions.
- **Rich Physical Props:** Never rely on static talking characters alone. Incorporate tangible props (Boeing 707 cargo planes, ringing phones, bank vaults, stock certificates, burning cash, newspapers, molten silver pots, handcuffs, and courtroom gavels).
- **Dynamic Character Acting:** Characters never just stand idle. Every clause must be physically acted out (slide-ins, handovers, stamps, chart draw-ons, coin jars, reaction sweat/anger FX).
- **Audio Standards:**
  - Narration: High-quality conversational voiceover (or neural Edge-TTS `en-US-GuyNeural`).
  - Music Bed: Procedural quirky pizzicato/tuba loop automatically ducked under speech at 15% voice RMS (−16.5 dB).
  - Sound Effects: Automatic cues (whoosh, pop, stamp, thud, clink, ding) capped at 40% voice peak.

---

## 3. Cloud Rendering & Workflow (GitHub Actions)

- **Do Not Render Full 15-Minute Videos Locally:** Avoid laptop memory or disk exhaustion. 27,000+ frames are rendered via GitHub Actions runners using `.github/workflows/render-video.yml`.
- **Parallel Workers:** Use 4 concurrent Playwright Chromium workers with streaming console progress to complete renders within 15–20 minutes.
- **Automated Alerts:** On workflow completion, automatically publish a GitHub Release and trigger direct email notification to `himanshugit0910@gmail.com`.
