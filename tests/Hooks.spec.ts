import { test, expect } from '@playwright/test';
import { describe } from 'node:test';
describe('test case for sauce app', () => {
test.beforeEach("Login Test", async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    // await page.pause();
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
     await page.getByRole('button', { name: 'LOGIN' }).click();
});
test('Home Page Test', async ({ page }) => {
    
     await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
    await page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button').click();
    await page.getByRole('link', { name: 'Sauce Labs Bolt T-Shirt' }).click();
     await page.getByRole('button', { name: 'ADD TO CART' }).click();
    //  await page.close();
    // await page.pause();

});
test('logout Test', async ({ page }) => { 
    
    await page.getByRole('button', { name: 'Open Menu' }).click();
     await page.getByRole('link', { name: 'Logout' }).click();
     await page.pause();
});
});






























// test.beforeEach('Test Case 2', ({  }) => {
//     console.log('Good Morning');
// });

// test('Test Case 3', ({ }) => {
//     console.log('Siva');
// });

// test('Test Case 4', ({  }) => {
//     console.log('Gokul');
// });

// test.afterEach('Test Case 5', ({ }) => {
//     console.log('Good Night');
// });
