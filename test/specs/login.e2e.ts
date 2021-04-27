import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';
import {generateEmail,generatePassword} from '../../utils/data.generator'

describe('WebTrader Login page', () => {
    const cryptoRandomString = require('crypto-random-string');

    beforeEach(async () =>
    {
        LoginPage.open()
    })

    afterEach(async () =>
    {
        await SecurePage.logoutIfVisible()
    })

    it('should login with valid credentials', async () => {
        await LoginPage.login('test123457@mail.ru', '8e98D0s');
        await expect(await SecurePage.chart).toBeExisting();
    });

    it('should does not login with bad credentials', async () => {
        await LoginPage.login(generateEmail(), generatePassword()); //добавляем цифру специально т.к. бывает рандом без цифры
        await expect(await LoginPage.errorBadPassword).toBeVisible()
        await expect(await SecurePage.chart).not.toBeExisting();
    });
});