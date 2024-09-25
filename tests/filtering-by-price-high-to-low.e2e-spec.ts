import { expect, test } from '@playwright/test'

test('filtering by price (low to high)', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/')

  await expect(page).toHaveTitle('Swag Labs')

  await page.locator('[data-test="username"]').fill('standard_user')

  await page.locator('[data-test="password"]').fill('secret_sauce')

  await page.locator('[data-test="login-button"]').click()

  const currentURL = page.url()
  expect(currentURL).toBe('https://www.saucedemo.com/inventory.html')

  await page.selectOption('select[data-test="product-sort-container"]', 'hilo')

  const selectedValue = await page.$eval(
    'select[data-test="product-sort-container"]',
    (el) => {
      return (el as HTMLSelectElement).value
    },
  )
  expect(selectedValue).toBe('hilo')

  const productPrices = await page.$$eval('.inventory_item_price', (elements) =>
    elements.map((item) =>
      parseFloat(item.textContent?.replace('$', '') || '0'),
    ),
  )

  const sortedProductPrices = [...productPrices].sort((a, b) => a + b)

  expect(productPrices).toEqual(sortedProductPrices)
})
