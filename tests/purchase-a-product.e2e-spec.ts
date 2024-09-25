import { expect, test } from '@playwright/test'

test('purchase a product', async ({ page }) => {
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

  await page.waitForTimeout(100)

  expect(currentURL).toBe('https://www.saucedemo.com/cart.html')

  await expect(page.locator('[data-test="inventory-item"]')).toBeVisible()

  await page.locator('[data-test="checkout"]').click()

  currentURL = page.url()

  expect(currentURL).toBe('https://www.saucedemo.com/checkout-step-one.html')

  await expect(page.locator('.checkout_info')).toBeVisible()

  await page.locator('[data-test="firstName"]').fill('John')
  await page.locator('[data-test="lastName"]').fill('Doe')
  await page.locator('[data-test="postalCode"]').fill('99999999')

  await page.locator('[data-test="continue"]').click()

  currentURL = page.url()

  expect(currentURL).toBe('https://www.saucedemo.com/checkout-step-two.html')

  await expect(
    page
      .locator('[data-test="checkout-summary-container"] div')
      .filter({ hasText: 'QTYDescription1Sauce Labs' })
      .first(),
  ).toBeVisible()

  await page.locator('[data-test="finish"]').click()

  currentURL = page.url()

  expect(currentURL).toBe('https://www.saucedemo.com/checkout-complete.html')

  await expect(
    page.locator('[data-test="checkout-complete-container"]'),
  ).toBeVisible()

  await expect(page.locator('[data-test="complete-header"]')).toBeVisible()

  await page.locator('[data-test="back-to-products"]').click()

  currentURL = page.url()

  expect(currentURL).toBe('https://www.saucedemo.com/inventory.html')
})
