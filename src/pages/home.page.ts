import { type Page, type Locator, expect } from '@playwright/test';
import { basePage } from 'src/pages/core/basePage';

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
    }

    async validateUserName(name:string){
        await expect(this.page.getByText(`Logged in as ${name}`)).toBeVisible();
    }

    async validateAccountDeletedDisplayed() {
        await expect(this.accountDeletedText).toBeVisible();
    }

    async clickContinue() {
        await this.continueLink.click();
    }

    async validateHomePageDisplayed(){
        await expect(this.featuredItems).toBeVisible();
    }
}