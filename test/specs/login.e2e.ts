import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('WebTrader Login page', () => {

    it('should login with valid credentials', () => {
        LoginPage.open();
        LoginPage.login('test123457@mail.ru', '8e98D0s');
        expect(SecurePage.chart).toBeExisting();
    });
});


