import { test, expect } from '@playwright/test';
import { describe } from 'node:test';
describe('test case for sauce app', () => {
test.beforeEach("Login Test", async ({ page }) => {
    await page.goto('http://quiz.hematitecorp.com/');
    await page.getByRole('textbox', { name: 'Email Address' }).click();
    await page.getByRole('textbox', { name: 'Email Address' }).fill('saravanan.ram@changepond.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Saravanan@123');
    await page.getByRole('button', { name: 'Sign In' }).click();
     await page.getByRole('textbox', { name: 'Enter Voucher code' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter Voucher code' }).fill('FNPQO6');
  await page.getByRole('button', { name: 'submit' }).click();
  await page.getByRole('button', { name: 'Select Exam' }).click();
  await page.getByRole('option', { name: 'None' }).click();

});
//  test("VoucherCode Test", async ({ page }) => {
    
//  });

test('LogOut Test', async ({ page }) => {
  await page.getByRole('button', { name: 'Logout' }).click();
  await page.getByRole('button', { name: 'Logout' }).click();
     await page.pause();
});
});
