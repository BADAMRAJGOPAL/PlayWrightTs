import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests/webTests',
  timeout: 30_000,
  retries: 0,

  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure', // good for Allure
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        
      },
      
    },
  ],

  reporter: [
    ['list'],
    [
      'allure-playwright',
      {
        outputFolder: 'allure-results',
        detail: true,
        suiteTitle: false,
      },
    ],
  ],
});
