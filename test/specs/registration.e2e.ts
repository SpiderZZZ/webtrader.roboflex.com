import LoginPage from  '../pageobjects/login.page';
import RegistrationPage from '../pageobjects/registration.page';
import SecurePage from '../pageobjects/secure.page';

describe('WebTrader Registration page', () => {
    const cryptoRandomString = require('crypto-random-string');

    before(async () =>
    {
        LoginPage.open()
        await (await LoginPage.btnRegistration).click()
    })

    it('should register with valid data and login after', async () => {
        const userEmail = `${cryptoRandomString({length: 15})}@mail.cy`
        const userFirstname = cryptoRandomString({length: 10, characters : 'abcderfgh'})
        const userSurname = cryptoRandomString({length: 12, characters : 'zjkqwegla'})
        await RegistrationPage.fillRegistrationForm
        (
            {
                userMail : userEmail,
                userFirstName : userFirstname,
                coutryWithCodeName : "Haiti: HT +509",
                userPhone : cryptoRandomString({length: 10, type: 'numeric'}),
                userSurname : userSurname
            }
        )
        await expect(await SecurePage.demoAccountModal).toBeVisible()
        await expect(await SecurePage.demoAccountModalTitle).toHaveText("Demo Account details")
        await expect(await SecurePage.demoAccountModalUsername).toHaveText(`${userFirstname} ${userSurname}`)
        await expect(await SecurePage.demoAccountModalUserEmail).toHaveText(userEmail)
        const userPassword = await (await SecurePage.demoAccountModalPassword).getText()
        await (await SecurePage.demoAccountCloseButton).click()

        await expect(await SecurePage.tourModalTitle).toHaveText("RoboForex WebTrader Overview")
        await expect(await SecurePage.tourModalTotalStepsCount).toHaveText("14")
        await (await SecurePage.tourModalWindowCloseBtn).click()

        await expect(await SecurePage.chart).not.toBeVisible();
        await expect(SecurePage.logoutLink).toBeClickable()
        await (await SecurePage.logoutLink).click()
        await LoginPage.open()
        await LoginPage.login(userEmail, userPassword);
        await expect(await SecurePage.chart).toBeExisting();
    });
});