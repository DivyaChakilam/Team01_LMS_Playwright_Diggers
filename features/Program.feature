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

  Scenario Outline: Verify sorting of "<column Name>" in Ascending order
    When Admin clicks on Arrow next to "<column Name>" to sort in Ascending order
    Then Admin See the "<column Name>" is sorted in Ascending order

    Examples:
      | column Name         |
      | Program Name        |
      | Program Description |
      | Program Status      |

  Scenario Outline: Verify sorting of "<column Name>" in Descending order
    When Admin clicks on Arrow next to "<column Name>" to sort in Descending order
    Then Admin See the "<column Name>" is sorted in Descending order

    Examples:
      | column Name         |
      | Program Name        |
      | Program Description |
      | Program Status      |

############### Manage Program - Pagination ############################3

  Scenario: Verify Admin is able to click 'Next page' link
    When Admin clicks "Next page" link on the "Program" table
    Then Admin should see the next page record on the table  with Pagination has previous active link enabled

  Scenario: Verify Admin is able to click 'Last page' link
    When Admin clicks "Last page" link on the "Program" table
    Then Admin should see the last page record on the table with Next page link and last page links are disabled

  Scenario: Verify Admin is able to click 'Previous page' link
    Given Admin is on last page of "Program" module table
    When Admin clicks "Previous page" link on the "Program" table
    Then Admin should see the previous page record on the table with pagination has next page and last page link enabled

  @only
  Scenario Outline: Verify Admin is able to click First page link
    Given Admin is on last page of "Program" module table
    When Admin clicks "First page" link on the "Program" table
    Then Admin should see the very first page record on the table with Previous page link and first page links are disabled

 ################ Manage Program Page Visual Validation ###########################

  Scenario: Validating the program manage page
    Then Admin should land on the " Manage Program" page

  Scenario: Verify Logout displayed in menu bar
    Then Admin should see "Logout" in menu bar
