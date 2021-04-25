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
        return $('span[class="modal-window__title"]')
    }

    get demoAccountModalUsername()
    {
        return $('//div[@class="demo-account-details__user-name"]//div[@class="text"]')
    }

    get demoAccountModalUserEmail()
    {
        return $('//div[@class="demo-account-details__user-email"]//div[@class="text"]')
    }

    get demoAccountModalPassword()
    {
        return $('//div[@class="demo-account-details__user-pass"]//div[@class="text"]')
    }

    get demoAccountCloseButton()
    {
        return $('//div[@class="demo-account-details__close"]//div[@class="button button_type_brand"]')
    }

    get tourModalTitle()
    {
        return $('span[class="tour-window__title"]')
    }

    get tourModalTotalStepsCount()
    {
        return $('div[class="tour-window__total-steps"]')
    }

    get tourModalWindowCloseBtn()
    {
        return $('span[class="tour-window__close"]')
    }
}

export default new SecurePage();
