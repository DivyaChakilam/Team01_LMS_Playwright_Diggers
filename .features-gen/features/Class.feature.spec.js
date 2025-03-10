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

  test.skip('Validate the sort icon of all the field in datatable', { tag: ['@skip'] }, async ({ Then }) => { 
    await Then('Admin should see the Sort icon of all the field in the datatable.'); 
  });

  test.skip('Validating the Delete button under the Manage class', { tag: ['@skip'] }, async ({ Then }) => { 
    await Then('Admin should see the Delete button under the Manage class page header.'); 
  });

  test.skip('Validate the total no of classes in manage class page', { tag: ['@skip'] }, async ({ Then }) => { 
    await Then('Admin should see Total no of classes in below of the data table.'); 
  });

  test.skip('Validate Batch link on navigation bar', { tag: ['@skip'] }, async ({ When, Then }) => { 
    await When('Admin clicks on "Batch" on the navigation bar'); 
    await Then('Admin is redirected to " Manage Batch" page'); 
  });

  test.skip('Validate Program link on navigation bar', { tag: ['@skip'] }, async ({ When, Then }) => { 
    await When('Admin clicks on "Program" on the navigation bar'); 
    await Then('Admin is redirected to " Manage Program" page'); 
  });

  test.skip('Validate Class link on navigation bar', { tag: ['@skip'] }, async ({ When, Then }) => { 
    await When('Admin clicks on "Class" on the navigation bar'); 
    await Then('Admin is redirected to " Manage Class" page'); 
  });

  test.skip('Validate Logout link on navigation bar', { tag: ['@skip'] }, async ({ When, Then }) => { 
    await When('Admin clicks on "Logout" on the navigation bar'); 
    await Then('Admin is redirected to Login page'); 
  });

  test('Validate Class Details Popup window', async ({ When, classpagefixture, Then }) => { 
    await When('Admin clicks a "Add New Class" under the "Class" menu bar', null, { classpagefixture }); 
    await Then('Admin should see a popup open for class details with empty form along with <SAVE> and <CANCEL> button and Close(X) Icon on the top right corner of the window', null, { classpagefixture }); 
  });

  test('Validate input fields and their text boxes in Class details form', async ({ When, classpagefixture, Then }) => { 
    await When('Admin clicks a "Add New Class" under the "Class" menu bar', null, { classpagefixture }); 
    await Then('Admin should see few input fields and their respective text boxes in the class details window'); 
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
  {"pwTestLine":11,"pickleLine":11,"tags":["@focus"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Class\"","children":[{"start":18,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the \" Manage Class\" page","stepMatchArguments":[{"group":{"start":25,"value":"\" Manage Class\"","children":[{"start":26,"value":" Manage Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":14,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \" LMS - Learning Management System \" Title"}]},
  {"pwTestLine":19,"pickleLine":17,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \"Mange Class\" Header"}]},
  {"pwTestLine":23,"pickleLine":20,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Search Bar in Manage class page"}]},
  {"pwTestLine":27,"pickleLine":23,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true},{"pwStepLine":28,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable heading like Batchname,class topic,class description,status,class Date,staff name,Edit/Delete"}]},
  {"pwTestLine":31,"pickleLine":26,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true},{"pwStepLine":32,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \" showing x to y of z entries\""},{"pwStepLine":33,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"And enabled pagination controls under the data table"}]},
  {"pwTestLine":36,"pickleLine":30,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true},{"pwStepLine":37,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Sort icon of all the field in the datatable."}]},
  {"pwTestLine":40,"pickleLine":33,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true},{"pwStepLine":41,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Delete button under the Manage class page header."}]},
  {"pwTestLine":44,"pickleLine":36,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true},{"pwStepLine":45,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Total no of classes in below of the data table."}]},
  {"pwTestLine":48,"pickleLine":41,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true},{"pwStepLine":49,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"Batch\" on the navigation bar"},{"pwStepLine":50,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then Admin is redirected to \" Manage Batch\" page"}]},
  {"pwTestLine":53,"pickleLine":45,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true},{"pwStepLine":54,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"Program\" on the navigation bar"},{"pwStepLine":55,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then Admin is redirected to \" Manage Program\" page"}]},
  {"pwTestLine":58,"pickleLine":49,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true},{"pwStepLine":59,"gherkinStepLine":50,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"Class\" on the navigation bar"},{"pwStepLine":60,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"Then Admin is redirected to \" Manage Class\" page"}]},
  {"pwTestLine":63,"pickleLine":53,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true},{"pwStepLine":64,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"Logout\" on the navigation bar"},{"pwStepLine":65,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then Admin is redirected to Login page"}]},
  {"pwTestLine":68,"pickleLine":59,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Class\"","children":[{"start":18,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":69,"gherkinStepLine":60,"keywordType":"Action","textWithKeyword":"When Admin clicks a \"Add New Class\" under the \"Class\" menu bar","stepMatchArguments":[{"group":{"start":15,"value":"\"Add New Class\"","children":[{"start":16,"value":"Add New Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"Class\"","children":[{"start":42,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":70,"gherkinStepLine":61,"keywordType":"Outcome","textWithKeyword":"Then Admin should see a popup open for class details with empty form along with <SAVE> and <CANCEL> button and Close(X) Icon on the top right corner of the window","stepMatchArguments":[]}]},
  {"pwTestLine":73,"pickleLine":63,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Class\"","children":[{"start":18,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":74,"gherkinStepLine":64,"keywordType":"Action","textWithKeyword":"When Admin clicks a \"Add New Class\" under the \"Class\" menu bar","stepMatchArguments":[{"group":{"start":15,"value":"\"Add New Class\"","children":[{"start":16,"value":"Add New Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"Class\"","children":[{"start":42,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":75,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then Admin should see few input fields and their respective text boxes in the class details window","stepMatchArguments":[]}]},
]; // bdd-data-end