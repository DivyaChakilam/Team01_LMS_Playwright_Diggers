import {test as basetest} from 'playwright-bdd'
import { Loginpage } from '../PageObjects/LoginPageObjects';
import { ClassPage } from '../PageObjects/ClassPageObjects';
//import { CommonPage } from '../PageObjects/CommonPageObjects';
import {CommonPage } from '../PageObjects/CommonPageObjects';
export const test=basetest.extend({
    // page: async ({ page }, use) => {
    //     // You can modify the 'page' fixture here if necessary
    //     await use(page);  // Use the 'page' fixture in your tests
    //   },
    loginpagefixture:async({page},use)=>{
        const loginpagefixture=new Loginpage(page); 
        await use(loginpagefixture)
    },

    ctx: async ({}, use) => {
        const ctx = {};
        await use(ctx);
      },

    classpagefixture:async({page},use)=>{
        const classpagefixture=new ClassPage(page); 
        await use(classpagefixture);
    },
    commonpagefixture:async({page},use)=>{
        const commonpagefixture=new CommonPage(page);
        await use(commonpagefixture);
    }
    

})
