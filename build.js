//Build file for SystemJS-builder
var path = require("path");
var Builder = require('systemjs-builder');

var buildOpts = {"minify" : true, "sourceMaps": true};

var builder = new Builder();
builder.loadConfig('./config.js')
    .then(function() {
        builder.config({
            "baseURL": ""
        });
        return builder.buildSFX('./app/browser/MailApp', 'mail-address-app.js', buildOpts)
    })
    .then(function () {
        console.log('Build complete');
    })
    .catch(function (err) {
        console.log('Build error');
        console.log(err);
    });
