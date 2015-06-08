var System = require('es6-module-loader').System;
System.transpiler = 'traceur';

console.log("started");
// loads './app.js' from the current directory
System.import('./app.js').then(function(m) {
    console.log("loading");
    console.log(m);
});

console.log("finished");