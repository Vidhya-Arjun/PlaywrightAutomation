const {test,expect} =require('@playwright/test')


test("first test",async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.google.com/");
    await page.screenshot({path:"google.png"});
    await context.close();
});

test("second test",async({page})=>{    
    await page.goto("https://www.geeksforgeeks.org/");
    await page.screenshot({path:"geeksforgeeks.png"});
    const title = await page.title();
    console.log(title);
   // expect(title).toBe("GeeksforGeeks | Your All-in-One Learning Portal");

    await expect(page).toHaveTitle("GeeksforGeeks | Your All-in-One Learning Portal")
});

test("third test",async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await expect(page.title()).toContain("LoginPage Practise | Rahul Shetty Academy");
    await page.locator("#username").fill("vidhyaSegar");
    await page.locator("#password").fill("learning");
    await context.close(); 
});

// test ("fourth test",async({browser})=>{
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto("https://rahulshettyacademy.com/client");
//     const title = await page.title();
//     expect(title).toBe("Let's Shop");
//     const username = page.locator("input#userEmail");
//     const password = page.locator("input#userPassword");
//     const loginButton = page.locator("[name='login']");
//     const product_details = page.locator(".card-body b");

//     await username.fill("testajay@gmail.com");
//     await password.fill("Ajay@0410");
//     await loginButton.click();
//     await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash");
//     await page.screenshot({path:"dashboard.png"});

//     //const product_listed_count = await product_details.count();
//     //console.log("number of products listed: "+product_listed_count);

//     //const productText = await product_details.nth(0).textContent();
//     //const product_listed_text = await product_details.allTextContents();
//     console.log( await product_details.allTextContents());
//     //console.log(productText);

//     await context.close();
// });


// test.only("fifth test",async({browser})=>{
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto("https://www.amazon.in/");
//     await page.waitForLoadState('domcontentloaded');
//     const title = await page.title();
//     await console.log("title is: " + title);
//     await expect(title).toContain("Online Shopping site in India")
//     // const username = page.locator("input#userEmail");
//     // const password = page.locator("input#userPassword");
//     // const loginButton = page.locator("[name='login']");
//     // const product_details = page.locator(".card-body b");

//     // await username.fill("testajay@gmail.com");
//     // await password.fill("Ajay@0410");
//     // await loginButton.click();
//     // await expect(page).toContain("Online Shopping site in India");
//     // await page.screenshot({path:"amazon.png"});

//     // //const product_listed_count = await product_details.count();
//     // //console.log("number of products listed: "+product_listed_count);

//     // //const productText = await product_details.nth(0).textContent();
//     // //const product_listed_text = await product_details.allTextContents();
//     // console.log( await product_details.allTextContents());
//     //console.log(productText);

//     await context.close();
// });

test.only("fifth test", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.amazon.in/");

    await expect(page).toHaveTitle(/Amazon.in/);

    const title = await page.title();
    console.log("title is: " + title);
});