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

Given('Admin logs in to LMS application and lands on home page', async ({ classpagefixture }) => {
  await classpagefixture.validLogin();   
});

When('Admin clicks the {string} Navigation bar in the Header', async ({classpagefixture}, moduleOption) => {
    await classpagefixture.goToModule(moduleOption);
});

/*****************           Class Page Visual Validation          *****************/
  
Then('Admin should land on the {string} page', async ({classpagefixture}, expectedPageName) => {
  const actualPageName = await classpagefixture.getPageName();
  await expect(actualPageName).toEqual(expectedPageName);
  //await expect(classpagefixture.getPageName()).toEqual(expectedPageName);
});

Then('Admin should see the {string} Title', async ({classpagefixture}, title) => {
  const actualTitle = await classpagefixture.getTitle();  
  await expect(actualTitle).toBeVisible();
  //await expect(classpagefixture.getTitle()).toBeVisible();
});

Then('Admin should see the {string} Header', async ({classpagefixture}, arg) => {
  const header = await classpagefixture.headerCheck();
  await expect(header).toBeVisible();
  //await expect(classpagefixture.headerCheck()).toBeVisible();
});

Then('Admin should see the Search Bar in Manage class page', async ({classpagefixture}) => {
  const searchBar = await classpagefixture.searchBarVisibility();
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

  // await expect(classpagefixture.isSaveBtnVisible()).toBeVisible();
  // await expect(classpagefixture.isCancelBtnVisible()).toBeVisible();
  // await expect(classpagefixture.isCloseBtnVisible()).toBeVisible();

});

Then('Admin should see few input fields and their respective text boxes in the class details window', async ({}) => {
  // Step: Then Admin should see few input fields and their respective text boxes in the class details window
  // From: features\Class.feature:65:1
});