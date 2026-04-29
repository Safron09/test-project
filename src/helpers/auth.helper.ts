import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TwoFactorPage } from '../pages/TwoFactorPage';
import { generateTotpCode } from './totp.helper';
import { config } from '../utils/config';

export async function loginWithTotp(page: Page): Promise<void> {
  const loginPage = new LoginPage(page);
  await loginPage.login(config.email, config.password);

  const twoFactorPage = new TwoFactorPage(page);
  await twoFactorPage.submitCode(generateTotpCode());
}
