exports.Homepage=
class Homepage{
    constructor(page)
    {
        this.page=page
        this.homepageheading=page.getByRole('textbox', { name: 'User' })
        this.programtab=page.getByRole('button', { name: 'Program' })
        this.batchtab=page.getByRole('button', { name: 'Batch' })
        this.classtab=page.getByRole('button', { name: 'Class' })
        this.logouttab=page.getByRole('button', { name: 'Logout' })
    }

    //clicks Program tab
    async programtabclick()
    {
        await this.programtab.click()
    }
    
}