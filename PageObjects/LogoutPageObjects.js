exports.Logoutpage =
  class Logoutpage{
    constructor(page) {
      this.page = page
      this.logoutbutton=page.getByRole('button', { name: 'Logout' })
    }
    async clicklogoutbutton()
    {
        await this.logoutbutton.click()
    }
  }

