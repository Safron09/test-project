import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { open: 'never' }]],
  expect: { timeout: 15_000 },

  use: {
    baseURL: process.env.KAIJU_BASE_URL,
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'setup',
      testDir: '.',
      testMatch: /global-setup\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'ui',
      testDir: './tests/ui',
      testMatch: /.*_ui\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
    {
      name: 'api',
      testDir: './tests/api',
      testMatch: /.*_api\.ts/,
    },
  ],
});
