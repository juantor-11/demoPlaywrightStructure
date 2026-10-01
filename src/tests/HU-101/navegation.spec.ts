import { test, expect } from '@playwright/test';
import { HomePage, PricingPage } from '@pages';
import { URLS } from '@constants';
import { acceptCookiesIfExist } from '@utils';

test('HU-101 | Successful navigation to the Pricing page', async ({ page }) => {
  const homePage = new HomePage(page);
  const pricingPage = new PricingPage(page);

  await test.step('Navigate to Sauce Labs homepage', async () => {
    await homePage.navigateToHome();
    await acceptCookiesIfExist(page);
  });

  await test.step('Click on the Pricing link in the header', async () => {
    await homePage.linkPricing.click();
  });

  await test.step('Verify the pricing page is loaded', async () => {
    await expect(page).toHaveURL(new RegExp(URLS.PRICING));
    await expect(pricingPage.title).toBeVisible();
  });
});