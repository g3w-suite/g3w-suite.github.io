Feature: Multilingual site conventions
  Pages maintain the site's shared structure and links.

  Scenario: Page structure
    Given the HTML pages in the language folders
    Then every page declares its language, metadata, and main structure
    And every page uses the shared assets with root-relative paths

  Scenario: Links between languages
    Given the HTML pages in the language folders
    Then every page links consistently to the Italian and English versions

  Scenario: Navigation accessibility
    Given the HTML pages in the language folders
    Then the navigation controls retain their accessibility attributes

  Scenario: Internal links are extensionless and resolve
    Given the HTML pages in the language folders
    Then every internal link and asset resolves without HTML extensions

  Scenario: The root page redirects to Italian
    Then the root page redirects to the Italian version

  Scenario: The development server uses port 8080
    When the development server starts with PORT set to another value
    Then it serves the root page on port 8080
