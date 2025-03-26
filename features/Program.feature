
Feature: Program page validation

  Background:
    Given Admin logs in to LMS application and lands on home page
    When Admin clicks the "Program" Navigation bar in the Header

  ###################### Manage Program - Delete Program ####################
  
  Scenario: Verify delete feature
    #Given Admin is on Program page
    When Admin clicks on delete button for a program
    Then Admin will get confirm deletion popup
  
  Scenario: Verify Admin is able to click 'Yes'
    Given Admin is on Confirm deletion form
    When Admin clicks on yesbutton"Yes" button
    Then Admin can see 'SuccessfulProgram Deleted' message
  
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

  ################# Manage Program - Delete Multiple Program ##########################
  
  Scenario: Verify Admin is able to select multiple programs
    #Given Admin is on Program page
    When Admin selects more than one program by clicking on the checkbox
    Then Programs get selected
 
  Scenario: Verify Admin is able to delete Multiple programs
    #Given Admin is on Program page
    When Admin clicks on the delete button on the left top of the program page
    Then Admin lands on Confirmation form
 
  Scenario: Verify Admin is able to click 'Yes' - Delete multiple programes
    Given Admin is on Confirm deletion form
    When Admin clicks on yesbutton"Yes" button
    Then Admin can see 'SuccessfulProgram Deleted' message
   
  Scenario: Verify Admin is able to deleted program
    #Given Admin is on Program page
    When Admin Searches for Deleted Program names
    Then There should be zero results
 
  Scenario: Verify Admin is able to click 'No'-multiple programes are deleted
    Given Admin is on Confirm deletion form-multiple programes selected to delete
    When Admin clicks on nobutton"No" button-multiple programes selected to delete
    Then Admin can see Programs are still selected and not deleted

  ##################### Manage Program - Search bar ##############################3
   
  Scenario: Verify Admin is able to search results found for program name
    #Given Admin is on Program page
    When Admin enter the program to search By program name
    Then Admin should able to see Program name, description, and status for searched program name
   
  Scenario: Verify Admin is able to search results found for program description
    #Given Admin is on Program page
    When Admin enter the program to search By program description
    Then Admin should able to see Program name, description, and status for searched program description
 
  Scenario: Verify Admin is able to search results not found
    #Given Admin is on Program page
    When Admin enter the program to search By program name that does not exist
    Then There should be zero results - Search bar
 
  Scenario: Verify Admin is able to search with partial program name
    #Given Admin is on Program page
    When Admin enter the program to search By partial name of program
    Then Admin should able to see Program name, description, and status for searched program name - for partial name search

  ##############Manage Program - Sorting Program#################
 
  Scenario Outline: Verify sorting of "<column Name>" in Ascending order in Manage Program
    When Admin clicks on Arrow next to "<column Name>" to sort in Ascending order in Manage Program
    Then Admin See the "<column Name>" is sorted in Ascending order in Manage Program

    Examples:
      | column Name         |
      | Program Name        |
      | Program Description |
      | Program Status      |
  @skip
  Scenario Outline: Verify sorting of "<column Name>" in Descending order in Manage Program
    When Admin clicks on Arrow next to "<column Name>" to sort in Descending order in Manage Program
    Then Admin See the "<column Name>" is sorted in Descending order in Manage Program

    Examples:
      | column Name         |
      | Program Name        |
      | Program Description |
      | Program Status      |

  ############### Manage Program - Pagination ############################3
  
  Scenario: Verify Admin is able to click 'Next page' link in Manage Program
    When Admin clicks "Next page" link on the "Program" table in Manage Program
    Then Admin should see the next page record on the table  with Pagination has previous active link enabled in Manage Program
   
  Scenario: Verify Admin is able to click 'Last page' link in Manage Program
    When Admin clicks "Last page" link on the "Program" table in Manage Program
    Then Admin should see the last page record on the table with Next page link and last page links are disabled

  Scenario: Verify Admin is able to click 'Previous page' link in Manage Program
    Given Admin is on last page of "Program" module table in Manage Program
    When Admin clicks "Previous page" link on the "Program" table
    Then Admin should see the previous page record on the table with pagination has next page and last page link enabled in Manage Program

  Scenario Outline: Verify Admin is able to click First page link in Manage Program
    Given Admin is on last page of "Program" module table in Manage Program
    When Admin clicks "First page" link on the "Program" table
    Then Admin should see the very first page record on the table with Previous page link and first page links are disabled

  ################ Manage Program Page Visual Validation ###########################






   
  Scenario: Verify Logout displayed in menu bar
    Then Admin should see "Logout" in menu bar

  
  Scenario: Verify heading in menu bar
    Then Admin should see the heading " LMS - Learning Management System "

  
  Scenario: Validating the program manage page in Manage Program
    Then Admin should land on the " Manage Program" page in Manage Program

   
  Scenario: Verify sub menu displayed in program menu bar in Mangage program
    When Admin clicks on "Program" in menu bar
    Then Admin should see sub menu in menu bar as "Add New Program"



  
  Scenario: Verify click on program on menu bar
    When Admin clicks on "Program" in menu bar
    Then Admin should see the sub menu "Add New Program"
    And click on "Cancel" button


  ################  Manage Program Page validation ##########################


 
  Scenario:Validating the data table headers in the program page
    Then Admin should able to see datatable heading Program Name , Program description,Programstatus and Edit/Delete for each program



  ####################### Menu bar - Program - Add New Program #######################
 
  Scenario: Verify enter program name
    When Admin clicks on "Add New Program" under the "Program" menu bar
    Then Admin enters the Name in the text box
  # Then Admin can see the text entered
 
  Scenario: Verify enter description
    Then Admin enters the Description in text box
    Then Admin can see the text entered in description box



  Scenario: Admin adds a new program
    When Admin clicks on "Add New Program"
    Then Admin is on the pop-up window information
    And Admin enters "JV" as Program Name
    # And Admin enters "This is JV" as Program Description
    And Admin selects the first radio button
    And Admin clicks on Save
    Then Admin should see the Successful Program


  Scenario: Admin logs in and updates a program name
    When Admin clicks the "Program" button
    And Admin searches for "datamining1"
    And Admin selects the program
    And Admin clicks the edit button
    And Admin updates the program name to "datamining11"
    And Admin clicks the save button
    Then Admin should see the updated program name

  ###############Sorting###################



  Scenario: Verify Program Details Popup window
    When Admin clicks a "Add New Program" under the "Program" menu bar in program module
    Then Admin should see a popup open for progrma details with empty form along with <Save> and <Cancel> button and Close(X) Icon on the top right corner of the window on the program page

  Scenario: Validating the text and pagination icon in the program page
    Then Admin should see the " showing x to y of z entries"
    And enabled pagination controls under the data table

 
  Scenario: Verify footer message in manage program
    Then Admin should see the footer as " In total there are 55 programs. "



###########


















































  # npx playwright test features/Class.feature --headed
  # npx bddgen

  # npx bddgen
  # npx playwright test --headed --project='chromium'
  #  npm i tesseract.js@4.1.1
  #  npx bddgen
  #  npx playwright test --headed --project='chromium'
  # npx playwright test features/Class.feature --headed --project='chromium

  # // npx playwright test --headed --project='chromium'

  Scenario: Validating the program manage page
    Then Admin should land on the " Manage Program" page