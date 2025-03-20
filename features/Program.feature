@skip
Feature: Program page validation

Background:
Given Admin logs in to LMS application and lands on home page
When Admin clicks the "Program" Navigation bar in the Header

# Manage Program - Delete Program

Scenario: Verify delete feature
#Given Admin is on Program page
When Admin clicks on delete button for a program
Then Admin will get confirm deletion popup

Scenario: Verify Admin is able to click 'Yes'
Given Admin is on Confirm deletion form
When Admin clicks on yesbutton"Yes" button  
Then Admin can see 'Successful Program Deleted' message

Scenario: Verify Admin is able to delete program
#Given Admin is on Program page
When Admin Searches for "Deleted Program name"
Then There should seee zero results.

Scenario: Verify Admin is able to click 'No'
Given Admin is on Program Confirm Deletion Page after selecting a program to delete
When Admin clicks on nobutton"No" button
Then Admin can see Confirmation form disappears

Scenario: Verify Admin is able to close the window with "X" 
Given Admin is on Program Confirm Deletion Page after selecting a program to delete
When Admin Click on "X" button
Then Admin can see Confirm Deletion form disappear

 ################ Manage Program Page Visual Validation ###########################

@focus 
Scenario: Validating the program manage page
Then Admin should land on the " Manage Program" page

Scenario: Verify Logout displayed in menu bar
Then Admin should see "Logout" in menu bar

Scenario: Verify heading in menu bar
Then Admin should see the " LMS - Learning Management System " Title

#Scenario: Verify other page's name displayed in menu bar
#Then Admin should see the page names as in order "Program"

Scenario: Verify click on program on menu bar
When Admin clicks on "Program" in menu bar
Then Admin should see the sub menu "Add New Program"

Scenario:Validating the data table headers in the program page
#Then Admin should able to see datatable heading Program Name , Program description,Programstatus and Edit/Delete for each program

####################### Menu bar - Program - Add New Program #######################
#@only code is kept in comment
Scenario: Verify enter program name
    #When Admin clicks on "Add New Program" under the "Program" menu bar
    #Then Admin enters the Name in the text box
    # Then Admin can see the text entered


















# npx playwright test features/Class.feature --headed
# npx bddgen

# npx bddgen
# npx playwright test --headed --project='chromium'
#  npm i tesseract.js@4.1.1
#  npx bddgen
#  npx playwright test --headed --project='chromium'
# npx playwright test features/Class.feature --headed --project='chromium

# // npx playwright test --headed --project='chromium'

