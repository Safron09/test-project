import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../src/pages/LoginPage';

test.use({ storageState: { cookies: [], origins: [] } });

test.describe('Login — invalid credentials', () => {
  test('shows error with wrong password @regression', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('valid@email.com', 'wrongpassword');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Wrong email or password');
  });

  test('shows error with non-existent email @regression', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('doesnotexist@test.com', 'somepassword');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Wrong email or password');
  });
});
