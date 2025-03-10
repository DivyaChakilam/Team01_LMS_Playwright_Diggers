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
    await classpagefixture.moduleClick(moduleOption);
});

/*****************           Class Page Visual Validation          *****************/
  
Then('Admin should land on the {string} page', async ({classpagefixture}, expectedPageName) => {
  const actualPageName = await classpagefixture.getPageName();
  await expect(actualPageName).toEqual(expectedPageName);
});

Then('Admin should see the {string} Title', async ({classpagefixture}, title) => {
  const actualTitle = await classpagefixture.getTitle();  
  await expect(actualTitle).toBeVisible();
});

Then('Admin should see the {string} Header', async ({classpagefixture}, arg) => {
  const header = await classpagefixture.headerCheck();
  await expect(header).toBeVisible();
});

Then('Admin should see the Search Bar in Manage class page', async ({classpagefixture}) => {
  const searchBar = await classpagefixture.searchBarVisibility();
  await expect(searchBar).toBeVisible();
});

Then('Admin should see the datatable heading like Batchname,class topic,class description,status,class Date,staff name,Edit\\/Delete', async ({classpagefixture}) => {
  const actualheaderCells = await classpagefixture.verifyDataTableHeader();
  await expect(actualheaderCells).toEqual(expectedHeaders);
});

Then('Admin should see the {string}', async ({classpagefixture}, arg) => {
    const paginationEntries = await classpagefixture.verifyPaginationEntries();
    await expect(paginationEntries).toBeVisible();
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

});

Then('Admin should see Total no of classes in below of the data table.', async ({classpagefixture}) => {
  const totalEntries = await classpagefixture.verifyTotalEntries();
  await expect(totalEntries).toBeVisible();
});

/*****************           Manage Class Page Header bar Links Validation          *****************/

When('Admin clicks on {string} on the navigation bar', async ({classpagefixture}, navigatoinOption) => {
  await classpagefixture.moduleClick(navigatoinOption);
});

Then('Admin is redirected to {string} page', async ({classpagefixture}, expectedPageName) => {
  const actualPageName = await classpagefixture.getPageName();
  await expect(actualPageName).toEqual(expectedPageName);
});

Then('Admin is redirected to Login page', async ({classpagefixture}) => {
  
});

  