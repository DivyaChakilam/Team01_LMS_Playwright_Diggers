import { expect } from '@playwright/test'
import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixtures'

const { Given, When, Then } = createBdd(test);

Given('Admin is in home page', async ({page,loginpagefixture,homepagefixture})=>{
    await page.goto(process.env.baseUrl)
    await loginpagefixture.loggingIn(process.env.user_Name,process.env.passWord)
    await expect(homepagefixture.homepageheading).toBeVisible()
  });
  
  When('Admin clicks on the logout in the menu bar', async ({logoutpagefixture}) => {
    await logoutpagefixture.clicklogoutbutton()
  });
  
  Then('Admin should be redirected to login page', async ({page}) => {
    await expect(page).toHaveURL(process.env.baseUrl)
  });
  
  
  Given('Admin is in login page', async ({}) => {
    // Step: Given Admin is in login page
    // From: features\Logout.feature:11:1
  });
  
  When('Admin clicks  browser back button', async ({}) => {
    // Step: When Admin clicks  browser back button
    // From: features\Logout.feature:12:1
  });
  
  Then('Admin should receive error message', async ({}) => {
    // Step: Then Admin should receive error message
    // From: features\Logout.feature:13:1
  });