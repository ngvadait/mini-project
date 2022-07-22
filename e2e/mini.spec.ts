import { test, expect } from '@playwright/test';
import {styleCombine} from "@Common/helper";

test('should be logged in successfully', async ({page}) => {
  await page.goto('http://localhost:3000/');
  await page.locator('#email').fill('test@gmail.com');
  await page.locator('#password').fill('test');
  await page.click('text=Login / Register');
  const localStorage = await page.evaluate(() => window.localStorage);
  await expect(JSON.parse(localStorage.auth).email).toBe('test@gmail.com');
  await expect(page.locator('#logout')).toContainText('Logout');
})

test('not logged in', async ({page}) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator('#login_register')).toContainText('Login / Register');
})

test('should navigate to the share page', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('#email').fill('test@gmail.com');
  await page.locator('#password').fill('test');
  await page.click('text=Login / Register');
  await page.click('text=Share a movie');
  await expect(page).toHaveURL('http://localhost:3000/share');
  await expect(page.locator('#share')).toContainText('Share');
})

test('Not logged in so can`t access the share page', async ({ page }) => {
  await page.goto('http://localhost:3000/share');
  await expect(page).toHaveURL('http://localhost:3000');
  await expect(page.locator('#login_register')).toContainText('Login / Register');
})

test('styleCombine function', () => {
  expect(styleCombine('class1', 'class2')).toBe(('class1 class2'));
});
