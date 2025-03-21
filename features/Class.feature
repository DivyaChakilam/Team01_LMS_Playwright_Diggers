Feature: Class page validations

Background:
Given Admin logs in to LMS application and lands on home page
When Admin clicks the "Class" Navigation bar in the Header


   ################ Manage Program Page Visual Validation ###########################

@focus
Scenario: Validating the class manage page
Then Admin should land on the " Manage Class" page

Scenario: Validating the Title in the Manage class page
Then Admin should see the " LMS - Learning Management System " Title
#@skip
Scenario: Validating the Header in the Manage class page
Then Admin should see the " Manage Class" Header
#@skip
Scenario: Validating Search bar in class page
Then Admin should see the Search Bar in Manage class page

Scenario: Validating the data table headers in the class page
Then Admin should see the datatable heading like Batchname,class topic,class description,status,class Date,staff name,Edit/Delete

Scenario: Validating the text and pagination icon in the classpage
Then Admin should see the " showing x to y of z entries" 
And enabled pagination controls under the data table

Scenario: Validate the sort icon of all the field in datatable
Then Admin should see the Sort icon of all the field in the datatable.

Scenario: Validating the Delete button under the Manage class 
Then Admin should see the Delete button under the Manage class page header.

Scenario: Validate the total no of classes in manage class page
Then Admin should see Total no of classes in below of the data table.

 ################ Navigation and Menu Bar Validation ###########################

Scenario: Validate Batch link on navigation bar
When Admin clicks on "Batch" on the navigation bar
Then Admin is redirected to " Manage Batch" page

Scenario: Validate Program link on navigation bar
When Admin clicks on "Program" on the navigation bar
Then Admin is redirected to " Manage Program" page

Scenario: Validate Class link on navigation bar
When Admin clicks on "Class" on the navigation bar
Then Admin is redirected to " Manage Class" page

Scenario: Validate Logout link on navigation bar
When Admin clicks on "Logout" on the navigation bar
Then Admin is redirected to Login page

######################## Add New Class Scenarios #########################

Scenario: Validate Class Details Popup window
When Admin clicks a "Add New Class" under the "Class" menu bar
Then Admin should see a popup open for class details with empty form along with <SAVE> and <CANCEL> button and Close(X) Icon on the top right corner of the window

Scenario: Validate input fields and their text boxes in Class details form 
When Admin clicks a "Add New Class" under the "Class" menu bar
Then Admin should see few input fields and their respective text boxes in the class details window
      | Label Name          | Input Field ID      |
      | Batch Name          | Select a Batch Name |
      | Class Topic         | Class Topic *       |
      | Class Description   | Class Description   |
      | Staff Name          | Select a Staff Name |
      | Comments            | Comments            |
      | Notes               | Notes               |
      #| Recording           | Recording           |
      #| No of Classes       | No of Classes       |
      #| Select Class Dates  |

######################## Add New Class Popup Scenarios #########################

Scenario: Check no of classes value added when selecting class dates
When Admin clicks a "Add New Class" under the "Class" menu bar
And Admin selects class date in date picker
Then Admin should see no of class value is added automatically

Scenario: Check weekend dates are disabled in calendar 
When Admin clicks a "Add New Class" under the "Class" menu bar
And Admin selects class date in date picker
Then Admin should see weekends dates are disabled to select

Scenario: Empty form submission 
When Admin clicks a "Add New Class" under the "Class" menu bar
And Admin clicks on save button without entering data 
Then class won't be created and Admin gets error message
      |  Error Message              |
      |  Batch Name is required.    |
      |  Class Topic is required.   |
      |  Class Date is required.    |
      |  No. of Classes is required.|
      |  Staff Name is required.    |
      |  Status is required.        |

Scenario: Validate Cancel icon on class Details form
When Admin clicks a "Add New Class" under the "Class" menu bar
And Admin clicks Cancel Icon on Admin Details form 
Then Class Details popup window should be closed without saving

Scenario: Validate Close(X) icon on class Details form
When Admin clicks a "Add New Class" under the "Class" menu bar
And Admin clicks Close(X) Icon on Admin Details form 
Then Class Details popup window should be closed without saving

######################## Edit New class Popup Scenarios #########################

Scenario: Validate row level edit icon
When Admin clicks on the "edit" icon 
Then Admin should see new pop up with class details appears
And Admin should see batch name field and class topic are disabled

########### sorting function in ascending and descending order #############3333333

Scenario Outline: Verify sorting of "<column Name>" in Ascending order
When Admin clicks on Arrow next to "<column Name>" to sort in Ascending order 
Then Admin See the "<column Name>" is sorted in Ascending order 
     Examples:
    |   column Name    |
    |   Batch Name     |
    |  Class Topic     |
    |Class Description |
    |   Status         |
    |   Class Date     |
    |   Staff Name     |
    
Scenario Outline: Verify sorting of "<column Name>" in Descending order
When Admin clicks on Arrow next to "<column Name>" to sort in Descending order
Then Admin See the "<column Name>" is sorted in Descending order
     Examples:
    |column Name|
    |   Batch Name     |
    |  Class Topic     |
    |Class Description |
    |   Status         |
    |   Class Date     |
    |   Staff Name     |

################## validating row level Delete button ###########################

Scenario Outline: Validate row level delete icon
When Admin clicks the delete icon
Then Admin should see a alert open with heading "Confirm" along with  <YES> and <NO> button for deletion

Scenario Outline: Click No on deletion window
When Admin clicks the delete icon
And Admin clicks No option
Then Admin can see the deletion alert disappears without deleting

Scenario Outline: Click Close on deletion window
When Admin clicks the delete icon
And Admin clicks on close button
Then Admin can see the deletion alert disappears without any changes

Scenario Outline: Click Yes on deletion window
When Admin clicks the delete icon
And Admin clicks yes option
Then Admin gets a message "Successful Class Deleted" alert and do not see that Class in the data table

############# validating Delete Multiple Class Functionality##################
Scenario: Validate multiple Delete button enabled after clicking on any checkbox
When Admin clicks any checkbox in the data table
Then Admin should see common delete option enabled under header "Manage class"

Scenario Outline: Validate multiple class deletion by selecting Single checkbox
Given Admin is on Confirm Deletion alert after selecting single checkbox and clicks delete button
When Admin clicks "<option>" button on the alert
Then Admin should land on the " Manage Class" page
And Admin can see the selected class is not deleted from the data table
Examples:
    | option |
    | NO     |
    | Cancel |

@skip
Scenario: Validate multiple class deletion by selecting Single checkbox
Given Admin is on Confirm Deletion alert after selecting single checkbox and clicks delete button
When Admin clicks "YES" button on the alert
Then Admin should land on the " Manage Class" page
And Admin can see the selected class is deleted from the data table

Scenario Outline: Validate multiple class deletion by selecting multiple checkboxes
Given Admin is on Confirm Deletion alert after selecting multiple checkboxes and clicks delete button
When Admin clicks "<option>" button on the alert
Then Admin should land on the " Manage Class" page
And Admin can see the selected multiple classes is not deleted from the data table
Examples:
    | option |
    | NO     |
    | Cancel |
    
@skip
Scenario: Validate multiple class deletion by selecting multiple checkboxes
Given Admin is on Confirm Deletion alert after selecting multiple checkboxes and clicks delete button
When Admin clicks "YES" button on the alert
Then Admin should land on the " Manage Class" page
And Admin can see the selected multiple classes is deleted from the data table

############ Search Function Validations ############

Scenario Outline: Verify Admin is able to search results found for given "<option>"
When Admin enter the "<option>" in search textbox
Then Admin should see "Class details" as searched by "<option>"
    Examples:
    |       option     |
    |   Batch Name     |
    |  Class Topic     |
    |  Staff Name      |

 ################ Manage Class Pagination Validation ###########################   
    
 	Scenario: Verify Admin is able to click 'Next page' link
    When Admin clicks "Next page" link on the "Class" table
    Then Admin should see the next page record on the table  with Pagination has previous active link enabled
   
    Scenario: Verify Admin is able to click 'Last page' link
    When Admin clicks "Last page" link on the "Class" table
    Then Admin should see the last page record on the table with Next page link and last page links are disabled
   
 	Scenario: Verify Admin is able to click 'Previous page' link
    Given Admin is on last page of "Class" module table
    When Admin clicks "Previous page" link on the "Class" table
    Then Admin should see the previous page record on the table with pagination has next page and last page link enabled
    
 	Scenario Outline: Verify Admin is able to click First page link
    Given Admin is on last page of "Class" module table
    When Admin clicks "First page" link on the "Class" table
    Then Admin should see the very first page record on the table with Previous page link and first page links are disabled


