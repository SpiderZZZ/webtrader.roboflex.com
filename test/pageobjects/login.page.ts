import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () 
    { 
        return $('input[class="input__field input__field_mode_email"]')
    }

    get inputPassword () 
    {
        return $('input[class="password__field password__field_mode_password"]')
    }

    get btnSubmit () 
    {
        return $('div[class="button button_type_brand"]')
    }

    login (username: string, password: string) 
    {
        this.inputUsername.setValue(username)
        this.inputPassword.setValue(password)
        this.btnSubmit.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open("");
    }
}

export default new LoginPage();
