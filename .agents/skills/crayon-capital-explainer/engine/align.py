#!/usr/bin/env python3
"""
align.py — time the approved script against the USER'S uploaded voiceover (never a synthetic voice).

  python3 align.py --voice voice.mp3 --script script.txt --out cues.json [--vtt voice.vtt] [--mode auto|whisper|silence]

script.txt : one sentence/clause per line (the shot list follows these lines).
Output     : cues.json  [[start, end, "text"], ...]  → paste as CUES in story.js; optional WebVTT.

auto    : use openai-whisper word timestamps if importable (best), else silence alignment.
silence : ffmpeg silencedetect finds pauses; speech islands are split/merged so their count
          matches the script lines, weighted by character length. Good for clean, paced reads.
"""
import argparse, json, re, subprocess, sys


def duration(path):
    return float(subprocess.check_output(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', path], stdin=subprocess.DEVNULL))


def silences(path, noise='-32dB', d=0.18):
    p = subprocess.run(['ffmpeg', '-hide_banner', '-i', path, '-af', f'silencedetect=noise={noise}:d={d}', '-f', 'null', '-'],
                       stderr=subprocess.PIPE, stdin=subprocess.DEVNULL, text=True)
    st = [float(x) for x in re.findall(r'silence_start: ([\d.]+)', p.stderr)]
    en = [float(x) for x in re.findall(r'silence_end: ([\d.]+)', p.stderr)]
    return list(zip(st, en + [None] * (len(st) - len(en))))


def align_silence(voice, lines):
    total = duration(voice); sil = silences(voice)
    # candidate boundaries = middle of each pause, with pause length as strength
    cands = [((a + (b if b else total)) / 2, (b if b else total) - a) for a, b in sil if a > 0.05 and (b or total) < total - 0.05]
    start = sil[0][1] if sil and sil[0][0] <= 0.05 and sil[0][1] else 0.0
    end = sil[-1][0] if sil and (sil[-1][1] is None or sil[-1][1] >= total - 0.05) else total
    w = [max(1, len(l)) for l in lines]; tot = sum(w)
    ideal, acc = [], 0
    for x in w[:-1]:
        acc += x; ideal.append(start + (end - start) * acc / tot)
    # pick, for each ideal boundary, the nearest unused pause (prefer long pauses)
    bounds, used = [], set()
    for t in ideal:
        best, bs = None, 1e9
        for i, (c, ln) in enumerate(cands):
            if i in used or (bounds and c <= bounds[-1]): continue
            score = abs(c - t) - 0.6 * min(ln, 0.8)
            if score < bs: best, bs = i, score
        if best is not None and abs(cands[best][0] - t) < 2.5:
            used.add(best); bounds.append(cands[best][0])
        else:
            bounds.append(max(t, bounds[-1] + 0.2) if bounds else t)
    edges = [start] + bounds + [end]
    return [[round(edges[i], 2), round(edges[i + 1], 2), lines[i]] for i in range(len(lines))]


def align_whisper(voice, lines):
    import whisper  # noqa
    model = whisper.load_model('base')
    res = model.transcribe(voice, word_timestamps=True, language='en')
    words = [wd for seg in res['segments'] for wd in seg.get('words', [])]
    norm = lambda s: re.sub(r'[^a-z0-9]', '', s.lower())
    out, wi = [], 0
    for line in lines:
        n = len(line.split()); chunk = words[wi:wi + n]
        if not chunk: break
        out.append([round(chunk[0]['start'], 2), round(chunk[-1]['end'], 2), line]); wi += n
    if len(out) != len(lines): raise RuntimeError('whisper word count mismatch')
    for i in range(len(out) - 1): out[i][1] = out[i + 1][0]   # contiguous shots
    return out


def vtt(cues, path):
    f = lambda t: f'{int(t // 3600):02d}:{int(t % 3600 // 60):02d}:{t % 60:06.3f}'
    with open(path, 'w') as fh:
        fh.write('WEBVTT\n\n')
        for i, (a, b, t) in enumerate(cues, 1): fh.write(f'{i}\n{f(a)} --> {f(b)}\n{t}\n\n')


if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('--voice', required=True); ap.add_argument('--script', required=True)
    ap.add_argument('--out', default='cues.json'); ap.add_argument('--vtt'); ap.add_argument('--mode', default='auto')
    a = ap.parse_args()
    lines = [l.strip() for l in open(a.script) if l.strip()]
    cues = None
    if a.mode in ('auto', 'whisper'):
        try:
            cues = align_whisper(a.voice, lines); print('aligned with whisper', file=sys.stderr)
        except Exception as e:
            if a.mode == 'whisper': raise
            print(f'whisper unavailable ({e.__class__.__name__}); using silence alignment', file=sys.stderr)
    if cues is None: cues = align_silence(a.voice, lines)
    json.dump(cues, open(a.out, 'w'), indent=1)
    if a.vtt: vtt(cues, a.vtt)
    for c in cues: print(f'{c[0]:7.2f} {c[1]:7.2f}  {c[2]}')
