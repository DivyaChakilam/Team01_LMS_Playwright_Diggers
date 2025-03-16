<<<<<<< HEAD
// Generated from: features\Logincredentials.feature
=======
// Generated from: features/Logincredentials.feature
>>>>>>> ad113fd34dc4b0a06198d71980986bed97337193
import { test } from "../../Fixtures/fixtures.js";

test.describe('Login  Page Credentials Verification', () => {

  test.beforeEach('Background: Admin gives the correct LMS portal URL', async ({ Given, page }) => {
    await Given('Admin is on login Page', null, { page }); 
  });
  
  test('Validate login with valid data in all field', async ({ When, loginpagefixture, Then }) => { 
    await When('Admin enter valid data in all field and clicks login button', null, { loginpagefixture }); 
    await Then('Admin should land on home page'); 
  });

  test('Validate login with invalid data', async ({ When, Then }) => { 
    await When('Admin enter invalid data and clicks login button'); 
    await Then('Error message "Invalid username and password Please try again"'); 
  });

  test('Validate login credentials with null user name', async ({ When, Then }) => { 
    await When('Admin enter value only in password and clicks login button'); 
    await Then('Error message" Please enter your user name"'); 
  });

  test('Validate login credentials with null password', async ({ When, Then }) => { 
    await When('Admin enter value only in user name and clicks login button'); 
    await Then('Error message" Please enter your password "'); 
  });

  test('verify login button action through keyboard', async ({ When, Then }) => { 
    await When('Admin enter valid credentials  and clicks login button through keyboard'); 
    await Then('Admin should land on home page'); 
  });

  test('verify login button action through mouse', async ({ When, Then }) => { 
    await When('Admin enter valid credentials  and clicks login button through mouse'); 
    await Then('Admin should land on home page'); 
  });

});

// == technical section ==

test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
<<<<<<< HEAD
  $uri: ({}, use) => use('features\\Logincredentials.feature'),
=======
  $uri: ({}, use) => use('features/Logincredentials.feature'),
>>>>>>> ad113fd34dc4b0a06198d71980986bed97337193
  $bddFileData: ({}, use) => use(bddFileData),
  $afterEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When Admin enter valid data in all field and clicks login button","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When Admin enter invalid data and clicks login button","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then Error message \"Invalid username and password Please try again\"","stepMatchArguments":[{"group":{"start":14,"value":"\"Invalid username and password Please try again\"","children":[{"start":15,"value":"Invalid username and password Please try again","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When Admin enter value only in password and clicks login button","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then Error message\" Please enter your user name\"","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When Admin enter value only in user name and clicks login button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then Error message\" Please enter your password \"","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When Admin enter valid credentials  and clicks login button through keyboard","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When Admin enter valid credentials  and clicks login button through mouse","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","stepMatchArguments":[]}]},
]; // bdd-data-end