import { Page, Locator } from '@playwright/test';

export class PricingPage {
  readonly page: Page;
  readonly title: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.getByRole('heading', { level: 1, name: /PRICING PLANS/i });
  }
}