import { type Page, type Locator, expect } from '@playwright/test';
import { basePage } from 'src/core/basePage';
import { step } from '../core/stepWrapper';
import { BASE_URL } from 'src/config/api_variables';

export default class LoginPage extends basePage {
    private readonly signupName: Locator;
    private readonly signupEmail: Locator;
    private readonly signupButton: Locator;
    private readonly loginEmail: Locator;
    private readonly loginPassword: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.signupName = page.locator('//form[@action="/signup"]/input[@name="name"]');
        this.signupEmail = page.locator('//form[@action="/signup"]/input[@name="email"]');
        this.signupButton = page.locator('//form[@action="/signup"]/button[text()="Signup"]');
        this.loginEmail = page.locator('//form[@action="/login"]/input[@name="email"]');
        this.loginPassword = page.locator('//form[@action="/login"]/input[@name="password"]');
        this.loginButton = page.locator('//form[@action="/login"]/button[text()="Login"]');
    }

    async enterLoginCreds(username: string, password: string) {
        await this.loginEmail.fill(username);
        await this.loginPassword.fill(password);
        await this.loginButton.click();
        return this;
    }
    async enterSignUpDetail(name:string,email:string){
        await step(this.page,'Enter Initial Sign Up Details(Name, Email)',async()=>{
        await this.signupName.fill(name);
        await this.signupEmail.fill(email);
        await this.signupButton.click();
        });
        return this;
    }

    async verifyNewUserSignupVisible() {
        await step(this.page, `Verify 'New User Signup!' is visible`, async () => {
            await this.verifyTextVisible('New User Signup!');
        });
        return this;
    }

    async loginAs(username: string, password: string) {
        await step(this.page, `Login as ${username}`, async () => {
            await this.enterLoginCreds(username, password);
            await expect(this.page.locator('//a[@href="/logout"]')).toBeVisible();
        });
        return this;
    }

    async validateLoginEmailErrorMessage(expectedErrorMessage: string) {
        const errorMessage = await this.page.locator('//label[text()="Email"]/following-sibling::div[@class="invalid-feedback"]');
        await expect(errorMessage).toHaveText(expectedErrorMessage);
        return this;
    }

    async open(){
        await this.page.goto(BASE_URL)
        return this;
    }
}
