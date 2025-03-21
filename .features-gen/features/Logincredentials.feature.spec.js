// Generated from: features\Logincredentials.feature
import { test } from "../../Fixtures/fixtures.js";

test.describe('Login  Page Credentials Verification', () => {

  test.beforeEach('Background: Admin gives the correct LMS portal URL', async ({ Given, page }) => {
    await Given('Admin is on login Page', null, { page }); 
  });
  
  test('Validate login with valid data in all field', async ({ When, loginpagefixture, Then, homepagefixture }) => { 
    await When('Admin enter valid data in all field and clicks login button', null, { loginpagefixture }); 
    await Then('Admin should land on home page', null, { homepagefixture }); 
  });

  test('Validate login with invalid data', async ({ When, loginpagefixture, Then }) => { 
    await When('Admin enter invalid data and clicks login button', null, { loginpagefixture }); 
    await Then('Error message "Invalid username and password Please try again"', null, { loginpagefixture }); 
  });

  test('Validate login credentials with null user name', async ({ When, loginpagefixture, Then, page }) => { 
    await When('Admin enter value only in password and clicks login button', null, { loginpagefixture }); 
    await Then('Error message" Please enter your user name"', null, { loginpagefixture, page }); 
  });

  test('Validate login credentials with null password', { tag: ['@slow', '@bug'] }, async ({ When, loginpagefixture, Then }) => { 
    await When('Admin enter value only in user name and clicks login button', null, { loginpagefixture }); 
    await Then('Error message" Please enter your password "', null, { loginpagefixture }); 
  });

  test('verify login button action through keyboard', { tag: ['@slow'] }, async ({ When, loginpagefixture, Then, homepagefixture }) => { 
    await When('Admin enter valid credentials  and clicks login button through keyboard', null, { loginpagefixture }); 
    await Then('Admin should land on home page', null, { homepagefixture }); 
  });

  test('verify login button action through mouse', async ({ When, loginpagefixture, Then, homepagefixture }) => { 
    await When('Admin enter valid credentials  and clicks login button through mouse', null, { loginpagefixture }); 
    await Then('Admin should land on home page', null, { homepagefixture }); 
  });

});

// == technical section ==

test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\Logincredentials.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $afterEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When Admin enter valid data in all field and clicks login button","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When Admin enter invalid data and clicks login button","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Error message \"Invalid username and password Please try again\"","stepMatchArguments":[{"group":{"start":14,"value":"\"Invalid username and password Please try again\"","children":[{"start":15,"value":"Invalid username and password Please try again","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When Admin enter value only in password and clicks login button","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then Error message\" Please enter your user name\"","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":19,"slow":true,"tags":["@slow","@bug"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When Admin enter value only in user name and clicks login button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then Error message\" Please enter your password \"","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":24,"slow":true,"tags":["@slow"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When Admin enter valid credentials  and clicks login button through keyboard","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":28,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When Admin enter valid credentials  and clicks login button through mouse","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","stepMatchArguments":[]}]},
]; // bdd-data-end