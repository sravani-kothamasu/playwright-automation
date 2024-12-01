const { test,expect } = require("@playwright/test")
test('Softassertion',async ({page})=>{
    await page.goto('https://www.flipkart.com/');
    //hard assertion
    await expect(page).toHaveURL("https://www.flipkart.com");
    //soft assertion
    await expect.soft(page).toHaveTitle("Online");

})

