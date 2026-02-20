import {test as base} from '@playwright/test';
import LoginPage  from 'src/pages/LoginPage';
import SignupPage  from '../pages/SignupPage';
import HomePage from '../pages/HomePage'

type MyFixtures={
    loginPage:LoginPage;
    signupPage:SignupPage;
    homePage:HomePage;
};

export const test= base.extend<MyFixtures>({
    loginPage:async({page},use)=>{
        await use(new LoginPage(page));
    },
    signupPage:async({page},use)=>{
        await use(new SignupPage(page));
    },
    homePage:async({page},use)=>{
        await use(new HomePage(page));
    },
});

export const expect=test.expect;