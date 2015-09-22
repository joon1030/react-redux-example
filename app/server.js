var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var proxy = require('express-http-proxy');
var url = require('url');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use("/proxy" , proxy('media.daum.net', {
    forwarPath : function (req, res) {
        return url.parse(req.url).path;
    }
}));

app.get('*', function (req, res) {
    console.log(req.url);
    res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.listen(3000, 'localhost', function (err) {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Listening at http://localhost:3000');
});