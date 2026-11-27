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
    cx, cy = 400, 355

    # Draw suit & shoulders - bold and extending to the bottom edge
    suit_poly = [
        (150, 800), (220, 500), (330, 440), (470, 440), (580, 500), (650, 800)
    ]
    draw.polygon(suit_poly, fill=(24, 32, 48), outline=(20, 20, 20), width=10)

    # White shirt collar V
    draw.polygon([(350, 440), (450, 440), (400, 550)], fill=(255, 255, 255), outline=(20, 20, 20), width=7)
    # Red tie
    draw.polygon([(388, 460), (412, 460), (420, 530), (400, 680), (380, 530)], fill=(225, 45, 45), outline=(20, 20, 20), width=7)

    # Big round white head
    head_r = 145
    head_bbox = [cx - head_r, cy - head_r, cx + head_r, cy + head_r]
    draw.ellipse(head_bbox, fill=(255, 255, 255), outline=(20, 20, 20), width=12)

    # Fedora Hat
    # Hat brim
    draw.ellipse([cx - 195, cy - 155, cx + 195, cy - 90], fill=(22, 22, 26), outline=(15, 15, 15), width=9)
    # Hat crown
    crown_poly = [
        (cx - 120, cy - 125), (cx - 105, cy - 250), (cx - 20, cy - 268),
        (cx + 40, cy - 250), (cx + 105, cy - 240), (cx + 120, cy - 125)
    ]
    draw.polygon(crown_poly, fill=(26, 26, 32), outline=(15, 15, 15), width=9)
    # Red ribbon on hat
    ribbon_poly = [
        (cx - 122, cy - 128), (cx - 117, cy - 160), (cx + 117, cy - 160), (cx + 122, cy - 128)
    ]
    draw.polygon(ribbon_poly, fill=(200, 35, 35))

    # Sunglasses
    # Left lens
    draw.polygon([(cx - 96, cy - 48), (cx - 16, cy - 48), (cx - 26, cy + 18), (cx - 86, cy + 18)], fill=(18, 18, 22), outline=(10, 10, 10), width=7)
    # Right lens
    draw.polygon([(cx + 16, cy - 48), (cx + 96, cy - 48), (cx + 86, cy + 18), (cx + 26, cy + 18)], fill=(18, 18, 22), outline=(10, 10, 10), width=7)
    # Bridge
    draw.line([(cx - 16, cy - 38), (cx + 16, cy - 38)], fill=(10, 10, 10), width=8)
    # White glare slashes on sunglasses
    draw.line([(cx - 80, cy - 42), (cx - 48, cy + 10)], fill=(255, 255, 255), width=5)
    draw.line([(cx + 32, cy - 42), (cx + 64, cy + 10)], fill=(255, 255, 255), width=5)

    # Cool smirk / mouth
    draw.arc([cx - 20, cy + 32, cx + 60, cy + 80], start=15, end=175, fill=(20, 20, 20), width=8)

    # Pencil held in mouth like a cigar (angled up-right)
    px, py = cx + 25, cy + 52
    # Yellow pencil shaft
    pencil_poly = [
        (px - 10, py + 8), (px + 145, py - 52), (px + 150, py - 38), (px - 5, py + 22)
    ]
    draw.polygon(pencil_poly, fill=(245, 195, 35), outline=(20, 20, 20), width=5)
    # Pink eraser
    eraser_poly = [
        (px - 10, py + 8), (px - 32, py + 16), (px - 28, py + 30), (px - 5, py + 22)
    ]
    draw.polygon(eraser_poly, fill=(255, 115, 125), outline=(20, 20, 20), width=5)
    # Wood collar & lead tip
    wood_poly = [
        (px + 145, py - 52), (px + 180, py - 66), (px + 150, py - 38)
    ]
    draw.polygon(wood_poly, fill=(235, 205, 170), outline=(20, 20, 20), width=4)
    tip_poly = [
        (px + 168, py - 61), (px + 180, py - 66), (px + 171, py - 54)
    ]
    draw.polygon(tip_poly, fill=(30, 30, 30))
    # Sparkle / spark at tip
    spark_x, spark_y = px + 190, py - 70
    draw.line([(spark_x - 14, spark_y), (spark_x + 14, spark_y)], fill=(255, 240, 100), width=5)
    draw.line([(spark_x, spark_y - 14), (spark_x, spark_y + 14)], fill=(255, 240, 100), width=5)

    out_logo = r"c:\Users\forge\OneDrive\Desktop\youtube\logo_800x800.png"
    out_logo_art = r"C:\Users\forge\.gemini\antigravity\brain\c941a8c9-018d-4446-92c6-f80e0564b40f\logo_800x800.png"
    im.save(out_logo, "PNG")
    im.save(out_logo_art, "PNG")
    print(f"Generated Clean Logo: {out_logo}")

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

    # --- INSIDE SAFE ZONE (Y: 508 to 931, X: 507 to 2053) ---
    safe_cy = 720

    # Character on Left (X approx 640) - comfortably placed
    char_cx = 640
    head_cy = safe_cy - 15
    head_r = 75

    # Suit & tie extending to bottom of safe area
    draw.polygon([
        (char_cx - 95, safe_cy + 195), (char_cx - 68, safe_cy + 55),
        (char_cx + 68, safe_cy + 55), (char_cx + 95, safe_cy + 195)
    ], fill=(24, 32, 48), outline=(15, 15, 15), width=8)
    draw.polygon([(char_cx - 26, safe_cy + 55), (char_cx + 26, safe_cy + 55), (char_cx, safe_cy + 105)], fill=(255, 255, 255), outline=(15, 15, 15), width=4)
    draw.polygon([(char_cx - 9, safe_cy + 65), (char_cx + 9, safe_cy + 65), (char_cx, safe_cy + 150)], fill=(225, 40, 40), outline=(15, 15, 15), width=4)

    # Head
    draw.ellipse([char_cx - head_r, head_cy - head_r, char_cx + head_r, head_cy + head_r], fill=(255, 255, 255), outline=(15, 15, 15), width=8)

    # Fedora Hat
    draw.ellipse([char_cx - 105, head_cy - 80, char_cx + 105, head_cy - 46], fill=(20, 20, 24), outline=(10, 10, 10), width=6)
    draw.polygon([
        (char_cx - 65, head_cy - 65), (char_cx - 55, head_cy - 138), (char_cx + 55, head_cy - 138), (char_cx + 65, head_cy - 65)
    ], fill=(24, 24, 30), outline=(10, 10, 10), width=6)
    draw.rectangle([char_cx - 65, head_cy - 80, char_cx + 65, head_cy - 65], fill=(195, 30, 30))

    # Sunglasses
    draw.polygon([(char_cx - 52, head_cy - 20), (char_cx - 8, head_cy - 20), (char_cx - 14, head_cy + 14), (char_cx - 46, head_cy + 14)], fill=(18, 18, 22), outline=(10, 10, 10), width=5)
    draw.polygon([(char_cx + 8, head_cy - 20), (char_cx + 52, head_cy - 20), (char_cx + 46, head_cy + 14), (char_cx + 14, head_cy + 14)], fill=(18, 18, 22), outline=(10, 10, 10), width=5)
    draw.line([(char_cx - 8, head_cy - 15), (char_cx + 8, head_cy - 15)], fill=(10, 10, 10), width=5)
    draw.line([(char_cx - 42, head_cy - 17), (char_cx - 22, head_cy + 8)], fill=(255, 255, 255), width=3)
    draw.line([(char_cx + 18, head_cy - 17), (char_cx + 38, head_cy + 8)], fill=(255, 255, 255), width=3)

    # Smirk
    draw.arc([char_cx - 14, head_cy + 22, char_cx + 32, head_cy + 48], start=10, end=170, fill=(15, 15, 15), width=5)

    # Giant Pencil pointing toward the title
    pen_x1, pen_y1 = char_cx + 45, safe_cy + 75
    pen_x2, pen_y2 = char_cx + 160, safe_cy - 15
    draw.polygon([
        (pen_x1 - 10, pen_y1 - 9), (pen_x2 - 10, pen_y2 - 9), (pen_x2 + 7, pen_y2 + 9), (pen_x1 + 7, pen_y1 + 9)
    ], fill=(245, 195, 30), outline=(15, 15, 15), width=5)
    # Pencil lead tip
    draw.polygon([
        (pen_x2 - 10, pen_y2 - 9), (pen_x2 + 22, pen_y2 - 2), (pen_x2 + 7, pen_y2 + 9)
    ], fill=(235, 205, 160), outline=(15, 15, 15), width=4)
    draw.polygon([
        (pen_x2 + 12, pen_y2 - 5), (pen_x2 + 22, pen_y2 - 2), (pen_x2 + 15, pen_y2 + 2)
    ], fill=(20, 20, 20))

    # Green chart line drawn by the pencil tip
    chart_pts = [
        (pen_x2 + 22, pen_y2 - 2), (char_cx + 210, safe_cy - 50), (char_cx + 290, safe_cy - 30),
        (char_cx + 400, safe_cy - 90), (char_cx + 520, safe_cy - 70), (char_cx + 650, safe_cy - 150),
        (char_cx + 780, safe_cy - 130), (char_cx + 900, safe_cy - 200)
    ]
    draw.line(chart_pts, fill=(46, 204, 113), width=8)
    ax, ay = chart_pts[-1]
    draw.polygon([(ax, ay), (ax - 22, ay + 5), (ax - 8, ay + 22)], fill=(46, 204, 113))

    # --- CENTER TYPOGRAPHY (Perfect Mobile Center & Clearance) ---
    font_title = ImageFont.truetype(font_marker_path, 84)
    font_sub = ImageFont.truetype(font_hand_path, 40)

    title_text = "PENCIL CARTEL"
    sub_text = "WILD MONEY STORIES. DRAWN SIMPLE."

    # Center text cleanly at X = 1180
    tb = draw.textbbox((0, 0), title_text, font=font_title)
    tw = tb[2] - tb[0]
    title_x = 1180 - tw // 2
    title_y = safe_cy - 125

    # Giant 3D offset drop shadow for title
    for offset in range(10, 0, -2):
        draw.text((title_x + offset, title_y + offset), title_text, font=font_title, fill=(10, 10, 15))

    # Heavy black outline around title
    for ox in [-4, -2, 0, 2, 4]:
        for oy in [-4, -2, 0, 2, 4]:
            draw.text((title_x + ox, title_y + oy), title_text, font=font_title, fill=(15, 15, 15))

    # Bright Yellow Fill
    draw.text((title_x, title_y), title_text, font=font_title, fill=(255, 215, 40))

    # Subtitle with black outline & crisp white fill
    sub_tb = draw.textbbox((0, 0), sub_text, font=font_sub)
    sub_w = sub_tb[2] - sub_tb[0]
    sub_x = 1180 - sub_w // 2
    sub_y = safe_cy + 22
    for ox in [-3, 0, 3]:
        for oy in [-3, 0, 3]:
            draw.text((sub_x + ox, sub_y + oy), sub_text, font=font_sub, fill=(15, 15, 15))
    draw.text((sub_x, sub_y), sub_text, font=font_sub, fill=(255, 255, 255))

    # Badge pill: HIGH STAKES FINANCE
    badge_w = 280
    badge_x = 1180 - badge_w // 2
    badge_y = safe_cy + 92
    draw.rounded_rectangle([badge_x, badge_y, badge_x + badge_w, badge_y + 38], radius=10, fill=(235, 45, 45), outline=(15, 15, 15), width=4)
    font_badge = ImageFont.truetype(font_hand_path, 26)
    draw.text((badge_x + 18, badge_y + 4), "★ HIGH STAKES FINANCE ★", font=font_badge, fill=(255, 255, 255))

    # Props on Right inside safe zone (Skyscraper + Phone) - safely separated
    right_x = 1750
    # Skyscraper
    draw.rectangle([right_x, safe_cy - 145, right_x + 110, safe_cy + 185], fill=(225, 235, 245), outline=(15, 15, 15), width=6)
    draw.rectangle([right_x + 15, safe_cy - 115, right_x + 95, safe_cy - 70], fill=(30, 45, 75))
    font_bldg = ImageFont.truetype(font_marker_path, 18)
    draw.text((right_x + 20, safe_cy - 105), "WALL ST", font=font_bldg, fill=(255, 255, 255))
    for wy in range(safe_cy - 50, safe_cy + 165, 30):
        for wx in range(right_x + 14, right_x + 95, 26):
            draw.rectangle([wx, wy, wx + 15, wy + 15], fill=(135, 185, 235), outline=(20, 20, 20), width=2)

    # Smartphone showing chart - cleanly placed between text and skyscraper
    phone_x = right_x - 105
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
