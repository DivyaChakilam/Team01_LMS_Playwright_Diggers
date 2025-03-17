import { createBdd } from 'playwright-bdd';
const { After,AfterStep } = createBdd();


After(async function({page}) {
        const screenshot = await page.screenshot({path:'screenshots/'+'homepageFullscreen_'+Date.now()+'.png', fullPage:true});
     
    }); 


        //   console.log("Capture a screenshot after each scenario")

      /*
            context.attach(screenshot, 'image/png'); // Attach screenshot if supported
            if (context.attach) {
    
        console.log("Screenshot capture process completed.");
            }
            else {
                console.log("No attach method found in the context.");
            }
            */    


/*
AfterStep( async function ({result}) {
    // This hook will be executed after all steps, and take a screenshot on step failure
    if (result.status === Status.FAILED) {
        await this.page.screenshot({path: 'Screenshot.png'});
    }
  });
  */