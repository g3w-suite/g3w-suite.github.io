Feature: Site builds
  Builds support the development server and GitHub Pages deployment.

  Scenario: The development server uses port 8080
    When the development server starts with PORT set to another value
    Then it serves the root page on port 8080

  Scenario: Deployment under a GitHub Pages project path
    Then the build supports a project base path without broken internal links

  Scenario: Mermaid diagrams render in the browser
    Then Mermaid blocks render at runtime with accessible labels
