import { type Page, type Locator, expect } from '@playwright/test';
import { MESSAGES } from '../constants/messages';

export class HomePage {
    readonly page: Page;
    readonly signOutButton: Locator;
    readonly toastMessage: Locator;


    constructor(page: Page) {
        this.page = page;
        this.signOutButton = page.getByRole('button', { name: " Sign Out " })
        this.toastMessage = page.locator('//div[@id="toast-container"]');
    }

    async SignOut() {
        await this.signOutButton.click();
    }

    async ValidateLogOutSuccessful() {
        await expect(this.toastMessage).toHaveText(MESSAGES.LOGOUT_SUCCESS)
        await expect(this.toastMessage).toBeHidden();
    }
}