var System = require('systemjs');

System.transpiler = 'babel';
debugger;

console.log("started");
// loads './app.js' from the current directory
System.import('./app').then(function(m) {
    console.log(m);
});