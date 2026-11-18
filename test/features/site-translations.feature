Feature: Site translations
  Central translation catalogs render correctly in each language.

  Scenario: Explicit text and attribute translations
    Then translated text is rendered for each language

  Scenario: Catalogs are grouped by page and applied
    Then the page-scoped catalogs are valid and used by the build
