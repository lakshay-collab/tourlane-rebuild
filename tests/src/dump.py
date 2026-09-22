import asyncio, json, sys
from playwright.async_api import async_playwright

URL = sys.argv[1] if len(sys.argv) > 1 else 'https://www.tourlane.de/reisearten/inselhopping/'
OUT = sys.argv[2] if len(sys.argv) > 2 else '/tmp/insel'
W = int(sys.argv[3]) if len(sys.argv) > 3 else 1440

JS = r"""
() => {
  const px = (v) => Math.round(v);
  const skip = new Set(['SCRIPT','STYLE','NOSCRIPT','svg','path','SVG','PATH']);
  const rows = [];
  const walk = (el, depth) => {
    if (skip.has(el.tagName)) return;
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) return;
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden') return;
    const own = Array.from(el.childNodes).filter(n => n.nodeType === 3).map(n => n.textContent.trim()).filter(Boolean).join(' ');
    const row = { d: depth, t: el.tagName, y: px(r.top + scrollY), x: px(r.left), w: px(r.width), h: px(r.height) };
    if (own) row.txt = own.slice(0, 120);
    if (el.tagName === 'IMG') { row.src = (el.currentSrc || el.src).slice(0, 200); row.alt = (el.alt || '').slice(0, 80); }
    if (el.tagName === 'A') row.href = el.getAttribute('href');
    const font = cs.fontSize + '/' + cs.lineHeight + ' ' + cs.fontWeight + ' ' + cs.fontFamily.split(',')[0];
    if (own || el.tagName === 'IMG' || el.tagName === 'BUTTON' || el.tagName === 'A') row.font = font;
    row.c = cs.color; row.bg = cs.backgroundColor; row.br = cs.borderRadius; row.bd = cs.borderTopWidth + ' ' + cs.borderTopColor;
    row.disp = cs.display; row.pad = cs.padding; row.gap = cs.gap; row.grid = cs.gridTemplateColumns;
    if (el.getAttribute('data-testid')) row.tid = el.getAttribute('data-testid');
    rows.push(row);
    for (const c of el.children) walk(c, depth + 1);
  };
  walk(document.body, 0);
  return rows;
}
"""

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        pg = await b.new_page(viewport={'width': W, 'height': 900}, user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36')
        await pg.goto(URL, wait_until='domcontentloaded', timeout=60000)
        await pg.wait_for_timeout(2500)
        for sel in ['#onetrust-accept-btn-handler', 'button:has-text("Alle akzeptieren")', 'button:has-text("Akzeptieren")']:
            try:
                await pg.click(sel, timeout=1500); break
            except Exception:
                pass
        if len(sys.argv) > 4:
            for _ in range(6):
                btns = await pg.query_selector_all('button:has-text("Mehr erfahren")')
                if not btns: break
                for bt in btns:
                    try: await bt.click(timeout=1500)
                    except Exception: pass
                await pg.wait_for_timeout(600)
        # scroll through to trigger lazy loads
        H = await pg.evaluate('document.body.scrollHeight')
        for y in range(0, H + 900, 600):
            await pg.evaluate(f'window.scrollTo(0,{y})')
            await pg.wait_for_timeout(250)
        await pg.evaluate('window.scrollTo(0,0)')
        await pg.wait_for_timeout(800)
        rows = await pg.evaluate(JS)
        json.dump(rows, open(OUT + '.json', 'w'), ensure_ascii=False)
        await pg.screenshot(path=OUT + '.png', full_page=True)
        html = await pg.content()
        open(OUT + '.html', 'w').write(html)
        print('rows', len(rows), 'height', await pg.evaluate('document.body.scrollHeight'))
        await b.close()

asyncio.run(main())
