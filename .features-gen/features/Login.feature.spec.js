// Generated from: features\Login.feature
import { test } from "../../Fixtures/fixtures.js";

test.describe('Login  Page Verification', () => {

  test.beforeEach('Background', async ({ Given, page }) => {
    await Given('The browser is open', null, { page }); 
  });
  
  test('Verify Admin is able to land on login page', async ({ When, page, Then }) => { 
    await When('Admin gives the correct LMS portal URL', null, { page }); 
    await Then('Admin should land on the login page', null, { page }); 
  });

  test('Verify Admin is able to land on home page with invalid URL', { tag: ['@fail'] }, async ({ Given, page, When, Then }) => { 
    test.fail();
    await Given('The browser is open', null, { page }); 
    await When('Admin gives the invalid LMS portal URL', null, { page }); 
    await Then('Admin should receive application error', null, { page }); 
  });

  test('Verify dropdown is present', { tag: ['@fail'] }, async ({ When, page, Then }) => { 
    test.fail();
    await When('Admin gives the correct LMS portal URL', null, { page }); 
    await Then('Admin should see one dropdown'); 
  });

  test('Verify placeholder in dropdown to select role', { tag: ['@fail'] }, async ({ When, page, Then }) => { 
    test.fail();
    await When('Admin gives the correct LMS portal URL', null, { page }); 
    await Then('Admin should see "select the role " placeholder in dropdown'); 
  });

  test('Verify dropdown option to select role', { tag: ['@fail'] }, async ({ When, page, Then }) => { 
    test.fail();
    await When('Admin gives the correct LMS portal URL', null, { page }); 
    await Then('Admin should see "Admin , staff, student" options in dropdown'); 
  });

  test('Verify the text spelling in the page', async ({ When, page, Then, loginpagefixture }) => { 
    await When('Admin gives the correct LMS portal URL', null, { page }); 
    await Then('Admin should see correct spellings in all fields', null, { loginpagefixture }); 
  });

  test('Validate sign in content', async ({ When, page, Then, loginpagefixture }) => { 
    await When('Admin gives the correct LMS portal URL', null, { page }); 
    await Then('Admin should see "Please login to LMS application"', null, { loginpagefixture }); 
  });

  test('Verify text field is present', async ({ When, page, Then, loginpagefixture }) => { 
    await When('Admin gives the correct LMS portal URL', null, { page }); 
    await Then('Admin should see two text field', null, { loginpagefixture }); 
  });

  test('Verify text on the first field', async ({ When, page, Then, loginpagefixture }) => { 
    await When('Admin gives the correct LMS portal URL', null, { page }); 
    await Then('Admin should see "User" in the first text field', null, { loginpagefixture }); 
  });

  test('Verify text on the second field', async ({ When, page, Then, loginpagefixture }) => { 
    await When('Admin gives the correct LMS portal URL', null, { page }); 
    await Then('Admin should "Password" in the second text field', null, { loginpagefixture }); 
  });

  test('Verify asterisk next to USER text', async ({ When, page, Then, loginpagefixture }) => { 
    await When('Admin gives the correct LMS portal URL', null, { page }); 
    await Then('Admin should see asterisk mark symbol next to text for mandatory fields', null, { loginpagefixture }); 
  });

  test('Verify asterisk mark symbol next to password text', async ({ When, page, Then, loginpagefixture }) => { 
    await When('Admin gives the correct LMS portal URL', null, { page }); 
    await Then('Admin should see asterisk mark symbol next to password text', null, { loginpagefixture }); 
  });

  test('verify Login button is present', async ({ When, page, Then, loginpagefixture }) => { 
    await When('Admin gives the correct LMS portal URL', null, { page }); 
    await Then('Admin should see login button', null, { loginpagefixture }); 
  });

  test('Verify the alignment input field for the login', async ({ When, page, Then, loginpagefixture }) => { 
    await When('Admin gives the correct LMS portal URL', null, { page }); 
    await Then('Admin should see input field on the centre of the page', null, { loginpagefixture, page }); 
  });

  test('Verify application name', async ({ When, page, Then, loginpagefixture, ctx }) => { 
    await When('Admin gives the correct LMS portal URL', null, { page }); 
    await Then('Admin should see  LMS - Learning Management System', null, { loginpagefixture, ctx }); 
  });

  test('Verify company name', async ({ When, page, Then, loginpagefixture, ctx }) => { 
    await When('Admin gives the correct LMS portal URL', null, { page }); 
    await Then('Admin should see company name below the app name', null, { loginpagefixture, ctx }); 
  });

  test('Verify input descriptive text in user field', async ({ When, page, Then, loginpagefixture }) => { 
    await When('Admin gives the correct LMS portal URL', null, { page }); 
    await Then('Admin should see user in gray color', null, { loginpagefixture, page }); 
  });

  test('Verify input descriptive text in password field', async ({ When, page, Then, loginpagefixture }) => { 
    await When('Admin gives the correct LMS portal URL', null, { page }); 
    await Then('Admin should see password in gray color', null, { loginpagefixture, page }); 
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
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the login page","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":11,"tags":["@fail"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given The browser is open","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When Admin gives the invalid LMS portal URL","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Admin should receive application error","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":17,"tags":["@fail"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then Admin should see one dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":22,"tags":["@fail"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Admin should see \"select the role \" placeholder in dropdown","stepMatchArguments":[{"group":{"start":17,"value":"\"select the role \"","children":[{"start":18,"value":"select the role ","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":34,"pickleLine":27,"tags":["@fail"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then Admin should see \"Admin , staff, student\" options in dropdown","stepMatchArguments":[{"group":{"start":17,"value":"\"Admin , staff, student\"","children":[{"start":18,"value":"Admin , staff, student","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":40,"pickleLine":31,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then Admin should see correct spellings in all fields","stepMatchArguments":[]}]},
  {"pwTestLine":45,"pickleLine":35,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then Admin should see \"Please login to LMS application\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Please login to LMS application\"","children":[{"start":18,"value":"Please login to LMS application","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":50,"pickleLine":39,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":40,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then Admin should see two text field","stepMatchArguments":[]}]},
  {"pwTestLine":55,"pickleLine":43,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":44,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then Admin should see \"User\" in the first text field","stepMatchArguments":[{"group":{"start":17,"value":"\"User\"","children":[{"start":18,"value":"User","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":60,"pickleLine":47,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":48,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then Admin should \"Password\" in the second text field","stepMatchArguments":[{"group":{"start":13,"value":"\"Password\"","children":[{"start":14,"value":"Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":65,"pickleLine":51,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":52,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then Admin should see asterisk mark symbol next to text for mandatory fields","stepMatchArguments":[]}]},
  {"pwTestLine":70,"pickleLine":55,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":56,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":57,"keywordType":"Outcome","textWithKeyword":"Then Admin should see asterisk mark symbol next to password text","stepMatchArguments":[]}]},
  {"pwTestLine":75,"pickleLine":59,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":76,"gherkinStepLine":60,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":77,"gherkinStepLine":61,"keywordType":"Outcome","textWithKeyword":"Then Admin should see login button","stepMatchArguments":[]}]},
  {"pwTestLine":80,"pickleLine":63,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":64,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":82,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then Admin should see input field on the centre of the page","stepMatchArguments":[]}]},
  {"pwTestLine":85,"pickleLine":67,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":68,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":87,"gherkinStepLine":69,"keywordType":"Outcome","textWithKeyword":"Then Admin should see  LMS - Learning Management System","stepMatchArguments":[]}]},
  {"pwTestLine":90,"pickleLine":71,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":91,"gherkinStepLine":72,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":92,"gherkinStepLine":73,"keywordType":"Outcome","textWithKeyword":"Then Admin should see company name below the app name","stepMatchArguments":[]}]},
  {"pwTestLine":95,"pickleLine":75,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":96,"gherkinStepLine":76,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":97,"gherkinStepLine":77,"keywordType":"Outcome","textWithKeyword":"Then Admin should see user in gray color","stepMatchArguments":[]}]},
  {"pwTestLine":100,"pickleLine":79,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":101,"gherkinStepLine":80,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":102,"gherkinStepLine":81,"keywordType":"Outcome","textWithKeyword":"Then Admin should see password in gray color","stepMatchArguments":[]}]},
]; // bdd-data-end