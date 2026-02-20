import { test } from '@playwright/test';
import { readCSV } from '../../utils/dataReader';

const loginTestData = readCSV("LoginData.csv");
test.describe('Login Tests - CSV Data Driver', () => {
    loginTestData.forEach((data) => {
        test(`${data.TestCaseID} - ${data.TestCaseTitle}`, async ({ page }) => {
            console.log(data.Email);
            console.log(data.Password);
        });
    });
});
