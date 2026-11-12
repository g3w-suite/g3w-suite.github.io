Feature: Multilingual site conventions
  Pages maintain the site's shared structure and links.

  Scenario: Page structure
    Given the HTML pages in the language folders
    Then every page declares its language, metadata, and main structure
    And every page uses the shared assets with root-relative paths

  Scenario: Source text encoding
    Then source text is valid UTF-8 without corrupted character sequences

  Scenario: Explicit text and attribute translations
    Then translated text is rendered for each language

  Scenario: Shared page templates
    Then both languages are generated from shared page templates

  Scenario: Page-local translations are valid and applied
    Then page-local translations are valid and used by the Italian build

  Scenario: Links between languages
    Given the HTML pages in the language folders
    Then every page links consistently to the Italian and English versions

  Scenario: Navigation accessibility
    Given the HTML pages in the language folders
    Then the navigation controls retain their accessibility attributes

  Scenario: YouTube videos require consent
    Given the HTML pages in the language folders
    Then YouTube videos do not load before consent

  Scenario: Internal links are extensionless and resolve
    Given the HTML pages in the language folders
    Then every internal link and asset resolves without HTML extensions

  Scenario: Published site images are referenced
    Then every published site image is referenced by compiled code

  Scenario: The root page redirects to Italian
    Then the root page redirects to the Italian version

  Scenario: The development server uses port 8080
    When the development server starts with PORT set to another value
    Then it serves the root page on port 8080

  Scenario: Deployment under a GitHub Pages project path
    Then the build supports a project base path without broken internal links

  Scenario: Markdown documentation is compiled locally
    Then every documentation source is Markdown and has a generated page
