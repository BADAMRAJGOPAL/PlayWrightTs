import test, { type Page, type Locator, expect } from '@playwright/test';

export default class commonUtils {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
   
}