import { expect, test } from '@playwright/test'

test('sign in successfully', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/')

  await expect(page).toHaveTitle('Swag Labs')

  await page.locator('[data-test="username"]').fill('standard_user')

  await page.locator('[data-test="password"]').fill('secret_sauce')

  await page.locator('[data-test="login-button"]').click()

  const currentURL = page.url()

  expect(currentURL).toBe('https://www.saucedemo.com/inventory.html')
})

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/')

  await expect(page).toHaveTitle('Swag Labs')

  await page.locator('[data-test="username"]').fill('standard_user')

  await page.locator('[data-test="password"]').fill('wrong_password')

  await page.locator('[data-test="login-button"]').click()

  await expect(page.locator('svg').first()).toBeVisible()

  await expect(page.locator('svg').nth(1)).toBeVisible()

  const error = page.locator('[data-test="error"]').first()

  await expect(error).toBeVisible()

  await expect(error).toContainText(
    'Epic sadface: Username and password do not match any user in this service',
  )

  await page.locator('[data-test="error-button"]').click()

  await expect(error).toBeHidden()

  await expect(page.locator('svg').first()).toBeHidden()

  await expect(page.locator('svg').nth(1)).toBeHidden()
})
