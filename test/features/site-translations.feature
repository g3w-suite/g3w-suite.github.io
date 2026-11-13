Feature: Site translations
  Page-local translations render correctly in each language.

  Scenario: Explicit text and attribute translations
    Then translated text is rendered for each language

  Scenario: Page-local translations are valid and applied
    Then page-local translations are valid and used by the Italian build
