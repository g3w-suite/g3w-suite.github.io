from pathlib import Path
import runpy
import unittest


translate_text = runpy.run_path(
    str(Path(__file__).resolve().parents[1] / "utils" / "translate-argos.py")
)["translate_text"]


class TranslationTests(unittest.TestCase):
    def test_login_values_versions_and_roles_are_not_sent_to_the_model(self):
        source = (
            "user: **viewer1**; password: **G3wsuite123**. "
            "Use QGIS 3.40 LTR on Ubuntu 24.04 LTS (Noble) as Editor1."
        )
        fragments = []

        def translate(text):
            fragments.append(text)
            return text.upper()

        result = translate_text(source, translate)
        for literal in ["viewer1", "G3wsuite123", "3.40", "24.04", "Noble", "Editor1"]:
            self.assertIn(literal, result)
            self.assertFalse(any(literal in fragment for fragment in fragments))


if __name__ == "__main__":
    unittest.main()
