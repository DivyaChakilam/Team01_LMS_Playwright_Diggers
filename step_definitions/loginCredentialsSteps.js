import { expect } from '@playwright/test'
import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixtures'
import {records} from '../Utils/csvReader'

const { Given, When, Then } = createBdd(test);

Given('Admin is on login Page', async ({page}) => {
  // Create a new incognito context
 /* const context = await browser.newContext();
  
  // Open a new page inside the incognito contextawait page.getByRole('textbox', { name: 'User' }).click();
  await page.getByRole('textbox', { name: 'User' }).fill('Playwright@gmail.com');
  await page.getByRole('textbox', { name: 'User' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('March@2025');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('LMS - Learning Management').click();
  await page.getByText('LMS - Learning Management').click();
  const page = await context.newPage(); */

    await page.goto(process.env.baseUrl)
    console.log("username from .env:" +process.env.LMS_userName)
    console.log("username from .env:" +process.env.passWord)
  });
  
  When('Admin enter valid data in all field and clicks login button', async ({loginpagefixture}) => {
    await loginpagefixture.loggingIn(process.env.LMS_userName,process.env.passWord)

  });
  
  Then('Admin should land on home page', async ({}) => {
    // Step: Then Admin should land on home page
    // From: features\Logincredentials.feature:8:1
  });
  
  When('Admin enter invalid data and clicks login button', async ({}) => {
    // Step: When Admin enter invalid data and clicks login button
    // From: features\Logincredentials.feature:11:1
  });
  
  Then('Error message {string}', async ({}, arg) => {
    // Step: Then Error message "Invalid username and password Please try again"
    // From: features\Logincredentials.feature:12:1
  });
  
  When('Admin enter value only in password and clicks login button', async ({}) => {
    // Step: When Admin enter value only in password and clicks login button
    // From: features\Logincredentials.feature:15:1
  });
  
  Then('Error message" Please enter your user name"', async ({}) => {
    // Step: Then Error message" Please enter your user name"
    // From: features\Logincredentials.feature:16:1
  });
  
  When('Admin enter value only in user name and clicks login button', async ({}) => {
    // Step: When Admin enter value only in user name and clicks login button
    // From: features\Logincredentials.feature:19:1
  });
  
  Then('Error message" Please enter your password "', async ({}) => {
    // Step: Then Error message" Please enter your password "
    // From: features\Logincredentials.feature:20:1
  });
  
  When('Admin enter valid credentials  and clicks login button through keyboard', async ({}) => {
    // Step: When Admin enter valid credentials  and clicks login button through keyboard
    // From: features\Logincredentials.feature:23:1
  });

  When('Admin enter valid credentials  and clicks login button through mouse', async ({}) => {
    // Step: When Admin enter valid credentials  and clicks login button through mouse
    // From: features\Logincredentials.feature:28:1
  });