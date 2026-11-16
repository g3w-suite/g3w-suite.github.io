Feature: Site documentation
  The generated manual includes current release links and translated pages.

  Scenario: Every documentation page lists release notes automatically
    Then release links are available in the documentation navigation

  Scenario: Markdown documentation is compiled locally
    Then every documentation source is Markdown and has a generated page
