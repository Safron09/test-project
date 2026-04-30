import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LibraryPage extends BasePage {
  private readonly sidebarLibrary = this.page.locator('[data-testid="sidebar-library"]');
  private readonly addLibraryItemButton = this.page.locator('[data-testid="add-library-item-button"]');
  private readonly managedOsNavItem = this.page.locator('#nav-item-label', { hasText: 'Managed OS' });
  private readonly ios17Item = this.page.locator('[title="iOS 17"]');
  private readonly addAndConfigureButton = this.page.getByRole('button', { name: 'Add and configure' });
  readonly labelInput = this.page.locator('input[placeholder*="For Marketing"]');

  labelText(value: string) {
    return this.page.locator('span.b-txt.ml-3', { hasText: value });
  }
  private readonly saveButton = this.page.getByRole('button', { name: 'Save' });
  private readonly closeButton = this.page.getByRole('button', { name: 'Close' });

  readonly libraryHeading = this.page.locator('h2', { hasText: 'Library' });
  readonly addLibraryItemHeading = this.page.locator('h1', { hasText: 'Add Library Item' });
  readonly ios17Heading = this.page.locator('h1.b-h1', { hasText: 'iOS 17' });

  constructor(page: Page) {
    super(page);
  }

async openLibrary(): Promise<void> {
    await this.goto('/');
    await this.sidebarLibrary.click();
  }

  async clickAddLibraryItem(): Promise<void> {
    await this.addLibraryItemButton.click();
  }

  async selectManagedOs(): Promise<void> {
    await this.managedOsNavItem.scrollIntoViewIfNeeded();
    await this.managedOsNavItem.click();
  }

  async selectIos17(): Promise<void> {
    await this.ios17Item.click();
  }

  async clickAddAndConfigure(): Promise<void> {
    await this.addAndConfigureButton.click();
  }

  async enterLabel(label: string): Promise<void> {
    await this.labelInput.click();
    await this.labelInput.fill(label);
  }

  async save(): Promise<void> {
    await this.saveButton.click();
  }

  async close(): Promise<void> {
    await this.closeButton.click();
  }
}
