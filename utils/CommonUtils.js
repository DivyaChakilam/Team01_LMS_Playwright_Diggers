// commonUtils.js
class CommonUtils {
    /**
     * Clicks on an element located by the provided selector.
     * @param {Page} page - The Playwright Page object.
     * @param {string} selector - The selector of the element to click.
     */
    async clickElement(page, selector) {
      await page.waitForSelector(selector, { state: 'visible' });
      const element = await page.$(selector);
      if (element) {
        await element.click();
      } else {
        throw new Error(`Element with selector ${selector} not found`);
      }
    }
  
    /**
     * Types text into an input field located by the provided selector.
     * @param {Page} page - The Playwright Page object.
     * @param {string} selector - The selector of the input field.
     * @param {string} text - The text to type into the input field.
     */
    async typeText(page, selector, text) {
      await page.waitForSelector(selector, { state: 'visible' });
      const element = await page.$(selector);
      if (element) {
        await element.fill(text);
      } else {
        throw new Error(`Element with selector ${selector} not found`);
      }
    }
  
    /**
     * Retrieves the text content of an element located by the provided selector.
     * @param {Page} page - The Playwright Page object.
     * @param {string} selector - The selector of the element.
     * @returns {Promise<string>} - The text content of the element.
     */
    async getElementText(page, selector) {
      await page.waitForSelector(selector, { state: 'visible' });
      const element = await page.$(selector);
      if (element) {
        return await element.textContent();
      } else {
        throw new Error(`Element with selector ${selector} not found`);
      }
    }
  
    /**
     * Checks if an element located by the provided selector is visible on the page.
     * @param {Page} page - The Playwright Page object.
     * @param {string} selector - The selector of the element.
     * @returns {Promise<boolean>} - True if the element is visible, otherwise false.
     */
    async isElementVisible(page, selector) {
      try {
        await page.waitForSelector(selector, { state: 'visible' });
        return true;
      } catch {
        return false;
      }
    }
  
    /**
     * Selects an option from a dropdown menu located by the provided selector.
     * @param {Page} page - The Playwright Page object.
     * @param {string} selector - The selector of the dropdown menu.
     * @param {string} optionValue - The value of the option to select.
     */
    async selectDropdownOption(page, selector, optionValue) {
      await page.waitForSelector(selector, { state: 'visible' });
      const element = await page.$(selector);
      if (element) {
        await element.selectOption({ value: optionValue });
      } else {
        throw new Error(`Dropdown with selector ${selector} not found`);
      }
    }
  }
  
  module.exports = new CommonUtils();
  