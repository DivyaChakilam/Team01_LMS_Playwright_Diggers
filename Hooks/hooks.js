import { createBdd } from 'playwright-bdd';
const { After,AfterStep } = createBdd();


After(async function({page}) {
        const screenshot = await page.screenshot({path:'screenshots/'+'Fullscreen_'+Date.now()+'.png', fullPage:true});
     
    }); 
