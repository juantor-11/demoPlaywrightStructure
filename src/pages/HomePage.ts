import { Page, Locator } from '@playwright/test';
import { URLS } from '@constants';

export class HomePage {
  readonly page: Page;
  readonly linkPricing: Locator;

  constructor(page: Page) {
    this.page = page;
    this.linkPricing = page.getByRole('link', { name: 'Pricing', exact: true }).first();
  }

  async navigateToHome() {
    await this.page.goto(URLS.HOME);
  }
}