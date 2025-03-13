import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
import {test} from '../Fixtures/fixtures'
const { expect } = require('@playwright/test');



/*****************          Program Page Visual Validation          *****************/
 
Then('Admin should see {string} in menu bar', async ({programpagefixture} ) => {
  const logout = await programpagefixture.getLogOutNm();
  await expect(logout).toBeVisible();

});



  