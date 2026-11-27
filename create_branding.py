import math, os
from PIL import Image, ImageDraw, ImageFont

fonts_dir = r"c:\Users\forge\OneDrive\Desktop\youtube\.agents\skills\crayon-capital-explainer\engine\fonts"
font_marker_path = os.path.join(fonts_dir, "PermanentMarker-Regular.ttf")
font_hand_path = os.path.join(fonts_dir, "PatrickHand-Regular.ttf")

def add_crayon_texture(draw, w, h, base_col, num_strokes=3500):
    import random
    rng = random.Random(42)
    # subtle wax pencil strokes
    for _ in range(num_strokes):
        x1 = rng.randint(0, w)
        y1 = rng.randint(0, h)
        length = rng.randint(8, 25)
        angle = rng.uniform(-0.6, 0.6)
        x2 = x1 + int(length * math.cos(angle))
        y2 = y1 + int(length * math.sin(angle))
        alpha = rng.randint(15, 35)
        # slight lighter or darker stroke
        col_offset = rng.choice([-20, -10, 15, 25])
        col = tuple(max(0, min(255, c + col_offset)) for c in base_col)
        draw.line([(x1, y1), (x2, y2)], fill=col, width=rng.choice([1, 2]))

# ==========================================
# 1. BUILD YOUTUBE LOGO (800 x 800)
# ==========================================
def build_logo():
    w, h = 800, 800
    base_blue = (41, 101, 184) # Royal blue
    im = Image.new("RGB", (w, h), base_blue)
    draw = ImageDraw.Draw(im)
    add_crayon_texture(draw, w, h, base_blue, num_strokes=4000)

    # Safe circle guide is radius 360 from (400, 400)
    cx, cy = 400, 370

    # Draw suit & shoulders
    # Dark navy suit
    suit_poly = [
        (220, 800), (270, 520), (340, 460), (460, 460), (530, 520), (580, 800)
    ]
    draw.polygon(suit_poly, fill=(28, 38, 56), outline=(20, 20, 20), width=10)

    # White shirt collar V
    draw.polygon([(360, 460), (440, 460), (400, 560)], fill=(255, 255, 255), outline=(20, 20, 20), width=6)
    # Red tie
    draw.polygon([(390, 475), (410, 475), (418, 540), (400, 660), (382, 540)], fill=(225, 45, 45), outline=(20, 20, 20), width=6)

    # Big round white head
    head_r = 135
    head_bbox = [cx - head_r, cy - head_r, cx + head_r, cy + head_r]
    draw.ellipse(head_bbox, fill=(255, 255, 255), outline=(20, 20, 20), width=12)

    # Fedora Hat
    # Hat brim
    draw.ellipse([cx - 180, cy - 145, cx + 180, cy - 85], fill=(22, 22, 26), outline=(15, 15, 15), width=8)
    # Hat crown
    crown_poly = [
        (cx - 110, cy - 115), (cx - 95, cy - 235), (cx - 20, cy - 250),
        (cx + 40, cy - 235), (cx + 95, cy - 225), (cx + 110, cy - 115)
    ]
    draw.polygon(crown_poly, fill=(26, 26, 32), outline=(15, 15, 15), width=8)
    # Red ribbon on hat
    ribbon_poly = [
        (cx - 112, cy - 118), (cx - 108, cy - 148), (cx + 108, cy - 148), (cx + 112, cy - 118)
    ]
    draw.polygon(ribbon_poly, fill=(200, 35, 35))

    # Sunglasses
    # Left lens
    draw.polygon([(cx - 90, cy - 45), (cx - 15, cy - 45), (cx - 25, cy + 15), (cx - 80, cy + 15)], fill=(18, 18, 22), outline=(10, 10, 10), width=6)
    # Right lens
    draw.polygon([(cx + 15, cy - 45), (cx + 90, cy - 45), (cx + 80, cy + 15), (cx + 25, cy + 15)], fill=(18, 18, 22), outline=(10, 10, 10), width=6)
    # Bridge
    draw.line([(cx - 15, cy - 35), (cx + 15, cy - 35)], fill=(10, 10, 10), width=7)
    # White glare slashes on sunglasses
    draw.line([(cx - 75, cy - 40), (cx - 45, cy + 8)], fill=(255, 255, 255), width=4)
    draw.line([(cx + 30, cy - 40), (cx + 60, cy + 8)], fill=(255, 255, 255), width=4)

    # Cool smirk / mouth
    draw.arc([cx - 20, cy + 30, cx + 55, cy + 75], start=15, end=175, fill=(20, 20, 20), width=7)

    # Pencil held in mouth like a cigar (angled up-right)
    px, py = cx + 25, cy + 50
    # Yellow pencil shaft
    pencil_poly = [
        (px - 10, py + 8), (px + 140, py - 48), (px + 145, py - 34), (px - 5, py + 22)
    ]
    draw.polygon(pencil_poly, fill=(245, 195, 35), outline=(20, 20, 20), width=5)
    # Pink eraser
    eraser_poly = [
        (px - 10, py + 8), (px - 32, py + 16), (px - 28, py + 30), (px - 5, py + 22)
    ]
    draw.polygon(eraser_poly, fill=(255, 115, 125), outline=(20, 20, 20), width=5)
    # Wood collar & lead tip
    wood_poly = [
        (px + 140, py - 48), (px + 175, py - 62), (px + 145, py - 34)
    ]
    draw.polygon(wood_poly, fill=(235, 205, 170), outline=(20, 20, 20), width=4)
    tip_poly = [
        (px + 162, py - 57), (px + 175, py - 62), (px + 165, py - 50)
    ]
    draw.polygon(tip_poly, fill=(30, 30, 30))
    # Sparkle / spark at tip
    spark_x, spark_y = px + 185, py - 66
    draw.line([(spark_x - 12, spark_y), (spark_x + 12, spark_y)], fill=(255, 240, 100), width=4)
    draw.line([(spark_x, spark_y - 12), (spark_x, spark_y + 12)], fill=(255, 240, 100), width=4)

    # Bottom Banner pill: PENCIL CARTEL
    font_logo = ImageFont.truetype(font_marker_path, 46)
    text = "PENCIL CARTEL"
    tb = draw.textbbox((0, 0), text, font=font_logo)
    tw, th = tb[2] - tb[0], tb[3] - tb[1]
    bx, by = cx - tw // 2, 705

    # Pill background
    pad_x, pad_y = 24, 10
    draw.rounded_rectangle([bx - pad_x, by - pad_y, bx + tw + pad_x, by + th + pad_y], radius=18, fill=(255, 255, 255), outline=(20, 20, 20), width=6)
    # 3D shadow for text
    draw.text((bx + 3, by + 3), text, font=font_logo, fill=(20, 20, 20))
    draw.text((bx, by), text, font=font_logo, fill=(235, 185, 25))

    out_logo = r"c:\Users\forge\OneDrive\Desktop\youtube\logo_800x800.png"
    out_logo_art = r"C:\Users\forge\.gemini\antigravity\brain\c941a8c9-018d-4446-92c6-f80e0564b40f\logo_800x800.png"
    im.save(out_logo, "PNG")
    im.save(out_logo_art, "PNG")
    print(f"Generated Logo: {out_logo}")

# ==========================================
# 2. BUILD YOUTUBE BANNER (2560 x 1440)
# Safe zone: center 1546 x 423
# Y safe: (1440 - 423)/2 = 508 to 931
# X safe: (2560 - 1546)/2 = 507 to 2053
# ==========================================
def build_banner():
    w, h = 2560, 1440
    base_blue = (36, 92, 172)
    im = Image.new("RGB", (w, h), base_blue)
    draw = ImageDraw.Draw(im)
    add_crayon_texture(draw, w, h, base_blue, num_strokes=8000)

    # Background city skyline in upper area (visible on TV)
    skyline_y = 480
    bldgs = [
        (120, 320, 160), (320, 420, 140), (500, 280, 180), (1950, 440, 160),
        (2150, 350, 170), (2350, 480, 150)
    ]
    for bx, bh, bw in bldgs:
        draw.rectangle([bx, skyline_y - bh, bx + bw, skyline_y], fill=(28, 72, 138), outline=(20, 50, 100), width=4)
        # Windows
        for wx in range(bx + 15, bx + bw - 15, 30):
            for wy in range(skyline_y - bh + 25, skyline_y - 20, 40):
                draw.rectangle([wx, wy, wx + 14, wy + 18], fill=(240, 220, 120))

    # --- INSIDE SAFE ZONE (Y: 508 to 931) ---
    safe_cy = 720

    # Character on Left (X approx 720)
    char_cx = 760
    head_cy = safe_cy - 45
    head_r = 85

    # Suit & tie
    draw.polygon([
        (char_cx - 100, safe_cy + 190), (char_cx - 70, safe_cy + 40),
        (char_cx + 70, safe_cy + 40), (char_cx + 100, safe_cy + 190)
    ], fill=(24, 32, 48), outline=(15, 15, 15), width=8)
    draw.polygon([(char_cx - 28, safe_cy + 40), (char_cx + 28, safe_cy + 40), (char_cx, safe_cy + 95)], fill=(255, 255, 255), outline=(15, 15, 15), width=4)
    draw.polygon([(char_cx - 10, safe_cy + 50), (char_cx + 10, safe_cy + 50), (char_cx, safe_cy + 145)], fill=(225, 40, 40), outline=(15, 15, 15), width=4)

    # Head
    draw.ellipse([char_cx - head_r, head_cy - head_r, char_cx + head_r, head_cy + head_r], fill=(255, 255, 255), outline=(15, 15, 15), width=9)

    # Fedora Hat
    draw.ellipse([char_cx - 120, head_cy - 95, char_cx + 120, head_cy - 55], fill=(20, 20, 24), outline=(10, 10, 10), width=6)
    draw.polygon([
        (char_cx - 75, head_cy - 75), (char_cx - 65, head_cy - 160), (char_cx + 65, head_cy - 160), (char_cx + 75, head_cy - 75)
    ], fill=(24, 24, 30), outline=(10, 10, 10), width=6)
    draw.rectangle([char_cx - 75, head_cy - 95, char_cx + 75, head_cy - 75], fill=(195, 30, 30))

    # Sunglasses
    draw.polygon([(char_cx - 60, head_cy - 25), (char_cx - 10, head_cy - 25), (char_cx - 16, head_cy + 15), (char_cx - 54, head_cy + 15)], fill=(18, 18, 22), outline=(10, 10, 10), width=5)
    draw.polygon([(char_cx + 10, head_cy - 25), (char_cx + 60, head_cy - 25), (char_cx + 54, head_cy + 15), (char_cx + 16, head_cy + 15)], fill=(18, 18, 22), outline=(10, 10, 10), width=5)
    draw.line([(char_cx - 10, head_cy - 18), (char_cx + 10, head_cy - 18)], fill=(10, 10, 10), width=5)
    draw.line([(char_cx - 48, head_cy - 20), (char_cx - 28, head_cy + 10)], fill=(255, 255, 255), width=3)
    draw.line([(char_cx + 22, head_cy - 20), (char_cx + 42, head_cy + 10)], fill=(255, 255, 255), width=3)

    # Smirk & Giant Pencil held pointing towards the title
    draw.arc([char_cx - 15, head_cy + 25, char_cx + 35, head_cy + 55], start=10, end=170, fill=(15, 15, 15), width=5)

    # Giant Pencil starting from character hand towards text
    pen_x1, pen_y1 = char_cx + 50, safe_cy + 80
    pen_x2, pen_y2 = char_cx + 185, safe_cy - 20
    draw.polygon([
        (pen_x1 - 12, pen_y1 - 10), (pen_x2 - 12, pen_y2 - 10), (pen_x2 + 8, pen_y2 + 10), (pen_x1 + 8, pen_y1 + 10)
    ], fill=(245, 195, 30), outline=(15, 15, 15), width=5)
    # Pencil lead tip
    draw.polygon([
        (pen_x2 - 12, pen_y2 - 10), (pen_x2 + 25, pen_y2 - 2), (pen_x2 + 8, pen_y2 + 10)
    ], fill=(235, 205, 160), outline=(15, 15, 15), width=4)
    draw.polygon([
        (pen_x2 + 14, pen_y2 - 5), (pen_x2 + 25, pen_y2 - 2), (pen_x2 + 18, pen_y2 + 2)
    ], fill=(20, 20, 20))

    # Green chart line drawn by the pencil tip rocketing across banner
    chart_pts = [
        (pen_x2 + 25, pen_y2 - 2), (char_cx + 240, safe_cy - 50), (char_cx + 320, safe_cy - 30),
        (char_cx + 440, safe_cy - 90), (char_cx + 560, safe_cy - 70), (char_cx + 700, safe_cy - 160),
        (char_cx + 850, safe_cy - 140), (char_cx + 980, safe_cy - 220)
    ]
    draw.line(chart_pts, fill=(46, 204, 113), width=9)
    # Arrow head at end of chart
    ax, ay = chart_pts[-1]
    draw.polygon([(ax, ay), (ax - 28, ay + 6), (ax - 10, ay + 28)], fill=(46, 204, 113))

    # --- CENTER TYPOGRAPHY ---
    # Title: PENCIL CARTEL
    title_x = 1010
    title_y = safe_cy - 125
    font_title = ImageFont.truetype(font_marker_path, 115)
    font_sub = ImageFont.truetype(font_hand_path, 52)

    title_text = "PENCIL CARTEL"
    sub_text = "WILD MONEY STORIES. DRAWN SIMPLE."

    # Giant 3D offset drop shadow for title
    for offset in range(14, 0, -2):
        draw.text((title_x + offset, title_y + offset), title_text, font=font_title, fill=(10, 10, 15))

    # Heavy black outline around title
    for ox in [-5, -3, 0, 3, 5]:
        for oy in [-5, -3, 0, 3, 5]:
            draw.text((title_x + ox, title_y + oy), title_text, font=font_title, fill=(15, 15, 15))

    # Bright Yellow Fill
    draw.text((title_x, title_y), title_text, font=font_title, fill=(255, 215, 40))

    # Subtitle with black outline & crisp white fill
    sub_y = safe_cy + 40
    for ox in [-3, 0, 3]:
        for oy in [-3, 0, 3]:
            draw.text((title_x + 8 + ox, sub_y + oy), sub_text, font=font_sub, fill=(15, 15, 15))
    draw.text((title_x + 8, sub_y), sub_text, font=font_sub, fill=(255, 255, 255))

    # Badge pill on right: 100% EXPLAINER
    badge_x = title_x + 10
    badge_y = safe_cy + 115
    draw.rounded_rectangle([badge_x, badge_y, badge_x + 310, badge_y + 44], radius=12, fill=(235, 45, 45), outline=(15, 15, 15), width=4)
    font_badge = ImageFont.truetype(font_hand_path, 30)
    draw.text((badge_x + 22, badge_y + 4), "★ HIGH STAKES FINANCE ★", font=font_badge, fill=(255, 255, 255))

    # Props on Right inside safe zone (Skyscraper + Phone)
    right_x = 1880
    # Skyscraper
    draw.rectangle([right_x, safe_cy - 160, right_x + 120, safe_cy + 190], fill=(225, 235, 245), outline=(15, 15, 15), width=6)
    draw.rectangle([right_x + 15, safe_cy - 130, right_x + 105, safe_cy - 80], fill=(30, 45, 75))
    font_bldg = ImageFont.truetype(font_marker_path, 20)
    draw.text((right_x + 24, safe_cy - 120), "WALL ST", font=font_bldg, fill=(255, 255, 255))
    for wy in range(safe_cy - 60, safe_cy + 170, 32):
        for wx in range(right_x + 14, right_x + 105, 28):
            draw.rectangle([wx, wy, wx + 18, wy + 18], fill=(135, 185, 235), outline=(20, 20, 20), width=2)

    # Smartphone showing chart
    phone_x = right_x - 110
    draw.rounded_rectangle([phone_x, safe_cy - 70, phone_x + 75, safe_cy + 90], radius=12, fill=(25, 25, 30), outline=(15, 15, 15), width=5)
    draw.rounded_rectangle([phone_x + 6, safe_cy - 54, phone_x + 69, safe_cy + 74], radius=6, fill=(245, 245, 250))
    # mini candle chart on phone
    draw.line([(phone_x + 15, safe_cy + 40), (phone_x + 28, safe_cy + 15), (phone_x + 44, safe_cy + 25), (phone_x + 60, safe_cy - 30)], fill=(46, 204, 113), width=4)

    out_banner = r"c:\Users\forge\OneDrive\Desktop\youtube\banner_2560x1440.png"
    out_banner_art = r"C:\Users\forge\.gemini\antigravity\brain\c941a8c9-018d-4446-92c6-f80e0564b40f\banner_2560x1440.png"
    im.save(out_banner, "PNG")
    im.save(out_banner_art, "PNG")
    print(f"Generated Banner: {out_banner}")

if __name__ == "__main__":
    build_logo()
    build_banner()
