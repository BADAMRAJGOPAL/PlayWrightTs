import { type Page, type Locator, expect } from '@playwright/test';
import { basePage } from 'src/core/basePage';

export default class HomePage extends basePage {


    constructor(page: Page) {
        super(page)
    }

    async deleteAccount() {
        await this.selectTab('Delete Account');
    }

    async validateUserName(name:string){
        expect(await this.page.locator("//i[contains(@class,'user')]")).toHaveText(name);
    }

    async validateAccountDeletedDisplayed(){
        this.verifyTextVisible("Account Deleted!")
    }

    async continue(){
        await this.clickButton('Continue');
    }
}