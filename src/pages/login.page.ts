import { type Page, type Locator, expect } from '@playwright/test';
import { basePage } from 'src/pages/core/basePage';
import { step } from '../utils/stepWrapper';
import { BASE_URL } from 'src/config/api_variables';

export default class LoginPage extends basePage {

    constructor(page: Page) {
        super(page);
    }
    private readonly signupName = this.page.locator('//form[@action="/signup"]/input[@name="name"]');;
    private readonly signupEmail = this.page.locator('//form[@action="/signup"]/input[@name="email"]');;
    private readonly signupButton = this.page.locator('//form[@action="/signup"]/button[text()="Signup"]');;
    private readonly loginEmail = this.page.locator('//form[@action="/login"]/input[@name="email"]');;
    private readonly loginPassword = this.page.locator('//form[@action="/login"]/input[@name="password"]');;
    private readonly loginButton = this.page.locator('//form[@action="/login"]/button[text()="Login"]');;


    async enterLoginCreds(username: string, password: string) {
        await this.loginEmail.fill(username);
        await this.loginPassword.fill(password);
        await this.loginButton.click();
    }

    async enterSignUpDetail(name: string, email: string) {
        await step('Enter Initial Sign Up Details(Name, Email)', async () => {
            await this.signupName.fill(name);
            await this.signupEmail.fill(email);
            await this.signupButton.click();
        });
    }

    async verifyNewUserSignupVisible() {
        await step(`Verify 'New User Signup!' is visible`, async () => {
            await this.verifyTextVisible('New User Signup!');
        });
    }

    async loginAs(username: string, password: string) {
        await step(`Login as ${username}`, async () => {
            await this.enterLoginCreds(username, password);
            await expect(this.page.locator('//a[@href="/logout"]')).toBeVisible();
        });
    }

    async validateLoginEmailErrorMessage(expectedErrorMessage: string) {
        const errorMessage = await this.page.locator('//label[text()="Email"]/following-sibling::div[@class="invalid-feedback"]');
        await expect(errorMessage).toHaveText(expectedErrorMessage);
    }

    async open() {
        await this.page.goto(BASE_URL)
    }
}
