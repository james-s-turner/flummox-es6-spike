//Build file for SystetemJS build
//Broken until the following is fixed: https://github.com/systemjs/builder/issues/90
var path = require("path");
var Builder = require('systemjs-builder');

require('./config.js');
System.config({
    baseURL: '',
    transpiler: 'babel',
    "babelOptions" : {
        "blacklist" : []
    }
});

var builder = new Builder(System.config)
    .build('./app/server/MailAppRenderer.js', 'outfile.js')
    .then(function() {
        console.log('Build complete');
    })
    .catch(function(err) {
        console.log('Build error');
        console.log(err);
    });