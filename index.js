System = require('systemjs');
System.transpiler = "traceur";

console.log("started");
// loads './app.js' from the current directory
System.import('./app.js').then(function(module) {
    console.log("Loaded module" + module);
    module.app();
}).catch(function(err) {
    console.log(err);
});
