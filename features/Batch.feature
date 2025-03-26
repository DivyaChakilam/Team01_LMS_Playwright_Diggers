Feature: Batch page Visual validation

    Background:
        Given Admin logs in to LMS application and lands on home page
        When Admin clicks the "Batch" Navigation bar in the Header

    ################ Batch Program Page Visual Validation ###########################

    Scenario: Validating the Batch manage page
        Then Admin should land on the " Manage Batch" Page on LMS

    Scenario: Validating the Title in the Manage Batch page
        Then Admin should see the " LMS - Learning Management System " Title on Batch page

    Scenario: Validating Search bar in Batch page
        Then Admin should see the Search Bar on Manage Batch page

    Scenario: Validating the data table headers in the Batch page
        Then Admin should see the datatable heading like Batch Name ,  Batch Description ,Batch Status ,No Of Classes ,Program Name , Edit / Delete

    Scenario:Validate disabled Delete Icon under the header in the Batch Page
        Then Admin should see the disabled DeleteIcon under the header

    Scenario:Validate pagination in the Batch Page
        Then Admin should see the enabled pagination controls under the data table on Batch page
   
    Scenario: Validate icon and checkbox in each data rows on Batch Page

        Then Admin should see the Batch menu from the header
        Then Admin should see the edit icon in each row
        And Admin should see the delete icon in each row
        And Admin should see the checkbox in each row
        And Admin should see the checkbox in the datatable header row

    Scenario: Validate the sort icon of all the field in datatable on Batch page
        Then Admin should see the Sort icon of all the field in the datatable on Batch page

    ######################## AddNewBatch scenario #########################


    Scenario:Verify sub menu displayed in batch menu bar
        When Admin clicks "Batch" on the navigation bar
        Then Admin should see sub menu in menu bar as "AddNewBatch"

    ######################## AddNewBatch popup scenarios #########################

    # Scenario:Validate Admin able to see Details Add new Batch
    #     When  Admin clicks on "Add New batch" under the "Batch" menu bar
    #     Then Admin should see a popup open for Batch details with empty form along with <SAVE> and <CANCEL> button and Close(X) Icon on the top right corner of the window

    #   // to  be done

    ######################## Edit icon Validation #########################

    # Scenario: Validate Edit icon feature in any row on Batch page
    #     When Admin clicks on the "editicon" in any row on Batch page
    #     Then Admin should see the Batch details pop up window Batch page

   
    Scenario: Validate Edit icon functionality
        When Admin clicks on the edit icon for any row on Batch page
        Then Admin should see the "Batch details" popup window Batch page
        And Admin should see the "Program name" field is disabled for editing on Batch page
        And Admin should see the "Batch name" field is disabled for editing on Batch page

    Scenario: Validate Edit icon functionality for Description on Batch popup window
        When Admin clicks on the edit icon for any row on Batch page
        Then Admin updates the "Description" field with invalid data Batch page

    Scenario: Validate Edit icon functionality on Batch page for invalid data
        When Admin clicks on the edit icon for any row on Batch page
        And Admin update the "No. of classes" field with invalid data Batch page
        And Admin click the "Save" button  Batch page
        Then Admin should see error messages under the respective fields Batch page

    Scenario: validation save button functionality on Batch page
        Then Admin enters the valid data to all the mandatory fields and click save button
        And  Admin should get a "Successful" message "batch Updated" batch on batch page

    Scenario: Validate cancel button functionality on Batch Page popup window
        When Admin clicks on the edit icon for any row on Batch page
        Then Admin enters the valid data to all the mandatory fields and click cancel button
        And Admin can see the batch details popup closes without editing the batch

########################## Search Text box validation#####################
# @only
# Scenario: validate search box functionality on Batch page
# Then Admin enters an exact batch name in the search text box
# # Then Admin should see only the matching batch in the data table

