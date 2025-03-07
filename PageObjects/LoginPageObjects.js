exports.Loginpage=
class Loginpage{
constructor(page)
{
this.page=page
this.image=page.getByRole('img')
this.loginmessage=page.getByText('Please login to LMS')
this.usernamebox=page.getByRole('textbox', { name: 'User' })
this.passwordbox=page.getByRole('textbox', { name: 'Password' })
this.loginbutton=page.getByRole('button', { name: 'Login' })
this.forgotpassword=page.getByRole('link', { name: 'Forgot Password' })
}
//naviagating to website
async gotohomepage(url){
await this.page.goto(url)
}
}