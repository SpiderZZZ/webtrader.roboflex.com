/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {

    get logoutLink()
    {
        return $('div[class="user-info__logout"]')
    }

    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path: string) {
        return browser.url(`${path}`)
    }

    async logoutIfVisible()
    {
        if(await (await this.logoutLink).isClickable())
        {
            await (await this.logoutLink).click()
        }
    }
}
