import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
import {test} from '../Fixtures/fixtures'
const { expect } = require('@playwright/test');
const expectedHeaders = [
  "",
  ' Batch Name ',
  'Class Topic ',
  'Class Description ',
  ' Status ',
  ' Class Date ',
  ' Staff Name ',
  ' Edit / Delete'
];

Given('Admin logs in to LMS application and lands on home page', async ({ commonpagefixture }) => {
  await commonpagefixture.validLogin();   
});

When('Admin clicks the {string} Navigation bar in the Header', async ({commonpagefixture}, moduleOption) => {
    await commonpagefixture.goToModule(moduleOption);
});

/*****************           Class Page Visual Validation          *****************/
  
Then('Admin should land on the {string} page', async ({commonpagefixture}, expectedPageName) => {
  const actualPageName = await commonpagefixture.getPageName();
  await expect(actualPageName).toEqual(expectedPageName);
  //await expect(classpagefixture.getPageName()).toEqual(expectedPageName);
});

Then('Admin should see the {string} Title', async ({commonpagefixture}, title) => {
  const actualTitle = await commonpagefixture.getTitle();  
  await expect(actualTitle).toBeVisible();
  //await expect(classpagefixture.getTitle()).toBeVisible();
});

Then('Admin should see the {string} Header', async ({commonpagefixture}, headerName) => {
  const header = await commonpagefixture.headerCheck(headerName);
  await expect(header).toBeVisible();
  //await expect(classpagefixture.headerCheck()).toBeVisible();
});

Then('Admin should see the Search Bar in Manage class page', async ({commonpagefixture}) => {
  const searchBar = await commonpagefixture.searchBarVisibility();
  await expect(searchBar).toBeVisible();
  //await expect(classpagefixture.searchBarVisibility()).toBeVisible();
});

Then('Admin should see the datatable heading like Batchname,class topic,class description,status,class Date,staff name,Edit\\/Delete', async ({classpagefixture}) => {
  const actualheaderCells = await classpagefixture.verifyDataTableHeader();
  await expect(actualheaderCells).toEqual(expectedHeaders);
  //await expect(classpagefixture.verifyDataTableHeader()).toEqual(expectedHeaders);
});

Then('Admin should see the {string}', async ({classpagefixture}, arg) => {
     const paginationEntries = await classpagefixture.verifyPaginationEntries();
    await expect(paginationEntries).toBeVisible();
    //await expect(await classpagefixture.verifyPaginationEntries()).toBeVisible();
});

Then('enabled pagination controls under the data table', async ({classpagefixture}) => {
    const pagecontrols = await classpagefixture.verifyPaginationEnabled();
    const count = await pagecontrols.count();
    for (let i = 0; i < count; i++) {
      const isDisabled = await pagecontrols.nth(i).isDisabled();
      expect(isDisabled).toBe(false);
      //await expect(pagecontrols.nth(i)).isEnabled();
    }
});

Then('Admin should see the Sort icon of all the field in the datatable.', async ({classpagefixture}) => {
  const sortIcons = await classpagefixture.verifySortIcons();
  const count =await sortIcons.count();
  for (let i = 0; i < count; i++) {
    const isVisible = await sortIcons.nth(i).isVisible();
    expect(isVisible).toBe(true);
  }
});

Then('Admin should see the Delete button under the Manage class page header.', async ({classpagefixture}) => {
   const multipleDeleteBtn = await classpagefixture.verifyMultipleDeleteBtn();
    await expect(multipleDeleteBtn).toBeVisible();
   //await expect(classpagefixture.verifyMultipleDeleteBtn()).toBeVisible();

});

Then('Admin should see Total no of classes in below of the data table.', async ({classpagefixture}) => {
  const totalEntries = await classpagefixture.verifyTotalEntries();
   await expect(totalEntries).toBeVisible();
  //await expect(classpagefixture.verifyTotalEntries()).toBeVisible();

});

/*****************           Manage Class Page Header bar Links Validation          *****************/

When('Admin clicks on {string} on the navigation bar', async ({classpagefixture}, navigatoinOption) => {
  await classpagefixture.goToModule(navigatoinOption);
});

Then('Admin is redirected to {string} page', async ({classpagefixture}, expectedPageName) => {
   const actualPageName = await classpagefixture.getPageName();
   await expect(actualPageName).toEqual(expectedPageName);
  //await expect(classpagefixture.getPageName()).toEqual(expectedPageName);
  
});

Then('Admin is redirected to Login page', async ({page}) => {
  await expect(page).toHaveURL(process.env.baseUrl);
});

When('Admin clicks a {string} under the {string} menu bar', async ({classpagefixture}, addNewOption, menuOption) => {
  await classpagefixture.gotToMenuItem(addNewOption,menuOption);
});

Then('Admin should see a popup open for class details with empty form along with <SAVE> and <CANCEL> button and Close\\(X) Icon on the top right corner of the window', async ({classpagefixture}) => {
  //Verify the popup is visible
  const popUp = await classpagefixture.isPopUpVisible();
   await expect(popUp).toBeVisible();
  //await expect(classpagefixture.isPopUpVisible()).toBeVisible();

  //verify classDetails is visible
  const classDetails = await classpagefixture.isClassDetailsVisible();
  await expect(classDetails).toBeVisible();

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
Then('Admin should see few input fields and their respective text boxes in the class details window', async ({ classpagefixture }, dataTable) => {
  for (const { 'Label Name': labelName, 'Input Field ID': inputFieldId } of dataTable.hashes()) {
    //const labelLocator = await this.page.locator(`label:has-text("${labelName}")`);
    const labelLocator = await classpagefixture.getLabel(labelName);
    //const inputLocator = await this.page.locator(`#${inputFieldId}`);
    const inputLocator = await classpagefixture.getInput(inputFieldId);
    
    await expect(labelLocator).toBeVisible();
    await expect(inputLocator).toBeVisible();
  }
});

When('Admin selects class date in date picker', async ({classpagefixture}) => {
 
});

Then('Admin should see no of class value is added automatically', async ({classpagefixture}) => {
  const classNoValue = await classpagefixture.getClassNovalue();
  await expect(classNoValue).toBe('1');

});

Then('Admin should see weekends dates are disabled to select', async ({classpagefixture}) => {
  // Step: Then Admin should see weekends dates are disabled to select
  // From: features\Class.feature:87:1
});

When('Admin clicks on save button without entering data', async ({classpagefixture}) => {
  classpagefixture.clickSaveBtn();
});
/*
Then('class won\'t be created and Admin gets error message', async ({classpagefixture}, dataTable) => {
  const expectedErrorMessages = dataTable.rawTable.slice(1).map(row => row[0]); // Extract expected error messages from data table

  // Retrieve all error message elements
  const errorMsgLocators = await classpagefixture.getErrorMessagesLocator();
  const errorMsgCount = await errorMsgLocators.count();

  // Extract text from each error message element
  const actualErrorMessages = [];
  for (let i = 0; i < errorMsgCount; i++) {
    const errorMsgText = await errorMsgLocators.nth(i).textContent();
    actualErrorMessages.push(errorMsgText.trim());
  }

  // Validate each expected error message is present in the actual error messages
  for (const expectedMessage of expectedErrorMessages) {
    expect(actualErrorMessages).toContain(expectedMessage);
  }
});*/
Then('class won\'t be created and Admin gets error message', async ({classpagefixture}, dataTable) => {
  for (const { 'Error Message': errorMessage} of dataTable.hashes()) {
    //const labelLocator = await this.page.locator(label:has-text("${labelName}"));
    const errorMsg = await classpagefixture.getErrorMessage(errorMessage);
    
    await expect(errorMsg).toBeVisible();
  }
  });

When('Admin clicks Cancel Icon on Admin Details form', async ({classpagefixture}) => {
  classpagefixture.clickCancelBtn();
});

When('Admin clicks Close\\(X) Icon on Admin Details form', async ({classpagefixture}) => {
  classpagefixture.clickCloseIcon();
  
});
Then('Class Details popup window should be closed without saving', async ({classpagefixture}) => {
  const popUp = await classpagefixture.isPopUpVisible();
   await expect(popUp).not.toBeVisible();
});

When('Admin clicks on the {string} icon', async ({classpagefixture}, icon) => {
  classpagefixture.clickEditBtn();
});

Then('Admin should see new pop up with class details appears', async ({classpagefixture}) => {
  //Verify the popup is visible
  const popUp = await classpagefixture.isPopUpVisible();
   await expect(popUp).toBeVisible();

  //verify classDetails is visible
  const classDetails = await classpagefixture.isClassDetailsVisible();
  await expect(classDetails).toBeVisible();

});

Then('Admin should see batch name field and class topic are disabled', async ({classpagefixture}) => {
  const batchNameField = await classpagefixture.isBatchNameDisabled();
  await(batchNameField).isDisabled();

  const classTopicField = await classpagefixture.isClassTopicDisabled();
  await(classTopicField).isDisabled();

});
