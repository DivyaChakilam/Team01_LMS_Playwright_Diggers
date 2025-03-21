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
        this.checkBox = page.locator('td div.p-checkbox');
        this.multipleDelBtnLoc = page.locator('div.box button');
        this.tableRows = page.locator('//tbody/tr');
        this.searchResults = page.locator('//table/tbody/tr');
        this.nextPageLoc = page.locator('span.pi-angle-right');
        this.lastPageLoc = page.locator('span.pi-angle-double-right');
        this.firstPageLoc = page.locator('span.pi-angle-double-left');
        this.previousPageLoc = page.locator('span.pi-angle-left');
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

      async getDateDescendingOrderList(originalList) {
        // Sort the original list in case-insensitive order
        const descendingOrderList = [...originalList].sort((a, b) => {
            // Extract first date from each string for sorting
            const dateA = new Date(a.trim().split(/\s+/)[0]); // Get first date in string
            const dateB = new Date(b.trim().split(/\s+/)[0]); // Get first date in string
          
            return dateB - dateA; // Sort in scending order
          });
          
        return descendingOrderList;
      }
      async selectCheckBox(rowNum,elementColumnNum)
      {
        await this.checkBox.nth(rowNum).click();
        const selectedElement = await this.page.locator(`//tbody/tr[${rowNum + 1}]/td[${elementColumnNum}]`).textContent();
        console.log("Selected Item",selectedElement);
        return selectedElement;
       }
      async isMultipleDelBtnEnabled()
      {
        return await this.multipleDelBtnLoc; 
      }
      async clickMultipleDelBtn()
      {
        await this.multipleDelBtnLoc.click();
      }
      async getAllElementsOfSelectedColumn(elementColumnNum)
      {
        return await this.page.locator(`//tbody/tr/td[${elementColumnNum}]`).allTextContents();
      }
      //selecting multiple checkboxes
      async selectCheckBoxes(fromRowNum,toRowNum,elementColumnNum)
      {
        const selectedElementNames = [];
  
        for (let i = fromRowNum; i <= toRowNum; i++) {
            
            await this.checkBox.nth(i).click();
            // Capture the program name from the same row (2nd column)
            const selectedElement = await this.page.locator(`//tbody/tr[${i + 1}]/td[${elementColumnNum}]`).textContent();
            selectedElementNames.push(selectedElement);
           }
           return selectedElementNames;
        }
        async serchText(text)
        {
          await this.searchLocator.fill(text);
      }

      async getSearchResults()
      {
          await this.searchResults.first().waitFor({ state: 'visible', timeout: 10000 });
          return await this.searchResults.allInnerTexts();
      }
      async validateSearchResults(searchResults, expectedValue) {
        // Check if the expected value exists in the search results
        const isMatch = searchResults.some(text => text.includes(expectedValue));
        return isMatch;  // Return the result (true/false)
      }

      async goToNextPage(){
        await this.nextPageLoc.click();
      }
      async goToLastPage(){
        await this.lastPageLoc.click();
      }
      async goToPreviousPage(){
        await this.previousPageLoc.click();
      }
      async goToFirstPage(){
        await this.firstPageLoc.click();
      }
      async getnextPageLoc()
      {
        return await this.nextPageLoc;
      }
      async getlastPageLoc()
      {
        return await this.lastPageLoc;
      }
      async getpreviousPageeLoc()
      {
        return await this.previousPageLoc;
      }
      async getfirstPageLoc()
      {
        return await this.firstPageLoc;
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