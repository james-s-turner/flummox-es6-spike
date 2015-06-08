System = require('systemjs');
System.config({
    transpiler: "babel"
});

console.log("started");
// loads './app.js' from the current directory
System.import('./app.js').then(function(module) {
    console.log("Loaded module" + module);
    module.app();
}).catch(function(err) {
    console.log(err);
});
