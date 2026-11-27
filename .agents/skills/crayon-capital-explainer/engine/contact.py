#!/usr/bin/env python3
"""contact.py <peekDir> <out.jpg> [cols] [fps] — tile peek frames into a labelled contact sheet."""
import sys, os
from PIL import Image, ImageDraw
d, out = sys.argv[1], sys.argv[2]
cols = int(sys.argv[3]) if len(sys.argv) > 3 else 4
fps = float(sys.argv[4]) if len(sys.argv) > 4 else 30
fs = sorted(f for f in os.listdir(d) if f.endswith('.jpg'))
tw, th, pad = 480, 270, 8
rows = (len(fs) + cols - 1) // cols
sheet = Image.new('RGB', (cols * (tw + pad) + pad, rows * (th + pad + 26) + pad), (30, 30, 30))
dr = ImageDraw.Draw(sheet)
for i, f in enumerate(fs):
    im = Image.open(os.path.join(d, f)).convert('RGB').resize((tw, th))
    x, y = pad + (i % cols) * (tw + pad), pad + (i // cols) * (th + pad + 26)
    sheet.paste(im, (x, y))
    dr.text((x + 4, y + th + 6), f"shot {i+1}  t={int(f[:-4]) / fps:.2f}s", fill=(230, 230, 230))
sheet.save(out, quality=88)
print(out, sheet.size)
