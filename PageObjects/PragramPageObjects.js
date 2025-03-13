exports.ProgramPage=
class ProgramPage{
    constructor(page){
        this.page=page
        this.url='https://playwright-frontend-app-a9ea85794ad9.herokuapp.com/program'
        this.deleteicon=page.locator('#deleteProgram')
        this.delconfpopup=page.locator('div.p-confirm-dialog')
this.yesbutton=page.getByRole('button', { name: 'Yes' })
this.nobutton=page.getByRole('button', { name: 'No' })
    }

    async clickdeleteicon(){
        await this.deleteicon.nth(0).waitFor({ state: 'visible' });
       // await this.deleteicon.nth(0).dblclick()
        await this.deleteicon.nth(0).click({ force: true })
        await this.deleteicon.nth(0).click({ force: true })     
    }
    async clickYes(){
        await this.yesbutton.waitFor({ state: 'visible' });
        await this.yesbutton.click()
    }
    async clickNo(){
        await this.nobutton.waitFor({ state: 'visible' });
await this.nobutton.click()
    }

}