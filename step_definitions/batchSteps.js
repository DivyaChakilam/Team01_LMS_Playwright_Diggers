import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
import { test } from '../Fixtures/fixtures'
const { expect } = require('@playwright/test');
const expectedBatchHeaders = [

  "",
  'Batch Name ',
  'Batch Description ',
  'Batch Status ',
  'No Of Classes ',
  'Program Name ',
  ' Edit / Delete '
];



Then('Admin should land on the {string} Page on LMS', async ({ commonpagefixture }, expectedPageName) => {
  const actualPageName = await commonpagefixture.getPageName();
  await expect(actualPageName).toEqual(expectedPageName);
});

Then('Admin should see the {string} Title on Batch page', async ({ commonpagefixture }, title) => {
  const actualTitle = await commonpagefixture.getTitle();
  await expect(actualTitle).toBeVisible();
});

Then('Admin should see the Search Bar on Manage Batch page', async ({ commonpagefixture }) => {
  const searchBar = await commonpagefixture.searchBarVisibility();
  await expect(searchBar).toBeVisible();

});


Then('Admin should see the datatable heading like Batch Name ,  Batch Description ,Batch Status ,No Of Classes ,Program Name , Edit \\/ Delete', async ({ batchpagefixture }) => {
  const actualheaderCells = await batchpagefixture.verifyBatchDataTableHeader();
  await expect(actualheaderCells).toEqual(expectedBatchHeaders);
});



Then('Admin should see the disabled DeleteIcon under the header', async ({ batchpagefixture }) => {
  const DisabledDeleteIcon = await batchpagefixture.isDeleteIconDisabled();
  //await expect(DisabledDeleteIcon).isDisabled();
  await (DisabledDeleteIcon).isDeleteIconDisabled;
});



Then('Admin should see the enabled pagination controls under the data table on Batch page', async ({ batchpagefixture }) => {
  const PaginationEntriesBatch = await batchpagefixture.verifyBatchPaginationEntries();
  await (PaginationEntriesBatch).verifyBatchPaginationEntries;
});

Then('Admin should see the Batch menu from the header', async ({ batchpagefixture }) => {
  const BatchgetTitle = await batchpagefixture.verifyBatchgetTitle();
  await (BatchgetTitle).verifyBatchgetTitle;

});
Then('Admin should see the edit icon in each row', async ({ batchpagefixture }) => {
  const BatcheditBtnLoc = await batchpagefixture.verifyBatchEditIcon();
  await (BatcheditBtnLoc).verifyBatchEditIcon;
});
Then('Admin should see the delete icon in each row', async ({ batchpagefixture }) => {
  const BatchDeleteIcon = await batchpagefixture.verifyBatchDeleteIcon();
  await (BatchDeleteIcon).verifyBatchDeleteIcon;
});
Then('Admin should see the checkbox in the datatable header row', async ({ batchpagefixture }) => {
  const BatchHeadercheckbox = await batchpagefixture.verifyBatchDatatableHeadercheckbox();
  await (BatchHeadercheckbox).verifyBatchDatatableHeadercheckbox;
});

Then('Admin should see the checkbox in each row', async ({ batchpagefixture }) => {
  const BatchCheckbox = await batchpagefixture.verifyBatchcheckbox();
  await (BatchCheckbox).verifyBatchcheckbox;
});

Then('Admin should see the Sort icon of all the field in the datatable on Batch page', async ({ batchpagefixture }) => {
  const sortIcons = await batchpagefixture.verifyBatchpageSortIcons();
  const count = await sortIcons.count();
  for (let i = 0; i < count; i++) {
    const isVisible = await sortIcons.nth(i).isVisible();
    expect(isVisible).toBe(true);
  }

});

When('Admin clicks {string} on the navigation bar', async ({ batchpagefixture }, Batch) => {
  await batchpagefixture.verifyBatchNavigationOption(Batch);
});

Then('Admin should see sub menu in menu bar as {string}', async ({ batchpagefixture }) => {
  const SubAddNewBatch = await batchpagefixture.verifySubMenu();
  await (SubAddNewBatch).verifySubMenu;

});

When('Admin clicks on {string} under the {string} menu bar', async ({ batchpagefixture }, AddNewbatch, Batch) => {
  await batchpagefixture.verifySubMenu(AddNewbatch);
  await batchpagefixture.verifyBatchNavigationOption(Batch);
});

Then('Admin should see {string} button onBatch Details pop up window', async ({batchpagefixture}, SAVE) => {
  const BatchPopUpSavebtn = await batchpagefixture.verifyBatchPopUpSavebtn(SAVE);
  await (BatchPopUpSavebtn).verifyBatchPopUpSavebtn;
});

When('Admin clicks on the edit icon for any row on Batch page',  async ({batchpagefixture}) => {
  await batchpagefixture.verifyBatchEditIcon();

});

Then('Admin should see the {string} popup window Batch page', async ({batchpagefixture}) => {
  await batchpagefixture.page.waitForTimeout(5000);
  const BatchDetailsPopUp = await batchpagefixture.verifyBatchDetailsPopUp();
  await expect(BatchDetailsPopUp).toBeVisible({ timeout: 30000 });
  
});

Then('Admin should see the {string} field is disabled for editing on Batch page', async ({batchpagefixture},) => {
  const ProgramFieldBox = await batchpagefixture.verifyProgramNameDisabled();
  await ProgramFieldBox.isDisabled();
 
  const BatchFieldBox = await batchpagefixture.verifyBatchNameDisabled();
  await BatchFieldBox.isDisabled();
});

  
Then('Admin updates the {string} field with invalid data Batch page', async ({batchpagefixture}, fieldName) => {
  if (fieldName.toLowerCase() === '5ghtd') {
    await batchpagefixture.enterBatchInvalidDescription();
  }
});

Then('Admin update the {string} field with invalid data Batch page', async ({batchpagefixture}, fieldName) => {
  if (fieldName.toLowerCase() === 'no. of classes') {
    await batchpagefixture.enterInvalidNoOfClasses();
  }
 
});
 




Then('Admin click the {string} button Batch page',async ({batchpagefixture}, buttonName) => {
  
  if (buttonName.toLowerCase() === 'save') {
    await batchpagefixture.BatchPopUpSavebtn();
    
    
    const BatchErrorMsg = await batchpagefixture.verifyBatchErrorMessage();
    expect(BatchErrorMsg).toBeTruthy(); 
  }
});
Then('Admin should see error messages under the respective fields on Batch page',  async ({batchpagefixture}) => {
  const hasErrorMessage = await batchpagefixture.verifyBatchErrorMessage();
  await expect(hasErrorMessage).toBeTruthy();
});

Then('Admin enters the valid data to all the mandatory fields and click save button', async ({batchpagefixture}) => {
  await batchpagefixture.enterBatchValidDescription();
  await batchpagefixture.enterValidNoOfClasses();
  await batchpagefixture.clickSaveButton();
});
Then('Admin should get a {string} message {string} batch on batch page', async ({batchpagefixture}) => {
  await batchpagefixture.page.waitForTimeout(5000);
  const toastMessage = await batchpagefixture.gettoastMessage();
  await expect(toastMessage).toBeVisible({ timeout: 30000 });
});


Then('Admin enters the valid data to all the mandatory fields and click cancel button', async ({batchpagefixture}) => {
  
  await batchpagefixture.enterValidBatchData();
  await batchpagefixture.clickCancelButton();
});

Then('Admin can see the batch details popup closes without editing the batch', async ({batchpagefixture}) => {

  const isPopupClosed = await batchpagefixture.verifyBatchDetailsPopupClosed();
  expect(isPopupClosed).toBeTruthy();
});


When('Admin click the {string} button  Batch page', async ({batchpagefixture}, buttonName) => {
  if (buttonName.toLowerCase() === 'save') {
    await batchpagefixture.clickSaveButton();
  }
});

Then('Admin should see error messages under the respective fields Batch page', async ({batchpagefixture}) => {
  const hasErrorMessages = await batchpagefixture.verifyErrorMessages();
  expect(hasErrorMessages);
});


// When('Admin enters an exact batch name in the search text box', async ({commonpagefixture}, searchOption) => {
//   switch(searchOption.trim()){
//     case 'Batch Name':
//       await commonpagefixture.serchText('Java Batch 01');
//       break;
//     case 'Class Topic':
//       await commonpagefixture.serchText('JIRA0987');
//       break;
//     case 'Staff Name':
//       await commonpagefixture.serchText('Kevin Thomas');
//         break; 
//   }  
// });
  // async ({batchpagefixture}) => {
  // const batchName = 'Grading01';
  // await batchPage.batchpagefixture.searchBatch();



// Then('Admin should see only the matching batch in the data table', async ({batchpagefixture}) => {
//   // const batchName = 'Grading01';
//   // // 'March Batch 2025'
//   // await batchPage.batchpagefixture.validateSearchResults(Grading01);
  
// });
// Then('Admin should see only the matching batch in the data table', async ({}) => {
//   // Step: Then Admin should see only the matching batch in the data table
//   // From: features\Batch.feature:89:1
// });
