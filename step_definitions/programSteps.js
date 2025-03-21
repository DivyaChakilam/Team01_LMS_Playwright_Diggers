import { expect } from '@playwright/test'
import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixtures'
import {records} from '../Utils/csvReader'

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

When('Admin clicks on Arrow next to {string} to sort in Ascending order', async ({commonpagefixture}, columnName) => {

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

Then('Admin See the {string} is sorted in Ascending order', async ({commonpagefixture}, columnName) => {
  let sortedList ="";
  sortedList = await commonpagefixture.getAscendingOrderList(originalList);
  console.log(`Sorted List for ${columnName} :`, sortedList);
   // Assert that the original list is equal to the sorted list
   expect(originalList).toEqual(sortedList);
});

When('Admin clicks on Arrow next to {string} to sort in Descending order', async ({commonpagefixture}, columnName) => {
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

Then('Admin See the {string} is sorted in Descending order', async ({commonpagefixture}, columnName) => {
  const sortedList = await commonpagefixture.getDescendingOrderList(originalList);
  console.log(`Sorted List for ${columnName} :`, sortedList);
  expect(originalList).toEqual(sortedList);
});

//Manage Program - Pagination

When('Admin clicks {string} link on the {string} table', async ({commonpagefixture}, pageLink, module) => {
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

Then('Admin should see the next page record on the table  with Pagination has previous active link enabled', async ({commonpagefixture}) => {
  // Step: Then Admin should see the next page record on the table  with Pagination has previous active link enabled
  const previousPage = await commonpagefixture.getpreviousPageeLoc();
    expect(previousPage).toBeEnabled();
});

Then('Admin should see the last page record on the table with Next page link and last page links are disabled', async ({commonpagefixture}) => {
  // Step: Then Admin should see the last page record on the table with Next page link and last page links are disabled
  const nextPage = await commonpagefixture.getnextPageLoc();
  expect(nextPage).toBeDisabled();
  const lastPage = await commonpagefixture.getlastPageLoc();
  expect(lastPage).toBeDisabled();
});

Given('Admin is on last page of {string} module table', async ({commonpagefixture}, arg) => {
  // Step: Given Admin is on last page of "Program" module table
  await commonpagefixture.goToLastPage();
});

Then('Admin should see the previous page record on the table with pagination has next page and last page link enabled', async ({commonpagefixture}) => {
  // Step: Then Admin should see the previous page record on the table with pagination has next page and last page link enabled
  const nextPage = await commonpagefixture.getnextPageLoc();
  expect(nextPage).toBeEnabled();
  const lastPage = await commonpagefixture.getlastPageLoc();
  expect(lastPage).toBeEnabled();
});

Then('Admin should see the very first page record on the table with Previous page link and first page links are disabled', async ({commonpagefixture}) => {
  // Step: Then Admin should see the very first page record on the table with Previous page link and first page links are disabled
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
//code kept in comment
Then('Admin should able to see datatable heading Program Name , Program description,Programstatus and Edit\\/Delete for each program', async ({}) => {
  
});

When('Admin clicks on {string} under the {string} menu bar', async ({}, arg, arg1) => {
  
});

Then('Admin enters the Name in the text box', async ({}) => {
  
});


  