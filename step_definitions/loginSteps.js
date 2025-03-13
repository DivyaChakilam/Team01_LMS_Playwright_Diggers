import { expect } from '@playwright/test'
import { createBdd } from 'playwright-bdd';
import { test } from '../Fixtures/fixtures'
import {records} from '../Utils/csvReader'

const { Given, When, Then } = createBdd(test);

Given('The browser is open', async ({ page }) => {
  // Step: Given The browser is open
  // From: features\Login.feature:4:1
});

When('Admin gives the invalid LMS portal URL', async ({page}) => {
  
    await page.goto(records[0]?.URL)
    console.log("Navigated to the url:"+records[0]?.URL)
  
});

//bug
Then('Admin should receive application error', async ({page}) => {
  const applicationerror = page.locator('iframe').contentFrame().getByText('There\'s nothing here, yet. Build something amazing')
  await expect(applicationerror).toBeVisible()
});

When('Admin gives the correct LMS portal URL', async ({ page }) => {
  await page.goto(process.env.baseUrl)
});

Then('HTTP response >= {int}. Then the link is broken', async ({loginpagefixture}, arg) => {
  await loginpagefixture.checkBrokenLinks()
});

Then('Admin should land on the login page', async ({ page }) => {
  await expect(page).toHaveURL(process.env.baseUrl)
});

Then('Admin should see  LMS - Learning Management System', async ({ loginpagefixture,ctx }) => {
  await expect(loginpagefixture.image).toBeVisible({ timeout: 3000 })
  const expectedText='LMS - Learning Management System'
  const takenscreenshot=await loginpagefixture.imgscreenshot()
  const actualText = await loginpagefixture.extractTextfromimage(takenscreenshot);
  expect(actualText).toContain(expectedText);

});

Then('Admin should see company name below the app name', async ({loginpagefixture,ctx}) => {
  const expectedText='NumpyNinja'
  const takenscreenshot=await loginpagefixture.imgscreenshot()
  const actualText = await loginpagefixture.extractTextfromimage(takenscreenshot);
  expect(actualText).toContain(expectedText);
});

Then('Admin should see correct spellings in all fields', async ({ loginpagefixture }) => {
  await expect(loginpagefixture.loginmessage).toContainText('Please login to LMS application')
  await expect(loginpagefixture.usernametext).toContainText('User')
  await expect(loginpagefixture.passwordtext).toContainText('Password')
  await expect(loginpagefixture.loginbutton).toContainText('Login')
  await expect(loginpagefixture.forgotpasswordlink).toContainText('Forgot Password')
});

Then('Admin should see {string}', async ({ loginpagefixture }, arg) => {
  await expect(loginpagefixture.loginmessage).toContainText(arg)
});

Then('Admin should see two text field', async ({ loginpagefixture }) => {
 const totaltextfields=await loginpagefixture.inputfieldscount()
  console.log("Total input fields in the form:" + totaltextfields);
  expect(totaltextfields).toEqual(2)
});

Then('Admin should see {string} in the first text field', async ({loginpagefixture }, arg) => {
  await expect(loginpagefixture.usernametext).toContainText(arg)
});

Then('Admin should {string} in the second text field', async ({loginpagefixture }, arg) => {
  await expect(loginpagefixture.passwordtext).toContainText(arg)
});

Then('Admin should see asterisk mark symbol next to text for mandatory fields', async ({loginpagefixture}) => {
  await expect(loginpagefixture.usernametext).toContainText('*')
});

Then('Admin should see asterisk mark symbol next to password text', async ({loginpagefixture}) => {
  await expect(loginpagefixture.passwordtext).toContainText('*')
});

Then('Admin should see login button', async ({loginpagefixture}) => {
  await expect(loginpagefixture.loginbutton).toBeVisible()
});

Then('Admin should see input field on the centre of the page', async ({loginpagefixture,page}) => {
// Retrieve viewport dimensions using evaluate()
const { width: viewportWidth, height: viewportHeight } = await page.evaluate(() => {
  return { width: window.innerWidth, height: window.innerHeight }});

  const inputelements=await loginpagefixture.inputfieldspresent()
  const totaltextfields=await loginpagefixture.inputfieldscount()

  for (let i = 0; i < totaltextfields; i++) {
    const inputBox = await inputelements.nth(i).boundingBox();

    // Calculate input field's center position
    const inputCenterX = inputBox.x + inputBox.width / 2;
    const inputCenterY = inputBox.y + inputBox.height / 2;

    // Calculate viewport center
    const viewportCenterX = viewportWidth / 2;
    const viewportCenterY = viewportHeight / 2;

    // Validate Horizontal Center Alignment
    expect(Math.abs(inputCenterX - viewportCenterX)).toBeLessThan(10);

    console.log(`Input field ${i + 1} is centered.`);
}
});

Then('Admin should see user in gray color', async ({loginpagefixture,page}) => {
  const usernameElement = await loginpagefixture.usernametext.elementHandle();
  const textColor = await page.evaluate(element => {
    return window.getComputedStyle(element).getPropertyValue('color');
  },usernameElement );
  console.log('usernameelement is:'+usernameElement)
  console.log("text color:"+ textColor)
  // Validate if it's a grey shade
  expect(isGrey(textColor)).toBe(true);
  function isGrey(rgb) {
    const match = rgb.match(/\d+/g); // Extract RGB values
    if (!match || match.length < 3) return false;

    const [r, g, b] = match.map(Number);
    return r === g && g === b; // Grey means R, G, and B are equal
}
});

Then('Admin should see password in gray color', async ({loginpagefixture,page}) => {
  const passwordElement = await loginpagefixture.passwordtext.elementHandle();
  const textColor = await page.evaluate(element => {
    return window.getComputedStyle(element).getPropertyValue('color');
  },passwordElement);
  console.log('passwordelement is:'+passwordElement)
  console.log("text color:"+ textColor)
  // Validate if it's a grey shade
  expect(isGrey(textColor)).toBe(true);
  function isGrey(rgb) {
    const match = rgb.match(/\d+/g); // Extract RGB values
    if (!match || match.length < 3) return false;

    const [r, g, b] = match.map(Number);
    return r === g && g === b; // Grey means R, G, and B are equal
}
});

Then('Admin should see one dropdown', async ({}) => {
  await page.selectOption('select#dropdownId', 'optionValue');
  console.log("dropdown is unavaillable on the login page")
});

Then('Admin should see {string} placeholder in dropdown', async ({}, arg) => {
  await page.selectOption('select#dropdownId', 'optionValue');
  console.log("dropdown is unavaillable on the login page")
});

Then('Admin should see {string} options in dropdown', async ({}, arg) => {
  await page.selectOption('select#dropdownId', 'optionValue');
  console.log("dropdown is unavaillable on the login page")
});

