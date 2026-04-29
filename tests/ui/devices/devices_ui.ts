import { test, expect } from '@playwright/test';
import { DevicesPage } from '../../../src/pages/DevicesPage';

test.describe.configure({ mode: 'serial' });

test.describe('Devices', () => {
  test('navigates to Devices and verifies page state @smoke @regression @ui @devices', async ({ page }) => {
    const devicesPage = new DevicesPage(page);

    await devicesPage.openDevices();

    const isEmpty = await devicesPage.isEmptyState();
    if (isEmpty) {
      await expect(devicesPage.noDevicesMessage).toBeVisible();
    } else {
      await expect(devicesPage.noDevicesMessage).not.toBeVisible();
    }
  });

  test('applies Apple Silicon filter and verifies chip appears @test @regression @ui @devices', async ({ page }) => {
    const devicesPage = new DevicesPage(page);

    await devicesPage.openDevices();
    await devicesPage.applyAppleSiliconFilter();

    await expect(devicesPage.appleSiliconFilterChip).toBeVisible();
  });

  test('opens Prism tab and navigates to Transparency Database @smoke @regression @ui @devices', async ({ page }) => {
    const devicesPage = new DevicesPage(page);

    await devicesPage.openDevices();
    await devicesPage.openPrismTab();
    await devicesPage.openTransparencyDatabase();

    await expect(devicesPage.transparencyDatabaseHeading).toBeInViewport();
  });
});
