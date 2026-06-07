import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
    console.log('Launching browser...');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const appUrl = process.env.PORTFOLIO_URL || 'http://127.0.0.1:3000';

    console.log('Navigating to app...');
    await page.setViewport({ width: 1800, height: 1272, deviceScaleFactor: 2 });
    await page.emulateMediaType('print');
    await page.goto(appUrl, { waitUntil: 'networkidle0' });

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
            html, body, #root, .portfolio-shell {
                margin: 0 !important;
                padding: 0 !important;
                background: #000 !important;
            }
            * {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
            .a3-page {
                break-inside: avoid;
                break-after: always;
                page-break-inside: avoid;
                page-break-after: always;
                margin: 0 !important;
                box-shadow: none !important;
                border: none !important;
                border-radius: 0 !important;
                width: 420mm !important;
                min-height: 297mm !important;
                height: 297mm !important;
                max-width: none !important;
                background: #050505 !important;
            }
            .a3-page:last-of-type {
                break-after: auto !important;
                page-break-after: auto !important;
            }
            .no-print {
                display: none;
            }
            .portfolio-shell {
                display: block !important;
                gap: 0 !important;
                background: #000 !important;
            }
        `
    });

    console.log('Generating PDF...');
    await page.pdf({
        path: path.join(__dirname, '../business-portfolio.pdf'),
        format: 'A3',
        landscape: true,
        preferCSSPageSize: true,
        printBackground: true,
        omitBackground: false,
        margin: { top: 0, right: 0, bottom: 0, left: 0 }
    });

    await browser.close();
    console.log('PDF generated successfully: business-portfolio.pdf');
})();
