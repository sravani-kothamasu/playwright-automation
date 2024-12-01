const{test,expect}=require('@playwright/test');

test('Home page',async ({page})=>{
    await page.goto('https://www.flipkart.com/');
    const pageTitle=page.title();
    console.log('page title is:',pageTitle);
    await expect(page).toHaveTitle('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
    await page.close();
})