import {test as base} from '@playwright/test';
import LoginPage  from 'src/pages/login.page';
import SignupPage  from '../pages/signup.page';
import HomePage from '../pages/home.page'
import AccountApi from '../api/account.services'

type MyFixtures={
    loginPage:LoginPage;
    signupPage:SignupPage;
    homePage:HomePage;
    accountApi:AccountApi;
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
    accountApi:async({request},use)=>{
        await use(new AccountApi(request))
    }
});

export const expect=test.expect;