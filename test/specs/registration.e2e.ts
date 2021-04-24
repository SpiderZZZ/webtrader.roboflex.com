import LoginPage from  '../pageobjects/login.page';
import RegistrationPage from '../pageobjects/registration.page';
import SecurePage from '../pageobjects/secure.page';

describe('WebTrader Registration page', () => {
    const cryptoRandomString = require('crypto-random-string');

    beforeEach(async () =>
    {
        LoginPage.open()
        await (await LoginPage.btnRegistration).click()
    })

    afterEach(async () =>
    {
        await SecurePage.logoutIfVisible()
    })

    it('should register with valid data and login after', async () => {
        const userEmail = `${cryptoRandomString({length: 15})}@mail.cy`
        const userFirstname = cryptoRandomString({length: 10})
        const userSurname = cryptoRandomString({length: 12})
        await RegistrationPage.fillRegistrationForm
        (
            {
                userMail : userEmail,
                userFirstName : userFirstname,
                coutryName : "Russia",
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
        await expect(await SecurePage.chart).toBeExisting();

        await SecurePage.logoutIfVisible()
        LoginPage.open()
        await LoginPage.login(userEmail, userPassword);
        await expect(await SecurePage.chart).toBeExisting();
    });
});