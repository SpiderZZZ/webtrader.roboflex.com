import Page from './page';

class RegistrationPage extends Page {

    get registrationForm()
    {
        return $('div[class="quick-demo-acc-form"]')
    }

    get inputUserEmail () 
    { 
        return this.registrationForm.$('input[class="input__field input__field_mode_email"]')
    }

    get inputUserFirstname () 
    { 
        return this.registrationForm.$('div[class="quick-demo-acc-form__name"]').$('input[class="input__field input__field_mode_text"]')
    }

    get selectCountryElement()
    {
        return this.registrationForm.$('div[class="quick-demo-acc-form__country"]').$('div[class="visible-ctrl"]')
    }

    async countryFromSelect(coutryName : string)
    {
        return this.registrationForm.$(`//div[contains(@value,${coutryName})]`)
    }

    get inputUserPhone () 
    { 
        return this.registrationForm.$('div[class="quick-demo-acc-form__phone"]').$('input[class="input__field input__field_mode_text"]')
    }

    get inputUserSurname () 
    { 
        return this.registrationForm.$('div[class="quick-demo-acc-form__surname"]').$('input[class="input__field input__field_mode_text"]')
    }

    get btnSubmitRegistration () 
    { 
        return this.registrationForm.$('div[class="quick-demo-acc-form__button"]').$('div[class="button button_type_brand"]')
    }

    async fillRegistrationForm (options : {userMail: string, userFirstName: string, coutryName : string, userPhone : string, userSurname : string}) 
    {
        await (await this.inputUserEmail).setValue(options.userMail)
        await (await this.inputUserFirstname).setValue(options.userFirstName)
        await (await this.selectCountryElement).click()
        await (await this.countryFromSelect(options.coutryName)).click()
        await (await this.inputUserPhone).setValue(options.userPhone)
        await (await this.inputUserSurname).setValue(options.userSurname)
        await (await this.btnSubmitRegistration).click();
    }
}

export default new RegistrationPage();
