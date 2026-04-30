const {test,expect} =require('@playwright/test')

test ("Web UI E2E automation of rahulshettyacademy",async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    const add_to_cart = page.locator(".fa.fa-shopping-cart").nth(2);
    const product_name =page.locator("div.card-body h5 b").nth(1);
    const cart = page.locator("button.btn.btn-custom").nth(2);
    const checkout_page_product_name = page.locator("div[class='cartSection'] h3");
    const check_out_button = page.locator(".btn.btn-primary").last();
    const cvv_details = page.locator("input.input.txt").nth(1);
    const name_on_card = page.locator("input.input.txt").nth(2);
    const coupon_text = page.locator("input.input.txt").nth(3);
    const year_dropdown = page.locator(".input.ddl").last() ;
    const apply_coupon_button = page.locator(".btn.btn-primary.mt-1");
    const country_details = page.locator("input.input.txt").last();
    const country_value = page.locator(':text-is("India")');
    const cvv_value = "123";
    const name_on_card_value = "vidhya";
    const coupon_text_value = "rahulshettyacademy"
    const get_user_details = page.locator("label[type='text']");
    const usename_details = "testajay@gmail.com"

    await page.goto("https://rahulshettyacademy.com/client");
    const title = await page.title();
    expect(title).toBe("Let's Shop");
    const username = page.locator("input#userEmail");
    const password = page.locator("input#userPassword");
    const loginButton = page.locator("[name='login']");
    const product_details = page.locator(".card-body b");
    const place_order = page.locator(".btnn.action__submit.ng-star-inserted");


    await username.fill(usename_details);
    await password.fill("Ajay@0410");
    await loginButton.click();
    await expect(page).toHaveURL(/dashboard/);
    await page.screenshot({path:"dashboard.png"});
    const product_name_text = await product_name.textContent()
    await add_to_cart.click();
    await cart.click();
    await expect(page).toHaveURL(/cart/);
    console.log("cart page product",await checkout_page_product_name.textContent());
    await expect(checkout_page_product_name).toHaveText(product_name_text);
    await check_out_button.click();
    await expect(page).toHaveURL(/order/);
    await cvv_details.fill(cvv_value);   
    await name_on_card.fill(name_on_card_value);  
    await coupon_text.fill(coupon_text_value);
    await year_dropdown.selectOption({ label: '27' });
    await apply_coupon_button.click();
    await country_details.fill("India");
    //await country_value.click();
    const test_data_value = await get_user_details.textContent()
    await expect(test_data_value).toEqual(usename_details);
    await place_order.click();
    await expect(page).toHaveURL(/thanks/);
    const order_id = await page.locator("label.ng-star-inserted").textContent();
    await console.log(order_id);

});