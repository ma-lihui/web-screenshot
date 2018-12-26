const express = require('express');
const getScreenshot = require('./screenshot');
const app = express();
const PORT = 3000;
app.get('/', function (req, res) {
    const url = req.query.url;
    const width = req.query.width*1 || 1200;
    const height = req.query.height*1 || 800;
    const scale = req.query.scale*1 || 2;
    let config = {width,height,deviceScaleFactor: scale};
    console.log(url);
    getScreenshot(url,config).then(function (img) {
        console.log('get image success');
        res.contentType('image/png');
        res.end(img,'binary');
    });
    // res.send('Hello World')
});

app.listen(PORT);
console.log('http://localhost:' + PORT);