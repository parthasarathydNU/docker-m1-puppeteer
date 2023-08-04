import * as puppeteer from 'puppeteer';
import * as fs from 'fs';

export async function createBrowserInstance() {
    return await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
        headless: 'new',
    });
    
}

async function startApplication() {
    // check if there is already a file in the directory by the name example.png
    // if there is, delete it
    if(fs.existsSync('example.png')) {
        console.log("Deleting example.png");
        fs.unlinkSync('example.png');
    }

    console.log("Starting");
    console.time("CreatingBrowserInstance");
    const browser = await createBrowserInstance();
    console.timeEnd("CreatingBrowserInstance");
    console.log("Browser created")
    const page = await browser.newPage();
    console.log("Page created")
    await page.goto('https://www.google.com');
    await page.screenshot({ path: 'example.png' });
    await browser.close();
    console.log("Done")
}

startApplication();
