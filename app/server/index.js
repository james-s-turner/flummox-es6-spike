var System = require('systemjs');
require('../../config.js');
System.config({
    "baseURL": ""
});

var Handlebars = require('handlebars');
var fs = require('fs');

var devRender;
var prodRender;

System.import("app/server/MailAppRenderer").then(function(module){
    console.log("MailApp Started");
    var renderer = new  module.MailAppRenderer();
    var renderedComponent = renderer.doRender();

    var prodTemplateData = fs.readFileSync(__dirname + '/layout-prod.handlebars').toString();
    var prodTemplate = Handlebars.compile(prodTemplateData);
    prodRender = prodTemplate({
        content: renderedComponent,
        storeState : renderer.toJSON()
    });

    var devTemplateData = fs.readFileSync(__dirname + '/layout.handlebars').toString();
    var devTemplate = Handlebars.compile(devTemplateData);
    devRender = devTemplate({
        content: renderedComponent,
        storeState : renderer.toJSON()
    });

});

var express = require('express');
var app = express();
app.use('/jspm_packages', express.static('jspm_packages'));
app.use('/config.js', express.static('config.js'));
app.use('/mail-address-app.js', express.static('mail-address-app.js'));
app.use('/app', express.static('app'));

app.get('/', function(req, res) {
    var mode = req.query.mode
    if(mode == "prod") {
        console.log("prod request");
        res.send(prodRender);
    }else{
        console.log("dev request");
        res.send(devRender);
    }
});

app.listen(3000, function() {
    console.log("Listening on port 3000");
});