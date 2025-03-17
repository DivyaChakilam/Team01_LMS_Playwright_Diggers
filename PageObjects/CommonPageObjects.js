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

    async clickOnSortIcon(headerName)
    {
        await this.page.getByRole('columnheader', { name: new RegExp(`^${headerName}.*`) }).locator('i').click();
    }

    async getOriginalList(headerNum) {
        const elementsListLoc = `//tbody/tr/td[${headerNum}]`;

       // Small delay to ensure sorting is completed
        await this.page.waitForTimeout(1500);

        // Locate all matching elements
        const elementsList = this.page.locator(elementsListLoc);
        // Extract and return the text content of each element
        const originalList = await elementsList.allTextContents();
        // console.log(originalList);
        // console.log("Type of Original List:", typeof originalList);
        // console.log("Is Array:", Array.isArray(originalList));
         return originalList;
    }

     async getAscendingOrderList(originalList) {
        // Sort the original list in case-insensitive order
        const ascendingOrderList = [...originalList].sort((a, b) =>
          a.localeCompare(b, undefined, { sensitivity: 'base' })
        );
        return ascendingOrderList;
      }
//handling sorting for date field
      async getDateAscendingOrderList(originalList) {
        // Sort the original list in case-insensitive order
        const ascendingOrderList = [...originalList].sort((a, b) => {
            // Extract first date from each string for sorting
            const dateA = new Date(a.trim().split(/\s+/)[0]); // Get first date in string
            const dateB = new Date(b.trim().split(/\s+/)[0]); // Get first date in string
          
            return dateA - dateB; // Sort in ascending order
          });
          
        return ascendingOrderList;
      }

      async getDescendingOrderList(originalList) {
        // Sort the original list in case-insensitive order
        const ascendingOrderList = [...originalList].sort((a, b) =>
          b.localeCompare(a, undefined, { sensitivity: 'base' })
        );
        return ascendingOrderList;
      }



    

}
//export default { CommonPage };
//sorting technique : Ascending order
/**Creating a Copy: To avoid mutating the original array, we create a shallow copy using the spread operator ([...]). This ensures that the original list remains unchanged during sorting.

Sorting Mechanism: The sort() method is called on the copied array. Inside the sort() method:

localeCompare Function: This function compares two strings in a locale-aware manner. By default, localeCompare is case-sensitive.

Locale Parameter (undefined): Passing undefined allows localeCompare to use the default locale, which is suitable for general purposes.

Options Object: The { sensitivity: 'base' } option ensures that the comparison is case-insensitive, treating characters like 'a' and 'A' as equal.

This approach ensures that the array is sorted in ascending order without considering case differences. */