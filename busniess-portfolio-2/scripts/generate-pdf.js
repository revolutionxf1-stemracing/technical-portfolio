import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
    console.log('Launching browser...');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    console.log('Navigating to app...');
    // Assumes the app is running on localhost:3000
    // Set viewport to A3 at 300 DPI approx width (preset helps with layout)
    await page.setViewport({ width: 3508, height: 2480, deviceScaleFactor: 2 });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

    console.log('Waiting for images to load...');
    await page.evaluate(async () => {
        const selectors = Array.from(document.querySelectorAll("img"));
        await Promise.all(selectors.map(img => {
            if (img.complete) return;
            return new Promise((resolve, reject) => {
                img.onload = resolve;
                img.onerror = resolve;
            });
        }));
    });

    // Inject CSS to ensure print layout is perfect
    await page.addStyleTag({
        content: `
            @page {
                size: A3 landscape;
                margin: 0;
            }
            body {
                margin: 0;
                padding: 0;
                background-color: #000; /* Ensure bg is black */
                -webkit-print-color-adjust: exact;
            }
            #root {
                width: 100%;
            }
            #root > div {
                padding: 0 !important;
                gap: 0 !important;
            }
            #root > div > div {
                padding: 0 !important;
                margin: 0 !important;
                overflow: hidden !important;
                height: 100vh !important;
                break-inside: avoid !important;
                break-after: always !important;
                page-break-inside: avoid !important;
                page-break-after: always !important;
            }
            #root > div > :last-child {
                display: none !important;
            }
            .a3-page {
                margin: 0 !important;
                box-shadow: none !important;
                border: none !important;
                width: 100vw !important;
                height: 100vh !important;
                max-width: none !important;
            }
        `
    });

    console.log('Generating PDF...');
    await page.pdf({
        path: path.join(__dirname, '../portfolio.pdf'),
        format: 'A3',
        landscape: true,
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });

    await browser.close();
    console.log('PDF generated successfully: portfolio.pdf');
})();
