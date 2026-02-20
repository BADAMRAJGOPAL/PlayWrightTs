import { type Page, type Locator, expect } from '@playwright/test';
import { basePage } from 'src/core/basePage';

export default class HomePage extends basePage {
    private readonly continueLink:Locator;
    private readonly accountDeletedText:Locator;
    private readonly featuredItems:Locator;

    constructor(page: Page) {
        super(page)
        this.continueLink = page.getByRole('link', { name: 'Continue' });
        this.accountDeletedText = page.getByText('Account Deleted!');
        this.featuredItems=page.locator('//div[@class="features_items"]')
    }

    async deleteAccount() {
        await this.selectTab('Delete Account');
        return this;
    }

    async validateUserName(name:string){
        await expect(this.page.getByText(`Logged in as ${name}`)).toBeVisible();
        return this;
    }

    async validateAccountDeletedDisplayed() {
        await expect(this.accountDeletedText).toBeVisible();
        return this;
    }

    async clickContinue() {
        await this.continueLink.click();
        return this;
    }

    async validateHomePageDisplayed(){
        await expect(this.featuredItems).toBeVisible();
        return this;
    }
}