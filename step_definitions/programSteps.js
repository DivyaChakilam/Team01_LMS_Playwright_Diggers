import { expect } from '@playwright/test'
import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixtures'
import {records} from '../Utils/csvReader'
import { assert } from 'console';

const { Given, When, Then } = createBdd(test);
const expectedHeaders = [
  "",
  'Program Name ',
  'Program Description ',
  'Program Status ',
  ' Edit / Delete '
];

let originalList = [];

// Manage Program - Delete Program

When('Admin clicks on delete button for a program', async ({ programpagefixture }) => {
  await programpagefixture.clickdeleteicon()
});

Then('Admin will get confirm deletion popup', async ({ programpagefixture }) => {
  await expect(programpagefixture.delconfpopup).toBeVisible({ timeout: 5000 })
});

Given('Admin is on Confirm deletion form', async ({ programpagefixture }) => {
  await programpagefixture.deleteprogram()
  await expect(programpagefixture.delconfpopup).toBeVisible({ timeout: 5000 })
});

When('Admin clicks on yesbutton{string} button', async ({ programpagefixture }, arg, page) => {
  await programpagefixture.clickYes()
});

Then('Admin can see {string} message', async ({ programpagefixture }, arg) => {
  await expect(programpagefixture.alertbox).toBeVisible({ timeout: 2000 })
  const text = await programpagefixture.alertbox.allTextContents();
  console.log("Inner text is:" + text)
  await expect(await programpagefixture.alertbox).toHaveText(arg, { timeout: 5000 });
});

When('Admin Searches for {string}', async ({ programpagefixture, page }, arg) => {
  // Step: When Admin Searches for "Deleted Program name"

  //total number  columns
  const columncount = await programpagefixture.columncount()
  expect(columncount).toBe(5);

  //total number of rows 
  const rowcount = await programpagefixture.rowcount()
  expect(rowcount).toBe(5)

  //Select click delete based on name on the ProgramName
  const matchedRow = page.locator('tbody tr', { hasText: 'SDET' });
  await matchedRow.locator('#deleteProgram').waitFor({ state: 'visible' });
  await matchedRow.locator('#deleteProgram').dblclick({ force: true });

  programpagefixture.clickYes()
  await expect(programpagefixture.delconfpopup).toBeVisible({ timeout: 5000 })
  await programpagefixture.searchenter('SDET')
  await page.waitForLoadState('load');
});

Then('There should seee zero results.', async ({ page }) => {
  // Now validate that the row with 'createdata' is no longer present
  const deletedRow = page.locator('tbody tr', { hasText: 'batchlmsplay' });
  // Wait for the row to be removed or for the table to update
  await expect(deletedRow).toHaveCount(0);
});

Given('Admin is on Program Confirm Deletion Page after selecting a program to delete', async ({ programpagefixture }) => {
  await programpagefixture.clickdeleteicon()
  await expect(programpagefixture.delconfpopup).toBeVisible({ timeout: 5000 })
});

When('Admin clicks on nobutton{string} button', async ({ programpagefixture }, arg) => {
  await programpagefixture.clickNo()
});

Then('Admin can see Confirmation form disappears', async ({ programpagefixture }) => {
  await expect(programpagefixture.delconfpopup).not.toBeVisible({ timeout: 5000 })
});

When('Admin Click on {string} button', async ({ programpagefixture }, arg) => {
  await programpagefixture.clickclose()
});

Then('Admin can see Confirm Deletion form disappear', async ({ programpagefixture }) => {
  await expect(programpagefixture.delconfpopup).not.toBeVisible({ timeout: 5000 })
});


// Manage Program - Delete Multiple Program
When('Admin selects more than one program by clicking on the checkbox', async ({ programpagefixture }) => {
  // Step: When Admin selects more than one program by clicking on the checkbox
  await programpagefixture.multipleselect()
});

Then('Programs get selected', async ({ programpagefixture }) => {
  // Step: Then Programs get selected
  await expect(programpagefixture.checkbox).toHaveCount(6);
  // Loop through all checkboxes and assert they are checked
  for (const chbox of await programpagefixture.checkbox.all()) {
    await expect(chbox).toBeChecked();
  }
});

When('Admin clicks on the delete button on the left top of the program page', async ({ programpagefixture }) => {
  // Step: When Admin clicks on the delete button on the left top of the program page
  await programpagefixture.multipleselect()
  await programpagefixture.multipledelete()
});

Then('Admin lands on Confirmation form', async ({ programpagefixture }) => {
  // Step: Then Admin lands on Confirmation form
  await expect(programpagefixture.delconfpopup).toBeVisible({ timeout: 5000 })
});

When('Admin Searches for Deleted Program names', async ({ programpagefixture }) => {
  // Step: When Admin Searches for Deleted Program names
  // Step: When Admin clicks on "Yes" button
  //pull program names that match checkboxed rows
  await programpagefixture.checkthreeitems()
  await programpagefixture.checkboxeddata()
  console.log("Selected rows data:", programpagefixture.selectedData);
  await programpagefixture.multipledelete()
  await programpagefixture.clickYes()
});

Then('There should be zero results', async ({ programpagefixture, page }) => {
  // Step: Then There should be zero results
  //search for deleted program names in search bar
  for (const deleteditem of programpagefixture.selectedData) {
    await programpagefixture.searchenter(deleteditem)
    const deletedRow = page.locator('tbody tr', { hasText: deleteditem });
    await expect(deletedRow).toHaveCount(0);
    console.log("Searched for:" + deleteditem)
  }
});

Given('Admin is on Confirm deletion form-multiple programes selected to delete', async ({programpagefixture}) => {
  // Step: Given Admin is on Confirm deletion form-multiple programes selected to delete
  await programpagefixture.checkthreeitems()
  await programpagefixture.checkboxeddata()
  console.log("Selected rows data:", programpagefixture.selectedData);
  await programpagefixture.multipledelete()
});

When('Admin clicks on nobutton"No" button-multiple programes selected to delete', async ({programpagefixture }) => {
  // Step: When Admin clicks on nobutton"No" button-multiple programes selected to delete
 
  await programpagefixture.clickNo()
});

Then('Admin can see Programs are still selected and not deleted', async ({ programpagefixture,page }) => {
 //validation for Programs are still selected
  for (const name of programpagefixture.selectedData) {
    const row = await programpagefixture.programtable.locator(`tbody tr:has-text("${name}")`);
    const matchedRow = page.locator('tbody tr', { hasText: '${name}' });
    const checkboxitem = row.locator('.p-checkbox-box');
    await expect(checkboxitem).toBeChecked();
    console.log(`✅ Checkbox for "${name}" is checked.`); 
  }
});

// Manage Program - Search bar 

When('Admin enter the program to search By program name', async ({programpagefixture,page}) => {
  // Step: When Admin enter the program to search By program name
  // From: features\Program.feature:66:1
  //creating new program to avoid inconsistent data
  await programpagefixture.createpgm(records[0]?.newProgram_Searchbar,records[0]?.newProgram_Description)
  await programpagefixture.search.fill(records[0]?.newProgram_Searchbar)
  await page.waitForTimeout(1000); 
});

Then('Admin should able to see Program name, description, and status for searched program name', async ({page}) => {
  // Step: Then Admin should able to see Program name, description, and status for searched program name
  // From: features\Program.feature:67:1
  const row = page.locator('tbody tr', { hasText: records[0]?.newProgram_Searchbar });
  await expect(row).toBeVisible();
});

When('Admin enter the program to search By program description', async ({programpagefixture,page}) => {
  // Step: When Admin enter the program to search By program description
  // From: features\Program.feature:71:1
  await programpagefixture.createpgm(records[0]?.newProgram_Searchbar,records[0]?.newProgram_Description)
  await programpagefixture.search.fill(records[0]?.newProgram_Description)
  await page.waitForTimeout(1000);
});

Then('Admin should able to see Program name, description, and status for searched program description', async ({page}) => {
  // Step: Then Admin should able to see Program name, description, and status for searched program description
  // From: features\Program.feature:72:1
  const row = page.locator('tbody tr', { hasText: records[0]?.newProgram_Description});
  await expect(row).toBeVisible();
});

When('Admin enter the program to search By program name that does not exist', async ({programpagefixture,page}) => {
  // Step: When Admin enter the program to search By program name that does not exist
  // From: features\Program.feature:76:1
  await programpagefixture.search.fill(records[0]?.Program_invalid)
  await page.waitForTimeout(1000);
});

Then('There should be zero results - Search bar', async ({page}) => {
  // Step: Then There should be zero results - Search bar
  // From: features\Program.feature:77:1
  const row = page.locator('tbody tr', { hasText: records[0]?.Program_invalid });
  await expect(row).not.toBeVisible();
  await expect(row).toHaveCount(0);
});

When('Admin enter the program to search By partial name of program', async ({programpagefixture,page}) => {
  await programpagefixture.search.fill(records[0]?.newProgram_Searchbar_Partial)
  await page.waitForTimeout(1000);
});

Then('Admin should able to see Program name, description, and status for searched program name - for partial name search', async ({page}) => {
  // Step: Then Admin should able to see Program name, description, and status for searched program name - for partial name search
  // From: features\Program.feature:82:1
  const row = page.locator('tbody tr', { hasText: records[0]?.newProgram_Searchbar });
  await expect(row).toBeVisible();
});

//Manage Program - Sorting Program

When('Admin clicks on Arrow next to {string} to sort in Ascending order in Manage Program', async ({commonpagefixture}, columnName) => {

  commonpagefixture.clickOnSortIcon(columnName.trim());
  
  switch (columnName.trim()) {
      case 'Program Name':
          originalList = await commonpagefixture.getOriginalList(2);
          break;
          case 'Program Description':
          originalList = await commonpagefixture.getOriginalList(3);
          break;
          case 'Program Status':
          originalList = await commonpagefixture.getOriginalList(4);
          break;
  }
  console.log(`Original List for ${columnName} :`, originalList);
});

Then('Admin See the {string} is sorted in Ascending order in Manage Program', async ({commonpagefixture}, columnName) => {
  let sortedList ="";
  sortedList = await commonpagefixture.getAscendingOrderList(originalList);
  console.log(`Sorted List for ${columnName} :`, sortedList);
   // Assert that the original list is equal to the sorted list
   expect(originalList).toEqual(sortedList);
});

When('Admin clicks on Arrow next to {string} to sort in Descending order in Manage Program', async ({commonpagefixture}, columnName) => {
  commonpagefixture.clickOnSortIcon(columnName.trim());
   commonpagefixture.clickOnSortIcon(columnName.trim());

   switch (columnName.trim()) {
    case 'Program Name':
        originalList = await commonpagefixture.getOriginalList(2);
        break;
    case 'Program Description':
        originalList = await commonpagefixture.getOriginalList(3);
        break;
    case 'Program Status':
        originalList = await commonpagefixture.getOriginalList(4);
        break;
   }
   console.log(`Original List for ${columnName} :`, originalList);
});

Then('Admin See the {string} is sorted in Descending order in Manage Program', async ({commonpagefixture}, columnName) => {
  const sortedList = await commonpagefixture.getDescendingOrderList(originalList);
  console.log(`Sorted List for ${columnName} :`, sortedList);
  expect(originalList).toEqual(sortedList);
});

//Manage Program - Pagination

When('Admin clicks {string} link on the {string} table in Manage Program', async ({commonpagefixture}, pageLink, module) => {
  // Step: When Admin clicks "Next page" link on the "Program" table
  switch (pageLink) {
		case "Next page":
			await commonpagefixture.goToNextPage();
			break;
		case "Last page":
			await commonpagefixture.goToLastPage();
			break;
		case "Previous page":
			await commonpagefixture.goToPreviousPage();
			break;
		case "First page":
			await commonpagefixture.goToFirstPage();
			break;
		}
});

Then('Admin should see the next page record on the table  with Pagination has previous active link enabled in Manage Program', async ({commonpagefixture}) => {
  // Step: Then Admin should see the next page record on the table  with Pagination has previous active link enabled in Manage Program
  const previousPage = await commonpagefixture.getpreviousPageeLoc();
    expect(previousPage).toBeEnabled();
});

Then('Admin should see the last page record on the table with Next page link and last page links are disabled in Manage Program ', async ({commonpagefixture}) => {
  // Step: Then Admin should see the last page record on the table with Next page link and last page links are disabled in Manage Program
  const nextPage = await commonpagefixture.getnextPageLoc();
  expect(nextPage).toBeDisabled();
  const lastPage = await commonpagefixture.getlastPageLoc();
  expect(lastPage).toBeDisabled();
});

Given('Admin is on last page of {string} module table in Manage Program', async ({commonpagefixture}, arg) => {
  // Step: Given Admin is on last page of "Program" module table in Manage Program
  await commonpagefixture.goToLastPage();
});

Then('Admin should see the previous page record on the table with pagination has next page and last page link enabled in Manage Program', async ({commonpagefixture}) => {
  // Step: Then Admin should see the previous page record on the table with pagination has next page and last page link enabled in Manage Program
  const nextPage = await commonpagefixture.getnextPageLoc();
  expect(nextPage).toBeEnabled();
  const lastPage = await commonpagefixture.getlastPageLoc();
  expect(lastPage).toBeEnabled();
});

Then('Admin should see the very first page record on the table with Previous page link and first page links are disabled in Manage Program', async ({commonpagefixture}) => {
  // Step: Then Admin should see the very first page record on the table with Previous page link and first page links are disabled in Manage Program
  const previousPage = await commonpagefixture.getpreviousPageeLoc();
    expect(previousPage).toBeDisabled();
    const firstPage = await commonpagefixture.getfirstPageLoc();
    expect(firstPage).toBeDisabled();
});



/*****************          Program Page Visual Validation          *****************/



// Then('Admin should see the page names as in order {string}', async ({programpagefixture}, arg) => {
  
// });

When('Admin clicks on {string} in menu bar', async ({programpagefixture}, arg) => {
  await programpagefixture.getprogramClickBtn();

});

Then('Admin should see the sub menu {string}', async ({programpagefixture}, arg) => {
  await programpagefixture.getmenuItemSubMenu();

});

Then('click on {string} button', async ({classpagefixture}, arg) => {
  classpagefixture.clickCancelBtn();
});




Then('Admin enters the Name in the text box', async ({}) => {
  
});


// *****************************************************************************************************
Then('Admin should see two text fields', async ({programpagefixture}) => {
  await programpagefixture.getTwoTextBoxes();
  
});

Then('Admin should see {string} in the second text field', async ({programpagefixture}) => {
  const secondTextBox = await programpagefixture.getTwoTextBoxes();
  console.log("Second Text Box:", secondTextBox);
  await expect(secondTextBox).toContain('Program Decription');
});



// Then('Admin should see the heading {string}', async ({programpagefixture}) => {
//  await programpagefixture.getPageName();
// });

// Then('Admin should land on the " Manage Program" page in Manage Program', async ({commonpagefixture}, expectedPageName) => {
//   await commonpagefixture.getPageName();
  
// });

When('Admin clicks a {string} under the {string} menu bar in program module', async ({programpagefixture}) => {
 await programpagefixture.getprogramClickBtn();
 await programpagefixture.getclickAddNewPrBtn();
});

Then('Admin should see a popup open for progrma details with empty form along with <Save> and <Cancel> button and Close\\(X) Icon on the top right corner of the window on the program page', async ({classpagefixture}) => {

  //Verify the popup is visible
  const popUp = await classpagefixture.isPopUpVisible();
  await expect(popUp).toBeVisible({ timeout: 7000 });
 

 //await expect(classpagefixture.isPopUpVisible()).toBeVisible();
 
 //verify the form fields to be empty
 const formFields = await classpagefixture.getFormFields();
 console.log(formFields);
 for (let i = 0; i < await formFields.count(); i++) {
   const field = formFields.nth(i);
   await expect(field).toHaveValue('');
 }
 //verify save,cancel,close buttons to be visible
 const saveBtn = await classpagefixture.isSaveBtnVisible();
 await expect(saveBtn).toBeVisible();
 const cancelBtn = await classpagefixture.isCancelBtnVisible();
 await expect(cancelBtn).toBeVisible();
 const closeBtn = await classpagefixture.isCloseBtnVisible();
 await expect(closeBtn).toBeVisible();
 });

 

 Then('Admin is redirected to {string} pageAdmin should see few input fields and their respective text boxes in the class details window', async ({classpagefixture}, dataTable) => {
  for (const { 'Label Name': labelName, 'Input Field ID': inputFieldId } of dataTable.hashes()) {
    //const labelLocator = await this.page.locator(`label:has-text("${labelName}")`);
    const labelLocator = await classpagefixture.getLabel(labelName);
    //const inputLocator = await this.page.locator(`#${inputFieldId}`);
    const inputLocator = await classpagefixture.getInput(inputFieldId);
    
    await expect(labelLocator).toBeVisible();
    await expect(inputLocator).toBeVisible();
  }
});

Then('Admin should able to see datatable heading Program Name , Program description,Programstatus and Edit\\/Delete for each program', async ({classpagefixture}) => {
  const actualheaderCells = await classpagefixture.verifyDataTableHeader();
  await expect(actualheaderCells).toEqual(expectedHeaders);
});

Then('Admin should see the footer as {string}', async ({programpagefixture}) => {
 await programpagefixture.getfooterText();
});

Then('Admin should see a Delete button in left top is disabled', async ({programpagefixture}) => {
  // Step: Then Admin should see a Delete button in left top is disabled
  // From: features/Program.feature:217:1
});


// ####################




Then('Admin should see {string} in menu bar', async ({programpagefixture}) => {
  await programpagefixture.getLogOutNm();
});

Then('Admin should see the heading {string}', async ({programpagefixture}) => {
  const lmsTextName = await programpagefixture.getLMSText();
  console.log("LMS Text from Test:", lmsTextName); // Log it here too
 await expect(lmsTextName).toContain('LMS - Learning Management System');
});

Then('Verify heading in menu bar', async ({programpagefixture}) => {
  // Step: Then Admin should see LMS - Learning Management System
  // From: features/Login.feature:73:1
  await programpagefixture.getLMSText();
});

Then('Admin should land on the {string} page in Manage Program', async ({programpagefixture}) => {
  // Step: Then Admin should land on the " Manage Program" page in Manage Program
  // From: features/Program.feature:134:1
  await programpagefixture.getpageName()

});

Then('Admin should see LMS - Learning Management System', async ({}) => {
  // Step: Then Admin should see LMS - Learning Management System
  // From: features/Login.feature:73:1
  await programpagefixture.getLMSText();
  
});

Then('Admin should see sub menu in menu bar as {string}', async ({programpagefixture}) => {
  // Step: Then Admin should see sub menu in menu bar as "Add New Program"
  // From: features/Program.feature:147:5
  await programpagefixture.getmenuItemSubMenu();
});


// ########


When('Admin clicks on {string} under the {string} menu bar', async ({classpagefixture}, addNewOption, menuOption) => {
  await classpagefixture.gotToMenuPrItem(addNewOption,menuOption);
});

Then('Admin is on the pop-up window information', async function ({ programpagefixture }) {
  await programpagefixture.getAddNewProgramPopup();
  });






Then('Admin enters the Description in text box', async ({programpagefixture}) => {
  const description = "This is a sample program description"; // Replace with dynamic input if needed
  await programpagefixture.enterProgramDes(description);
  console.log("Entered Program Description:", description);
});

Then('Admin can see the text entered in description box', async ({programpagefixture}) => {
  const enteredText = await programpagefixture.getProgramDes();
  console.log("Fetched Description Text:", enteredText);
  await expect(enteredText).toBe("This is a sample program description");
});


When('Admin clicks on {string}', async ({}, arg) => {
  // Step: When Admin clicks on "Add New Program"
  // From: features/Program.feature:182:5
});

When('Admin enters {string} as Program Name', async ({}, arg) => {
  // Step: And Admin enters "JV" as Program Name
  // From: features/Program.feature:184:5
});

When('Admin selects the first radio button', async ({ programpagefixture }) => {
  await programpagefixture.getFirstRadBtn();
});

When('Admin clicks on Save', async ({ programpagefixture }) => {
  await programpagefixture.getSaveBtn();
});

Then('Admin should see the Successful Program', async ({programpagefixture}) => {
  // Step: Then Admin should see the Successful Program
  // From: features/Program.feature:188:5

  
  // const sucessMessage = await programpagefixture.gettoastMessage();
  // console.log("Sucess Message:", sucessMessage); // Log it here too

  await programpagefixture.getSuccessMessageFromToast();


});




































// npx bddgen
  // npx playwright test --headed --project='chromium'
  