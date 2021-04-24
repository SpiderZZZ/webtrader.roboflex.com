import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get chart () 
    { 
        return $('#chart') 
    }

    get demoAccountModal()
    {
        return $('div[class="modal-window__frame"]')
    }

    get demoAccountModalTitle()
    {
        return this.demoAccountModal.$('div[class="modal-window__title"]')
    }

    get demoAccountModalUsername()
    {
        return this.demoAccountModal.$('div[class="demo-account-details__user-name"]').$('div[class="text"]')
    }

    get demoAccountModalUserEmail()
    {
        return this.demoAccountModal.$('div[class="demo-account-details__user-email"]').$('div[class="text"]')
    }

    get demoAccountModalPassword()
    {
        return this.demoAccountModal.$('div[class="demo-account-details__acc-pass"]').$('div[class="text"]')
    }

    get demoAccountCloseButton()
    {
        return this.demoAccountModal.$('div[class="demo-account-details__close"]').$('div[class="button button_type_brand"]')
    }
}

export default new SecurePage();
