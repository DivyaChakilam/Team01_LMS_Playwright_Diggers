// Generated from: features\Class.feature
import { test } from "../../Fixtures/fixtures.js";

test.describe('Class page Visual validation', () => {

  test.beforeEach('Background', async ({ Given, classpagefixture, When }) => {
    await Given('Admin logs in to LMS application and lands on home page', null, { classpagefixture }); 
    await When('Admin clicks the "Class" Navigation bar in the Header', null, { classpagefixture }); 
  });
  
  test('Validating the class manage page', { tag: ['@focus'] }, async ({ Then, classpagefixture }) => { 
    await Then('Admin should land on the " Manage Class" page', null, { classpagefixture }); 
  });

  test.skip('Validating the Title in the Manage class page', { tag: ['@skip'] }, async ({ Then }) => { 
    await Then('Admin should see the " LMS - Learning Management System " Title'); 
  });

  test.skip('Validating the Header in the Manage class page', { tag: ['@skip'] }, async ({ Then }) => { 
    await Then('Admin should see the "Mange Class" Header'); 
  });

  test.skip('Validating Search bar in class page', { tag: ['@skip'] }, async ({ Then }) => { 
    await Then('Admin should see the Search Bar in Manage class page'); 
  });

  test.skip('Validating the data table headers in the class page', { tag: ['@skip'] }, async ({ Then }) => { 
    await Then('Admin should see the datatable heading like Batchname,class topic,class description,status,class Date,staff name,Edit/Delete'); 
  });

  test.skip('Validating the text and pagination icon in the classpage', { tag: ['@skip'] }, async ({ Then, And }) => { 
    await Then('Admin should see the " showing x to y of z entries"'); 
    await And('enabled pagination controls under the data table'); 
  });

  test('Validate the sort icon of all the field in datatable', async ({ Then, classpagefixture }) => { 
    await Then('Admin should see the Sort icon of all the field in the datatable.', null, { classpagefixture }); 
  });

  test('Validating the Delete button under the Manage class', async ({ Then, classpagefixture }) => { 
    await Then('Admin should see the Delete button under the Manage class page header.', null, { classpagefixture }); 
  });

  test('Validate the total no of classes in manage class page', async ({ Then, classpagefixture }) => { 
    await Then('Admin should see Total no of classes in below of the data table.', null, { classpagefixture }); 
  });

  test('Validate Batch link on navigation bar', async ({ When, classpagefixture, Then }) => { 
    await When('Admin clicks on "Batch" on the navigation bar', null, { classpagefixture }); 
    await Then('Admin is redirected to " Manage Batch" page', null, { classpagefixture }); 
  });

  test('Validate Program link on navigation bar', async ({ When, classpagefixture, Then }) => { 
    await When('Admin clicks on "Program" on the navigation bar', null, { classpagefixture }); 
    await Then('Admin is redirected to " Manage Program" page', null, { classpagefixture }); 
  });

  test('Validate Class link on navigation bar', async ({ When, classpagefixture, Then }) => { 
    await When('Admin clicks on "Class" on the navigation bar', null, { classpagefixture }); 
    await Then('Admin is redirected to " Manage Class" page', null, { classpagefixture }); 
  });

  test('Validate Logout link on navigation bar', async ({ When, classpagefixture, Then }) => { 
    await When('Admin clicks on "Logout" on the navigation bar', null, { classpagefixture }); 
    await Then('Admin is redirected to Login page', null, { classpagefixture }); 
  });

});

// == technical section ==

test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\Class.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
  $afterEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":8,"tags":["@focus"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Class\"","children":[{"start":18,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the \" Manage Class\" page","stepMatchArguments":[{"group":{"start":25,"value":"\" Manage Class\"","children":[{"start":26,"value":" Manage Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":11,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \" LMS - Learning Management System \" Title"}]},
  {"pwTestLine":19,"pickleLine":14,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true},{"pwStepLine":20,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \"Mange Class\" Header"}]},
  {"pwTestLine":23,"pickleLine":17,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Search Bar in Manage class page"}]},
  {"pwTestLine":27,"pickleLine":20,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true},{"pwStepLine":28,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable heading like Batchname,class topic,class description,status,class Date,staff name,Edit/Delete"}]},
  {"pwTestLine":31,"pickleLine":23,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true},{"pwStepLine":32,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \" showing x to y of z entries\""},{"pwStepLine":33,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"And enabled pagination controls under the data table"}]},
  {"pwTestLine":36,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Class\"","children":[{"start":18,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":37,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Sort icon of all the field in the datatable.","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":30,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Class\"","children":[{"start":18,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":41,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Delete button under the Manage class page header.","stepMatchArguments":[]}]},
  {"pwTestLine":44,"pickleLine":33,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Class\"","children":[{"start":18,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":45,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Total no of classes in below of the data table.","stepMatchArguments":[]}]},
  {"pwTestLine":48,"pickleLine":36,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Class\"","children":[{"start":18,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":49,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"Batch\" on the navigation bar","stepMatchArguments":[{"group":{"start":16,"value":"\"Batch\"","children":[{"start":17,"value":"Batch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":50,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then Admin is redirected to \" Manage Batch\" page","stepMatchArguments":[{"group":{"start":23,"value":"\" Manage Batch\"","children":[{"start":24,"value":" Manage Batch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":53,"pickleLine":40,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Class\"","children":[{"start":18,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":54,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"Program\" on the navigation bar","stepMatchArguments":[{"group":{"start":16,"value":"\"Program\"","children":[{"start":17,"value":"Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":55,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then Admin is redirected to \" Manage Program\" page","stepMatchArguments":[{"group":{"start":23,"value":"\" Manage Program\"","children":[{"start":24,"value":" Manage Program","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":58,"pickleLine":44,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Class\"","children":[{"start":18,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":59,"gherkinStepLine":45,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"Class\" on the navigation bar","stepMatchArguments":[{"group":{"start":16,"value":"\"Class\"","children":[{"start":17,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":60,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"Then Admin is redirected to \" Manage Class\" page","stepMatchArguments":[{"group":{"start":23,"value":"\" Manage Class\"","children":[{"start":24,"value":" Manage Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":63,"pickleLine":48,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Class\"","children":[{"start":18,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":64,"gherkinStepLine":49,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"Logout\" on the navigation bar","stepMatchArguments":[{"group":{"start":16,"value":"\"Logout\"","children":[{"start":17,"value":"Logout","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":65,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then Admin is redirected to Login page","stepMatchArguments":[]}]},
]; // bdd-data-end