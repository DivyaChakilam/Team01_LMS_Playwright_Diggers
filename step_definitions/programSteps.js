import { expect } from '@playwright/test'
import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixtures'

const { Given, When, Then } = createBdd(test);

  When('Admin clicks on delete button for a program', async ({programpagefixture}) => {
  
    await programpagefixture.clickdeleteicon()
    
  });
  
  Then('Admin will get confirm deletion popup', async ({programpagefixture}) => {
    await expect(programpagefixture.delconfpopup).toBeVisible({timeout:5000})
  });
  
  Given('Admin is on Confirm deletion form', async ({}) => {
    await programpagefixture.clickdeleteicon()
    await expect(programpagefixture.delconfpopup).toBeVisible({timeout:5000})
  });
  
  When('Admin clicks on yesbutton{string} button', async ({}, arg) => {
    // Step: When Admin clicks on "Yes" button
    // From: features\Pragram.feature:14:1
  });
  
  Then('Admin can see {string} message', async ({}, arg) => {
    // Step: Then Admin can see 'Successful Program Deleted' message
    // From: features\Pragram.feature:15:1
  });
  
  When('Admin Searches for {string}', async ({}, arg) => {
    // Step: When Admin Searches for "Deleted Program name"
    // From: features\Pragram.feature:19:1
  });
  
  Then('There should seee zero results.', async ({}) => {
    // Step: Then There should seee zero results.
    // From: features\Pragram.feature:20:1
  });

  Given('Admin is on Program Confirm Deletion Page after selecting a program to delete', async ({programpagefixture}) => {
    await programpagefixture.clickdeleteicon()
    await expect(programpagefixture.delconfpopup).toBeVisible({timeout:5000})
  });
  
  When('Admin clicks on nobutton{string} button', async ({programpagefixture}, arg) => {
    await programpagefixture.clickNo()
  });

  Then('Admin can see Confirmation form disappears', async ({programpagefixture}) => {
    await expect(programpagefixture.delconfpopup).not.toBeVisible({timeout:5000})
  });
  
  When('Admin Click on {string} button', async ({}, arg) => {
    // Step: When Admin Click on "X" button
    // From: features\Pragram.feature:29:1
  });
  
  Then('Admin can see Confirm Deletion form disappear', async ({}) => {
    // Step: Then Admin can see Confirm Deletion form disappear
    // From: features\Pragram.feature:30:1
  });

/*****************          Program Page Visual Validation          *****************/
 
Then('Admin should see {string} in menu bar', async ({programpagefixture} ) => {
  const logout = await programpagefixture.getLogOutNm();
  await expect(logout).toBeVisible();

});



  

