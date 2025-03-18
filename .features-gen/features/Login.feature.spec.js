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

  test('Verify Admin is able to land on home page with invalid URL', async ({ Given, page, When, Then }) => { 
    await Given('The browser is open', null, { page }); 
    await When('Admin gives the invalid LMS portal URL', null, { page }); 
    await Then('Admin should receive application error', null, { page }); 
  });

  test('Verify for broken link', async ({ When, page, Then, loginpagefixture }) => { 
    await When('Admin gives the correct LMS portal URL', null, { page }); 
    await Then('HTTP response >= 400. Then the link is broken', null, { loginpagefixture }); 
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
  {"pwTestLine":15,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given The browser is open","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When Admin gives the invalid LMS portal URL","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then Admin should receive application error","stepMatchArguments":[]}]},
  {"pwTestLine":21,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then HTTP response >= 400. Then the link is broken","stepMatchArguments":[{"group":{"start":17,"value":"400","children":[]},"parameterTypeName":"int"}]}]},
  {"pwTestLine":26,"pickleLine":20,"tags":["@fail"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then Admin should see one dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":25,"tags":["@fail"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then Admin should see \"select the role \" placeholder in dropdown","stepMatchArguments":[{"group":{"start":17,"value":"\"select the role \"","children":[{"start":18,"value":"select the role ","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":38,"pickleLine":30,"tags":["@fail"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then Admin should see \"Admin , staff, student\" options in dropdown","stepMatchArguments":[{"group":{"start":17,"value":"\"Admin , staff, student\"","children":[{"start":18,"value":"Admin , staff, student","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":44,"pickleLine":34,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then Admin should see correct spellings in all fields","stepMatchArguments":[]}]},
  {"pwTestLine":49,"pickleLine":38,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then Admin should see \"Please login to LMS application\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Please login to LMS application\"","children":[{"start":18,"value":"Please login to LMS application","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":54,"pickleLine":42,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then Admin should see two text field","stepMatchArguments":[]}]},
  {"pwTestLine":59,"pickleLine":46,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then Admin should see \"User\" in the first text field","stepMatchArguments":[{"group":{"start":17,"value":"\"User\"","children":[{"start":18,"value":"User","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":64,"pickleLine":50,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":51,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":52,"keywordType":"Outcome","textWithKeyword":"Then Admin should \"Password\" in the second text field","stepMatchArguments":[{"group":{"start":13,"value":"\"Password\"","children":[{"start":14,"value":"Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":69,"pickleLine":54,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":70,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then Admin should see asterisk mark symbol next to text for mandatory fields","stepMatchArguments":[]}]},
  {"pwTestLine":74,"pickleLine":58,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":59,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":76,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"Then Admin should see asterisk mark symbol next to password text","stepMatchArguments":[]}]},
  {"pwTestLine":79,"pickleLine":62,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":63,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"Then Admin should see login button","stepMatchArguments":[]}]},
  {"pwTestLine":84,"pickleLine":66,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":67,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":68,"keywordType":"Outcome","textWithKeyword":"Then Admin should see input field on the centre of the page","stepMatchArguments":[]}]},
  {"pwTestLine":89,"pickleLine":70,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":71,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":91,"gherkinStepLine":72,"keywordType":"Outcome","textWithKeyword":"Then Admin should see  LMS - Learning Management System","stepMatchArguments":[]}]},
  {"pwTestLine":94,"pickleLine":74,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":95,"gherkinStepLine":75,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":96,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then Admin should see company name below the app name","stepMatchArguments":[]}]},
  {"pwTestLine":99,"pickleLine":78,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":100,"gherkinStepLine":79,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":101,"gherkinStepLine":80,"keywordType":"Outcome","textWithKeyword":"Then Admin should see user in gray color","stepMatchArguments":[]}]},
  {"pwTestLine":104,"pickleLine":82,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given The browser is open","isBg":true,"stepMatchArguments":[]},{"pwStepLine":105,"gherkinStepLine":83,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":106,"gherkinStepLine":84,"keywordType":"Outcome","textWithKeyword":"Then Admin should see password in gray color","stepMatchArguments":[]}]},
]; // bdd-data-end