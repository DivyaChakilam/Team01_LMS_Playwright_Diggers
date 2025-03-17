<<<<<<< HEAD
// Generated from: features\Class.feature
=======
// Generated from: features/Class.feature
>>>>>>> ad113fd34dc4b0a06198d71980986bed97337193
import { test } from "../../Fixtures/fixtures.js";

test.describe('Class page Visual validation', () => {

<<<<<<< HEAD
  test.beforeEach('Background', async ({ Given, commonpagefixture, When }) => {
    await Given('Admin logs in to LMS application and lands on home page', null, { commonpagefixture }); 
    await When('Admin clicks the "Class" Navigation bar in the Header', null, { commonpagefixture }); 
  });
  
  test('Validating the class manage page', { tag: ['@focus'] }, async ({ Then, commonpagefixture }) => { 
    await Then('Admin should land on the " Manage Class" page', null, { commonpagefixture }); 
  });

  test('Validating the Title in the Manage class page', async ({ Then, commonpagefixture }) => { 
    await Then('Admin should see the " LMS - Learning Management System " Title', null, { commonpagefixture }); 
  });

  test('Validating the Header in the Manage class page', async ({ Then, commonpagefixture }) => { 
    await Then('Admin should see the " Manage Class" Header', null, { commonpagefixture }); 
  });

  test('Validating Search bar in class page', async ({ Then, commonpagefixture }) => { 
    await Then('Admin should see the Search Bar in Manage class page', null, { commonpagefixture }); 
=======
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
>>>>>>> ad113fd34dc4b0a06198d71980986bed97337193
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
<<<<<<< HEAD
    await Then('Admin should see few input fields and their respective text boxes in the class details window', {"dataTable":{"rows":[{"cells":[{"value":"Label Name"},{"value":"Input Field ID"}]},{"cells":[{"value":"Batch Name"},{"value":"Select a Batch Name"}]},{"cells":[{"value":"Class Topic"},{"value":"Class Topic *"}]},{"cells":[{"value":"Class Description"},{"value":"Class Description"}]},{"cells":[{"value":"Staff Name"},{"value":"Select a Staff Name"}]},{"cells":[{"value":"Comments"},{"value":"Comments"}]},{"cells":[{"value":"Notes"},{"value":"Notes"}]}]}}, { classpagefixture }); 
  });

  test('Check no of classes value added when selecting class dates', async ({ When, classpagefixture, And, Then }) => { 
    await When('Admin clicks a "Add New Class" under the "Class" menu bar', null, { classpagefixture }); 
    await And('Admin selects class date in date picker', null, { classpagefixture }); 
    await Then('Admin should see no of class value is added automatically', null, { classpagefixture }); 
  });

  test('Check weekend dates are disabled in calendar', async ({ When, classpagefixture, And, Then }) => { 
    await When('Admin clicks a "Add New Class" under the "Class" menu bar', null, { classpagefixture }); 
    await And('Admin selects class date in date picker', null, { classpagefixture }); 
    await Then('Admin should see weekends dates are disabled to select', null, { classpagefixture }); 
  });

  test('Empty form submission', async ({ When, classpagefixture, And, Then }) => { 
    await When('Admin clicks a "Add New Class" under the "Class" menu bar', null, { classpagefixture }); 
    await And('Admin clicks on save button without entering data', null, { classpagefixture }); 
    await Then('class won\'t be created and Admin gets error message', {"dataTable":{"rows":[{"cells":[{"value":"Error Message"}]},{"cells":[{"value":"Batch Name is required."}]},{"cells":[{"value":"Class Topic is required."}]},{"cells":[{"value":"Class Date is required."}]},{"cells":[{"value":"No. of Classes is required."}]},{"cells":[{"value":"Staff Name is required."}]},{"cells":[{"value":"Status is required."}]}]}}, { classpagefixture }); 
  });

  test('Validate Cancel icon on class Details form', async ({ When, classpagefixture, And, Then }) => { 
    await When('Admin clicks a "Add New Class" under the "Class" menu bar', null, { classpagefixture }); 
    await And('Admin clicks Cancel Icon on Admin Details form', null, { classpagefixture }); 
    await Then('Class Details popup window should be closed without saving', null, { classpagefixture }); 
  });

  test('Validate Close(X) icon on class Details form', async ({ When, classpagefixture, And, Then }) => { 
    await When('Admin clicks a "Add New Class" under the "Class" menu bar', null, { classpagefixture }); 
    await And('Admin clicks Close(X) Icon on Admin Details form', null, { classpagefixture }); 
    await Then('Class Details popup window should be closed without saving', null, { classpagefixture }); 
  });

  test.only('Validate row level edit icon', { tag: ['@only'] }, async ({ When, classpagefixture, Then, And }) => { 
    await When('Admin clicks on the "edit" icon', null, { classpagefixture }); 
    await Then('Admin should see new pop up with class details appears', null, { classpagefixture }); 
    await And('Admin should see batch name field and class topic are disabled', null, { classpagefixture }); 
=======
    await Then('Admin should see few input fields and their respective text boxes in the class details window'); 
>>>>>>> ad113fd34dc4b0a06198d71980986bed97337193
  });

});

// == technical section ==

test.afterEach('AfterEach Hooks', ({ $afterEach }) => {});

test.use({
  $test: ({}, use) => use(test),
<<<<<<< HEAD
  $uri: ({}, use) => use('features\\Class.feature'),
=======
  $uri: ({}, use) => use('features/Class.feature'),
>>>>>>> ad113fd34dc4b0a06198d71980986bed97337193
  $bddFileData: ({}, use) => use(bddFileData),
  $afterEachFixtures: ({ page }, use) => use({ page }),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":11,"tags":["@focus"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Class\"","children":[{"start":18,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the \" Manage Class\" page","stepMatchArguments":[{"group":{"start":25,"value":"\" Manage Class\"","children":[{"start":26,"value":" Manage Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
<<<<<<< HEAD
  {"pwTestLine":15,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Class\"","children":[{"start":18,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \" LMS - Learning Management System \" Title","stepMatchArguments":[{"group":{"start":21,"value":"\" LMS - Learning Management System \"","children":[{"start":22,"value":" LMS - Learning Management System ","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":19,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Class\"","children":[{"start":18,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \" Manage Class\" Header","stepMatchArguments":[{"group":{"start":21,"value":"\" Manage Class\"","children":[{"start":22,"value":" Manage Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":23,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Class\"","children":[{"start":18,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Search Bar in Manage class page","stepMatchArguments":[]}]},
=======
  {"pwTestLine":15,"pickleLine":14,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \" LMS - Learning Management System \" Title"}]},
  {"pwTestLine":19,"pickleLine":17,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true},{"pwStepLine":20,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \"Mange Class\" Header"}]},
  {"pwTestLine":23,"pickleLine":20,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true},{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Search Bar in Manage class page"}]},
>>>>>>> ad113fd34dc4b0a06198d71980986bed97337193
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
<<<<<<< HEAD
  {"pwTestLine":78,"pickleLine":79,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Class\"","children":[{"start":18,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":79,"gherkinStepLine":80,"keywordType":"Action","textWithKeyword":"When Admin clicks a \"Add New Class\" under the \"Class\" menu bar","stepMatchArguments":[{"group":{"start":15,"value":"\"Add New Class\"","children":[{"start":16,"value":"Add New Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"Class\"","children":[{"start":42,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":80,"gherkinStepLine":81,"keywordType":"Action","textWithKeyword":"And Admin selects class date in date picker","stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":82,"keywordType":"Outcome","textWithKeyword":"Then Admin should see no of class value is added automatically","stepMatchArguments":[]}]},
  {"pwTestLine":84,"pickleLine":84,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Class\"","children":[{"start":18,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":85,"gherkinStepLine":85,"keywordType":"Action","textWithKeyword":"When Admin clicks a \"Add New Class\" under the \"Class\" menu bar","stepMatchArguments":[{"group":{"start":15,"value":"\"Add New Class\"","children":[{"start":16,"value":"Add New Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"Class\"","children":[{"start":42,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":86,"gherkinStepLine":86,"keywordType":"Action","textWithKeyword":"And Admin selects class date in date picker","stepMatchArguments":[]},{"pwStepLine":87,"gherkinStepLine":87,"keywordType":"Outcome","textWithKeyword":"Then Admin should see weekends dates are disabled to select","stepMatchArguments":[]}]},
  {"pwTestLine":90,"pickleLine":89,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Class\"","children":[{"start":18,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":91,"gherkinStepLine":90,"keywordType":"Action","textWithKeyword":"When Admin clicks a \"Add New Class\" under the \"Class\" menu bar","stepMatchArguments":[{"group":{"start":15,"value":"\"Add New Class\"","children":[{"start":16,"value":"Add New Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"Class\"","children":[{"start":42,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":92,"gherkinStepLine":91,"keywordType":"Action","textWithKeyword":"And Admin clicks on save button without entering data","stepMatchArguments":[]},{"pwStepLine":93,"gherkinStepLine":92,"keywordType":"Outcome","textWithKeyword":"Then class won't be created and Admin gets error message","stepMatchArguments":[]}]},
  {"pwTestLine":96,"pickleLine":101,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Class\"","children":[{"start":18,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":97,"gherkinStepLine":102,"keywordType":"Action","textWithKeyword":"When Admin clicks a \"Add New Class\" under the \"Class\" menu bar","stepMatchArguments":[{"group":{"start":15,"value":"\"Add New Class\"","children":[{"start":16,"value":"Add New Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"Class\"","children":[{"start":42,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":98,"gherkinStepLine":103,"keywordType":"Action","textWithKeyword":"And Admin clicks Cancel Icon on Admin Details form","stepMatchArguments":[]},{"pwStepLine":99,"gherkinStepLine":104,"keywordType":"Outcome","textWithKeyword":"Then Class Details popup window should be closed without saving","stepMatchArguments":[]}]},
  {"pwTestLine":102,"pickleLine":106,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Class\"","children":[{"start":18,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":103,"gherkinStepLine":107,"keywordType":"Action","textWithKeyword":"When Admin clicks a \"Add New Class\" under the \"Class\" menu bar","stepMatchArguments":[{"group":{"start":15,"value":"\"Add New Class\"","children":[{"start":16,"value":"Add New Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"Class\"","children":[{"start":42,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":104,"gherkinStepLine":108,"keywordType":"Action","textWithKeyword":"And Admin clicks Close(X) Icon on Admin Details form","stepMatchArguments":[]},{"pwStepLine":105,"gherkinStepLine":109,"keywordType":"Outcome","textWithKeyword":"Then Class Details popup window should be closed without saving","stepMatchArguments":[]}]},
  {"pwTestLine":108,"pickleLine":114,"tags":["@only"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin logs in to LMS application and lands on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks the \"Class\" Navigation bar in the Header","isBg":true,"stepMatchArguments":[{"group":{"start":17,"value":"\"Class\"","children":[{"start":18,"value":"Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":109,"gherkinStepLine":115,"keywordType":"Action","textWithKeyword":"When Admin clicks on the \"edit\" icon","stepMatchArguments":[{"group":{"start":20,"value":"\"edit\"","children":[{"start":21,"value":"edit","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":110,"gherkinStepLine":116,"keywordType":"Outcome","textWithKeyword":"Then Admin should see new pop up with class details appears","stepMatchArguments":[]},{"pwStepLine":111,"gherkinStepLine":117,"keywordType":"Outcome","textWithKeyword":"And Admin should see batch name field and class topic are disabled","stepMatchArguments":[]}]},
=======
>>>>>>> ad113fd34dc4b0a06198d71980986bed97337193
]; // bdd-data-end