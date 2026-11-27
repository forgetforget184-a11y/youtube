import urllib.request
import re
import json

url = 'https://www.youtube.com/@CrayonCapital/videos'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})

try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        
    # Extract video titles and ids
    matches = re.findall(r'\"title\":\{\"runs\":\[\{\"text\":\"(.*?)\"\}\].*?\"videoId\":\"(.*?)\"', html)
    seen = set()
    videos = []
    for title, vid in matches:
        if vid not in seen and len(title) > 5:
            seen.add(vid)
            videos.append((title, vid))
            
    print(f"Found {len(videos)} videos:")
    for t, v in videos[:15]:
        print(f"- {t} (https://youtu.be/{v})")
except Exception as e:
    print("Error:", e)
