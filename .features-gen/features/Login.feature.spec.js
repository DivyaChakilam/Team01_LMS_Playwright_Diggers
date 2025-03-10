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

  test.skip('Verify Admin is able to land on home page with invalid URL', { tag: ['@skip'] }, async ({ Given, When, Then }) => { 
    await Given('The browser is open'); 
    await When('Admin gives the invalid LMS portal URL'); 
    await Then('Admin should receive application error'); 
  });

  test('Verify the text spelling in the page', async ({ Then }) => { 
    await Then('Admin should see correct spellings in all fields'); 
  });

  test('Verify application name', { tag: ['@focus'] }, async ({ Then, loginpagefixture }) => { 
    await Then('Admin should see  LMS - Learning Management System', null, { loginpagefixture }); 
  });

  test('Verify company name', async ({ Then }) => { 
    await Then('Admin should see company name below the app name'); 
  });

  test('Validate sign in content', async ({ Then }) => { 
    await Then('Admin should see "Please login to LMS application"'); 
  });

  test('Verify text field is present', async ({ Then }) => { 
    await Then('Admin should see two text field'); 
  });

  test('Verify text on the first field', async ({ Then }) => { 
    await Then('Admin should see "User" in the first text field'); 
  });

  test('Verify asterisk next to USER text', async ({ Then }) => { 
    await Then('Admin should see asterisk mark symbol next to text for mandatory fields'); 
  });

  test('Verify text on the second field', async ({ Then }) => { 
    await Then('Admin should "Password" in the second text field'); 
  });

  test('Verify asterisk mark symbol next to password text', async ({ Then }) => { 
    await Then('Admin should see asterisk mark symbol next to password text'); 
  });

  test('Verify the alignment input field for the login', async ({ Then }) => { 
    await Then('Admin should see input field on the centre of the page'); 
  });

  test('verify Login button is present', async ({ Then }) => { 
    await Then('Admin should see login button'); 
  });

  test('Verify input descriptive text in password field', async ({ Then }) => { 
    await Then('Admin should see password in gray color'); 
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
  {"pwTestLine":15,"pickleLine":11,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","isBg":true},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given The browser is open"},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When Admin gives the invalid LMS portal URL"},{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Admin should receive application error"}]},
  {"pwTestLine":21,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then Admin should see correct spellings in all fields","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":20,"tags":["@focus"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then Admin should see  LMS - Learning Management System","stepMatchArguments":[]}]},
  {"pwTestLine":29,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Admin should see company name below the app name","stepMatchArguments":[]}]},
  {"pwTestLine":33,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then Admin should see \"Please login to LMS application\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Please login to LMS application\"","children":[{"start":18,"value":"Please login to LMS application","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":37,"pickleLine":29,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then Admin should see two text field","stepMatchArguments":[]}]},
  {"pwTestLine":41,"pickleLine":32,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then Admin should see \"User\" in the first text field","stepMatchArguments":[{"group":{"start":17,"value":"\"User\"","children":[{"start":18,"value":"User","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":45,"pickleLine":35,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then Admin should see asterisk mark symbol next to text for mandatory fields","stepMatchArguments":[]}]},
  {"pwTestLine":49,"pickleLine":38,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then Admin should \"Password\" in the second text field","stepMatchArguments":[{"group":{"start":13,"value":"\"Password\"","children":[{"start":14,"value":"Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":53,"pickleLine":41,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":54,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then Admin should see asterisk mark symbol next to password text","stepMatchArguments":[]}]},
  {"pwTestLine":57,"pickleLine":44,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then Admin should see input field on the centre of the page","stepMatchArguments":[]}]},
  {"pwTestLine":61,"pickleLine":47,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then Admin should see login button","stepMatchArguments":[]}]},
  {"pwTestLine":65,"pickleLine":50,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","isBg":true,"stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"Then Admin should see password in gray color","stepMatchArguments":[]}]},
]; // bdd-data-end