import { createWorker } from 'tesseract.js';

exports.Loginpage=
class Loginpage{
constructor(page)
{
this.page=page
this.image=page.getByRole('img')
this.loginmessage=page.getByText('Please login to LMS')
this.usernamebox=page.getByRole('textbox', { name: 'User' })
this.usernametext=page.locator('div').filter({ hasText: 'User *' }).nth(3)
this.passwordbox=page.getByRole('textbox', { name: 'Password' })
this.passwordtext=page.locator('div').filter({ hasText: 'Password *' }).nth(3)
this.loginbutton=page.getByRole('button', { name: 'Login' })
this.forgotpasswordlink=page.getByRole('link', { name: 'Forgot Password' })
this.inputfields=page.locator('form input');
}
//count input fields
async inputfieldscount(){
const availablefields=await this.inputfields
const count=await availablefields.count();
return count
}
//input field elements
async inputfieldspresent(){
    const availablefields=await this.inputfields
    return availablefields
}
//image text extraction
//Create an asynchronous function to handle the OCR process:
async extractTextfromimage(imagePath){
    const worker = await createWorker();
            await worker.loadLanguage('eng'); // Load the language model (e.g., English)
            await worker.initialize('eng');
            const { data: { text } } = await worker.recognize(imagePath);
            await worker.terminate();
            return text;
}
//take screenshot of image element
async imgscreenshot()
{
    const buffer=await this.image.screenshot({ path: 'loginimage.png' });
    return buffer
}
//validate text color
async textcolor()
{
     await this.usernametext.evaluate(function (el) {
        return window.getComputedStyle(el).color; // Fetch computed color
    });
}
//Enter credentials in input fields
async loggingIn(username,password)
{
    await this.usernamebox.click()
    await this.usernamebox.fill('')
    await this.usernamebox.press('Backspace');
    await this.usernamebox.type(username,{delay:100})
    await this.passwordbox.click()
    await this.passwordbox.fill('')
    await this.passwordbox.press('Backspace');
    await this.passwordbox.type(password,{delay:100})
    await this.loginbutton.click()
}
}