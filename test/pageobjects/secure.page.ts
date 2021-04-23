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
}

export default new SecurePage();
