import Page from './page';

class RegistrationPage extends Page {


    get inputUserEmail () 
    { 
        return $('input[class="input__field input__field_mode_email"]')
    }

    get inputUserFirstname () 
    { 
        return $('//div[@class="quick-demo-acc-form__name"]//input[@class="input__field input__field_mode_text"]')
    }

    get selectCountryElement()
    {
        return $('//div[@class="quick-demo-acc-form__country"]//div[@class="visible-ctrl"]')
    }

    async countryWithCodeFromSelect(coutryName : string)
    {
        if(await (await $(`div[class="expandable__content"]`)).isDisplayed())
        {
            (await $(`div[value="${coutryName}"]`)).scrollIntoView();
            (await $(`div[value="${coutryName}"]`)).click();
        }
    }

    get inputUserPhone () 
    { 
        return $('//div[@class="quick-demo-acc-form__phone"]//input[@class="input__field input__field_mode_text"]')
    }

    get inputUserSurname () 
    { 
        return $('//div[@class="quick-demo-acc-form__surname"]//input[@class="input__field input__field_mode_text"]')
    }

    get checkLabelConfirmText () 
    { 
        return $('#eu-confirm-text')
    }

    get btnSubmitRegistration () 
    { 
        return $('//div[@class="quick-demo-acc-form__button"]//div[@class="button button_type_brand"]')
    }

    async fillRegistrationForm (options : {userMail: string, userFirstName: string, coutryWithCodeName : string, userPhone : string, userSurname : string}) 
    {
        await (await this.inputUserEmail).setValue(options.userMail)
        await (await this.inputUserFirstname).setValue(options.userFirstName)
        await (await this.selectCountryElement).click()
        await this.countryWithCodeFromSelect(options.coutryWithCodeName)
        await (await this.inputUserPhone).setValue(options.userPhone)
        await (await this.inputUserSurname).setValue(options.userSurname)
        if(await (await this.checkLabelConfirmText).isClickable())
        {
            await (await this.checkLabelConfirmText).click()
        }
        await (await this.btnSubmitRegistration).click();
    }
}

export default new RegistrationPage();
