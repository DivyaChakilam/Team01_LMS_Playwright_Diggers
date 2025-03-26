import { expect } from '@playwright/test'
import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixtures'
import { records } from '../Utils/csvReader'

const { Given, When, Then } = createBdd(test);
const expectedHeaders = [
  "",
  'Program Name ',
  'Program Description ',
  'Program Status ',
  ' Edit / Delete '
];

let originalList = [];
//let firstrowData = [];
let firstrowpgmname

// Manage Program - Delete Program

When('Admin clicks on delete button for a program', async ({ programpagefixture }) => {
  await programpagefixture.clickdeleteicon()
});

Then('Admin will get confirm deletion popup', async ({ programpagefixture }) => {
  await expect(programpagefixture.delconfpopup).toBeVisible({ timeout: 5000 })
});

Given('Admin is on Confirm deletion form', async ({ programpagefixture, page }) => {
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

When('Admin Searches for Deleted Program name', async ({ programpagefixture, page }) => {
  //getting firstrow data
  const firstrowData = await programpagefixture.getfirstrowdata()
  console.log("First row data in Stepdefs is: " + firstrowData)
  //retrieving firstrow pgm name
  firstrowpgmname = firstrowData[1]
  console.log("firstrowpgmname is: " + firstrowpgmname)
  //click delete icon of fistrowpgmname row 
  const matchedRow = page.locator('tbody tr', { hasText: firstrowpgmname });
  await matchedRow.locator('#deleteProgram').waitFor({ state: 'visible' });
  await matchedRow.locator('#deleteProgram').dblclick({ force: true });
  //clicking on 'Yes' button
  await expect(programpagefixture.delconfpopup).toBeVisible({ timeout: 5000 })
  programpagefixture.clickYes()
  //Search for deleted pgm name
  await programpagefixture.searchenter(firstrowpgmname)
  await page.waitForLoadState('load');
});

Then('There should seee zero results.', async ({ page }) => {
  // Now validate that the row with firstrowpgmname is no longer present
  const deletedRow = page.locator('tbody tr', { hasText: firstrowpgmname });
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

Given('Admin is on Confirm deletion form-multiple programes selected to delete', async ({ programpagefixture }) => {
  // Step: Given Admin is on Confirm deletion form-multiple programes selected to delete
  await programpagefixture.checkthreeitems()
  await programpagefixture.checkboxeddata()
  console.log("Selected rows data:", programpagefixture.selectedData);
  await programpagefixture.multipledelete()
});

When('Admin clicks on nobutton"No" button-multiple programes selected to delete', async ({ programpagefixture }) => {
  // Step: When Admin clicks on nobutton"No" button-multiple programes selected to delete

  await programpagefixture.clickNo()
});

Then('Admin can see Programs are still selected and not deleted', async ({ programpagefixture, page }) => {
  //validation for Programs are still selected
  for (const name of programpagefixture.selectedData) {
    const row = await programpagefixture.programtable.locator(`tbody tr:has-text("${name}")`).first();
    console.log(`Found ${await row.count()} rows for "${name}"`);
    console.log("At row: " + name)
    const checkboxitem = row.locator('.p-checkbox-box').first();
    console.log("Checking checkbox for: " + name)
    await expect(checkboxitem).toBeChecked();
    console.log(`Checkbox for "${name}" is checked.`);
  }
});

// Manage Program - Search bar 

When('Admin enter the program to search By program name', async ({ programpagefixture, page }) => {

  //creating new program to avoid inconsistent data
  await programpagefixture.createpgm(records[0]?.newProgram_Searchbar, records[0]?.newProgram_Description)
  await programpagefixture.search.fill(records[0]?.newProgram_Searchbar)
  await page.waitForTimeout(1000);
});

Then('Admin should able to see Program name, description, and status for searched program name', async ({ page }) => {

  const row = page.locator('tbody tr', { hasText: records[0]?.newProgram_Searchbar });
  await expect.soft(row).toBeVisible();
});

When('Admin enter the program to search By program description', async ({ programpagefixture, page }) => {

  await programpagefixture.createpgm(records[0]?.newProgram_Searchbar, records[0]?.newProgram_Description)
  await programpagefixture.search.fill(records[0]?.newProgram_Description)
  await page.waitForTimeout(1000);
});

Then('Admin should able to see Program name, description, and status for searched program description', async ({ page }) => {

  const row = page.locator('tbody tr', { hasText: records[0]?.newProgram_Description });
  await expect(row).toBeVisible();
});

When('Admin enter the program to search By program name that does not exist', async ({ programpagefixture, page }) => {

  await programpagefixture.search.fill(records[0]?.Program_invalid)
  await page.waitForTimeout(1000);
});

Then('There should be zero results - Search bar', async ({ page }) => {

  const row = page.locator('tbody tr', { hasText: records[0]?.Program_invalid });
  await expect(row).not.toBeVisible();
  await expect(row).toHaveCount(0);
});

When('Admin enter the program to search By partial name of program', async ({ programpagefixture, page }) => {
  await programpagefixture.search.fill(records[0]?.newProgram_Searchbar_Partial)
  await page.waitForTimeout(1000);
});

Then('Admin should able to see Program name, description, and status for searched program name - for partial name search', async ({ page }) => {

  const row = page.locator('tbody tr', { hasText: records[0]?.newProgram_Searchbar });
  await expect(row).toBeVisible();
});

//Manage Program - Sorting Program

When('Admin clicks on Arrow next to {string} to sort in Ascending order in Manage Program', async ({ commonpagefixture }, columnName) => {

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

Then('Admin See the {string} is sorted in Ascending order in Manage Program', async ({ commonpagefixture }, columnName) => {
  let sortedList = "";
  sortedList = await commonpagefixture.getAscendingOrderList(originalList);
  console.log(`Sorted List for ${columnName} :`, sortedList);
  // Assert that the original list is equal to the sorted list
  expect(originalList).toEqual(sortedList);
});

When('Admin clicks on Arrow next to {string} to sort in Descending order in Manage Program', async ({ commonpagefixture }, columnName) => {
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

Then('Admin See the {string} is sorted in Descending order in Manage Program', async ({ commonpagefixture }, columnName) => {
  const sortedList = await commonpagefixture.getDescendingOrderList(originalList);
  console.log(`Sorted List for ${columnName} :`, sortedList);
  expect(originalList).toEqual(sortedList);
});

//Manage Program - Pagination
//Pagination code is available in classSteps.js as a generic code

/*****************          Program Page Visual Validation          *****************/

Then('Admin should see {string} in menu bar', async ({ programpagefixture }) => {
  const logout = await programpagefixture.getLogOutNm();
  await expect(logout).toBeVisible();

});

// Then('Admin should see the page names as in order {string}', async ({programpagefixture}, arg) => {

// });

When('Admin clicks on {string} in menu bar', async ({ programpagefixture }, arg) => {
  await programpagefixture.getprogramClickBtn();

});

Then('Admin should see the sub menu {string}', async ({ programpagefixture }, arg) => {
  await programpagefixture.getmenuItemSubMenu();

});

Then('click on {string} button', async ({ classpagefixture }, arg) => {
  classpagefixture.clickCancelBtn();
});
//code kept in comment
Then('Admin should able to see datatable heading Program Name , Program description,Programstatus and Edit\\/Delete for each program', async ({ }) => {

});

When('Admin clicks on {string} under the {string} menu bar', async ({ }, arg, arg1) => {

});

Then('Admin enters the Name in the text box', async ({ }) => {

});





