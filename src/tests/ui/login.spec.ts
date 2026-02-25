import { getSignupData } from 'src/data/factories/signup.factories';
import { test } from '../../fixtures/baseFixtures'


test.describe.serial('@web Login Testcases', () => {
    let payLoad : any;

    test.beforeAll('create Account', async ({ accountApi }) => {
        payLoad = getSignupData();
        await accountApi.createAccount(payLoad);
    })

    test('@web Test Case 4: Logout User', async ({}) => {
        console.log('Logout')
    })

    test('@web Test Case 2: Login User with correct email and password', async ({ loginPage, homePage}) => {
        await loginPage.open();
        await loginPage.selectTab(" Signup / Login");
        await loginPage.loginAs(payLoad.email, payLoad.password);
        await homePage.validateUserName(payLoad.name);
        await homePage.deleteAccount();
        await homePage.validateAccountDeletedDisplayed();
    })
})