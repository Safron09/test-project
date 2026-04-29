import { test as setup } from '@playwright/test';
import { loginWithTotp } from './src/helpers/auth.helper';
import path from 'path';
import fs from 'fs';

const authFile = path.join(__dirname, 'playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
  fs.mkdirSync(path.dirname(authFile), { recursive: true });
  await loginWithTotp(page);
  await page.waitForSelector('[data-testid="sidebar-devices"]');
  await page.context().storageState({ path: authFile });
});
