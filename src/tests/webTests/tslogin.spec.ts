import { test, expect } from '../../fixtures/baseFixtures';
import { loginTestData } from '../../testData/tsTestData/loginData';

test.describe('Login Tests - TS Data', () => {
  loginTestData.forEach((data:any) => {
    test(`Login Test - ${data.testId}`, async ({ page,loginPage,homePage }) => {
      await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
      await loginPage.login(data.email, data.password);
      await loginPage.validateLoginEmailErrorMessage(data.expected);
    });
  });
});
