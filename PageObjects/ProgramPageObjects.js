const { default: playwrightConfig } = require('../playwright.config');

require('dotenv').config();
exports.ProgramPage=
class ProgramPage {
    constructor(page) {
        this.page = page;
        // this.user = page.locator('#username');
        // this.password = page.locator('#password');
        // this.login = page.locator('#login');
        this.pageName = page.getByText(' Manage Program');
        this.logOutNm = page.getByText('Logout');


    }

    // async validLogin() {
    //     await this.page.goto(process.env.baseUrl);
    //     // await this.page.context().clearCookies();
    //     // await this.page.reload();
    //     console.log('Loaded Username:', process.env.user_Name);
    //     console.log('Loaded Password:', process.env.passWord);
    //     // await this.page.evaluate(() => {
    //     //     document.querySelector("#username").setAttribute("autocomplete", "off");
    //     // });
    //     await this.user.fill(process.env.user_Name);
    //     await this.password.fill(process.env.passWord);
    //     await this.login.click();
    // }

    async getPageName()
    {
        const pagename = await this.pageNameLoc.first().textContent();
        console.log(pagename);
        return pagename;
    }

    async getLogOutNm()
    {
       return await this.logOutNm;
    }
}

