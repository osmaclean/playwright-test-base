import { expect, test } from '@playwright/test'

test('attempted purchase with empty form', async ({ page }) => {
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

  await page.locator('[data-test="firstName"]').fill('')
  await page.locator('[data-test="lastName"]').fill('')
  await page.locator('[data-test="postalCode"]').fill('')

  await page.locator('[data-test="continue"]').click()

  await expect(
    page
      .locator('[data-test="checkout-info-container"] div')
      .filter({ hasText: 'Error: First Name is required' })
      .nth(2),
  ).toBeVisible()

  await expect(page.locator('[data-test="error"]')).toContainText(
    'Error: First Name is required',
  )

  await expect(page.locator('svg').first()).toBeVisible()
  await expect(page.locator('svg').nth(1)).toBeVisible()
  await expect(page.locator('svg').nth(2)).toBeVisible()

  await page.locator('[data-test="error-button"]').click()

  await expect(
    page
      .locator('[data-test="checkout-info-container"] div')
      .filter({ hasText: 'Error: First Name is required' })
      .nth(2),
  ).toBeHidden()

  await expect(page.locator('svg').first()).toBeHidden()
  await expect(page.locator('svg').nth(1)).toBeHidden()
  await expect(page.locator('svg').nth(2)).toBeHidden()
})
