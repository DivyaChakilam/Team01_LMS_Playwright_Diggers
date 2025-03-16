// Generated from: features/Program.feature
import { test } from "../../Fixtures/fixtures.js";

test.describe('Program page Visual validation', () => {

  test.beforeEach('Background', async ({ Given, classpagefixture, When }) => {
    await Given('Admin logs in to LMS application and lands on home page', null, { classpagefixture }); 
    await When('Admin clicks the "Program" Navigation bar in the Header', null, { classpagefixture }); 
  });
  
  test('Validating the program manage page', { tag: ['@focus'] }, async ({ Then, classpagefixture }) => { 
    await Then('Admin should land on the " Manage Program" page', null, { classpagefixture }); 
  });

  test('Verify Logout displayed in menu bar', async ({ Then, programpagefixture }) => { 
    await Then('Admin should see "Logout" in menu bar', null, { programpagefixture }); 
  });

});

// == technical section ==

test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features/Program.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $afterEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":11,"tags":["@focus"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Program\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Program\"","children":[{"start":18,"value":"Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the \" Manage Program\" page","stepMatchArguments":[{"group":{"start":25,"value":"\" Manage Program\"","children":[{"start":26,"value":" Manage Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Program\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Program\"","children":[{"start":18,"value":"Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then Admin should see \"Logout\" in menu bar","stepMatchArguments":[{"group":{"start":17,"value":"\"Logout\"","children":[{"start":18,"value":"Logout","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end