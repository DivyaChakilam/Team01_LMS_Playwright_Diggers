import { expect } from '@playwright/test'
import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixtures';
import {records} from '../utils/csvReader';

const { Given, When, Then } = createBdd(test);

Given('Admin is on login Page', async ({page}) => {
  
    await page.goto(process.env.baseUrl)
  });
  
  When('Admin enter valid data in all field and clicks login button', async ({loginpagefixture}) => {
    await loginpagefixture.loggingIn(process.env.user_Name,process.env.passWord)
  });
  
  Then('Admin should land on home page', async ({homepagefixture}) => {
    await expect(homepagefixture.homepageheading).toBeVisible()
  });
  
  When('Admin enter invalid data and clicks login button', async ({loginpagefixture}) => {
   
      console.log("Invalid username:"+records[0]?.username)
      console.log("Invalid password:"+records[0]?.password)
     await loginpagefixture.loggingIn(records[0]?.username,records[0]?.password)
    
  });
  
  Then('Error message {string}', async ({loginpagefixture}, arg) => {
    await expect(loginpagefixture.invalidcredsmsg).toContainText(arg)
  });
  
  When('Admin enter value only in password and clicks login button', async ({loginpagefixture}) => {

        console.log("Invalid username:"+records[2]?.username)
        console.log("Invalid password:"+records[2]?.password)
       await loginpagefixture.onlypassword(records[2]?.password)   
  }); 
  
  Then('Error message" Please enter your user name"', async ({loginpagefixture,page}) => {
    await expect(loginpagefixture.usernamemsg).toBeVisible()
  });
  
  When('Admin enter value only in user name and clicks login button', async ({loginpagefixture}) => {
    await loginpagefixture.onlyusername(records[1]?.username)
  });
  
  Then('Error message" Please enter your password "', async ({loginpagefixture}) => {
    await expect.soft(loginpagefixture.passwordmsg).toBeVisible({timeout:3000})
  });
  
  When('Admin enter valid credentials  and clicks login button through keyboard', async ({loginpagefixture}) => {
    await loginpagefixture.keyboard(process.env.user_Name,process.env.passWord)
  });

  When('Admin enter valid credentials  and clicks login button through mouse', async ({loginpagefixture}) => {
    await loginpagefixture.loggingIn(process.env.user_Name,process.env.passWord)
  });