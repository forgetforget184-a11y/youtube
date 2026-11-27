#!/usr/bin/env bash
# ============================================================================
# build.sh — render the procedural picture, auto-mix voice + SFX + music, mux.
# Usage: build.sh <projectDir> <voice.(mp3|wav)> <out.mp4> [mix.wav] [--dur S] [--music auto|none|file.wav] [--sfxdir DIR] [--music-level 0.10-0.20]
#   projectDir : contains render.html + engine + story.js, writes frames/ + cues.json there
#   voice      : the USER'S uploaded voiceover. Defines duration unless --dur.
#   out.mp4    : 1920x1080 H.264 yuv420p + AAC, loudness -14 LUFS / -1 dBTP
#   mix.wav    : optional pre-made mix; otherwise sfx.py mixes voice + cues.json SFX + music bed
#   --dur S    : render/trim only the first S seconds (samples / previews)
#   --music-level : music bed loudness as a fraction of the voice (default 0.15, allowed 0.10–0.20)
#   Long videos (15 min ≈ 27,000 frames, ~30 min render, ~6 GB frames): ALWAYS run with nohup in the background.
# ============================================================================
set -euo pipefail
PROJ="$(cd "${1:?projectDir}" && pwd)"; AUDIO="$(realpath "${2:?voice}")"; OUT="$(realpath -m "${3:?out.mp4}")"; shift 3
MIX=""; DURARG=""; MUSIC="auto"; SFXDIR=""; MLEVEL="0.15"
while [ $# -gt 0 ]; do case "$1" in
  --dur) DURARG="$2"; shift 2;; --music) MUSIC="$2"; shift 2;; --sfxdir) SFXDIR="$2"; shift 2;; --music-level) MLEVEL="$2"; shift 2;;
  *) MIX="$(realpath "$1")"; shift;; esac; done
FPS=30
export TMPDIR="${TMPDIR:-/home/ubuntu/.tmp}"; mkdir -p "$TMPDIR"
cd "$(dirname "$0")"; ENGINE="$(pwd)"; SFXDIR="${SFXDIR:-$ENGINE/sfx}"

DUR=${DURARG:-$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$AUDIO")}
N=$(python3 -c "print(round($DUR*$FPS))")
echo "duration=${DUR}s  N=${N} frames"

rm -rf "$PROJ/frames"; node "$ENGINE/render.mjs" "$PROJ" "$N"     # also writes $PROJ/cues.json

if [ -z "$MIX" ]; then
  [ -f "$SFXDIR/pop.wav" ] || python3 "$ENGINE/sfx.py" gen --dir "$SFXDIR"
  MIX="$PROJ/work_mix.wav"
  python3 "$ENGINE/sfx.py" mix --cues "$PROJ/cues.json" --voice "$AUDIO" --dur "$DUR" --music "$MUSIC" --sfxdir "$SFXDIR" --music-level "$MLEVEL" --out "$MIX"
fi

NORM="$PROJ/work_audio_norm.wav"
ffmpeg -v error -y -i "$MIX" -t "$DUR" -af "loudnorm=I=-14:TP=-1:LRA=11,aresample=48000" -ac 2 "$NORM" < /dev/null
ffmpeg -v error -y -framerate $FPS -i "$PROJ/frames/%05d.jpg" -i "$NORM" \
  -map 0:v -map 1:a -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p \
  -c:a aac -b:a 192k -ar 48000 -shortest -movflags +faststart "$OUT" < /dev/null
echo "WROTE $OUT"
ffprobe -v error -show_entries stream=codec_name,width,height,r_frame_rate:format=duration -of default=nw=1 "$OUT" | sed 's/^/  /'
