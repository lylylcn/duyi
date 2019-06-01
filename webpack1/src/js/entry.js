// require.config({
//     paths: {
//         "tool": "./tool"
//     }
// });

// require(["tool"], function (tool) {
//     tool.hello('hello');
// });

var modules = require('./tool.js');
console.log(modules().hello);