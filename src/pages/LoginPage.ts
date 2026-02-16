import { type Page, type Locator, expect } from '@playwright/test';
import { MESSAGES } from '../constants/messages';
import { HomePage } from './HomePage';

export class LoginPage {
    readonly page: Page;
    readonly loginButton: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly dashboardButton: Locator;
    readonly toastMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailInput = page.getByRole('textbox', { name: 'Email' });
        this.passwordInput = page.locator('input[type="password"]');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.dashboardButton = page.locator('//button[@routerlink="/dashboard/"]');
        this.toastMessage = page.locator('//div[@id="toast-container"]');
    }

    async Login(username: string, password: string) {
        await this.emailInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    async ValidateLoginSuccessful() {
        await expect(this.toastMessage).toHaveText(MESSAGES.LOGIN_SUCCESS);
        await expect(this.toastMessage).toBeHidden();
        await expect(this.dashboardButton).toBeVisible();
        return new HomePage(this.page);
    }
}