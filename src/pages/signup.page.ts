import { basePage } from 'src/pages/core/basePage';
import { step } from 'src/utils/stepWrapper';
import { Page, Locator } from '@playwright/test';
import { signupModel } from 'src/data/models/signup.model';

export default class SignupPage extends basePage {

    private readonly daysDropdown: Locator;
    private readonly monthsDropdown: Locator;
    private readonly yearsDropdown: Locator;
    private readonly zipcodeInput: Locator;
    private readonly continueLink: Locator;

    constructor(page: Page) {
        super(page);

        this.daysDropdown = page.locator('#days');
        this.monthsDropdown = page.locator('#months');
        this.yearsDropdown = page.locator('#years');
        this.zipcodeInput = page.locator('#zipcode');
        this.continueLink = page.getByRole('link', { name: 'Continue' });
    }

    async verifyEnterAccountInformationVisible() {
        await step(`Verify 'Enter Account Information' is visible`, async () => {
            await this.verifyTextVisible('Enter Account Information');
        });
        return this;
    }

    async enterDOB(day: string, month: string, year: string) {
        await this.daysDropdown.selectOption(day);
        await this.monthsDropdown.selectOption(month);
        await this.yearsDropdown.selectOption(year);
    }

    async enterSignupAccountInformation(data: signupModel) {
        await step(`Enter Signup Account Information`, async () => {

            await this.checkRadio(data.title);
            await this.inputText('Password *', data.password);
            // await this.enterDOB(data.day, data.month, data.year);
            if (data.newsletter) {
                await this.selectCheckBox('Sign up for our newsletter!');
            }

            if (data.offers) {
                await this.selectCheckBox('Receive special offers from our partners!');
            }

            await this.inputText('First name *', data.firstName);
            await this.inputText('Last name *', data.lastName);

            if (data.company) {
                await this.inputText('Company', data.company);
            }

            await this.inputText('Address *', data.address);

            if (data.address2) {
                await this.inputText('Address 2', data.address2);
            }

            await this.inputText('State *', data.state);
            await this.inputText('City *', data.city);
            await this.zipcodeInput.fill(data.zipcode);
            await this.inputText('Mobile Number *', data.mobileNumber);
            await this.clickButton('Create Account');
        });
    }

    async validateAccountCreatedDisplayed() {
        await step(`Verify account created successfully`, async () => {
            await this.verifyTextVisible('Account Created!');
        });
    }

    async clickContinue() {
        await this.continueLink.click();
    }
}