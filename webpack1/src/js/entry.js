// require.config({
//     paths: {
//         "tool": "./tool"
//     }
// });

// require(["tool"], function (tool) {
//     tool.hello('hello');
// });
require('../css/entry.css');
var modules = require('./tool.js');
console.log(modules());
var oImg = new Image();
oImg.src = require('../images/5.jpg');
document.body.appendChild(oImg);