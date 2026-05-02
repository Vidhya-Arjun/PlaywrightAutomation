const {test,expect} = require("@playwright/test")

test ("Practise problem for add to cart with product name",async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();

    const cart = page.locator("button.btn.btn-custom").nth(2);

    const name_on_card_value = "vidhya";
    const usename_details = "testajay@gmail.com"

    await page.goto("https://rahulshettyacademy.com/client");
    const title = await page.title();
    expect(title).toBe("Let's Shop");
    const username = page.locator("input#userEmail");
    const password = page.locator("input#userPassword");
    const loginButton = page.locator("[name='login']");
    const product_details = page.locator(".card-body b");
    const product_DOM = page.locator(".card-body");

    await username.fill(usename_details);
    await password.fill("Ajay@0410");
    await loginButton.click();
    await expect(page).toHaveURL(/dashboard/);
    await page.screenshot({path:"dashboard.png"});


    await product_details.first().waitFor();
    const all_Content = await product_details.allTextContents();
    const count = await product_details.count();
    const req_product_name = "ZARA COAT 3";

    console.log("all_Content",all_Content)
    console.log("count",count);

    for(let i =0 ; i< count ;++i)
    {
        if(await product_DOM.nth(i).locator("b").textContent() === req_product_name)
        {
             //await .nth(i).locator("text= Add To Cart").click();
             await product_DOM.nth(i).locator("text= Add To Cart").click();
             await page.screenshot({path:"product_higlight.png"});
             break;

        }
    }


    await cart.click();

    await page.pause();

});


// test('@Webst Client App login', async ({ page }) => {
//    //js file- Login js, DashboardPage
//    const email = "anshika@gmail.com";
//    const productName = 'ZARA COAT 3';
//    const products = page.locator(".card-body");
//    await page.goto("https://rahulshettyacademy.com/client");
//    await page.locator("#userEmail").fill(email);
//    await page.locator("#userPassword").fill("Iamking@000");
//    await page.locator("[value='Login']").click();
//    await page.waitForLoadState('networkidle');
//    await page.locator(".card-body b").first().waitFor();
//    const titles = await page.locator(".card-body b").allTextContents();
//    console.log(titles); 
//    const count = await products.count();
//    for (let i = 0; i < count; ++i) {
//       if (await products.nth(i).locator("b").textContent() === productName) {
//          //add to cart
//          await products.nth(i).locator("text= Add To Cart").click();
//          break;
//       }
//    }
// });