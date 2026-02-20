import { type Page, type Locator, expect } from '@playwright/test';
import { basePage } from 'src/core/basePage';
import { step } from '../core/stepWrapper';
import { BASE_URL } from 'src/config/api_variables';

export default class LoginPage extends basePage {
    readonly signupName: Locator;
    readonly signupEmail: Locator;
    readonly SignUpButton: Locator;
    readonly loginEmail: Locator;
    readonly loginPassword: Locator;
    readonly LoginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.signupName = page.locator('//form[@action="/signup"]/input[@name="name"]');
        this.signupEmail = page.locator('//form[@action="/signup"]/input[@name="email"]');
        this.SignUpButton = page.locator('//form[@action="/signup"]/button[text()="Signup"]');
        this.loginEmail = page.locator('//form[@action="/login"]/input[@name="email"]');
        this.loginPassword = page.locator('//form[@action="/login"]/input[@name="password"]');
        this.LoginButton = page.locator('//form[@action="/login"]/button[text()="Login"]');
    }

    async enterLoginCreds(username: string, password: string) {
        await this.loginEmail.fill(username);
        await this.loginPassword.fill(password);
        await this.LoginButton.click();
    }
    async enterSignUpDetail(name:string,email:string){
        await step(this.page,'Enter Initial Sign Up Details(Name, Email)',async()=>{
        await this.signupName.fill(name);
        await this.signupEmail.fill(email);
        await this.SignUpButton.click();
        });
    }

    async verifyNewUserSignupVisible() {
        await step(this.page, `Verify 'New User Signup!' is visible`, async () => {
            await this.verifyTextVisible('New User Signup!');
        });
    }

    async loginAs(username: string, password: string) {
        await step(this.page, `Login as ${username}`, async () => {
            await this.enterLoginCreds(username, password);
            await expect(this.page.locator('//a[@href="/logout"]')).toBeVisible();
        });
    }

    async validateLoginEmailErrorMessage(expectedErrorMessage: string) {
        const errorMessage = await this.page.locator('//label[text()="Email"]/following-sibling::div[@class="invalid-feedback"]');
        await expect(errorMessage).toHaveText(expectedErrorMessage)
    }

    async open(){
        await this.page.goto(BASE_URL)
    }

    async selectTab(tabName: string) {
        await this.page.getByRole('link', { name: tabName }).click();
    }

    async validateHomePageDisplayed(){
        await expect(this.page.locator('//div[@class="features_items"]')).toBeVisible();
    }
}
