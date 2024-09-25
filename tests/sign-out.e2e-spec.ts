import { expect, test } from '@playwright/test'

test('logout of the application', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/')

  await expect(page).toHaveTitle('Swag Labs')

  await page.locator('[data-test="username"]').fill('standard_user')

  await page.locator('[data-test="password"]').fill('secret_sauce')

  await page.locator('[data-test="login-button"]').click()

  let currentURL = page.url()

  expect(currentURL).toBe('https://www.saucedemo.com/inventory.html')

  await page.getByRole('button', { name: 'Open Menu' }).click()

  await page.waitForTimeout(500)

  const menu = page
    .locator('div')
    .filter({ hasText: /^All ItemsAboutLogoutReset App State$/ })

  await expect(menu).toBeVisible()

  await page.locator('[data-test="logout-sidebar-link"]').click()

  currentURL = page.url()

  expect(currentURL).toBe('https://www.saucedemo.com/')
})
