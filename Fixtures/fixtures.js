import {test as basetest} from 'playwright-bdd'
import { Loginpage } from '../PageObjects/LoginPageObjects';
export const test=basetest.extend({
    loginpagefixture:async({page},use)=>{
        const loginpagefixture=new Loginpage(page); 
        await use(loginpagefixture)
    }
})
