import {test as base} from '@playwright/test';
import LoginPage  from 'src/pages/LoginPage';
import HomePage  from 'src/pages/HomePage';

type MyFixtures={
    loginPage:LoginPage;
    homePage:HomePage;
};

export const test= base.extend<MyFixtures>({
    loginPage:async({page},use)=>{
        await use(new LoginPage(page));
    },
    homePage:async({page},use)=>{
        await use(new HomePage(page));
    },
});

export const expect=test.expect;