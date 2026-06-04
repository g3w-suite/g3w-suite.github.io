#!/usr/bin/env python3
"""
Scarica tutte le immagini referenziate da <img src="http..."> nei file .html
del progetto in assets/images/ e riscrive gli src con il path locale relativo.

I tag <meta property="og:image"> NON vengono toccati: gli scraper social
(Facebook, X, LinkedIn) richiedono URL assoluti pubblicamente raggiungibili.
"""
import re
import sys
import hashlib
from pathlib import Path
from urllib.parse import urlparse, unquote
from urllib.request import urlopen, Request

ROOT = Path(__file__).resolve().parent.parent
ASSETS_DIR = ROOT / "assets" / "images"
ASSETS_DIR.mkdir(parents=True, exist_ok=True)

IMG_SRC_RE = re.compile(
    r'(<img\b[^>]*?\bsrc\s*=\s*")(https?://[^"]+)(")',
    re.IGNORECASE,
)

# URL non più raggiungibili → URL alternativo funzionante
URL_REDIRECTS = {
    "https://gis3w.it/wp-content/uploads/sites/1/2017/05/logo_gis3w2.png":
        "https://gis3w.it/wp-content/uploads/2026/01/logo_gis3w_100_53-1.png",
}

UA = {"User-Agent": "Mozilla/5.0 (image-downloader)"}

# Cache globale: URL originale -> filename locale
URL_TO_LOCAL: dict[str, str] = {}
# Deduplica file identici: sha1(bytes) -> filename in ASSETS_DIR
HASH_TO_FILE: dict[str, str] = {}


def fetch(url: str) -> bytes:
    req = Request(url, headers=UA)
    with urlopen(req, timeout=30) as resp:
        return resp.read()


def store(url: str) -> str:
    real_url = URL_REDIRECTS.get(url, url)
    data = fetch(real_url)
    digest = hashlib.sha1(data).hexdigest()

    if digest in HASH_TO_FILE:
        return HASH_TO_FILE[digest]

    base = Path(unquote(urlparse(real_url).path)).name or "image"
    target = ASSETS_DIR / base

    # Se esiste un file con lo stesso nome ma contenuto diverso, prefisso hash
    if target.exists():
        existing_digest = hashlib.sha1(target.read_bytes()).hexdigest()
        if existing_digest != digest:
            base = f"{digest[:8]}_{base}"
            target = ASSETS_DIR / base

    target.write_bytes(data)
    HASH_TO_FILE[digest] = base
    return base


def populate_existing_cache() -> None:
    for f in ASSETS_DIR.glob("*"):
        if f.is_file():
            HASH_TO_FILE.setdefault(hashlib.sha1(f.read_bytes()).hexdigest(), f.name)


def rewrite_html(html_path: Path) -> int:
    text = html_path.read_text(encoding="utf-8")
    depth = len(html_path.relative_to(ROOT).parts) - 1
    rel_prefix = ("../" * depth) + "assets/images"

    def replace(match: re.Match) -> str:
        prefix, url, suffix = match.group(1), match.group(2), match.group(3)
        if url not in URL_TO_LOCAL:
            try:
                URL_TO_LOCAL[url] = store(url)
                tag = "↓"
            except Exception as e:
                print(f"  ! ERRORE {url}: {e}", file=sys.stderr)
                return match.group(0)
        else:
            tag = "="
        name = URL_TO_LOCAL[url]
        print(f"  {tag} {url} -> {name}")
        return f"{prefix}{rel_prefix}/{name}{suffix}"

    new_text, count = IMG_SRC_RE.subn(replace, text)
    if new_text != text:
        html_path.write_text(new_text, encoding="utf-8")
    return count


def main() -> None:
    populate_existing_cache()
    html_files = sorted(ROOT.rglob("*.html"))
    print(f"Trovati {len(html_files)} file HTML\n")
    total = 0
    for f in html_files:
        rel = f.relative_to(ROOT)
        print(f"→ {rel}")
        n = rewrite_html(f)
        print(f"  {n} src riscritti\n")
        total += n
    print(f"Fatto. {total} riferimenti totali. {len(HASH_TO_FILE)} file unici in {ASSETS_DIR}")


if __name__ == "__main__":
    main()
