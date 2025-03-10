// Generated from: features\Logincredentials.feature
import { test } from "../../Fixtures/fixtures.js";

test.describe('Login  Page Credentials Verification', () => {

  test.beforeEach('Background: Admin gives the correct LMS portal URL', async ({ Given, page }) => {
    await Given('Admin is on login Page', null, { page }); 
  });
  
  test.only('Validate login with valid data in all field', { tag: ['@only'] }, async ({ When, loginpagefixture, Then }) => { 
    await When('Admin enter valid data in all field and clicks login button', null, { loginpagefixture }); 
    await Then('Admin should land on home page'); 
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
  {"pwTestLine":10,"pickleLine":7,"tags":["@only"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When Admin enter valid data in all field and clicks login button","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","stepMatchArguments":[]}]},
]; // bdd-data-end