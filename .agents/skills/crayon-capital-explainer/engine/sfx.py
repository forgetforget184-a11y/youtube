#!/usr/bin/env python3
"""
sfx.py — synthesized SFX library, procedural quirky music bed, and the final mix.

  python3 sfx.py gen [--dir engine/sfx]                      # (re)build the SFX wav library
  python3 sfx.py music --out bed.wav --dur 30                  # procedural pizzicato/tuba loop
  python3 sfx.py mix --cues cues.json --voice voice.mp3 --out mix.wav \
                     [--music auto|none|<file>] [--dur SECONDS] [--sfxdir DIR]

Cue types (auto-emitted by the engine): pop whoosh scribble clink stamp ding thud boing crack rustle.
If a file <sfxdir>/<type>.wav already exists it is used (drop in your own library), otherwise it is synthesized.
"""
import argparse, json, os, subprocess, sys, wave
import numpy as np

SR = 48000
HERE = os.path.dirname(os.path.abspath(__file__))
RNG = np.random.default_rng(7)


def env(n, a=0.002, d=0.1):
    t = np.arange(n) / SR
    e = np.minimum(1, t / max(a, 1e-4)) * np.exp(-t / max(d, 1e-4))
    return e


def bandnoise(n, lo, hi):
    x = RNG.standard_normal(n)
    X = np.fft.rfft(x); f = np.fft.rfftfreq(n, 1 / SR)
    X[(f < lo) | (f > hi)] = 0
    y = np.fft.irfft(X, n)
    return y / (np.abs(y).max() + 1e-9)


def synth(kind):
    if kind == 'pop':
        n = int(0.09 * SR); t = np.arange(n) / SR
        f = 900 * np.exp(-t * 38) + 260
        y = np.sin(2 * np.pi * np.cumsum(f) / SR) * env(n, 0.001, 0.03)
        return y * 0.9
    if kind == 'whoosh':
        n = int(0.38 * SR); t = np.arange(n) / SR
        y = bandnoise(n, 300, 5000)
        shape = np.sin(np.pi * t / t[-1]) ** 2
        # crude moving band: mix a lowpassed and highpassed version over time
        hi = bandnoise(n, 1500, 7000); lo = bandnoise(n, 200, 1200)
        k = t / t[-1]
        y = (lo * (1 - k) + hi * k) * shape
        return y * 0.55
    if kind == 'scribble':
        n = int(0.5 * SR); t = np.arange(n) / SR
        y = bandnoise(n, 1800, 7000)
        strokes = 0.5 + 0.5 * np.sign(np.sin(2 * np.pi * 11 * t + 2 * np.sin(2 * np.pi * 3 * t)))
        y = y * strokes * np.minimum(1, (t[-1] - t) / 0.05) * np.minimum(1, t / 0.02)
        return y * 0.32
    if kind == 'clink':
        n = int(0.35 * SR); t = np.arange(n) / SR
        y = sum(a * np.sin(2 * np.pi * f * t) * np.exp(-t * d) for f, a, d in [(2650, 1, 18), (3920, .6, 24), (5310, .4, 30), (6900, .2, 40)])
        return y / 2.2 * env(n, 0.0005, 0.25)
    if kind == 'stamp':
        n = int(0.32 * SR); t = np.arange(n) / SR
        thump = np.sin(2 * np.pi * (70 + 120 * np.exp(-t * 30)) * t) * np.exp(-t * 14)
        click = bandnoise(n, 800, 6000) * np.exp(-t * 90)
        return (thump * 1.0 + click * 0.5) * 0.95
    if kind == 'thud':
        n = int(0.25 * SR); t = np.arange(n) / SR
        return np.sin(2 * np.pi * (60 + 80 * np.exp(-t * 25)) * t) * np.exp(-t * 16) * 0.9 + bandnoise(n, 100, 900) * np.exp(-t * 40) * 0.3
    if kind == 'ding':
        n = int(1.1 * SR); t = np.arange(n) / SR
        y = sum(a * np.sin(2 * np.pi * f * t) * np.exp(-t * d) for f, a, d in [(1320, 1, 3.2), (2640, .35, 5), (3960, .15, 7), (1985, .2, 4)])
        return y / 1.7 * env(n, 0.002, 0.9)
    if kind == 'boing':
        n = int(0.4 * SR); t = np.arange(n) / SR
        f = 220 + 160 * np.sin(2 * np.pi * 9 * t) * np.exp(-t * 6) + 200 * t
        return np.sin(2 * np.pi * np.cumsum(f) / SR) * env(n, 0.003, 0.18) * 0.7
    if kind == 'crack':
        n = int(0.45 * SR); t = np.arange(n) / SR
        y = np.zeros(n)
        for i in range(9):
            s = int(RNG.uniform(0, 0.35) * SR); L = int(0.03 * SR)
            y[s:s + L] += bandnoise(L, 1500, 8000)[:max(0, min(L, n - s))] * np.exp(-np.arange(min(L, n - s)) / SR * 120)
        return y * 0.5
    if kind == 'rustle':
        n = int(0.4 * SR); t = np.arange(n) / SR
        return bandnoise(n, 2000, 9000) * (0.4 + 0.6 * np.abs(np.sin(2 * np.pi * 7 * t))) * np.sin(np.pi * t / t[-1]) * 0.35
    raise ValueError(kind)


KINDS = ['pop', 'whoosh', 'scribble', 'clink', 'stamp', 'thud', 'ding', 'boing', 'crack', 'rustle']
GAIN = {'pop': 0.32, 'whoosh': 0.26, 'scribble': 0.22, 'clink': 0.22, 'stamp': 0.45, 'thud': 0.35, 'ding': 0.25, 'boing': 0.25, 'crack': 0.3, 'rustle': 0.25}


def write_wav(path, y, ch=1):
    y = np.clip(y, -1, 1)
    with wave.open(path, 'wb') as w:
        w.setnchannels(ch); w.setsampwidth(2); w.setframerate(SR)
        w.writeframes((y * 32767).astype('<i2').tobytes())


def read_audio(path):
    """decode anything ffmpeg understands to mono float @ SR"""
    raw = subprocess.run(['ffmpeg', '-v', 'error', '-i', path, '-f', 's16le', '-ac', '1', '-ar', str(SR), '-'],
                         stdin=subprocess.DEVNULL, capture_output=True, check=True).stdout
    return np.frombuffer(raw, '<i2').astype(np.float32) / 32768.0


def load_sfx(kind, sfxdir):
    p = os.path.join(sfxdir, kind + '.wav')
    if os.path.exists(p):
        return read_audio(p)
    y = synth(kind); os.makedirs(sfxdir, exist_ok=True); write_wav(p, y); return y


def pluck(freq, dur, bright=0.5):
    n = int(dur * SR); N = max(2, int(SR / freq))
    buf = RNG.uniform(-1, 1, N) * bright; out = np.zeros(n)
    for i in range(n):
        out[i] = buf[i % N]
        buf[i % N] = 0.5 * (buf[i % N] + buf[(i + 1) % N]) * 0.994
    return out * env(n, 0.001, dur * 0.5)


def music(dur, bpm=104):
    """quirky plucky loop: pizzicato arpeggios + tuba-ish bass + soft shaker. 4-bar C–Am–F–G."""
    beat = 60 / bpm; bar = beat * 4; loop_n = int(bar * 4 * SR)
    loop = np.zeros(loop_n + SR)
    chords = [(48, [60, 64, 67, 72]), (45, [57, 60, 64, 69]), (41, [53, 57, 60, 65]), (43, [55, 59, 62, 67])]
    mid = lambda m: 440 * 2 ** ((m - 69) / 12)
    cache = {}
    for b, (root, notes) in enumerate(chords):
        b0 = b * bar
        for k, (st, m) in enumerate([(0, root), (2, root + 7)]):          # tuba: root + fifth
            n = int(beat * 0.9 * SR); t = np.arange(n) / SR; f = mid(m)
            y = (np.sin(2 * np.pi * f * t) + 0.4 * np.sin(4 * np.pi * f * t) + 0.15 * np.sin(6 * np.pi * f * t)) * env(n, 0.02, 0.35) * 0.35
            s = int((b0 + st * beat) * SR); loop[s:s + n] += y
        pattern = [0, 2, 1, 3, None, 2, 1, 2]                               # pizzicato eighths
        for i, idx in enumerate(pattern):
            if idx is None: continue
            m = notes[idx]
            if m not in cache: cache[m] = pluck(mid(m), 0.35)
            s = int((b0 + i * beat / 2) * SR); y = cache[m] * (0.22 if i % 2 else 0.3); loop[s:s + len(y)] += y
        for i in range(8):                                                   # shaker offbeats
            if i % 2 == 1:
                n = int(0.05 * SR); s = int((b0 + i * beat / 2) * SR)
                loop[s:s + n] += bandnoise(n, 5000, 11000) * env(n, 0.002, 0.015) * 0.06
    loop[:SR] += loop[loop_n:loop_n + SR]; loop = loop[:loop_n]
    reps = int(np.ceil(dur * SR / loop_n)) + 1
    y = np.tile(loop, reps)[:int(dur * SR)]
    fade = int(1.0 * SR); y[-fade:] *= np.linspace(1, 0, fade)
    return y / (np.abs(y).max() + 1e-9)


def mix(args):
    voice = read_audio(args.voice)
    dur = args.dur or len(voice) / SR
    n = int(dur * SR); v = np.zeros(n); v[:min(n, len(voice))] = voice[:n]
    if args.dur and len(voice) > n:                                          # trimmed sample: short fade-out
        f = int(0.25 * SR); v[-f:] *= np.linspace(1, 0, f)
    out = v.copy(); sfx = np.zeros(n)
    vg = v[np.abs(v) > 0.02]; vrms = float(np.sqrt(np.mean(vg ** 2))) if len(vg) else 0.1   # gated voice RMS
    # SFX
    cues = json.load(open(args.cues)) if args.cues and os.path.exists(args.cues) else []
    last = {}; used = 0
    for c in cues:
        k, t = c['type'], float(c['t'])
        if k not in KINDS or t >= dur: continue
        if t - last.get(k, -9) < 0.09: continue
        last[k] = t; y = load_sfx(k, args.sfxdir) * GAIN[k] * args.sfx_gain
        s = int(t * SR); e = min(n, s + len(y)); sfx[s:e] += y[:e - s]; used += 1
    vpk = float(np.abs(v).max()) or 1.0                                      # SFX peaks capped at sfx_level x voice peak
    if np.abs(sfx).max() > args.sfx_level * vpk: sfx *= args.sfx_level * vpk / np.abs(sfx).max()
    out += sfx
    # music bed with simple ducking under the voice
    if args.music != 'none':
        m = music(dur) if args.music == 'auto' else read_audio(args.music)
        if len(m) < n: m = np.tile(m, int(np.ceil(n / len(m))))
        m = m[:n] / (np.abs(m[:n]).max() + 1e-9)
        win = int(0.08 * SR); venv = np.sqrt(np.convolve(v ** 2, np.ones(win) / win, 'same'))
        duck = 1 - 0.45 * np.clip(venv / 0.05, 0, 1)
        mb = m * duck; mg = mb[np.abs(v) > 0.02] if (np.abs(v) > 0.02).any() else mb
        mrms = float(np.sqrt(np.mean(mg ** 2))) or 1.0
        lvl = min(max(args.music_level, 0.10), 0.20)                                          # user rule: music bed 10–20 % of voice
        gain = args.music_gain if args.music_gain else lvl * vrms / mrms                       # default: 15 % of voice RMS
        out += mb * gain
        mlev = 20 * np.log10(gain * mrms / vrms)
    else: mlev = float('-inf')
    out /= max(1.0, np.abs(out).max() / 0.97)
    write_wav(args.out, out)
    print(f'mix: {dur:.2f}s  sfx used={used}/{len(cues)}  music={args.music}  voiceRMS={vrms:.3f}  music under voice={mlev:.1f} dB  -> {args.out}')


def main():
    ap = argparse.ArgumentParser(); sp = ap.add_subparsers(dest='cmd', required=True)
    g = sp.add_parser('gen'); g.add_argument('--dir', default=os.path.join(HERE, 'sfx'))
    mu = sp.add_parser('music'); mu.add_argument('--out', required=True); mu.add_argument('--dur', type=float, default=60)
    mx = sp.add_parser('mix')
    mx.add_argument('--cues'); mx.add_argument('--voice', required=True); mx.add_argument('--out', required=True)
    mx.add_argument('--music', default='auto'); mx.add_argument('--dur', type=float, default=0)
    mx.add_argument('--sfxdir', default=os.path.join(HERE, 'sfx'))
    mx.add_argument('--sfx-gain', type=float, default=1.0); mx.add_argument('--music-gain', type=float, default=0)
    mx.add_argument('--music-level', type=float, default=0.15, help='music RMS as fraction of gated voice RMS; clamped to 0.10–0.20 (0.15 = -16.5 dB)')
    mx.add_argument('--sfx-level', type=float, default=0.4, help='cap SFX peaks at this fraction of voice peak')
    a = ap.parse_args()
    if a.cmd == 'gen':
        os.makedirs(a.dir, exist_ok=True)
        for k in KINDS: write_wav(os.path.join(a.dir, k + '.wav'), synth(k))
        print('wrote', len(KINDS), 'sfx to', a.dir)
    elif a.cmd == 'music':
        write_wav(a.out, music(a.dur) * 0.8); print('wrote', a.out)
    else:
        mix(a)


if __name__ == '__main__':
    main()
