import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class TwoFactorPage extends BasePage {
  private readonly codeInput = this.page.locator('#code');
  private readonly rememberBrowserCheckbox = this.page.locator('#rememberBrowser');
  private readonly submitButton = this.page.locator('[data-action-button-primary="true"]');

  constructor(page: Page) {
    super(page);
  }

  isDisplayed(): boolean {
    return this.page.url().includes('mfa-otp-challenge');
  }

  async submitCode(code: string): Promise<void> {
    if (!this.isDisplayed()) return;

    const isChecked = await this.rememberBrowserCheckbox.isChecked();
    if (!isChecked) {
      await this.rememberBrowserCheckbox.check();
    }

    await this.codeInput.fill(code);
    await this.submitButton.click();
  }
}
