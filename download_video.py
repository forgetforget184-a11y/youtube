import urllib.request
import os
import sys

url = "https://github.com/forgetforget184-a11y/youtube/releases/download/v1.0.0-video-4/The_Billionaires_Who_Cornered_Silver.mp4"
dest = r"c:\Users\forge\OneDrive\Desktop\youtube\The_Billionaires_Who_Cornered_Silver.mp4"

print(f"Downloading {url} to {dest}...")

class ProgressHook:
    def __init__(self):
        self.last_percent = -1

    def __call__(self, block_num, block_size, total_size):
        downloaded = block_num * block_size
        if total_size > 0:
            percent = int(downloaded * 100 / total_size)
            if percent != self.last_percent and percent % 10 == 0:
                self.last_percent = percent
                mb = downloaded / (1024 * 1024)
                tot_mb = total_size / (1024 * 1024)
                print(f"Progress: {percent}% ({mb:.1f} MB / {tot_mb:.1f} MB)")

opener = urllib.request.build_opener()
opener.addheaders = [('User-Agent', 'Mozilla/5.0')]
urllib.request.install_opener(opener)

urllib.request.urlretrieve(url, dest, reporthook=ProgressHook())
print("Download complete! File size:", os.path.getsize(dest))
