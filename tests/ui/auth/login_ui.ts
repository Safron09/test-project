import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../src/pages/LoginPage';
import { loginWithTotp } from '../../../src/helpers/auth.helper';
import { config } from '../../../src/utils/config';

test.use({ storageState: { cookies: [], origins: [] } });
test.describe.configure({ mode: 'serial' });

test.describe('Login — success', () => {
  test('logs in and shows correct email in sidebar @smoke @auth @ui', async ({ page }) => {
    await loginWithTotp(page);

    await expect(page.locator('[data-testid="sidebar-user-name"]')).toContainText(config.email);
  });
});

test.describe('Login — invalid credentials', () => {
  test('shows error with wrong password @smoke @regression @ui @negative' , async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(config.email, 'wrongpassword');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Wrong email or password');
  });

  test('shows error with non-existent email @smoke @regression @ui @negative', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('doesnotexist@test.com', 'somepassword');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Wrong email or password');
  });
});
