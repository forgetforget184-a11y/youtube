import json

with open('explainer/hunt_brothers/work/cues.json') as f:
    cues = json.load(f)

targets = [
    ('The $1 Billion Heist Nobody Saw Coming', 0),
    ("The Gambler's Sons (Origin of the Fortune)", 'To understand how anyone could attempt something this absurd'),
    ('The Shiny Metal Loophole (Why Silver?)', 'Naturally, the first thing the Hunt brothers wanted to buy was gold'),
    ('The Midnight Airlift to Zurich', 'To understand how the Hunt brothers pulled off their scheme'),
    ('The 1980 Silver Mania ($50/oz Peak)', 'With hundreds of millions of ounces locked away in private vaults'),
    ('Changing the Rules of Wall Street', 'While the Hunt brothers were celebrating their paper billions'),
    ('Silver Thursday (The $100M Margin Call)', 'As soon as the new rules took effect'),
    ('The Billion-Dollar Lesson', 'The fallout from the silver squeeze dragged on for nearly a decade')
]

for title, query in targets:
    if isinstance(query, int):
        print(f"00:00 - {title}")
    else:
        for cue in cues:
            if query.lower() in cue[2].lower():
                s = int(cue[0])
                m, sec = divmod(s, 60)
                print(f"{m:02d}:{sec:02d} - {title}")
                break
