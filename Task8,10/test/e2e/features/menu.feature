@all
Feature: Careers

  @epam @first
  Scenario: Verify user can open Careers
    Given I open "https://www.epam.com/" url
    When I wait until "Careers" is present
    And I click "Careers"
    And I wait "10" seconds
    And I click "Keyword or job ID input"
    And I input "Keyword or job ID input" searched text "Senior DevOps Engineer"
    And I click "Find button"
    Then "Result" should be visible


