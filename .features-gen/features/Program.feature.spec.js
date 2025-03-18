// Generated from: features\Program.feature
import { test } from "../../Fixtures/fixtures.js";

test.describe('Program page validation', () => {

  test.beforeEach('Background', async ({ Given, commonpagefixture, When }) => {
    await Given('Admin logs in to LMS application and lands on home page', null, { commonpagefixture }); 
    await When('Admin clicks the "Program" Navigation bar in the Header', null, { commonpagefixture }); 
  });
  
  test('Verify delete feature', async ({ When, programpagefixture, Then }) => { 
    await When('Admin clicks on delete button for a program', null, { programpagefixture }); 
    await Then('Admin will get confirm deletion popup', null, { programpagefixture }); 
  });

  test('Verify Admin is able to click \'Yes\'', async ({ Given, When, Then }) => { 
    await Given('Admin is on Confirm deletion form'); 
    await When('Admin clicks on yesbutton"Yes" button'); 
    await Then('Admin can see \'Successful Program Deleted\' message'); 
  });

  test('Verify Admin is able to delete program', async ({ When, Then }) => { 
    await When('Admin Searches for "Deleted Program name"'); 
    await Then('There should seee zero results.'); 
  });

  test('Verify Admin is able to click \'No\'', async ({ Given, programpagefixture, When, Then }) => { 
    await Given('Admin is on Program Confirm Deletion Page after selecting a program to delete', null, { programpagefixture }); 
    await When('Admin clicks on nobutton"No" button', null, { programpagefixture }); 
    await Then('Admin can see Confirmation form disappears', null, { programpagefixture }); 
  });

  test('Verify Admin is able to close the window with "X"', async ({ Given, programpagefixture, When, Then }) => { 
    await Given('Admin is on Program Confirm Deletion Page after selecting a program to delete', null, { programpagefixture }); 
    await When('Admin Click on "X" button'); 
    await Then('Admin can see Confirm Deletion form disappear'); 
  });

  test('Validating the program manage page', { tag: ['@focus'] }, async ({ Then, commonpagefixture }) => { 
    await Then('Admin should land on the " Manage Program" page', null, { commonpagefixture }); 
  });

  test('Verify Logout displayed in menu bar', async ({ Then, programpagefixture }) => { 
    await Then('Admin should see "Logout" in menu bar', null, { programpagefixture }); 
  });

});

// == technical section ==

test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\Program.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $afterEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Program\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Program\"","children":[{"start":18,"value":"Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When Admin clicks on delete button for a program","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Admin will get confirm deletion popup","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Program\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Program\"","children":[{"start":18,"value":"Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Context","textWithKeyword":"Given Admin is on Confirm deletion form","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When Admin clicks on yesbutton\"Yes\" button","stepMatchArguments":[{"group":{"start":25,"value":"\"Yes\"","children":[{"start":26,"value":"Yes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then Admin can see 'Successful Program Deleted' message","stepMatchArguments":[{"group":{"start":14,"value":"'Successful Program Deleted'","children":[{"children":[{"children":[]}]},{"start":15,"value":"Successful Program Deleted","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Program\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Program\"","children":[{"start":18,"value":"Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When Admin Searches for \"Deleted Program name\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Deleted Program name\"","children":[{"start":20,"value":"Deleted Program name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then There should seee zero results.","stepMatchArguments":[]}]},
  {"pwTestLine":27,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Program\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Program\"","children":[{"start":18,"value":"Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given Admin is on Program Confirm Deletion Page after selecting a program to delete","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When Admin clicks on nobutton\"No\" button","stepMatchArguments":[{"group":{"start":24,"value":"\"No\"","children":[{"start":25,"value":"No","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then Admin can see Confirmation form disappears","stepMatchArguments":[]}]},
  {"pwTestLine":33,"pickleLine":29,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Program\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Program\"","children":[{"start":18,"value":"Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":30,"keywordType":"Context","textWithKeyword":"Given Admin is on Program Confirm Deletion Page after selecting a program to delete","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When Admin Click on \"X\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"X\"","children":[{"start":16,"value":"X","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then Admin can see Confirm Deletion form disappear","stepMatchArguments":[]}]},
  {"pwTestLine":39,"pickleLine":37,"tags":["@focus"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Program\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Program\"","children":[{"start":18,"value":"Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":40,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the \" Manage Program\" page","stepMatchArguments":[{"group":{"start":25,"value":"\" Manage Program\"","children":[{"start":26,"value":" Manage Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":43,"pickleLine":40,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Program\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Program\"","children":[{"start":18,"value":"Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then Admin should see \"Logout\" in menu bar","stepMatchArguments":[{"group":{"start":17,"value":"\"Logout\"","children":[{"start":18,"value":"Logout","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end