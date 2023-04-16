import { test, expect } from "@playwright/test";

test("home page should have the title buy-right", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/buy-right/i);
});

test("home page should contain the title buy-right", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText(/buy-right/i).first()).toBeVisible();
});
