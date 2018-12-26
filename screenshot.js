const puppeteer = require('puppeteer');
const isSave = true;

async function getScreenshot(url, config={}){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.setViewport({
        width: 1200,
        height: 800,
        deviceScaleFactor: 2,...config
    });
    await page.goto(url);
    const imagePath = isSave ? `./static/images/${new Date() / 1 + '' + ~(Math.random() * 100)}.png` : false;
    let img = await page.screenshot({
        path: imagePath,
        encoding: 'binary', //base64 or binary
    });
    await browser.close();
    return img;
}

// const url = 'https://github.com/';
// getScreenshot(url).then(function (res) {
//     console.log(res,1)
// });

module.exports = getScreenshot;