require('dotenv').config();
exports.CommonPage=
class CommonPage{
    constructor(page)
    {
        this.page=page
        //login related locators
        this.user = page.locator('#username');
        this.password = page.locator('#password');
        this.login = page.locator('#login');
        this.pageNameLoc = page.locator('div.box');
        //add new module(class/batch/program) popup locators
        this.cancelBtn = page. getByRole('button', { name: 'Cancel' });
        this.saveBtn = page.getByRole('button', { name: 'Save' });
        this.closeBtn = page.getByRole('button', { name: '' });
        this.titleLocator = page.getByText('LMS - Learning Management');
        this.searchLocator =  page.getByRole('textbox', { name: 'Search...' });

    }

    async validLogin() {
        await this.page.goto(process.env.baseUrl);
        // await this.page.context().clearCookies();
        // await this.page.reload();
        console.log('Loaded Username:', process.env.user_Name);
        console.log('Loaded Password:', process.env.passWord);
        // await this.page.evaluate(() => {
        //     document.querySelector("#username").setAttribute("autocomplete", "off");
        // });
        await this.user.fill(process.env.user_Name);
        await this.password.fill(process.env.passWord);
        await this.login.click();
    }
    async goToModule(moduleName)
    {
        //dynamically pass the modulename
        await this.page.getByRole('button', { name: `${moduleName}` }).dblclick();
    }
    async getPageName()
    {
        const pagename = await this.pageNameLoc.first().textContent();
        console.log(pagename);
        return pagename;
    }
    async getTitle() {
        const title = await this.titleLocator;  // Await the title() method
        console.log(title); // Log the title
        return title; // Return the title
    }
    async headerCheck(headerName)
    {
        //this.headerLocator =  await this.page.getByText('${headerName}');
        //const headerLoc =  await this.page.getByText('${headerName}');
        const headerLoc = await this.page.getByText(`${headerName}`);

        //const header = await this.headerLocator;
        return headerLoc;
    }

    async searchBarVisibility()
    {
        return await this.searchLocator;
    }
    async gotToMenuItem(addNewOption,moduleName){
        await this.page.getByRole('button', { name: `${moduleName}` }).click();
        await this.page.getByRole('menuitem', { name: `${addNewOption}` }).click();

    }


    

}
//export default { CommonPage };