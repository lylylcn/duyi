require('../less/entey.less');
var modules = require('./tool.js');
console.log(modules());
var oImg = new Image();
oImg.src = require('../images/5.jpg');
document.body.appendChild(oImg);
require('jquery');
console.log($('div'));
var item1 = require('./item1.js');
var item2 = require('./item2.js');
item1.init();
item2.init();