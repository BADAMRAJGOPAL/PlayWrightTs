import { generateSignupData } from 'src/testData/tsTestData/signupData';
import {test, expect} from '../../fixtures/baseFixtures'

test('@web Test Case 1: Register User',async({loginPage,signupPage,homePage,page})=>{
    const signupData=generateSignupData();
    await loginPage.open();
    await loginPage.validateHomePageDisplayed();
    await loginPage.selectTab(" Signup / Login");
    await loginPage.verifyNewUserSignupVisible();
    await loginPage.enterSignUpDetail(signupData.name,signupData.firstName+'@gmail.com')
    await signupPage.verifyEnterAccountInformationVisible();
    await signupPage.enterSignupAccountInformation(signupData);
    await signupPage.validateAccountCreatedDisplayed();
    await signupPage.continue();
    await homePage.validateUserName(signupData.name);
    await homePage.deleteAccount();
    await homePage.validateAccountDeletedDisplayed();
    await homePage.continue()
})