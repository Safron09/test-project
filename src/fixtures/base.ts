import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TwoFactorPage } from '../pages/TwoFactorPage';
import { DevicesPage } from '../pages/DevicesPage';

type Fixtures = {
  loginPage: LoginPage;
  twoFactorPage: TwoFactorPage;
  devicesPage: DevicesPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  twoFactorPage: async ({ page }, use) => {
    await use(new TwoFactorPage(page));
  },
  devicesPage: async ({ page }, use) => {
    await use(new DevicesPage(page));
  },
});

export { expect } from '@playwright/test';
