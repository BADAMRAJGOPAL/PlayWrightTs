import { test, expect } from '../../fixtures/baseFixtures';

const loginPayload = {
  userEmail: "Jammie.Price5@hotmail.com",
  userPassword: "@1aAVk_R9wcwOrJVFxa"
};

test('login test', async ({ page,loginPage,homePage}) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await loginPage.login(loginPayload.userEmail, loginPayload.userPassword);
  await loginPage.validateLoginSuccessful();
  await homePage.SignOut();
  await homePage.ValidateLogOutSuccessful();
});