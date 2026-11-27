import urllib.request
import re
import json

url = 'https://www.youtube.com/watch?v=HawmGu7oNrc'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})

with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8', errors='ignore')

title = re.search(r'<title>(.*?)</title>', html)
print('Title:', title.group(1) if title else 'No title')

desc = re.search(r'"shortDescription":"(.*?)"', html)
print('Desc:', desc.group(1)[:300] if desc else 'No desc')

author = re.search(r'"ownerChannelName":"(.*?)"', html)
print('Author:', author.group(1) if author else 'No author')
