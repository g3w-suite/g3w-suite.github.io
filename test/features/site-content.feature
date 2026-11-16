Feature: Site content conventions
  Pages use shared templates and Markdown source conventions.

  Scenario: Source text encoding
    Then source text is valid UTF-8 without corrupted character sequences

  Scenario: Shared page templates
    Then both languages are generated from shared page templates

  Scenario: Site page sources use Markdown except for required HTML
    Then site page sources contain only the allowed HTML elements

  Scenario: Homepage steps preserve Markdown paragraphs
    Then homepage steps keep titles and descriptions in separate paragraphs

  Scenario: Markdown button markers keep their page styles
    Then generated buttons retain their styles and external-link behavior

  Scenario: Sponsor profiles document release credits
    Then sponsor profiles link to their credited releases in both languages

  Scenario: Member profiles introduce people and their links
    Then member profile headers show the portrait, name, introduction and personal links
