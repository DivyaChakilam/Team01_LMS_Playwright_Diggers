
Feature: Login  Page Credentials Verification

  Background: Admin gives the correct LMS portal URL
    Given Admin is on login Page

  Scenario: Validate login with valid data in all field
    When Admin enter valid data in all field and clicks login button
    Then Admin should land on home page

  Scenario: Validate login with invalid data
    When Admin enter invalid data and clicks login button
    Then Error message "Invalid username and password Please try again"

  Scenario: Validate login credentials with null user name
    When Admin enter value only in password and clicks login button
    Then Error message" Please enter your user name"

  @slow @bug
  Scenario: Validate login credentials with null password
    When Admin enter value only in user name and clicks login button
    Then Error message" Please enter your password "

  @slow
  Scenario: verify login button action through keyboard
    When Admin enter valid credentials  and clicks login button through keyboard
    Then Admin should land on home page

  Scenario: verify login button action through mouse
    When Admin enter valid credentials  and clicks login button through mouse
    Then Admin should land on home page
