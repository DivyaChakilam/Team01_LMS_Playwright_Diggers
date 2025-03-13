Feature: Program page Visual validation

Background:
Given Admin logs in to LMS application and lands on home page
When Admin clicks the "Program" Navigation bar in the Header


   ################ Manage Program Page Visual Validation ###########################

@focus 
Scenario: Validating the program manage page
Then Admin should land on the " Manage Program" page

Scenario: Verify Logout displayed in menu bar
Then Admin should see "Logout" in menu bar














# npx playwright test features/Class.feature --headed
# npx bddgen

# npx bddgen
# npx playwright test --headed --project='chromium'
#  npm i tesseract.js@4.1.1
#  npx bddgen
#  npx playwright test --headed --project='chromium'
# npx playwright test features/Class.feature --headed --project='chromium

# // npx playwright test --headed --project='chromium'