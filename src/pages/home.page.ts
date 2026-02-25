import { type Page, type Locator, expect } from '@playwright/test';
import { basePage } from 'src/pages/core/basePage';

export default class HomePage extends basePage {

    constructor(page: Page) {
        super(page)
    }

    private continueLink = this.page.getByRole('link', { name: 'Continue' });;
    private accountDeletedText = this.page.getByText('Account Deleted!');;
    private featuredItems = this.page.locator('//div[@class="features_items"]');


    async deleteAccount() {
        await this.selectTab('Delete Account');
    }

    async validateUserName(name: string) {
        await expect(this.page.getByText(`Logged in as ${name}`)).toBeVisible();
    }

    async validateAccountDeletedDisplayed() {
        await expect(this.accountDeletedText).toBeVisible();
    }

    async clickContinue() {
        await this.continueLink.click();
    }

    async validateHomePageDisplayed() {
        await expect(this.featuredItems).toBeVisible();
    }
}