import { basePage } from 'src/core/basePage';
import { step } from 'src/core/stepWrapper';
import { Locator, Page } from 'playwright/test';
import { SignupData } from 'src/testData/tsTestData/signupData';

export default class SignupPage extends basePage {

    constructor(page: Page) {
        super(page);

    }
    async verifyEnterAccountInformationVisible() {
        await step(this.page, `Verify 'Enter Account Information' is visible`, async () => {
            await this.verifyTextVisible('Enter Account Information');
        });
    }

    async enterDOB(day: string, month: string, year: string) {
        await this.page.locator('#days').selectOption(day);
        await this.page.locator('#months').selectOption(month);
        await this.page.locator('#years').selectOption(year);
    }

    async enterSignupAccountInformation(data: SignupData) {
        await step(this.page, `Enter Signup Account Information`, async () => {

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
            await this.page.locator('#zipcode').fill(data.zipcode);
            // await this.inputText('Zipcode *', data.zipcode);
            await this.inputText('Mobile Number *', data.mobileNumber);
            await this.clickButton('Create Account');
        });
    }
    async validateAccountCreatedDisplayed(){
        await this.verifyTextVisible("Account Created!")

    }
    async continue(){
        await this.page.getByRole('link',{name:'Continue'}).click();
    }
}