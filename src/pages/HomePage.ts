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
        await expect(this.page.getByText(`Logged in as ${name}`)).toBeVisible();
    }

    async validateAccountDeletedDisplayed(){
        this.verifyTextVisible("Account Deleted!")
    }

    async continue(){
        await this.page.getByRole('link',{name:'Continue'}).click();
    }
}