import contextlib
from functools import lru_cache
import json
import re
import sys


PROTECTED = re.compile(
    r"(`+[^`\n]+`+|\]\([^)\n]*\)|</?[A-Za-z][^>\n]*>|"
    r"(?:https?://|/)[^\s<>\])]+|[\w.+-]+@[\w.-]+\.[A-Za-z]+|"
    r"&(?:#\w+|\w+);|\\[^\w\s]|\*+|_+|~~|[\[\]|]|"
    r"\b(?:G3W-(?:SUITE|CLIENT|ADMIN)(?:-[A-Z0-9]+)*|QGIS|PostGIS|DataPlotly|GeoPackage|WebGIS|"
    r"Viewer|Editor[12]?|Admin|Noble|[A-Za-z]+[A-Za-z_]*\d[A-Za-z\d_]*|"
    r"\d+(?:\.\d+)+(?:\.x)?)\b)"
)


def translate_text(source, translate):
    parts = PROTECTED.split(source)
    for index in range(0, len(parts), 2):
        match = re.fullmatch(r"(\s*(?:[^\w\s]+\s*)*)(.*?)(\s*[\u2018\u201c\u201e]?\s*)", parts[index], re.DOTALL)
        if match and re.search(r"[A-Za-z]", match[2]):
            text = " ".join(translate(match[2]).split())
            if not text:
                raise ValueError(f"Empty translation: {match[2]!r}")
            text = re.sub(r" ?& #160;", "\u00a0", text)
            parts[index] = match[1] + text + match[3]
    return "".join(parts)


def main():
    sys.stdin.reconfigure(encoding="utf-8")
    sys.stdout.reconfigure(encoding="utf-8")
    requests = json.load(sys.stdin)
    results = {}
    with contextlib.redirect_stdout(sys.stderr):
        from argostranslate import package, translate

        installed = {(model.from_code, model.to_code) for model in package.get_installed_packages()}
        missing = {("en", lang) for lang in requests} - installed
        if missing:
            package.update_package_index()
            available = {(model.from_code, model.to_code): model for model in package.get_available_packages()}
            for pair in sorted(missing):
                if pair not in available:
                    raise ValueError(f"No Argos model for {pair[0]} -> {pair[1]}")
                package.install_from_path(available[pair].download())

        for lang, sources in requests.items():
            print(f"Translating {len(sources)} English strings into {lang}", file=sys.stderr)
            model = translate.get_translation_from_codes("en", lang)
            translate_cached = lru_cache(maxsize=None)(model.translate)
            results[lang] = {source: translate_text(source, translate_cached) for source in sources}
    json.dump(results, sys.stdout, ensure_ascii=False)


if __name__ == "__main__":
    main()
