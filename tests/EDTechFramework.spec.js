const {test,expect} =require('@playwright/test')

test ("Web UI E2E automation of rahulshettyacademy",async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    const title = await page.title();
    expect(title).toBe("Let's Shop");
    const username = page.locator("input#userEmail");
    const password = page.locator("input#userPassword");
    const loginButton = page.locator("[name='login']");
    const product_details = page.locator(".card-body b");

    await username.fill("testajay@gmail.com");
    await password.fill("Ajay@0410");
    await loginButton.click();
    await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash");
    await page.screenshot({path:"dashboard.png"});

    await context.close();
});