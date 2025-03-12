import {test as basetest} from 'playwright-bdd'
import { Loginpage } from '../PageObjects/LoginPageObjects';
import { ClassPage } from '../PageObjects/ClassPageObjects';
import { ProgramPage } from '../PageObjects/ProgramPageObjects';
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
        await use(classpagefixture)
    },

    programpagefixture:async({page},use)=>{
        const programpagefixture=new ProgramPage(page);
        await use(programpagefixture)
    }

})
