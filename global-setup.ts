import { chromium } from '@playwright/test';
import { loginWithTotp } from './src/helpers/auth.helper';
import path from 'path';
import fs from 'fs';

const authFile = path.join(__dirname, 'playwright/.auth/user.json');

async function globalSetup(): Promise<void> {
  fs.mkdirSync(path.dirname(authFile), { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage();

  await loginWithTotp(page);
  await page.context().storageState({ path: authFile });

  await browser.close();
}

export default globalSetup;
