import { test, expect } from '@playwright/test';
test('file handling test', async ({ page }) => {
    // Navigate to the file upload page
    await page.goto('http://127.0.0.1:5500/fhandle.html');
    await page.pause();
    
    const filepath: string = "./tests/sample.pdf";
    await page.setInputFiles("input[type='file']", filepath);
    await page.locator('button[type="submit"]').click();
    try {
        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.click('a#downloadButton')
        ]);
        const downloadfilepath = await download.path();
        console.log("Download path: ", downloadfilepath);
    } catch (error) {
        console.error("Download failed: ", error);
    }
});