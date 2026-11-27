/* ============================================================================
 * captions.js (16:9 Crayon style) — burned lower-third captions.
 * Reads TM.phrases: [{text,s,e}] (seconds). Handwritten font, white with a
 * heavy dark outline, bottom ~92% height. Set TM.CAPTIONS=false to disable.
 * Use TM.phrasesFromCues(cues, maxWords) to split sentence cues into chunks.
 * ==========================================================================*/
(function () {
  const TM = window.TM;
  TM.CAPTIONS = true;
  TM.phrasesFromCues = function (cues, maxWords) {
    maxWords = maxWords || 6; const out = [];
    for (const c of cues) {
      const words = c.text.split(/\s+/).filter(Boolean);
      const chunks = [];
      for (let i = 0; i < words.length; i += maxWords) chunks.push(words.slice(i, i + maxWords).join(' '));
      // merge a tiny last chunk
      if (chunks.length > 1 && chunks[chunks.length - 1].split(' ').length < 3) {
        const last = chunks.pop(); chunks[chunks.length - 1] += ' ' + last;
      }
      const total = chunks.reduce((a, b) => a + b.length, 0);
      let s = c.s;
      for (const ch of chunks) {
        const d = (c.e - c.s) * ch.length / total;
        out.push({ text: ch, s, e: s + d }); s += d;
      }
    }
    return out;
  };
  TM.drawCaptions = function (ctx, f) {
    if (!TM.CAPTIONS) return;
    const t = (f + 0.5) / TM.FPS;
    const p = TM.phrases.find(q => t >= q.s && t < q.e);
    if (!p || !p.text) return;
    const W = TM.W, H = TM.H;
    const size = 58;
    ctx.save();
    ctx.font = `${size}px PHand, "Liberation Sans", Arial, sans-serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    const age = t - p.s; const pop = age < 0.08 ? 0.9 + 0.1 * (age / 0.08) : 1;
    ctx.translate(W / 2, H * 0.925); ctx.scale(pop, pop);
    ctx.lineJoin = 'round'; ctx.lineWidth = 10; ctx.strokeStyle = '#111111';
    ctx.strokeText(p.text, 0, 0);
    ctx.fillStyle = '#FFFFFF'; ctx.fillText(p.text, 0, 0);
    ctx.restore();
  };
})();
