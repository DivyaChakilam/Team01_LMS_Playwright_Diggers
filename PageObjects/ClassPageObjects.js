require('dotenv').config();
exports.ClassPage=
class ClassPage {
    constructor(page) {
        this.page = page;
        this.user = page.locator('#username');
        this.password = page.locator('#password');
        this.login = page.locator('#login');
       // this.pageName = page.getByText('Manage Class');
        //this.pageNameLoc = page.locator('div.box');
       // this.titleLocator = page.getByText('LMS - Learning Management');
       // this.headerLocator =  page.getByText('Manage Class');
        //this.searchLocator =  page.getByRole('textbox', { name: 'Search...' });
        //getByText('In total there are 1 classes.')
        this.dataTableHeader = page.locator('//thead/tr/th');
        this.paginationEntriesLoc = page.locator('span.p-paginator-current');
        this.paginationButtons = page.locator('span.p-paginator-pages button');
        this.sortIconsLoc = page.locator('//thead/tr/th/p-sorticon');
        this.multipleDelBtnLoc = page.locator('div.box button');
        this.totalEntriesLoc = page.locator('div.p-d-flex');
        this.addNewClassLoc = page.getByRole('button',{ name: `` });
        this.PopUpLoc = page.locator('div.p-dialog');
        this.popUpFields = page.locator('div.p-field input.p-inputtext');
        this.cancelBtn = page. getByRole('button', { name: 'Cancel' });
        this.saveBtn = page.getByRole('button', { name: 'Save' });
        this.closeBtn = page.getByRole('button', { name: '' });
        this.classNoField = page.locator('#classNo');
        this.editBtnLoc = page.locator('span.pi-pencil');
        this.classDetails = page.getByText('Class Details');
        this.batchNameField = page.locator('#batchName');
        this.classTopicField = page.locator('#classTopic');
       // this.errorMessageLoc = page.locator('small');//it gives 6 elements

        // getByText('Batch Name is required.')
        // getByText('Class Topic is required.')
        // getByText('Class Date is required.')
        // getByText('No. of Classes is required.')
        // getByText('Staff Name is required.')
        // getByText('Status is required.')
        // Locators for input fields and their labels
        // this.batchNameLabel = page.getByText('Batch Name');
        // getByLabel('Class Details').getByText('Batch Name');
        // getByRole('textbox', { name: 'Select a Batch Name' })
        // getByLabel('Class Details').getByText('Class Topic')
        // getByRole('textbox', { name: 'Class Topic *' })
        // this.batchNameInput = page.locator('');
        // getByLabel('Class Details').getByText('Class Description')
        // getByRole('textbox', { name: 'Class Description' })
        // getByText('Select Class Dates')
        // locator('#icon')
        // getByText('No of Classes')
        // getByLabel('Class Details').getByText('Staff Name')
        // getByRole('textbox', { name: 'Select a Staff Name' })
        // getByLabel('Class Details').getByText('Status')
        // getByText('Status Active Inactive')
        // getByText('Comments')
        // getByRole('textbox', { name: 'Comments' })
        // getByText('Notes')
        // getByRole('textbox', { name: 'Notes' })
        // locator('#classRecordingPath')


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
    // async goToModule(moduleName)
    // {
    //     //dynamically pass the modulename
    //     await this.page.getByRole('button', { name: `${moduleName}` }).dblclick();
    // }
    // async getPageName()
    // {
    //     const pagename = await this.pageNameLoc.first().textContent();
    //     console.log(pagename);
    //     return pagename;
    // }
    // async getTitle() {
    //     const title = await this.titleLocator;  // Await the title() method
    //     console.log(title); // Log the title
    //     return title; // Return the title
    //   }
    // async headerCheck(headerName)
    // {

    //     //this.headerLocator =  await this.page.getByText('${headerName}');
    //     const headerLoc =  await this.page.getByText('${headerName}');
    //     //const header = await this.headerLocator;
    //     return headerLoc;
    // }
    // async searchBarVisibility()
    // {
    //     return await this.searchLocator;
    //}
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

    async gotToMenuItem(addNewOption,moduleName){
        await this.page.getByRole('button', { name: `${moduleName}` }).click();
        await this.page.getByRole('menuitem', { name: `${addNewOption}` }).click();

    }

    async isPopUpVisible()
    {
        return await this.PopUpLoc;
        //return await this.classDetailsPopUp.toBeVisible();

    }

    async isClassDetailsVisible()
    {
        return await this.classDetails;
    }

    async getFormFields()
    {
        return await this.popUpFields;
    }

    async isSaveBtnVisible()
    {
        return await this.saveBtn;
    }

    async isCancelBtnVisible()
    {
        return await this.cancelBtn;
    }
    async isCloseBtnVisible()
    {
        return await this.closeBtn;
    }
    async getLabel(labelName)
    {
        return await this.page.getByLabel('Class Details').getByText(`${labelName}`);
    }
    async getInput(inputFieldId)
    {

        return await this.page.getByRole('textbox', { name: `${inputFieldId}` });//(`#${inputFieldId}`);
    }

    async getClassNovalue()
    {

        return await this.classNoField.inputValue();
    }
    async clickSaveBtn()
    {
        await this.saveBtn.click();
    }
    async clickCancelBtn()
    {
        await this.cancelBtn.click();
    }
    async clickCloseIcon()
    {
        await this.closeBtn.click();
    }
    async getErrorMessage(errorMessage)
    {
         return await this.page.getByText(`${errorMessage}`);
    }

    async clickEditBtn()
    {
        await this.editBtnLoc.first().click();
    }
    async isBatchNameDisabled()
    {
        return await this.batchNameField;
    }
    async isClassTopicDisabled()
    {
        return await this.classTopicField;
    }



}

//export default { ClassPage };
