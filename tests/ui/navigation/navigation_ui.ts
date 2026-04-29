import { test, expect } from '../../../src/fixtures/base';

test.describe.configure({ mode: 'serial' });

test.describe('Sidebar navigation', () => {
  test('navigates to Devices @smoke @regression @ui @navigation', async ({ page, devicesPage }) => {
    await devicesPage.openDevices();

    await expect(page.locator('h2', { hasText: 'Devices' })).toBeVisible();
  });

  test('navigates to Blueprints @smoke @regression @ui @navigation', async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-testid="sidebar-blueprints"]').click();

    await expect(page.locator('h2', { hasText: 'Blueprints' })).toBeVisible();
  });

  test('navigates to Library @smoke @regression @ui @navigation', async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-testid="sidebar-library"]').click();

    await expect(page.locator('h2', { hasText: 'Library' })).toBeVisible();
  });
});
