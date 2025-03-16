import { createWorker } from 'tesseract.js';

exports.Loginpage =
  class Loginpage {
    constructor(page) {
      this.page = page
      this.image = page.getByRole('img')
      this.loginmessage = page.getByText('Please login to LMS')
      this.usernamebox = page.getByRole('textbox', { name: 'User' })
      this.usernametext = page.locator('div').filter({ hasText: 'User *' }).nth(3)
      this.passwordbox = page.getByRole('textbox', { name: 'Password' })
      this.passwordtext = page.locator('div').filter({ hasText: 'Password *' }).nth(3)
      this.loginbutton = page.getByRole('button', { name: 'Login' })
      this.forgotpasswordlink = page.getByRole('link', { name: 'Forgot Password' })
      this.inputfields = page.locator('form input');
      this.invalidcredsmsg = page.getByText('Invalid username and password')
      this.usernamemsg = page.getByText('Please enter your user name')
      this.passwordmsg = page.getByText('Please enter your password')
    }
    //count input fields
    async inputfieldscount() {
      const availablefields = await this.inputfields
      const count = await availablefields.count();
      return count
    }
    //input field elements
    async inputfieldspresent() {
      const availablefields = await this.inputfields
      return availablefields
    }
    //image text extraction
    //Create an asynchronous function to handle the OCR process:
    async extractTextfromimage(imagePath) {
      const worker = await createWorker();
      await worker.loadLanguage('eng'); // Load the language model (e.g., English)
      await worker.initialize('eng');
      const { data: { text } } = await worker.recognize(imagePath);
      await worker.terminate();
      return text;
    }
    //take screenshot of image element
    async imgscreenshot() {
      const buffer = await this.image.screenshot({ path: 'loginimage.png' });
      return buffer
    }
    //validate text color
    async textcolor() {
      await this.usernametext.evaluate(function (el) {
        return window.getComputedStyle(el).color; // Fetch computed color
      });
    }
    //Enters credentials in input fields
    async loggingIn(username, password) {
      await this.usernamebox.click()
      await this.usernamebox.fill(username)
      await this.passwordbox.click()
      await this.passwordbox.fill(password)
      await this.loginbutton.click()
    }
    //Enters only password
    async onlypassword(password) {
      await this.usernamebox.click()
      await this.passwordbox.click()
      await this.passwordbox.fill(password, { delay: 100 })
      await this.loginbutton.click()
    }
    //Enters only username
    async onlyusername(username) {
      await this.usernamebox.click()
      await this.usernamebox.fill(username, { delay: 100 })
      await this.passwordbox.click()
      await this.loginbutton.click()
    }
    //Enter creds through keyboard
    async keyboard(username, password) {
      await this.usernamebox.focus()
      await this.usernamebox.pressSequentially(username)
      await this.page.keyboard.down("Tab");
      await this.page.waitForTimeout(5000);
      await this.page.waitForFunction(() => document.activeElement.id === "password");
      await this.passwordbox.pressSequentially(password)
      await this.page.keyboard.press("Tab");
      await this.page.keyboard.press("Enter");
    }

    async getAllLinks() {
      return await this.page.$$eval("a", (links) =>
        links.map(link => link.href).filter(href => href.startsWith("http")) // Filter valid URLs
      );
    }

    async checkBrokenLinks() {
      const links = await this.getAllLinks();
      console.log(`Found ${links.length} links`);

      let brokenLinks = [];

      for (const link of links) {
        try {
          const response = await this.page.request.get(link);
          if (response.status() >= 400) { // Detect error codes
            console.log(`Broken Link: ${link} [Status: ${response.status()}]`);
            brokenLinks.push({ url: link, status: response.status() });
          } else {
            console.log(`Working Link: ${link}`);
          }
        } catch (error) {
          console.log(`Error Checking: ${link} [${error.message}]`);
          brokenLinks.push({ url: link, status: "Request Failed" });
        }
      }

      return brokenLinks;
    }

  }