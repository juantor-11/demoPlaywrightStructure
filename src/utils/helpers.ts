import { Page } from '@playwright/test';

// Utilidad de ejemplo para aceptar cookies si existiera un banner
export async function acceptCookiesIfExist(page: Page) {
  const btnCookies = page.getByRole('button', { name: /Accept All Cookies/i });
  if (await btnCookies.isVisible()) {
    await btnCookies.click();
  }
}