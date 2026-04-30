import { test, expect } from '@playwright/test';
import { LibraryPage } from '../../../src/pages/LibraryPage';

test.describe.configure({ mode: 'serial' });

test.describe('Library E2E test', () => {
  test('adds iOS 17 managed OS item with label and closes @e2e @ui @library', async ({ page }) => {
    const libraryPage = new LibraryPage(page);
    const label = String(Math.floor(Math.random() * 10000) + 1);

    await libraryPage.openLibrary();
    await expect(libraryPage.libraryHeading).toBeVisible();

    await libraryPage.clickAddLibraryItem();
    await expect(libraryPage.addLibraryItemHeading).toBeVisible();

    await libraryPage.selectManagedOs();
    await libraryPage.selectIos17();
    await libraryPage.clickAddAndConfigure();
    await expect(libraryPage.ios17Heading).toBeVisible();

    await libraryPage.enterLabel(label);
    await libraryPage.save();
    await expect(libraryPage.labelText(label)).toBeVisible();

    await libraryPage.close();
    await expect(libraryPage.libraryHeading).toBeVisible();
  });
});
