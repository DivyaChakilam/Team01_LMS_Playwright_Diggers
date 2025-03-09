import { expect } from '@playwright/test'
import { createBdd } from 'playwright-bdd';
import {test} from '../Fixtures/fixtures'

const { Given, When, Then } = createBdd(test);
//require('../Hooks/hooks.js'); 

Given('The browser is open', async ({page}) => {
    // Step: Given The browser is open
    // From: features\Login.feature:4:1
});

When('Admin gives the correct LMS portal URL', async ({ page }) => {
    await page.goto(process.env.baseUrl)
});
Then('Admin should land on the login page', async ({ page }) => {
    await expect(page).toHaveURL(process.env.baseUrl)
   
  });
  Then('Admin should see  LMS - Learning Management System', async ({loginpagefixture}) => {
    await expect(loginpagefixture.image).toBeVisible()
    console.log("Image is Visible")
  });

When('Admin gives the invalid LMS portal URL', async ({}) => {
    // Step: When Admin gives the invalid LMS portal URL
    // From: features\Login.feature:10:1
  });
  
  Then('Admin should receive application error', async ({}) => {
    // Step: Then Admin should receive application error
    // From: features\Login.feature:11:1
  });
  
  Then('Admin should see correct spellings in all fields', async ({}) => {
    // Step: Then Admin should see correct spellings in all fields
    // From: features\Login.feature:17:1
  });
  
  
  
  Then('Admin should see company name below the app name', async ({}) => {
    // Step: Then Admin should see company name below the app name
    // From: features\Login.feature:27:1
  });
  
  Then('Admin should see {string}', async ({}, arg) => {
    // Step: Then Admin should see "Please login to LMS application"
    // From: features\Login.feature:32:1
  });
  
  Then('Admin should see two text field', async ({}) => {
    // Step: Then Admin should see two text field
    // From: features\Login.feature:37:1
  });
  
  Then('Admin should see {string} in the first text field', async ({}, arg) => {
    // Step: Then Admin should see "User" in the first text field
    // From: features\Login.feature:42:1
  });
  
  Then('Admin should see asterisk mark symbol next to text for mandatory fields', async ({}) => {
    // Step: Then Admin should see asterisk mark symbol next to text for mandatory fields
    // From: features\Login.feature:47:1
  });
  
  Then('Admin should {string} in the second text field', async ({}, arg) => {
    // Step: Then Admin should "Password" in the second text field
    // From: features\Login.feature:52:1
  });
  
  Then('Admin should see asterisk mark symbol next to password text', async ({}) => {
    // Step: Then Admin should see asterisk mark symbol next to password text
    // From: features\Login.feature:57:1
  });

  Then('Admin should see input field on the centre of the page', async ({}) => {
    // Step: Then Admin should see input field on the centre of the page
    // From: features\Login.feature:62:1
  });
  
  Then('Admin should see login button', async ({}) => {
    // Step: Then Admin should see login button
    // From: features\Login.feature:67:1
  });
  
  Then('Admin should see password in gray color', async ({}) => {
    // Step: Then Admin should see password in gray color
    // From: features\Login.feature:72:1
  });
  