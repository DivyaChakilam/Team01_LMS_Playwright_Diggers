exports.ProgramPage =
    class ProgramPage {
        constructor(page) {
            this.page = page
            this.url = 'https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/program'
            this.pgmmodule = page.getByRole('button', { name: 'Program' })
            this.newpgmbutton = page.getByRole('menuitem', { name: 'Add New Program' })
            this.newpgmdialog = page.getByRole('dialog', { name: 'Program Details' });
            this.newpgmname = page.getByRole('textbox', { name: 'Name *' })
            this.newpgmdescription = page.getByRole('textbox', { name: 'Description *' })
            this.newpgmstatus = page.locator('.p-radiobutton-box').first()
            this.newpgmsave = page.getByRole('button', { name: 'Save' })
            this.newpgmerrormsg = page.getByText('Program name is already exist.')
            this.deletebutton = page.locator('mat-card-title').getByRole('button')
            this.deleteicon = page.locator('#deleteProgram')
            this.delconfpopup = page.locator('div.p-confirm-dialog')
            this.yesbutton = page.getByRole('button', { name: 'Yes' })
            this.nobutton = page.getByRole('button', { name: 'No' })
            this.alertbox = page.locator('.p-toast-message-text')
            this.closebutton = page.getByRole('button', { name: '' })
            this.checkbox = page.locator('.p-checkbox-box ')
            this.datatable = page.locator('mat-card-content.mat-card-content')
            this.nextbutton = page.getByRole('button', { has: page.locator('.p-paginator-next span') });
            this.programtable = this.datatable
            this.search = page.getByRole('textbox', { name: 'Search...' })
            this.selectedData = [];
            this.pageName = page.getByText(' Manage Program');
            this.logOutNm = page.getByText('Logout');
            // this.pageNameLoc = page.getByRole('textbox', { name: 'User' }).click();

            this.textLMS = page.getByText('LMS - Learning Management');
            // this.menuItemSubMenu = page.getByRole('submenu', { name: 'Add New Program' });
            // this.menuItemSubMenu = page.getByText('Add New Program');
            this.menuItemSubMenu = this.page.locator("//button[text()='Add New Program']");


            this.menuItemsLocator = page.locator('//div[@class="ng-star-inserted"]');

            this.headerPrPage = page.getByText('LMS - Learning Management System ProgramBatchClassLogout');



            this.twoTextBoxes = page.locator('//input[@id="programName"] | //input[@id="programDescription"]');
            this.secondTextBoxes = page.locator('(//input[@required])[2]');
            this.lmsText = page.getByText(' LMS - Learning Management System ');
            this.clickAddNewPrBtn = page.getByRole('menuitem', { name: 'Add New Program' });

            this.dataTableHeaderProgram = page.locator('//thead/tr/th');
            this.programClickBtn = page.getByRole('button', { name: 'Program' });
            this.clickAddNewProgram = page.getByRole('button', { name: 'Add New Program' });
            this.programDesBox = page.locator('//input[@id="programDescription"]');
            
            this.firstRadBtn = page.locator('.p-radiobutton-box').first();
            this.saveBtn = page.getByText('Save');
            this.programClickBtn = page.getByRole('button', { name: 'Program' });
        
            this.menuItemSubMenu =page.getByRole('menuitem', { name: 'Add New Program' });
        


            // this.toastMessage = page.locator('div.p-toast');
            this.successMessage = page.getByText('Program Created Successfully');






            this.footerText = page.locator('//div[@class="p-d-flex p-ai-center p-jc-between ng-star-inserted"]');








        }
        //     async getPageName()
        // {
        //     const pagename = await this.pageNameLoc.first().textContent();
        //     console.log(pagename);
        //     return pagename;
        // }
        async getLogOutNm() {
            return await this.logOutNm;
        }

        async getpageName() {
            return await this.pageName;
        }
        async getmenuItemSubMenu() {
            return await this.menuItemSubMenu.click();
        }

        async getmenuBar() {
            return await this.menuBar;
        }

        async getmenuItemsLocator() {
            return await this.menuItemsLocator;

        }
        async getheaderPrPage() {
            return await this.headerPrPage;
        }







        //creating new Program to avoid flaky tests for Delete Program modules
        async createpgm(pname, pdescription) {
            await this.pgmmodule.click()
            await this.newpgmbutton.click()
            await this.newpgmdialog.waitFor({ state: 'visible' });
            //await expect( this.newpgmdialog).toBeVisible()
            await this.newpgmname.click()
            await this.newpgmname.fill(pname)
            await this.newpgmdescription.click()
            await this.newpgmdescription.fill(pdescription)
            await this.newpgmstatus.click()
            await this.newpgmsave.click()
            if (this.newpgmerrormsg.isVisible()) {
                await this.closebutton.click()
            }
        }
        //Clicks the first delete icon on the page
        async clickdeleteicon() {
            await this.deleteicon.nth(0).waitFor({ state: 'visible' });
            // await this.deleteicon.nth(0).dbl
            await this.deleteicon.nth(0).click({ force: true })
            await this.deleteicon.nth(0).click({ force: true })
        }
        async clickYes() {
            await this.yesbutton.waitFor({ state: 'visible' });
            await this.yesbutton.click()
        }
        async clickNo() {
            await this.nobutton.waitFor({ state: 'visible' });
            await this.nobutton.click()
        }
        async clickclose() {
            await this.closebutton.waitFor({ state: 'visible' });
            await this.closebutton.click()
        }
        async searchenter(arg) {
            await this.search.click()
            await this.search.fill(arg)
        }
        async deleteprogram() {
            await this.deleteicon.nth(4).waitFor({ state: 'visible' });
            await this.deleteicon.nth(4).click({ force: true })
            await this.deleteicon.nth(4).click({ force: true })
        }
        async multipleselect() {
            await this.checkbox.first().check()
        }
        async multipledelete() {
            await this.deletebutton.click()
        }
        //checkboxes first three items of the Datatable
        async checkthreeitems() {
            await this.checkbox.nth(1).check()
            await this.checkbox.nth(2).check()
            await this.checkbox.nth(3).check()
        }
        //returns program names of all checkboxed rows
        async checkboxeddata() {
            await this.programtable.locator('tbody tr').first().waitFor({ state: 'visible' });
            const rowsel = await this.programtable.locator('tbody tr')
            for (let i = 0; i < await rowsel.count(); i++) {
                const row = rowsel.nth(i);
                const checkbox = row.locator('.p-checkbox-box');
                if (await checkbox.isChecked()) {
                    // Extract text from specific columns (e.g., second column)
                    const rowData = await row.locator('td').nth(1).textContent();
                    this.selectedData.push(rowData);
                }
            }
            //          console.log("Selected rows data:", this.selectedData);
            return (this.selectedData)
        }
        async columncount() {
            await this.programtable.locator('thead tr th').first().waitFor({ state: 'visible' });
            const columnsel = await this.programtable.locator('thead tr th')
            console.log("Number of columns: ", await columnsel.count())
            return columnsel.count()
        }
        async rowcount() {
            await this.programtable.locator('tbody tr').first().waitFor({ state: 'visible' });
            const rowsel = await this.programtable.locator('tbody tr')
            console.log("Number of rows: ", await rowsel.count())
            return rowsel.count()
        }


        async getTwoTextBoxes() {
            return await this.twoTextBoxes;
        }

        async getSecondTextBoxes() {
            return await this.secondTextBoxes;

        }

        async getLMSText() {
            const textContent = await this.lmsText.textContent();  // Fetch text content
            console.log("Fetched LMS Text:", textContent);  // Log the text
            return textContent;
        }

        async getprogramClickBtn() {
            return await this.programClickBtn.click();
        }

        async getclickAddNewPrBtn() {
            return await this.clickAddNewPrBtn.click();

        }

        async gotToMenuPrItem(addNewOption,moduleName){
            await this.page.getByRole('button', { name: `${moduleName}` }).click();
            await this.page.getByRole('menuitem', { name: `${addNewOption}` }).click();
    
        }

        async getAddNewProgramPopup(){
            await this.programClickBtn.click();
             await this.menuItemSubMenu.click();
         
         }
         



        async enterProgramDes(description) {
            console.log('Expect is:', expect); // Debugging log
            await expect(this.programDesBox).toBeVisible(); // Ensure visibility
            await this.programDesBox.fill(description,{delay:100}); // Fill the description text box
            
        }
        
        async getProgramDes() {
            await this.programDesBox.waitFor(); //Ensure element is ready before reading value
            return await this.programDesBox.inputValue();
        }

        async getFirstRadBtn(){
            return await this.firstRadBtn;
        }

        async getSaveBtn(){
            return await this.saveBtn.click();
        }

        async submitProgram() {
            await this.firstRadBtn.click();
            await this.saveBtn.click();
        }

        // async gettoastMessage() {
        //     // const toastMessage = await this.toastMessage.textContent();
        //     console.log('Toast Message :', toastMessage);
        //     }

        // async getsuccessMessage(){
        //     return await this.successMessage.waitFor({ state: "visible", timeout: 1000 });
        // }
            

        async getSuccessMessageFromToast() {
            const toastLocator = this.page.successMessage; // Update with actual selector
            await toastLocator.waitFor({ state: "visible", timeout: 3000 }); // Wait for message
            return await toastLocator.innerText();
        }
        

        async getDataTableHeaderProgram() {
            const headerCellsProgram = await this.dataTableHeaderProgram.allTextContents();
            return headerCellsProgram;
        }

        async getfooterText() {

            const footerText = await this.footerText;

            return footerText;
        }









    }








