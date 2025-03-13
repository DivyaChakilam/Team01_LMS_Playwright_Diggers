import { expect } from '@playwright/test'
import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixtures'

const { Given, When, Then } = createBdd(test);

Given('Admin is logged in to LMS application and lands on home page', async ({loginpagefixture,page}) => {
    await page.goto(process.env.baseUrl)
    await loginpagefixture.loggingIn(process.env.user_Name,process.env.passWord)
  });
  
  When('Admin clicks the Program Navigation bar in the Header and Admin is on Program page', async ({homepagefixture,page}) => {
    await expect(homepagefixture.programtab).toBeVisible()
    await homepagefixture.programtabclick()
    await expect(page).toHaveURL(process.env.program_URL)
  });
  
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

