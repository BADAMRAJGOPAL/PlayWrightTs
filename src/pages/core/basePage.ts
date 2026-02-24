import test, { type Page, expect } from '@playwright/test';

export class basePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string) {
        await test.step(`Navigate to application URl: ${url}`, async () => {
            await this.page.goto(url);
        })
    }

    async selectTab(tabName: string) {
        await this.page.getByRole('link', { name: tabName }).click();
    }

    async verifyTextVisible(text: string) {
        await expect(this.page.getByText(text, { exact: true })).toBeVisible();
    }
    async checkRadio(name:string){
        await this.page.getByRole('radio',{name:name}).click();
    }
    async inputText(label:string,value:string){
        await this.page.getByRole('textbox',{name:label}).first().fill(value);
    }
    async clickButton(label:string){
        await this.page.getByRole('button',{name:label}).click();
    }
    async selectCheckBox(label:string){
        await this.page.getByRole('checkbox',{name:label}).click();
    }
    async selectDropDown(label:string,value:string){
        await this.page.getByLabel(label).selectOption(value);
    }
}