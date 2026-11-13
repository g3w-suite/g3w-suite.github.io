Feature: Generated site pages
  Published pages maintain their structure, links and accessibility.

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

  Scenario: YouTube videos require consent
    Given the HTML pages in the language folders
    Then YouTube videos do not load before consent

  Scenario: Internal links are extensionless and resolve
    Given the HTML pages in the language folders
    Then every internal link and asset resolves without HTML extensions

  Scenario: Published site images are referenced
    Then every published site image is referenced by compiled code

  Scenario: Generated images are lazy-loaded
    Then every generated image uses lazy loading

  Scenario: Generated images have alternative text
    Then every generated image has non-empty alternative text

  Scenario: The root page redirects to Italian
    Then the root page redirects to the Italian version
