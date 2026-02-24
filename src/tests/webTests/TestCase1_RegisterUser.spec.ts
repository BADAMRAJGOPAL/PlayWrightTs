import {test, expect} from '../../fixtures/baseFixtures'
import { getSignupData } from 'src/data/factories/signup.factories';


test('@web Test Case 1: Register User',async({loginPage,signupPage,homePage,page})=>{
    const signupData=getSignupData();
    await loginPage.open();
    await homePage.validateHomePageDisplayed();
    await loginPage.selectTab(" Signup / Login");
    await loginPage.verifyNewUserSignupVisible();
    await loginPage.enterSignUpDetail(signupData.name,signupData.firstName+'@gmail.com')
    await signupPage.verifyEnterAccountInformationVisible();
    await signupPage.enterSignupAccountInformation(signupData);
    await signupPage.validateAccountCreatedDisplayed();
    await signupPage.clickContinue();
    await homePage.validateUserName(signupData.name);
    await homePage.validateHomePageDisplayed();
    await homePage.deleteAccount();
    await homePage.validateAccountDeletedDisplayed();
    await homePage.clickContinue()
})