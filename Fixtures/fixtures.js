import {test as basetest} from 'playwright-bdd'
import { Loginpage } from '../PageObjects/LoginPageObjects';
import { Homepage } from '../PageObjects/HomePageObjects';
import { ClassPage } from '../PageObjects/ClassPageObjects';
import { Logoutpage } from '../PageObjects/LogoutPageObjects';
import { ProgramPage } from '../PageObjects/PragramPageObjects';
//import { CommonPage } from '../PageObjects/CommonPageObjects';
import {CommonPage } from '../PageObjects/CommonPageObjects';
export const test=basetest.extend({

    loginpagefixture:async({page},use)=>{
        const loginpagefixture=new Loginpage(page); 
        await use(loginpagefixture)
    },

    homepagefixture:async({page},use)=>{
        const homepagefixture=new Homepage(page); 
        await use(homepagefixture)
    },

    ctx: async ({}, use) => {
        const ctx = {};
        await use(ctx);
      },

    classpagefixture:async({page},use)=>{
        const classpagefixture=new ClassPage(page); 
        await use(classpagefixture);
    },

    logoutpagefixture:async({page},use)=>{
        const logoutpagefixture=new Logoutpage(page); 
        await use(logoutpagefixture)
    },

    programpagefixture:async({page},use)=>{
        const programpagefixture=new ProgramPage(page);
        await use(programpagefixture)
    },
    commonpagefixture:async({page},use)=>{
        const commonpagefixture=new CommonPage(page);
        await use(commonpagefixture);
    }

})
