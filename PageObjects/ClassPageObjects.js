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
        this.rowLevelDelBtn = page.locator('span button.p-button-danger');
        this.yesBtn = page.getByRole('button', { name: 'Yes' });
        this.noBtn = page.getByRole('button', { name: 'No' })
        this.confirmLoc = page.getByText('Confirm');
       // this.errorMessageLoc = page.locator('small');//it gives 6 element
        //xpath locator for locating all the weekenddisabled elements from the caledar date picker with span
        //Now, to validate that all the weekend dates are disabled, we check if each <td> has a child <span> with the p-disabled class.
       this.weekendDisabledCells = page.locator("//tbody[contains(@class, 'ng-tns-c178-17')]//tr/td[position()=1 or position()=last()]/span[contains(@class, 'p-disabled')]");

       /* this is by using css slelector
       this.weekendDisabledCells = page.locator("tbody.ng-tns-c178-17 tr td:first-child span.p-disabled, " +
                                                     "tbody.ng-tns-c178-17 tr td:last-child span.p-disabled );*/
        this.datePickerLoc = page.locator('button.p-datepicker-trigger');


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
        const sortIcons = await this.sortIconsLoc;
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
    async isYesBtnVisible()
    {
        return await this.yesBtn;
    }
    async isNoBtnVisible()
    {
        return await this.noBtn;
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
    async clickRowLevelDelBtn()
    {
        await this.rowLevelDelBtn.first().click();
    }
    async isConfirmVisible()
    {
        return await this.confirmLoc.textContent();
    }
    async clickYesBtn()
    {
        await this.yesBtn.click();
    }
    async clickNoBtn()
    {
        await this.noBtn.click();
    }
    async getWeekendDisabledCells()
    {
        return await this.weekendDisabledCells;
    }
    async selectDates(targetDate)
    {
        await this.datePickerLoc.click();
         // Click next month button
        await this.page.locator("button.p-datepicker-next").click();
        // Select the given date in the next month
        await this.page.locator(`//td[not(contains(@class, 'p-disabled'))]/span[text()='${targetDate}']`).click();

    }


}

//export default { ClassPage };
