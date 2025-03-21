import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
import {test} from '../Fixtures/fixtures'
const { expect } = require('@playwright/test');
const expectedHeaders = [
  "",
  ' Batch Name ',
  'Class Topic ',
  'Class Description ',
  ' Status ',
  ' Class Date ',
  ' Staff Name ',
  ' Edit / Delete'
];
let originalList = [];
let selectedElement ='';
let allElements = [];
let selectedElements =[];

Given('Admin logs in to LMS application and lands on home page', async ({ commonpagefixture }) => {
  await commonpagefixture.validLogin();   
});

When('Admin clicks the {string} Navigation bar in the Header', async ({commonpagefixture}, moduleOption) => {
    await commonpagefixture.goToModule(moduleOption);
});

/*****************           Class Page Visual Validation          *****************/
  
Then('Admin should land on the {string} page', async ({commonpagefixture}, expectedPageName) => {
  const actualPageName = await commonpagefixture.getPageName();
  await expect(actualPageName).toEqual(expectedPageName);
  //await expect(classpagefixture.getPageName()).toEqual(expectedPageName);
});

Then('Admin should see the {string} Title', async ({commonpagefixture,page}, title) => {
  const actualTitle = await commonpagefixture.getTitle();  
  await expect(actualTitle).toBeVisible();
  await expect(page).toHaveURL('https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/session');
  //await expect(classpagefixture.getTitle()).toBeVisible();
});

Then('Admin should see the {string} Header', async ({commonpagefixture}, headerName) => {
  const header = await commonpagefixture.headerCheck(headerName);
  await expect(header).toBeVisible();
  //await expect(classpagefixture.headerCheck()).toBeVisible();
});

Then('Admin should see the Search Bar in Manage class page', async ({commonpagefixture}) => {
  const searchBar = await commonpagefixture.searchBarVisibility();
  await expect(searchBar).toBeVisible();
  //await expect(classpagefixture.searchBarVisibility()).toBeVisible();
});

Then('Admin should see the datatable heading like Batchname,class topic,class description,status,class Date,staff name,Edit\\/Delete', async ({classpagefixture}) => {
  const actualheaderCells = await classpagefixture.verifyDataTableHeader();
  await expect(actualheaderCells).toEqual(expectedHeaders);
  //await expect(classpagefixture.verifyDataTableHeader()).toEqual(expectedHeaders);
});

Then('Admin should see the {string}', async ({classpagefixture}, arg) => {
     const paginationEntries = await classpagefixture.verifyPaginationEntries();
    await expect(paginationEntries).toBeVisible();
    //await expect(await classpagefixture.verifyPaginationEntries()).toBeVisible();
});

Then('enabled pagination controls under the data table', async ({classpagefixture}) => {
    const pagecontrols = await classpagefixture.verifyPaginationEnabled();
    const count = await pagecontrols.count();
    for (let i = 0; i < count; i++) {
      const isDisabled = await pagecontrols.nth(i).isDisabled();
      expect(isDisabled).toBe(false);
      //await expect(pagecontrols.nth(i)).isEnabled();
    }
});

Then('Admin should see the Sort icon of all the field in the datatable.', async ({classpagefixture}) => {
  const sortIcons = await classpagefixture.verifySortIcons();
  const count =await sortIcons.count();
  for (let i = 0; i < count; i++) {
    const isVisible = await sortIcons.nth(i).isVisible();
    expect(isVisible).toBe(true);
  }
});

Then('Admin should see the Delete button under the Manage class page header.', async ({classpagefixture}) => {
   const multipleDeleteBtn = await classpagefixture.verifyMultipleDeleteBtn();
    await expect(multipleDeleteBtn).toBeVisible();
   //await expect(classpagefixture.verifyMultipleDeleteBtn()).toBeVisible();

});

Then('Admin should see Total no of classes in below of the data table.', async ({classpagefixture}) => {
  const totalEntries = await classpagefixture.verifyTotalEntries();
   await expect(totalEntries).toBeVisible();
  //await expect(classpagefixture.verifyTotalEntries()).toBeVisible();

});

/*****************           Manage Class Page Header bar Links Validation          *****************/

When('Admin clicks on {string} on the navigation bar', async ({commonpagefixture}, navigatoinOption) => {
  await commonpagefixture.goToModule(navigatoinOption);
});

Then('Admin is redirected to {string} page', async ({commonpagefixture}, expectedPageName) => {
   const actualPageName = await commonpagefixture.getPageName();
   await expect(actualPageName).toEqual(expectedPageName);
  //await expect(classpagefixture.getPageName()).toEqual(expectedPageName);
  
});

Then('Admin is redirected to Login page', async ({page}) => {
  await expect(page).toHaveURL(process.env.baseUrl);
});

When('Admin clicks a {string} under the {string} menu bar', async ({classpagefixture}, addNewOption, menuOption) => {
  await classpagefixture.gotToMenuItem(addNewOption,menuOption);
});

Then('Admin should see a popup open for class details with empty form along with <SAVE> and <CANCEL> button and Close\\(X) Icon on the top right corner of the window', async ({classpagefixture}) => {
  //Verify the popup is visible
  const popUp = await classpagefixture.isPopUpVisible();
   await expect(popUp).toBeVisible();
  //await expect(classpagefixture.isPopUpVisible()).toBeVisible();

  //verify classDetails is visible
  const classDetails = await classpagefixture.isClassDetailsVisible();
  await expect(classDetails).toBeVisible();

  //verify the form fields to be empty
  const formFields = await classpagefixture.getFormFields();
  console.log(formFields);
  for (let i = 0; i < await formFields.count(); i++) {
    const field = formFields.nth(i);
    await expect(field).toHaveValue('');
  }
  //verify save,cancel,close buttons to be visible
  const saveBtn = await classpagefixture.isSaveBtnVisible();
  await expect(saveBtn).toBeVisible();
  const cancelBtn = await classpagefixture.isCancelBtnVisible();
  await expect(cancelBtn).toBeVisible();
  const closeBtn = await classpagefixture.isCloseBtnVisible();
  await expect(closeBtn).toBeVisible();

});
Then('Admin should see few input fields and their respective text boxes in the class details window', async ({ classpagefixture }, dataTable) => {
  for (const { 'Label Name': labelName, 'Input Field ID': inputFieldId } of dataTable.hashes()) {
    //const labelLocator = await this.page.locator(`label:has-text("${labelName}")`);
    const labelLocator = await classpagefixture.getLabel(labelName);
    //const inputLocator = await this.page.locator(`#${inputFieldId}`);
    const inputLocator = await classpagefixture.getInput(inputFieldId);
    
    await expect(labelLocator).toBeVisible();
    await expect(inputLocator).toBeVisible();
  }
});

When('Admin selects class date in date picker', async ({classpagefixture}) => {
  await classpagefixture.selectDates(10);
});

Then('Admin should see no of class value is added automatically', async ({classpagefixture}) => {
  const classNoValue = await classpagefixture.getClassNovalue();
  await expect(classNoValue).toBe('1');

});

Then('Admin should see weekends dates are disabled to select', async ({classpagefixture}) => {
  const weekendDisabledCells = await classpagefixture.getWeekendDisabledCells();
  const count = await weekendDisabledCells.count();

  for (let i = 0; i < count; i++) {
    const isVisible = await weekendDisabledCells.nth(i).isVisible();
    expect(isVisible).toBeTruthy(); // Ensure the disabled span exists
  }

});

When('Admin clicks on save button without entering data', async ({classpagefixture}) => {
  classpagefixture.clickSaveBtn();
});
/*
Then('class won\'t be created and Admin gets error message', async ({classpagefixture}, dataTable) => {
  const expectedErrorMessages = dataTable.rawTable.slice(1).map(row => row[0]); // Extract expected error messages from data table

  // Retrieve all error message elements
  const errorMsgLocators = await classpagefixture.getErrorMessagesLocator();
  const errorMsgCount = await errorMsgLocators.count();

  // Extract text from each error message element
  const actualErrorMessages = [];
  for (let i = 0; i < errorMsgCount; i++) {
    const errorMsgText = await errorMsgLocators.nth(i).textContent();
    actualErrorMessages.push(errorMsgText.trim());
  }

  // Validate each expected error message is present in the actual error messages
  for (const expectedMessage of expectedErrorMessages) {
    expect(actualErrorMessages).toContain(expectedMessage);
  }
});*/
Then('class won\'t be created and Admin gets error message', async ({classpagefixture}, dataTable) => {
  for (const { 'Error Message': errorMessage} of dataTable.hashes()) {
    //const labelLocator = await this.page.locator(label:has-text("${labelName}"));
    const errorMsg = await classpagefixture.getErrorMessage(errorMessage);
    
    await expect(errorMsg).toBeVisible();
  }
  });

When('Admin clicks Cancel Icon on Admin Details form', async ({classpagefixture}) => {
  classpagefixture.clickCancelBtn();
});

When('Admin clicks Close\\(X) Icon on Admin Details form', async ({classpagefixture}) => {
  classpagefixture.clickCloseIcon();
  
});
Then('Class Details popup window should be closed without saving', async ({classpagefixture}) => {
  const popUp = await classpagefixture.isPopUpVisible();
   await expect(popUp).not.toBeVisible();
});

When('Admin clicks on the {string} icon', async ({classpagefixture}, icon) => {
  classpagefixture.clickEditBtn();
});

Then('Admin should see new pop up with class details appears', async ({classpagefixture}) => {
  //Verify the popup is visible
  const popUp = await classpagefixture.isPopUpVisible();
   await expect(popUp).toBeVisible();

  //verify classDetails is visible
  const classDetails = await classpagefixture.isClassDetailsVisible();
  await expect(classDetails).toBeVisible();

});

Then('Admin should see batch name field and class topic are disabled', async ({classpagefixture}) => {
  const batchNameField = await classpagefixture.isBatchNameDisabled();
  await(batchNameField).isDisabled();

  const classTopicField = await classpagefixture.isClassTopicDisabled();
  await(classTopicField).isDisabled();

});

/**Sorting in Ascending and Descending Order */

When('Admin clicks on Arrow next to {string} to sort in Ascending order', async ({commonpagefixture}, columnName) => {
  commonpagefixture.clickOnSortIcon(columnName.trim());
  //let originalList = [];
  switch (columnName.trim()) {
      case 'Batch Name':
          originalList = await commonpagefixture.getOriginalList(2);
          break;
      case 'Class Topic':
          originalList = await commonpagefixture.getOriginalList(3);
          break;
      case 'Class Description':
          originalList = await commonpagefixture.getOriginalList(4);
          break;
      case 'Status':
            originalList = await commonpagefixture.getOriginalList(5);
          break;
      case 'Class Date':
            originalList = await commonpagefixture.getOriginalList(6);
           break;
      case 'Staff Name':
            originalList = await commonpagefixture.getOriginalList(7);
            break;

  }
  // originalList.forEach(str => {
  //     console.log(`originalList for ${columnName} : ${str}`);
  // });
  console.log(`Original List for ${columnName} :`, originalList);
});

Then('Admin See the {string} is sorted in Ascending order', async ({commonpagefixture}, columnName) => {
   // Get the sorted list
   let sortedList ="";
   if(columnName === 'Class Date')
   {
    sortedList = await commonpagefixture.getDateAscendingOrderList(originalList);
   }
   else{
    sortedList = await commonpagefixture.getAscendingOrderList(originalList);
   }

   // Log the sorted list
   //sortedList.forEach(item => console.log(`sortedList: ${item}`));

   console.log(`Sorted List for ${columnName} :`, sortedList);

   // Assert that the original list is equal to the sorted list
   expect(originalList).toEqual(sortedList);
});

When('Admin clicks on Arrow next to {string} to sort in Descending order', async ({commonpagefixture}, columnName) => {
   commonpagefixture.clickOnSortIcon(columnName.trim());
   commonpagefixture.clickOnSortIcon(columnName.trim());//clicking second time for descending order
  //let originalList = [];
  switch (columnName.trim()) {
      case 'Batch Name':
          originalList = await commonpagefixture.getOriginalList(2);
          break;
      case 'Class Topic':
          originalList = await commonpagefixture.getOriginalList(3);
          break;
      case 'Class Description':
          originalList = await commonpagefixture.getOriginalList(4);
          break;
      case 'Status':
            originalList = await commonpagefixture.getOriginalList(5);
          break;
      case 'Class Date':
            originalList = await commonpagefixture.getOriginalList(6);
           break;
      case 'Staff Name':
            originalList = await commonpagefixture.getOriginalList(7);
            break;
  }
  // originalList.forEach(str => {
  //     console.log(`originalList for ${columnName} : ${str}`);
  // });
  console.log(`Original List for ${columnName} :`, originalList);
});

Then('Admin See the {string} is sorted in Descending order', async ({commonpagefixture}, columnName) => {
 // Get the sorted list
 let sortedList ="";
 if(columnName === 'Class Date')
 {
  sortedList = await commonpagefixture.getDateDescendingOrderList(originalList);
 }
 else{
  sortedList = await commonpagefixture.getDescendingOrderList(originalList);
 }
  //sortedList.forEach(item => console.log(`sortedList: ${item}`));

  console.log(`Sorted List for ${columnName} :`, sortedList);

  // Assert that the original list is equal to the sorted list
  expect(originalList).toEqual(sortedList);
  
});


When('Admin clicks the delete icon', async ({classpagefixture}) => {
  await classpagefixture.clickRowLevelDelBtn();
});

Then('Admin should see a alert open with heading {string} along with  <YES> and <NO> button for deletion', async ({classpagefixture}, confirmHeading) => {
  const popUp = await classpagefixture.isPopUpVisible();
   await expect(popUp).toBeVisible();

  const noBtn = await classpagefixture.isNoBtnVisible();
  await expect(noBtn).toBeVisible();
  const closeBtn = await classpagefixture.isCloseBtnVisible();
  await expect(closeBtn).toBeVisible();
  const yesBtn = await classpagefixture.isYesBtnVisible();
  await expect(yesBtn).toBeVisible();
  const confirmText = await classpagefixture.isConfirmVisible();
  await expect(confirmText).toEqual(confirmHeading);
});

When('Admin clicks yes option', async ({classpagefixture}) => {
  //classpagefixture.clickYesBtn();
});

Then('Admin gets a message {string} alert and do not see that Class in the data table', async ({classpagefixture}, arg) => {
 
});
When('Admin clicks No option', async ({classpagefixture}) => {
  await classpagefixture.clickNoBtn();
});

Then('Admin can see the deletion alert disappears without deleting', async ({classpagefixture}) => {
  const popUp = await classpagefixture.isPopUpVisible();
   await expect(popUp).not.toBeVisible();
});

When('Admin clicks on close button', async ({classpagefixture}) => {
  await classpagefixture.clickCloseIcon();});

Then('Admin can see the deletion alert disappears without any changes', async ({classpagefixture}) => {
  const popUp = await classpagefixture.isPopUpVisible();
   await expect(popUp).not.toBeVisible();
});

When('Admin clicks any checkbox in the data table', async ({commonpagefixture}) => {
  await commonpagefixture.selectCheckBox(3);
});

Then('Admin should see common delete option enabled under header {string}', async ({commonpagefixture}, arg) => {
  const multipleDelBtn = await commonpagefixture.isMultipleDelBtnEnabled();
  await expect(multipleDelBtn).toBeEnabled();
});

Given('Admin is on Confirm Deletion alert after selecting single checkbox and clicks delete button', async ({commonpagefixture}) => {
  //first 2 is for the random check box selection(we can given any number 1 to 5), second 3 is, as my class name is there in 3rd column iam giving 3
  selectedElement  = await commonpagefixture.selectCheckBox(2,3);
  await commonpagefixture.clickMultipleDelBtn();
});

When('Admin clicks {string} button on the alert', async ({classpagefixture}, option) => {
  switch(option.trim()){
    case 'YES':
         //await classpagefixture.clickYesBtn();
        break;
    case 'NO':
      await classpagefixture.clickNoBtn();
        break;
    case 'Cancel':
      await classpagefixture.clickCloseIcon();
        break;
  }
});

Then('Admin can see the selected class is deleted from the data table', async ({commonpagefixture}) => {
  allElements = await commonpagefixture.getAllElementsOfSelectedColumn(3);//my class topic is in 3rd row,I am getting all the class topics
  console.log(allElements);
  console.log(selectedElement);
  await expect(allElements).not.toContain(selectedElement);
});

Then('Admin can see the selected class is not deleted from the data table', async ({commonpagefixture}) => {
  allElements = await commonpagefixture.getAllElementsOfSelectedColumn(3);//my class topic is in 3rd row,I am getting all the class topics
  console.log(allElements);
  console.log(selectedElement);
  await expect(allElements).toContain(selectedElement);
});

Given('Admin is on Confirm Deletion alert after selecting multiple checkboxes and clicks delete button', async ({commonpagefixture}) => {
  selectedElements  = await commonpagefixture.selectCheckBoxes(1,4,3);//rown number 1 to 4 and column 3 for class topic 
  await commonpagefixture.clickMultipleDelBtn();
});

Then('Admin can see the selected multiple classes is not deleted from the data table', async ({commonpagefixture}) => {
  allElements = await commonpagefixture.getAllElementsOfSelectedColumn(3);//my class topic is in 3rd row,I am getting all the class topics
  console.log(allElements);
  console.log(selectedElements);
  //expect(allElements).to.include.members(selectedElements);
  expect(allElements).toEqual(expect.arrayContaining(selectedElements)); 

});

Then('Admin can see the selected multiple classes is deleted from the data table', async ({commonpagefixture}) => {
  allElements = await commonpagefixture.getAllElementsOfSelectedColumn(3);//my class topic is in 3rd row,I am getting all the class topics
  console.log(allElements);
  console.log(selectedElements);
  //await expect(allElements).toContain(selectedElements);
  //expect(allElements).to.include.members(selectedElements);
  expect(allElements).not.toEqual(expect.arrayContaining(selectedElements));
});

When('Admin enter the {string} in search textbox', async ({commonpagefixture}, searchOption) => {
  switch(searchOption.trim()){
    case 'Batch Name':
      await commonpagefixture.serchText('dvlpr');
      break;
    case 'Class Topic':
      await commonpagefixture.serchText('python');
      break;
    case 'Staff Name':
      await commonpagefixture.serchText('Kevin Thomas');
        break; 
  }
  
});
//working on this scenario
Then('Admin should see {string} as searched by {string}', async ({commonpagefixture}, arg, searchOption) => {
  const rawResults = await commonpagefixture.getSearchResults();
  console.log("Raw Search Results:", rawResults); 
  // Normalize: Trim whitespace and remove unnecessary newlines/tabs
  const searchResults = rawResults.map(text => text.replace(/\s+/g, ' ').trim());

  console.log("Cleaned Search Results:", searchResults); // Debugging output
  let isMatch = false;
  switch(searchOption.trim()){
    case 'Batch Name':
      isMatch = await commonpagefixture.validateSearchResults(searchResults,'DVLPR02');
      break;
    case 'Class Topic':
      isMatch = await commonpagefixture.validateSearchResults(searchResults,'python');
      break;
    case 'Staff Name':
      isMatch = await commonpagefixture.validateSearchResults(searchResults,'Kevin Thomas');
        break; 

  }
  expect(isMatch).toBeTruthy();  // Ensure isMatch is true, meaning the expected value is found


});

When('Admin clicks {string} link on the {string} table', async ({commonpagefixture}, pageLink, module) => {
  switch (pageLink) {
		case "Next page":
			await commonpagefixture.goToNextPage();
			break;
		case "Last page":
			await commonpagefixture.goToLastPage();
			break;
		case "Previous page":
			await commonpagefixture.goToPreviousPage();
			break;
		case "First page":
			await commonpagefixture.goToFirstPage();
			break;
		}
});

Then('Admin should see the next page record on the table  with Pagination has previous active link enabled', async ({commonpagefixture}) => {
  const previousPage = await commonpagefixture.getpreviousPageeLoc();
    expect(previousPage).toBeEnabled();
});

Then('Admin should see the last page record on the table with Next page link and last page links are disabled', async ({commonpagefixture}) => {
  const nextPage = await commonpagefixture.getnextPageLoc();
  expect(nextPage).toBeDisabled();
  const lastPage = await commonpagefixture.getlastPageLoc();
  expect(lastPage).toBeDisabled();

});
Given('Admin is on last page of {string} module table', async ({commonpagefixture}, arg) => {
  await commonpagefixture.goToLastPage();
});

Then('Admin should see the previous page record on the table with pagination has next page and last page link enabled', async ({commonpagefixture}) => {
  const nextPage = await commonpagefixture.getnextPageLoc();
  expect(nextPage).toBeEnabled();
  const lastPage = await commonpagefixture.getlastPageLoc();
  expect(lastPage).toBeEnabled();
});

Then('Admin should see the very first page record on the table with Previous page link and first page links are disabled', async ({commonpagefixture}) => {        
  const previousPage = await commonpagefixture.getpreviousPageeLoc();
    expect(previousPage).toBeDisabled();
    const firstPage = await commonpagefixture.getfirstPageLoc();
    expect(firstPage).toBeDisabled();

});