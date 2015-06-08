var System = require('es6-module-loader').System;
System.transpiler = 'babel';


console.log("started");
// loads './app.js' from the current directory
System.import('./app').then(function(m) {
    console.log(m);
});