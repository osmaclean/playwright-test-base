import { expect, test } from '@playwright/test'

test('filtering by descending name order', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/')

  await expect(page).toHaveTitle('Swag Labs')

  await page.locator('[data-test="username"]').fill('standard_user')

  await page.locator('[data-test="password"]').fill('secret_sauce')

  await page.locator('[data-test="login-button"]').click()

  const currentURL = page.url()

  expect(currentURL).toBe('https://www.saucedemo.com/inventory.html')

  await page.selectOption('select[data-test="product-sort-container"]', 'za')

  const selectedValue = await page.$eval(
    'select[data-test="product-sort-container"]',
    (el) => {
      return (el as HTMLSelectElement).value
    },
  )

  expect(selectedValue).toBe('za')

  const productNames = await page.$$eval('.inventory_item_name', (elements) =>
    elements.map((item) => item.textContent?.trim() || ''),
  )

  const sortedProductNames = [...productNames].sort((a, b) =>
    b.localeCompare(a),
  )

  expect(productNames).toEqual(sortedProductNames)

  await page.waitForTimeout(500)
})
