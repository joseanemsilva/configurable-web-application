import { test, expect } from '@playwright/test';

/**
 * This test verifies the navigation routing for the navbar 
 **/ 
test('should navigate to the about us page', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.click('text=About Us')
  await expect(page).toHaveURL('http://localhost:3000/about-us')
  await expect(page.getByRole('heading', {name: "Our Story", level: 2})).toBeVisible();
});

test('should navigate to the services page', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.click('text=Services')
  await expect(page).toHaveURL('http://localhost:3000/services')
  await expect(page.getByRole('heading', {name: "Our Services", level: 2})).toBeVisible();
});

test('should navigate to the contact us page', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.click('text=Contact Us')
  await expect(page).toHaveURL('http://localhost:3000/contact-us')
  await expect(page.getByRole('heading', {name: "Contact Us", level: 2})).toBeVisible();
});

test('should navigate to the home page', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.click('text=Home')
  await expect(page).toHaveURL('http://localhost:3000/')
  await expect(page.getByRole('heading', {name: "Welcome to our Dental Clinic", level: 1})).toBeVisible();
});


/**
 * This tests verifies the routing on page button
 */
test('should navigate to contact us page when clicking the schedule visit button', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.click('text=Schedule Your Visit')
  await expect(page).toHaveURL('http://localhost:3000/contact-us')
  await expect(page.getByRole('heading', {name: "Contact Us", level: 2})).toBeVisible();
});


test('should navigate to services page when clicking the schedule visit button', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.click('text=Explore All Services')
  await expect(page).toHaveURL('http://localhost:3000/services')
  await expect(page.getByRole('heading', {name: "Our Services", level: 2})).toBeVisible();
});


/**
 * Test for mobile navigation toggle 
 */
test.describe('Mobile', () => {
  test.use({
    viewport: {width:390, height:844},
    //isMobile: true,
    hasTouch: true,
  })

  test('toggle button displays and hides menu', async({page}) => {
    await page.goto('http://localhost:3000/')
    
    const menu = page.getByTestId('menu');
    const toggleMenu = page.getByRole('button', {name:'Toggle navigation menu'});

    await expect(menu).toBeHidden();

    await toggleMenu.click();
    await expect(menu).toBeVisible();

    await toggleMenu.click();
    await expect(menu).toBeHidden();
});
});

