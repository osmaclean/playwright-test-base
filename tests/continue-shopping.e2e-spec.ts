import { expect, test } from '@playwright/test'

test('continue shopping', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/')

  await expect(page).toHaveTitle('Swag Labs')

  await page.locator('[data-test="username"]').fill('standard_user')

  await page.locator('[data-test="password"]').fill('secret_sauce')

  await page.locator('[data-test="login-button"]').click()

  let currentURL = page.url()

  expect(currentURL).toBe('https://www.saucedemo.com/inventory.html')

  await expect(
    page.locator('[data-test="add-to-cart-sauce-labs-backpack"]'),
  ).toContainText('Add to cart')

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click()

  await expect(
    page.locator('[data-test="remove-sauce-labs-backpack"]'),
  ).toContainText('Remove')

  await expect(page.locator('[data-test="shopping-cart-badge"]')).toContainText(
    '1',
  )

  await page.locator('[data-test="shopping-cart-link"]').click()

  currentURL = page.url()

  expect(currentURL).toBe('https://www.saucedemo.com/cart.html')

  await page.waitForTimeout(500)

  await expect(page.locator('[data-test="inventory-item"]')).toBeVisible()

  await page.locator('[data-test="continue-shopping"]').click()

  currentURL = page.url()

  expect(currentURL).toBe('https://www.saucedemo.com/inventory.html')
})
