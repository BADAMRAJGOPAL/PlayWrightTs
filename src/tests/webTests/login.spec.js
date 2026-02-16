import {test} from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage';

const loginPayload = { userEmail: "Jammie.Price5@hotmail.com", userPassword: "@1aAVk_R9wcwOrJVFxa" }

test('login test', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    const loginPage = new LoginPage(page);
    await loginPage.Login(loginPayload.userEmail, loginPayload.userPassword);
    const homePage=await loginPage.ValidateLoginSuccessful();
    await homePage.SignOut()
    await homePage.ValidateLogOutSuccessful()
});