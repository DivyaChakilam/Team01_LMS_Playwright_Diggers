import {test as basetest} from 'playwright-bdd'
import { Loginpage } from '../PageObjects/LoginPageObjects';
import { ClassPage } from '../PageObjects/ClassPageObjects';
export const test=basetest.extend({
    // page: async ({ page }, use) => {
    //     // You can modify the 'page' fixture here if necessary
    //     await use(page);  // Use the 'page' fixture in your tests
    //   },
    loginpagefixture:async({page},use)=>{
        const loginpagefixture=new Loginpage(page); 
        await use(loginpagefixture)
    },
    classpagefixture:async({page},use)=>{
        const classpagefixture=new ClassPage(page); 
        await use(classpagefixture)
    },
})
