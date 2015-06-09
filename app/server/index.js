var System = require('systemjs');
require('../../config.js');
System.config({
    "baseURL": ""
})

var Handlebars = require('handlebars');
var fs = require('fs');

var renderedLayout;

System.import("app/server/MailAppRenderer").then(function(module){
    console.log("MailApp Started");
    var renderer = new  module.MailAppRenderer();
    var renderedComponent = renderer.doRender();
//    renderedComponent = "";

    var fileData = fs.readFileSync(__dirname + '/layout.handlebars').toString();
    var layoutTemplate = Handlebars.compile(fileData);

    renderedLayout = layoutTemplate({
        content: renderedComponent,
        storeState : renderer.toJSON()
    });
});

var express = require('express');
var app = express();
app.use('/jspm_packages', express.static('jspm_packages'));
app.use('/lib', express.static('lib'));
app.use('/config.js', express.static('config.js'));
app.use('/app', express.static('app'));

app.get('/', function(req, res) {
    res.send(renderedLayout);
});

app.listen(3000, function() {
    console.log("Listening on port 3000");
});