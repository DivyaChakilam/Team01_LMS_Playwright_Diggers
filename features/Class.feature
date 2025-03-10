Feature: Class page Visual validation

Background:
Given Admin logs in to LMS application and lands on home page
When Admin clicks the "Class" Navigation bar in the Header


   ################ Manage Program Page Visual Validation ###########################

@focus 
Scenario: Validating the class manage page
Then Admin should land on the " Manage Class" page
@skip
Scenario: Validating the Title in the Manage class page
Then Admin should see the " LMS - Learning Management System " Title
@skip
Scenario: Validating the Header in the Manage class page
Then Admin should see the "Mange Class" Header
@skip
Scenario: Validating Search bar in class page
Then Admin should see the Search Bar in Manage class page
@skip
Scenario: Validating the data table headers in the class page
Then Admin should see the datatable heading like Batchname,class topic,class description,status,class Date,staff name,Edit/Delete
@skip
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
When Admin clicks a add new class under the class menu bar
Then Admin should see a popup open for class details with empty form along with <SAVE> and <CANCEL> button and Close(X) Icon on the top right corner of the window

Scenario: Validate input fields and their text boxes in Class details form 
When Admin clicks a add new class under the class menu bar
And Admin should see few input fields and their respective text boxes in the class details window

######################## Add New Class Popup Scenarios #########################