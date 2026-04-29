const {test,expect} =require('@playwright/test')


test("first test",async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.google.com/");
    await page.screenshot({path:"google.png"});
    await context.close();
});

test.only("second test",async({page})=>{    
    await page.goto("https://www.geeksforgeeks.org/");
    await page.screenshot({path:"geeksforgeeks.png"});
    const title = await page.title();
    console.log(title);
   // expect(title).toBe("GeeksforGeeks | Your All-in-One Learning Portal");

    await expect(page).toHaveTitle("GeeksforGeeks | Your All-in-One Learning Portal")
});