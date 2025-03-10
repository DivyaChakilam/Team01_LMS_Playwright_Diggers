require('dotenv').config();
exports.ClassPage=
class ClassPage {
    constructor(page) {
        this.page = page;
        this.user = page.locator('#username');
        this.password = page.locator('#password');
        this.login = page.locator('#login');
        this.pageName = page.getByText('Manage Class');
        this.pageNameLoc = page.locator('div.box');
        this.titleLocator = page.getByText('LMS - Learning Management');
        this.headerLocator =  page.getByText('Manage Class');
        this.searchLocator =  page.getByRole('textbox', { name: 'Search...' });
        //getByText('In total there are 1 classes.')
        this.dataTableHeader = page.locator('//thead/tr/th');
        this.paginationEntriesLoc = page.locator('span.p-paginator-current');
        this.paginationButtons = page.locator('span.p-paginator-pages button');
        this.sortIconsLoc = page.locator('//thead/tr/th/p-sorticon');
        this.multipleDelBtnLoc = page.locator('div.box button');
        this.totalEntriesLoc = page.locator('div.p-d-flex');
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
    async moduleClick(moduleName)
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
    async headerCheck()
    {
        const header = await this.headerLocator;
        return header;
    }
    async searchBarVisibility()
    {
        return await this.searchLocator;
    }
    async verifyDataTableHeader()
    {
        const headerCells = await this.dataTableHeader.allTextContents();
        return headerCells;
    }
    async verifyPaginationEntries()
    {
        return await this.paginationEntriesLoc;
    }
    async verifyPaginationEnabled()
    {
        const pagebuttons = await this.paginationButtons;
        return pagebuttons;

    }

    async verifySortIcons()
    {
        const sortIcons = await this.searchLocator;
        return sortIcons;
    }

    async verifyMultipleDeleteBtn()
    {
        return await this.multipleDelBtnLoc;
    }

    async verifyTotalEntries()
    {
        return await this.totalEntriesLoc;
    }
}

//export default { ClassPage };
