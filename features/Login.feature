Feature: Login  Page Verification 

Background: 
Given The browser is open
When Admin gives the correct LMS portal URL
@focus 
Scenario: Verify Admin is able to land on login page
Then Admin should land on the login page

@skip
Scenario: Verify Admin is able to land on home page with invalid URL
Given The browser is open
When Admin gives the invalid LMS portal URL
Then Admin should receive application error

Scenario: Verify the text spelling in the page 
Then Admin should see correct spellings in all fields 

@focus
Scenario: Verify application name
Then Admin should see  LMS - Learning Management System

Scenario: Verify company name
Then Admin should see company name below the app name

Scenario: Validate sign in content
Then Admin should see "Please login to LMS application"

Scenario: Verify text field is present
Then Admin should see two text field

Scenario: Verify text on the first field
Then Admin should see "User" in the first text field

Scenario: Verify asterisk next to USER text
Then Admin should see asterisk mark symbol next to text for mandatory fields

Scenario: Verify text on the second field
Then Admin should "Password" in the second text field

Scenario: Verify asterisk mark symbol next to password text
Then Admin should see asterisk mark symbol next to password text

Scenario: Verify the alignment input field for the login
Then Admin should see input field on the centre of the page

Scenario: verify Login button is present
Then Admin should see login button 

Scenario: Verify input descriptive text in password field
Then Admin should see password in gray color


