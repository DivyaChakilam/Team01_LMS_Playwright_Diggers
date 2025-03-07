// Generated from: features\Login.feature
import { test } from "../../Fixtures/fixtures.js";

test.describe('Login  Page Verification', () => {

  test.beforeEach('Background', async ({ Given, page, When }) => {
    await Given('The browser is open', null, { page }); 
    await When('Admin gives the correct LMS portal URL', null, { page }); 
  });
  
  test('Verify Admin is able to land on login page', { tag: ['@focus'] }, async ({ Then, page }) => { 
    await Then('Admin should land on the login page', null, { page }); 
  });

  test('Verify application name', { tag: ['@focus'] }, async ({ Then, loginpagefixture }) => { 
    await Then('Admin should see  LMS - Learning Management System', null, { loginpagefixture }); 
  });

});

// == technical section ==

test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\Login.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $afterEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":7,"tags":["@focus"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the login page","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":20,"tags":["@focus"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then Admin should see  LMS - Learning Management System","stepMatchArguments":[]}]},
]; // bdd-data-end