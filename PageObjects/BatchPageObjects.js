require('dotenv').config();
exports.BatchPage =
  class BatchPage {
    constructor(page) {
      this.page = page;
      this.user = page.locator('#username');
      this.password = page.locator('#password');
      this.login = page.locator('#login');
      this.pageName = page.getByText(' Manage Batch');
      this.pagelocator = page.getByText(' LMS - Learning Management System ');
      //this.batchDataTableHeader = page.getBylocator("dataTableHeader = page.locator");
      this.batchDataTableHeader = page.locator('table thead tr th');
      this.DisabledDeleteIcon = page.locator("//button[span[contains(@class, 'pi-trash')] and @disabled]");
      this.PaginationEntriesBatch = page.locator('#batchName');
      this.BatcheditBtnLoc = page.locator("(//*[contains(@class, 'p-button-icon') and contains(@class, 'pi-pencil')])[1]");
      this.BatchgetTitle = page.locator("//button[.//span[contains(text(),'Batch')]]");
      this.BatchDeleteIcon = page.locator("(//span[contains(@class, 'p-button-icon') and contains(@class, 'pi-trash')])[1]");
      this.BatchHeadercheckbox = page.locator('(//div[@role="checkbox" and contains(@class, "p-checkbox-box")])[1]');
      this.BatchCheckbox = page.locator('(//div[@role="checkbox" and contains(@class, "p-checkbox-box")])[2]');
      this.BatchSortIcons = page.locator('//thead/tr/th/p-sorticon');
      //this.NavigationOption = page.locator('//button[.//span[contains(text(),"Batch")]]');
      //this.BatchAddNewBatch = page.locator('//button[@role="menuitem"]')
      this.BatchNavigationOption = page.locator('//button[.//span[contains(text(),"Batch")]]');
      this.SubAddNewBatch = page.locator('//*[@id="mat-menu-panel-1"]/div/button');
      // this.BatchDetailsPopUp = page.locator(' //span[contains(text(), "Batch Details")]');
      this.BatchDetailsPopUp = page.locator('//span[contains(@class, "p-dialog-title") and contains(text(), "Batch Details")]');
      this.BatchPopUpSavebtn = page.locator('//button[span[contains(text(), "Save")]]');
      this.BatchpopUpCancelbtn = page.locator('//button[span[contains(text(), "Cancel")]]');
      this.BatchPopUpClosebtn = page.locator('//span[contains(@class, "p-dialog-header-close-icon")]');
      // this.BatchEditButton = page.locator('await page.getByRole("textbox", { name: "User" }');
      this.BatchEditButton = page.locator('//button[span[contains(@class, "p-button-icon") and contains(@class, "pi-pencil")]]')[1];
      // this.ProgramFieldBox = page.locator('//p-dropdown[@placeholder="Select a Program name"]');
      this.ProgramFieldBox = page.locator('#programName');
      this.BatchFieldBox = page.locator('//input[@id="batchName" and @disabled][2]');
      this.BatchDiscriptionBox = page.locator('//input[@id="batchDescription"]');
      this.BatchnoOfClassesBox = page.locator('//input[@id="batchNoOfClasses"]');
      //this.BatchErrorMsg = page.locator('//small[contains(text(), "This field should start with an alphabet")]');
      // this.BatchUpdateSucces = page.locator('//div[normalize-space(text())="batch Updated"]');
      this.toastMessage = page.locator('div.p-toast');
      this.BatchErrorMsg = page.locator('Number of classes is required.');
      this.NoOfClassesErrorMsg = page.locator('Number of classes is required.');
      this.searchInput = page.getByPlaceholder('Search Batch');
      this.batchTableRows = page.locator('table tbody tr');



    }


    




    async verifyBatchDataTableHeader() {
      return await this.batchDataTableHeader.allTextContents();
    }


    async isDeleteIconDisabled() {
      
      return await this.DisabledDeleteIcon;
    }
    async verifyBatchPaginationEntries() {
      return await this.PaginationEntriesBatch;

    }
    async verifyBatchEditIcon() {
      await this.BatcheditBtnLoc.first().click();
      return this.BatchEditButton

      // 

    }


    async verifyBatchgetTitle() {
      return await this.BatchgetTitle;
    }

    async verifyBatchDeleteIcon() {
      return await this.BatchDeleteIcon;
    }



    async verifyBatchcheckbox() {
      return await this.BatchCheckbox;
    }
    async verifyBatchDatatableHeadercheckbox() {
      return await this.BatchHeadercheckbox;
    }

    async verifyBatchpageSortIcons() {
      const sortIcons = await this.BatchSortIcons
      return sortIcons;
    }
    async verifyBatchNavigationOption() {
      return this.BatchNavigationOption;
    }

    async verifySubMenu() {
      return this.SubAddNewBatch;
    }

    async BatchgetFormFields() {
      return this.BatchgetFormFields;
    }



    async verifyBatchDetailsPopUp() {
      await this.BatchDetailsPopUp.waitFor({ state: 'visible', timeout: 30000 }); // Ensure the element is visible
      return this.BatchDetailsPopUp;
    }
    async verifyBatchpopUpCancelbtn() {
      return this.BatchpopUpCancelbtn;
    }

    async verifyBatchPopUpSavebtn() {
      return this.BatchPopUpSavebtn;

    }


    async verifyBatchPopUpClosebtn() {
      return this.BatchPopUpClosebtn;
    }

    async verifyProgramNameDisabled() {
      return await this.ProgramFieldBox;
    }
    async verifyBatchNameDisabled() {
      return await this.BatchFieldBox;
    }


    async enterBatchValidDescription() {
      
      await this.BatchDiscriptionBox.fill('Java Developer ');
      
    }

    async enterBatchInvalidDescription() {
     
      await this.BatchDiscriptionBox.clear();
      await this.BatchDiscriptionBox.fill('5ghtd');
      return this.BatchDiscriptionBox;
    }


   

    async enterInvalidNoOfClasses() {
      
      await this.BatchnoOfClassesBox.evaluate(el => el.value = 'abc');
      return this.BatchnoOfClassesBox;
    }

    async verifyBatchErrorMessage() {
      await this.BatchErrorMsg.waitFor({ state: 'visible', timeout: 5000 });

      
      const isErrorVisible = await this.BatchErrorMsg.isVisible();
      NoOfClassesErrorMsg

     
      if (BatchErrorMsg) {
        
        const errorText = await this.BatchErrorMsg.textContent("Number of classes is required.");

        console.log(`Error detected: ${errorText}`);
      }

      return BatchErrorMsg;
    }

    async gettoastMessage() {
      const toastMessage = await this.toastMessage.textContent();
      console.log('Toast Message :', toastMessage);

    }

    async clickSaveButton() {
      await this.BatchPopUpSavebtn.click();

    }
    

    async enterValidBatchData() {
      
      await this.BatchDiscriptionBox.fill('Valid Batch Description');

    
      await this.BatchnoOfClassesBox.fill('10');
    }

    async clickCancelButton() {
      
      await this.BatchpopUpCancelbtn.click();
    }

    async verifyBatchDetailsPopupClosed() {
      try {
       
        await this.BatchDetailsPopUp.waitFor({ state: 'hidden', timeout: 5000 });
        return true;
      } catch (error) {
       console.error('Batch details popup did not close');
        return false;
      }
    }
    async clickEditIcon() {
      await this.BatchEditButton.click();
    }

    async enterInvalidNoOfClasses() {
      try {
        await this.BatchnoOfClassesBox.fill('abc');
      } catch (error) {
       try {
          await this.BatchnoOfClassesBox.click();
          await this.page.keyboard.type('abc');
        } catch (nestedError) {
          
        }
      }
    }

    async verifyErrorMessages() {
      try {
        const errorMessages = [this.BatchErrorMsg, this.NoOfClassesErrorMsg];

        for (const message of errorMessages) {
          if (await message.isVisible()) {
            return true;
          }
        }

        return false;
      } catch (error) {
        
        return false;
      }
    }

    
    
  }

  
























































//export default { ClassPage };
