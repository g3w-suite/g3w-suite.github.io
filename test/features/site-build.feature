Feature: Site builds
  Builds support the development server and GitHub Pages deployment.

  Scenario: The development server uses port 8080
    When the development server starts with PORT set to another value
    Then it serves the root page on port 8080

  Scenario: Deployment under a GitHub Pages project path
    Then the build supports a project base path without broken internal links

  Scenario: The not-found page is localized and uses shared components
    Then all language-specific not-found pages have the shared header and footer

  Scenario: Missing routes select the appropriate language
    Then missing routes preserve their address and select the appropriate language

  Scenario: Mermaid diagrams render in the browser
    Then Mermaid blocks render at runtime with accessible labels

  Scenario: Code blocks can be highlighted in the browser
    Then the browser highlighter supports the languages used in code blocks
