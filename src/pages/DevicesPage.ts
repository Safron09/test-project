import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class DevicesPage extends BasePage {
  private readonly sidebarDevices = this.page.locator('[data-testid="sidebar-devices"]');
  private readonly prismTab = this.page.locator('[data-tabid="prism"]');
  private readonly transparencyDatabaseNavItem = this.page.locator('#prism-nav-label', { hasText: 'Transparency Database' });
  private readonly filterButton = this.page.getByRole('button', { name: 'Filter' });
  private readonly appleSiliconMenuItem = this.page.getByRole('menuitem', { name: 'Apple Silicon' });
  private readonly appleSiliconYesRadio = this.page.locator('[role="radio"][value="true"]');
  private readonly applyFilterButton = this.page.locator('button', { hasText: 'Apply' });
  readonly noDevicesMessage = this.page.locator('h4', { hasText: 'No devices to display' });
  readonly transparencyDatabaseHeading = this.page.locator('h3', { hasText: 'Transparency Database' });
  readonly appleSiliconFilterChip = this.page.locator('button[data-slot="dropdown-menu-trigger"]', { hasText: 'Apple Silicon' });

  constructor(page: Page) {
    super(page);
  }

  async openDevices(): Promise<void> {
    await this.goto('/');
    await this.sidebarDevices.click();
  }

  async openPrismTab(): Promise<void> {
    await this.prismTab.click();
  }

  async openTransparencyDatabase(): Promise<void> {
    await this.transparencyDatabaseNavItem.scrollIntoViewIfNeeded();
    await this.transparencyDatabaseNavItem.click();
  }

  async applyAppleSiliconFilter(): Promise<void> {
    await this.filterButton.click();
    await this.appleSiliconMenuItem.hover();
    await this.appleSiliconYesRadio.click({ force: true, timeout: 5000 });
    await this.applyFilterButton.click({ force: true });
  }

  async isEmptyState(): Promise<boolean> {
    return this.noDevicesMessage.isVisible();
  }
}
