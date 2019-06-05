//document.write('FJKDH');
//var a;//声明变量
//a = 100;//赋值
// var b = 200;
// var c = 300;
// document.write(a);
// var d = 100,
//     e = 200,
//     f = 300,
//     g = 400;//单一var模式
// document.write(a,b,c,d);
// var sum=a+b;

// //命名规则：必须以英文字符,$,_开头; 

// //原始值   stack (栈)
// //Number Boolean String undefined null
//  var s = "abc";
//  document.write(s);
//  var flag = true;
//  document.write(flag);
//  var s1 = undefined;
//  var s2 = null;

// //引用值   heap(堆)  
// //array Object function ...date RegExp
// var arr = [1,2,3,4,false,"abc"];
// arr.push(2);
// document.write(arr);
// var arr1 = arr;
// arr.push(3);
// document.write(arr1);

//两种错误:
//1.低级错误(语法解析错误)
//var a = 10;
//document.write(a)；中文符号
//2.逻辑错误(标准错误)
//var a = 10;
//document.write(a);
//document.write(b); b未定义

// var a = 1 + 1 + "a";
// document.write(a);

// var a=10;
// a += 10 + 1;
// document.write(a);

// var a = null + 1 && 2;
// document.write(a);

// data && document.write(data);

//var num = 0 || false || 1;
// document.write(num);

// var score = parseInt(window.prompt('input'));
// if(score >= 90 && score <= 100){
//     document.write('alibaba');
// }else if(score >= 80 && score <= 89){
//     document.write('tencent');
// }else if(score >= 70 && score <= 79){
//     document.write('baidu');
// }else if(score >= 60 && score <= 69){
//     document.write('mogujie');
// }else if(score<60){
//     document.write('caicai');
// }else {
//     document.write('error');
// }

// var score = parseInt(window.prompt('input'));
// var i=0;
// while(true){
//     document.write(score);
//     i++;
// }

// var n = parseInt(window.prompt('input'));
// var sum=1;
// while(n--){
//     sum*=2;
// }
// document.write(sum);

// var n = parseInt(window.prompt('input'));
// var sum=n;
// while(--n){
//     sum*=n;
// }
// document.write(sum);

// var n = parseInt(window.prompt('input'));
// var arr = [];
// arr[1] = 1;
// arr[2] = 1;
// arr[3] = 2;
// for(var i=4; i<=n; i++){
//     arr[i]=arr[i-1]+arr[i-2];
// }
// document.write(arr[n]);


// var n = parseInt(window.prompt('input'));
// document.write(n%10,(n%100-n%10)/10,(n-n%100)/100);

// var a = parseInt(window.prompt('input'));
// var b = parseInt(window.prompt('input'));
// var c = parseInt(window.prompt('input'));
// if(a<b){
//     a=b;
// }
// if(a<c){
//     a=c;
// }
// document.write(a);


// document.write(2);
// for(var i=3; i<=100; i++){
//     var flag=false;
//     for(var j=2; j*j<=i; j++){
//         if(i%j==0){
//             flag=true;
//         }
//     }
//     if(!flag){
//         document.write(" "+i);
//     }
// }

//typeof操作符  number string boolean undefined object function
// var num = 2 - "1";
// console.log(num);
// console.log(typeof(num));


// var num=Number("123");
// 

// var demo = 10101010;
// var test = parseInt(demo,2);
// var num = test.toString(16);//null undefined不能用
// console.log(typeof(num) + ":" + num);

//console.log(isNaN(null)); //Number('abc')---> NaN


// console.log(typeof(null));

//高内聚 低耦合

//定义函数
//function 函数名() {代码体}
//var test = functin test(){}
//1. 命名函数表达式
//var test = function abc(){}
//2.匿名函数表达式 -- 函数表达式
//var test = functin () {}
//函数名规则，与变量名相似，但是要遵循小驼峰源则

//arguments----实参列表

// function animal (a) {
//     if(a=="Cat"){
//         console.log("喵喵");
//     }else if(a=="Dog"){
//         console.log("汪汪");
//     }
// }
// animal("Cat");
// animal("Dog");

// function Chinese (num) {
//     if(num==1){
//         console.log("一");
//     }else if(num==2){
//         console.log("二");
//     }else if(num==3){
//         console.log("三");
//     }else if(num==4){
//         console.log("四");
//     }else if(num==5){
//         console.log("五");
//     }else if(num==6){
//         console.log("六");
//     }else if(num==7){
//         console.log("七");
//     }else if(num==8){
//         console.log("八");
//     }else if(num==9){
//         console.log("九");
//     }else if(num==0){
//         console.log("零");
//     }
// }
// function reverseChinese (num) {
//     var result=0;
//     while(num){
//         result=result*10+num%10;
//         Chinese(num%10);
//         num=parseInt(num/10);
//     }
//     console.log(result);
// }
// reverseChinese(123450);



// function Chinese(num) {
//     if (num == 1) {
//         return "一";
//     } else if (num == 2) {
//         return "二";
//     } else if (num == 3) {
//         return "三";
//     } else if (num == 4) {
//         return "四";
//     } else if (num == 5) {
//         return "五";
//     } else if (num == 6) {
//         return "六";
//     } else if (num == 7) {
//         return "七";
//     } else if (num == 8) {
//         return "八";
//     } else if (num == 9) {
//         return "九";
//     }
// }
// function wei(num) {
//     switch (num) {
//         case 4:
//             return "千";
//         case 3:
//             return "百";
//         case 2:
//             return "十";
//     }
// }
// function read() {
//     var num = window.prompt('input');
//     var flag = [];
//     var a = 0;
//     var len = num.length;
//     for (var i = num.length - 1; i >= 0; i--) {
//         if (num[i] == '0' && a == 0) {
//             flag[i] = false;
//         } else if (num[i] == '0' && a == 1) {
//             flag[i] = true;
//         } else if (num[i] != '0') {
//             a = 1;
//         } else if ((len - i + 1) % 4 == 0) {
//             a = 0;
//         }
//     }
//     var count = len % 4;
//     for (var i = 0; i < num.length; i++) {
//         if (num[i] != 0) {
//             document.write(Chinese(num[i]));
//             if (count>1) {
//                 document.write(wei(count));
//             }
//             count--;
//         } else if (num[i] == 0 && flag[i] == true) {
//             document.write("零");
//             count--;
//         }
//         if (((len - i - 1) % 4 == 0) && ((len - i - 1) / 4 == 2)) {
//             document.write("亿");
//             count = 4;
//         } else if (((len - i - 1) % 4 == 0) && ((len - i - 1) / 4 == 1)) {
//             document.write("万");
//             count = 4;
//         }
//     }
// }
// read();

//js运行过程：
//语法分析------>预编译------->解释执行
//函数声明整体提升
//变量   声明提升
//预编译过程
//1.创建AO对象 (Activation Object)
//2.找形参和变量声明，将变量和形参名作为AO属性名，值为undefined
//3.将实参值和形参统一
//4.在函数体里面找函数声明，值赋予函数体 

// function a(){
//     var num=100;
//     function b(){ 
//         num++; 
//         console.log(num);
//     }
//     return b;
// }
// var demo=a();
// demo();
// demo();

//闭包：当内部函数被保存到外部时，将会生成闭包。闭包会导致原有作用域链不释放，造成内存泄漏
//闭包的应用：1.实现公有变量 eg函数累加器 
//           2.做缓存 eg eater
//           3.可以实现封装，属性私有化 eg Person（）
//           4.模块化开发，防止污染全局变量  

//立即执行函数  执行完就被销毁
//针对初始化功能的函数

// (function () {
// }());

//只有表达式才能被执行符号执行
// var num=(function (a,b,c){
//     var d=a+b+c;
//     return d;
// }(1,2,3));

// function test() {
//     var arr = [];
//     for (var i = 0; i < 10; i++) {
//         (function (j) {
//             arr[i] = function () {
//                 console.log(j + " ");
//             }
//         }(i))
//     }
//     return arr;
// }
// var myarr = test();
// for (var i = 0; i < 10; i++) {
//     myarr[i](i);
// }

//对象的创建方法
//1.var obj={}   plainObject  对象字面量/对象直接量
//2.构造函数
//      1)系统自带的构造函数 new Object() 
//      2)自定义
//构造函数  大驼峰命名规则  TheFirstPerson
//小驼峰命名规则  theFirstPerson


// --------原型
// Person.prototype    原型
// Person.prototype={} 祖先
// constructor         构造
// Person.prototype.Lastname="du";
// Person.prototype={
//     Lastname:"杜"
// }
// function Person(){
//     // var this={
//     //     __proto__:Person.prototype
//     // }
// }
// Person.prototype.Lastname="cherry";
// var person1=new Person();

// var obj=Object.create(原型);

// call/apply 该边this指向

// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }
// var obj={}
// Person.call(obj,"wo",300);

// function Person(name,age,sex){
//     this.name=name;
//     this.age=age;
//     this.sex=sex;
// }
// function Student(name,age,sex,tel,grade){
//     Person.call(this,name,age,sex);
//     this.tel=tel;
//     this.grade;
// }
// var student=new Student('sunny',123,'male',139,2017);

// call需要把实参按照形参的个数传进去
// apply需要传一个arguments

// -----共享原型继承
// Father.prototype.lastname="du";
// function Father(){
// }
// function Son(){
// }
// function inherit(Target,Origin){
//     Target.prototype=Origin.prototype
// }
// inherit(Son,Father);
// var son=new Son();
// var father=new Father();

// ------圣杯模式继承
// Father.prototype.lastname="du";
// function Father(){
// }
// function Son(){
// }
// function inherit(Target,Origin){
//     function F(){};
//     F.prototype=Origin.prototype;
//     Target.prototype=new F();
//     Target.prototype.constuctor=Target;
//     Target.prototype.uber=Origin.prototype;
// }


// var inherit=(function(){
//     var F=function(){};
//     return function (Target,Origin){
//         F.prototype=Origin.prototype;
//         Target.prototype=new F();
//         Target.prototype.constuctor=Target;
//         Target.prototype.uber=Origin.prototype;
//     }
// }())

// inherit(Son,Father);
// var son=new Son();
// var father=new Father();

// --------对象枚举
// hasOwnProperty
// in
// instanceof  某个对象 是不是 某个构造函数构造出来的

// var obj={
//     name:'123',
//     age:12,
//     sex:'male',
//     height:180,
//     wight:75,
//     __proto__:{
//         lastname:'du'
//     }
// }
// for(var key in obj){
//     if(obj.hasOwnProperty(key))
//         console.log(key+":"+obj[key]);
// }

// Object.prototype.toString.call()

// typeof返回的结果可能时
// Number Object Boolean undefined String function

// 预编译中thi指向window
// 全局作用域里this指向window
// call/apply可以改变函数运行时this指向
// object.func();func()里面的this指向object

// var num=(function (n){
//     if(n==1) return 1;
//     return n*arguments.callee(n-1);
// }(100))


// var foo=123;
// function print(){
//     this.foo=234;
//     console.log(foo);
// }
// print();
// console.log(foo);

// var foo=123;
// function print(){
//     this.foo=234;
//     console.log(foo);
// }
// new print();
// console.log(foo);

// var a =5;
// function test(){
//     a=0;
//     alert(a);
//     alert(this.a);
//     var a;
//     alert(a);
// }
// new test();

// var bar={
//     a:"002"
// }
// function print(){
//     bar.a='a';
//     Object.prototype.b='b';
//     return function inner(){
//         console.log(bar.a);
//         console.log(bar.b);
//     }
// }
// print()();

// ------------深度克隆--------------

// var obj = {
//     name: "abc",
//     age: 123,
//     card: ['visa', 'master'],
//     wife: {
//         name: "bcd",
//         son: {
//             name: "aa"
//         }
//     }
// };
// var obj1 = {};

// function deepClone(origin, target) {
//     var target = target || {},
//         toStr = Object.prototype.toString,
//         arrStr = "[object Array]";
//     for (var prop in origin) {
//         if (origin.hasOwnProperty(prop)) {
//             if (typeof (origin[prop]) == 'object') {
//                 if (toStr.call(origin[prop]) == arrStr) {
//                     target[prop] = [];
//                 } else {
//                     target[prop] = {};
//                 }
//                 deepClone(origin[prop], target[prop]);
//             } else {
//                 target[prop] = origin[prop];
//             }
//         }
//     }
// }

// --------封装type方法---------
// var arr=[10];//第一位为10  字面量形式
// var arr1=new Array(10);//长度为10
// var arr2=new Array(1,2,3);

//push unshift shift sort
//reverser splice(从第几位开始，截取多少位，在切口处添加新数据)改变原数组，返回截取的数组
// concat join split slice(从该位开始截取，截取到该位)不改变原数组，返回截取的数组

// 排序
// 必须有两个形参
// 看返回值 1）当返回值为负数时，那么前面的数放在前面
//         2）为正数，那么后面的数在前
//         3）为0，不动
//var arr=[1,2,3,4,5,-1,-2,10];
// arr.sort(function (a,b) {
// return a-b; //升序
// return b-a; //降序

// if(a>b)return 1;
// else return -1;
// });
// 乱序
// arr.sort(function(a,b){
//     return Math.random()-0.5;
// });

// 类数组 属性要为索引（数字）属性，必须有length属性，最好加上push
// var obj={
//     "0":'a',
//     "1":'b',
//     "2":'c',
//     "length":'3',
//     "push":Array.prototype.push,
//     "splice":Array.prototype.splice
// }
// 数组去重
// Array.prototype.unique=function (){
//     var obj={};
//     var target=[];
//     var flag=0;
//     for(var key in this){
//         if(typeof(obj[this[key]])=="undefined"){
//             target[flag++]=this[key];
//             obj[this[key]]=1;
//         }
//     }
//     return target;
// }

// 字符去重
// String.prototype.unique=function (){
//     var obj={};
//     var answer="";
//     for(var key=0;key<this.length;key++){
//         if(!obj[this[key]]){
//             answer+=this[key];
//             obj[this[key]]=1;
//         }
//     }
//     return answer;
// }

// function type(target){
//     var template={
//         "[object Array]":"array",
//         "[object Object]":"object",
//         "[object Number]":"number - object",
//         "[object Boolean]":'"boolean - object',
//         "[object String]":"string - objet"   
//      }
//     if(target===null){
//         return null;
//     }
//     if(typeof(target)=='object'){
//         var str=Object.prototype.toString.call(target);
//         return template[str];
//     }else{
//         return typeof(target);
//     }
// }


// 找出字符串中第一次出现一个的字符
// function one(str){
//     var obj={};
//     var target=[];
//     var flag=0;
//     for(var key in str){
//         if(typeof(obj[str[key]])=="undefined"){
//             obj[str[key]]=1;
//         }else {
//             obj[str[key]]++;
//         }
//     }
//     return obj;
// }
// String.prototype.find=function (){
//     var obj=one(this);
//     for(var key in this){
//         if(obj[this[key]]==1){
//             console.log(this[key]);
//             return ;
//         }
//     }
// }

// -------------try {} catch(e){}---------------
// 在try里面的发生错误，不会执行错误后的try里面的代码
// 
// ReferenceError 未定义就使用
// SyntaxError    语法错误

// try{
//     console.log("a");
//     console.log(b);
//     console.log("c");
// }catch(e){
//     alert(e.name+":"+e.message);
// }

// ------------es5严格模式------------

// 浏览器  基于es3.0+es5.0的新增方法使用的
// es3.0和es5.0产生的冲突部分
// es5.0严格模式 那么es3.0和es5.0产生冲突的部分就是使用es5.0，否则会用es3.0

// "use strict";//启用es5.0严格模式
// with
//es3.0 不能使用eval（）； 
// eval('console.log(123)');

// DOM --->Document Object Model
// 操作HTML以及XML
// var div =document.getElementsByTagName('div')[0];
// div.style.width="100px";
// div.style.height="100px";
// div.style.background="red";
// var count=0;
// div.onclick=function(){
//     count++;
//     if(count%2==1){
//     this.style.background="green";
//     }else {
//         this.style.background="red";
//     }
// }

// var btn = document.getElementsByTagName('button');
// var div = document.getElementsByClassName('content');
// for (var i = 0; i < btn.length; i++) {
//     (function (n) {
//         btn[n].onclick = function () {
//             for (var j = 0; j < btn.length; j++) {
//                 btn[j].className = "";
//                 div[j].style.display = "none";
//             }
//             this.className = "active";
//             div[n].style.display = "block";
//         }
//     }(i))
// }
// --------------------运动的小方框-------------------
// var div = document.createElement('div');
// document.body.appendChild(div);
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.backgroundColor = "red";
// div.style.position = "absolute";
// div.style.left = "0";
// div.style.top = "0";
// var speed = 1;
// var timer = setInterval(function () {
//     speed += speed / 10;
//     div.style.left = parseInt(div.style.left) + speed + "px";
//     div.style.top = parseInt(div.style.top) + speed + "px";
//     // console.log(parseInt(div.style.left)+" "+div.style.top);
//     if (parseInt(div.style.left) > 200 &&
//         parseInt(div.style.top) > 200) {
//         clearInterval(timer);
//     }
// }, 30);
// -----------------------刮刮卡--------------------
// var ul=document.getElementsByTagName("ul")[0];
// ul.onmouseover=function (e){
//     var event=e||window.event;
//     var target=event.target||event.srcElement;
//     target.style.backgroundColor="rgb(0,255,"+
//     target.getAttribute('img-data')+")";
//     target.setAttribute('img-data',
//     parseInt(target.getAttribute('img-data'))+10);
// }

// document.querySelector('父级>子级');//非实时
// document.querySelectorAll('父级>子级');//非实时

// ------------节点类型------------Element.nodetype
// 元素节点-------1
// 属性节点-------2
// 文本节点-------3
// 注释节点-------8
// document-------9
// DocumentFragment---11
// --------返回元素e的第n层祖先元素节点-----------
// function retParent(elem, n) {
//     while (n && elem) {
//         elem = elem.parentElement;
//         n--;
//     }
//     return elem;
// }

// -------封装mychildren功能----------
// Element.prototype.myChildren=function(){
//     var child=this.childNodes;
//     var len=child.length;
//     var arr=[];
//     for(var i=0;i<len;i++){
//         if(child[i].nodeType==1){
//             arr.push(child[i]);
//         }
//     }
//     return arr;
// }
// var div=document.getElementsByTagName('div')[0];

//返回元素的第n个元素节点，n为正返回后面的，n为负返回前面的
// function retSibling(e, n) {
//     while (n && e) {
//         if (n > 0) {
//             if (e.nextElementSibling){
//                 e = e.nextElementSibling;
//             }
//             else {
//                 e = e.nextSibling;//下一个兄弟节点
//                 while (e.nodeType!= 1&&e)
//                     e = e.nextSibling;
//             }
//             n--;
//         } else {
//             if (e.previousElementSibling)
//                 e = e.previousElementSibling;
//             else {
//                 e = e.previousSibling;//上一个兄弟节点
//                 while (e.nodeType != 1&&e) {
//                     e = e.previousSibling;
//                 }
//             }
//             n++;
//         }
//     }
//     return e;
// }
// var strong = document.getElementsByTagName('strong')[0];

// -----------DOM基本操作---------------
// 增
// document.createElement('标签');//创建元素节点
// document.createTextNode('文本')//创建文本节点
// document.createComment('')//创建注释节点
//插
// Element.appendChild('');//剪切操作
// ParentNode.insertBefore(a,b);//在b之前插入a
//删
// parent.removeChild( );
// Element.remove();
//替换
// parentNode.replaceChild(nnew,origin);

// Element.innerHTML
// Element.innerText//(火狐不兼容)textContent(老版本IE不兼容)
// Elememt.setAttribute('属性名','属性值');
// Element.getAttribute('属性名');

// var div=document.createElement('div');
// document.body.appendChild(div);
// div.setAttribute('class','examplent');
// var p=document.createElement('p');
// div.appendChild(p);
// p.setAttribute('calss','slogan');
// p.innerText="i am girl!";

// Element.prototype.insertAfter=function (insert,afte){
//     var nextnode=afte.nextElementSibling;
//     if(nextnode){
//         this.insertBefore(insert,nextnode);
//     }else{     
//         this.appendChild(insert);
//     }
// }
// var div=document.getElementsByTagName('div')[0];
// var i=document.createElement('i');

// ------------日期对象------系统提供好的--------
// var date=new Date();//记录出生那个时刻的时间
// date.getDate();//一个月中的第几天
// date.getDay();//一周中的第几天
// date.getMouth()//返回月份
// date.getFullYear();//返回年份
// date.getHours();
// date.getMinuters();
// date.getSeconds();
// date.getTime();//返回1970.1.1至今的毫秒数
// date.setDate(15);//设置一个月中第几天
// date.setTime(毫秒数);
// date.toString();
// date.toTimeString();

// function printTime(){
//     var date=new Date();
//     console.log(date);
// }

//定时器
// var timer=setInterval(function (){
//     console.log('a');
// },20);

// clearInterval(计时器的唯一标识timer);//清除定时器
// clearTimeout();
// var input=document.getElementsByTagName('input');
// var minutes,
//     seconds;
// var timer=setInterval(function(){
//     var seconds=input[1].getAttribute('value');
//     if(seconds==59){
//         minutes=input[0].getAttribute('value');
//         input[0].setAttribute('value',
//         parseInt(minutes)+1);
//         input[1].setAttribute('value',0);
//         if(parseInt(minutes)==2){
//             console.log('a');
//             clearInterval(timer);
//     }
//     }else{
//         input[1].setAttribute('value',
//         parseInt(seconds)+1);
//     }

// },100)

// 查看滚动条的滚动距离
// window.pageXOffset/pageyOffset //IE8及一下不能用 
// doucument.body.scrollLeft/Top  ie8 5 4
// document.documentElement.scrollLeft /scrollTop ie7 6


// ------------封装获取滚动条的滚动距离---------------
// function getScrollOffset() {
//     if (window.pageXOffset) {
//         return {
//             x: window.pageXOffset,
//             y: window.pageYOffset
//         }
//     } else {
//         return {
//             x: document.body.scrollLeft +
//                 document.documentElement.scrollLeft,
//             y: document.body.scrollTop +
//                 document.documentElement.scrollTop
//         }
//     }
// }

//查看窗口大小
// window.innerWidth/innerHeight //ie8及一下不能用
//标准模式下任意浏览器能兼容
// document.documentElement.clientHeight/clientWidth
//适用于怪异模式下的浏览器能
// document.body.clientWidth/clientHeight

// document.compatMode------->CssCompat 标准模式 
//                    ------->BackCompat 怪异模式
// ------------封装获取窗口大小---------------
// function getViewportOffset(){
//     if(window.innerWidth){console.log(11);
//         return {
//             w:window.innerWidth,
//             h:window.innerHeight
//         }
//     }else{
//         if(document.compatMode=="BackCompat"){
//             console.log(1);
//             return {
//                 w:document.body.clientWidth,
//                 h:document.body.clientHeight
//             }
//         }else{console.log(2);
//             return {
//                 w:document.documentElement.clientWidth,
//                 h:document.documentElement.clientHeight
//             }
//         }
//     }
// }

//查看元素尺寸
// domEle.getBoundingClientRect(); //兼容性很好
// domEle.offsetWidth/offsetHeight  
//查看元素位置
// dom.offsetLeft/offsetTop  //距离有定位父级的距离
// dom.offsetParent //返回最近的有定位的父级

//-------------封装元素相对于文档的坐标--------------
// function getElementPosition(child){
//     if(!child)return {};
//     var parent=child.offsetParent;
//     if(parent==document.body){
//         return {
//             x:child.offsetLeft,
//             y:child.offsetTop
//         }
//     } 
//     return {
//         x:parseInt(child.offsetLeft)+parseInt(getElementPosition(child.offsetParent).x),
//         y: parseInt(child.offsetTop)+parseInt(getElementPosition(child.offsetParent).y)
//     }
// }

//让滚动条滚动
// scroll(x,y)=window.scrollTo(x,y) //让滚动条滚到x，y的位置
// scrollBy(); //累加滚动x，y

// -------------脚本化CSS----------------
// 读写元素css属性
// dom.style.prop //只能获取行间样式
//查询计算样式
// window.getComputedStyle('dom',null);  //只能读 ie8以及一下不兼容
// 查询样式
// currentStyle()

//-------封装返回元素的style----------
// function getStyle(elem,prop){
//     if(window.getComputedStyle){
//         return window.getComputedStyle(elem,null)[prop];
//     }else{
//         return elem.currentStyle[prop];
//     }
// }

// ---------事件-------------
// 如何绑定事件
// domele.on事件类型=function(){ } //兼容性好  句柄绑定方式 this指向domele自身
// domele.addEventListener(事件类型,处理函数,false);//IE9以下不兼容,能绑定多个处理函数，但是绑定同一个函数，只能执行一次，this指向自身
// domele.attachEvent('on'+时间类型,处理函数) ,IE特有，效果相当于上一个，但是绑定同一个处理函数，能执行多次，this指向window

// var li = document.getElementsByTagName('li');
// for (var i = 0; i < li.length; i++) {
//     (function (n) {
//         li[n].addEventListener('click', function () {
//             console.log(n);
//         }, false);
//     }(i));
// }

//--------封装事件处理函数--------
// function addEvent(elem,type,handle){
//     if(elem.addEventListener){
//         elem.addEventListener(type,handle,false);
//     }else if(elem.attachEvent){
//         elem.attachEvent('on'+type,function(){
//             handle.call(elem);
//         })
//     }else{
//         elem['on'+type]=handle;
//     }
// }

//解除事件处理函数
// domelem.on事件=null
// doelem.removeEventListener(事件类型，处理函数，false);
// domelem.detachEvent('on'+type,事件处理函数);
// ------封装解除事件处理---------
// function removeEvent(elem,type,handle){
//     if(elem.removeEventListener){
//         elem.removeEventListener(type,handle,false);
//     }else if(elem.detachEvent){
//         elem.detachEvent('on'+type,function(){
//             handle.call(elem);
//         })
//     }else{
//         elem['on'+type]=handle;
//     }
// }
//事件处理模型
// 1.冒泡：结构上存在父子结构，会存在事件冒泡的功能，
// 自子级冒泡向父级 domele.addEventListener(事件类型,处理函数,false);
// 2.事件捕获：结构上存在父子结构，会存在事件捕获的功能，
// 自父级向子级捕获 domele.addEventListener(事件类型,处理函数,true);IE没有
// 触发顺序，先捕获，后冒泡
// focus blur change submit reset select等事件不冒泡
// 取消冒泡 
// e.stopPropagation() IE9及一下不支持
// e.cancelBubble=true; IE独有

// -----------封装取消冒泡事件-----------
// function stopBubble(event){
//     if(event.stopPropagation){
//         event.stopPropagation();
//     }else{
//         event.cancelBubble=true;
//     }
// }
// -------------封装取消默认事件-----------
// function cancelHandle(event){
//     if(event.preventDefault){
//         event.preventDefault();
//     }else{
//         event.returnValue=false;
//     }
// }
// -------事件源对象---------
// domelem.onclick=function (e){
//     var event=e||window.event;
//     var targrt=event.target||event.src.srcElement;  分别火狐 IE获取事件源对象
// }
// 事件委托 利用冒泡 事件源对象
// -------------事件分类------------
// 鼠标事件
// click mousedown mousemove mouseup contexmenu右键菜单
// mouseover mouseout mouseenter mouseleave
// 用button来区分鼠标的按键 0/1/2
// DOM3标准规定：click事件只能监听左键，只能通过mousedown和mouseup来判断鼠标键

// ------------封装拖拽功能---------
// function drag(elem) {
//     var disX,
//         disY;
//     addEvent(elem,'mousedown',function(e){
//         var event = e || window.event;
//         disX = e.pageX - parseInt(elem.style.left);
//         disY = e.pageY - parseInt(elem.style.top);
//         addEvent(document,'mousemove',mouseMove);
//         addEvent(document,'mouseup',mouseUp);
//         stopBubble(event);
//         cancelHandle(event);
//     });
//     function mouseMove(e) {
//         var event = e || window.event;
//         elem.style.left = e.pageX - disX + "px";
//         elem.style.top = e.pageY - disY + "px";
//     }
//     function mouseUp(e){
//         removeEvent(document,'mousemove',mouseMove);
//         removeEvent(document,'mouseup',mouseUp);
//     }
// }

// ----------键盘事件---------
// keydown > keyup > keypress
// 1.keydown 2.keypress的区别
// 1没有2有charcode  keypress只能监测到字符键，keydown都可以
// ---------文本类事件-----
// input change focus blur

// --------窗体类事件----------
// scroll load

// --------------二级菜单--------------
// var menuitem=document.getElementsByClassName('menuitem');
// for(var i=0;i<menuitem.length;i++){
//     (function(i){
//         addEvent(menuitem[i],'mouseover',mouseOver)
//         addEvent(menuitem[i],'mouseleave',mouseLeave);
//         addEvent(menuitem[i],'click',Click);
//     }(i))
// }
// function mouseOver(e){ 
//      this.className+=" changecolor";
// }
// function mouseLeave(e){
//     this.className="menuitem";
// }
// function Click(e){
//     var event=e||window.event;
//     var mleft=this.offsetLeft;
//     var mtop=this.offsetTop;console.log(mleft+mtop);
//     var content2=document.getElementsByClassName('content2')[0];
//     mleft+="px";
//     mtop=mtop+30+"px";
//     content2.style.left=mleft;
//     content2.style.top=mtop;
//     content2.style.display="block";
//     stopBubble(e);
// }
// var menuitem3=document.getElementsByClassName('menuitem2 menuitem3');
// var menuitem2=document.getElementsByClassName('menuitem2');
// for(var i=0;i<menuitem3.length;i++){
//     (function(i){
//         addEvent(menuitem3[i],'mouseover',mouseOver1);
//         addEvent(menuitem3[i],'mouseleave',mouseLeave1);
//         // stopBubble(menuitem3[i]);
//     }(i))
// }
// function mouseOver1(){
//     this.className+=" changecolor1";
//     var mleft=parseInt(getElementPosition(this).x);
//     var mtop=parseInt(getElementPosition(this).y);
//     var content3=document.getElementsByClassName('content3')[0];
//     content3.style.left=mleft+150+"px";
//     content3.style.top=mtop+"px";
//     content3.style.display="block";
// }
// function mouseLeave1(){
//     this.className="menuitem2 menuitem3 ";
//     var content3=document.getElementsByClassName('content3')[0];
//     content3.style.display="none";
// }
// for(var i=0;i<menuitem2.length;i++){
//     (function(i){
//         addEvent(menuitem2[i],'mouseover',mouseOver2);
//         addEvent(menuitem2[i],'mouseleave',mouseLeave2);
//         // stopBubble(menuitem2[i]);
//     }(i))
// }
// function mouseOver2(){
//     this.className+=" changecolor1";
// }
// function mouseLeave2(){
//     this.className="menuitem2";
// }
// var menuitem4=document.getElementsByClassName('menuitem4');
// for(var i=0;i<menuitem4.length;i++){
//     (function (i){
//         addEvent(menuitem4[i],'mouseover',mouseOver3);
//         addEvent(menuitem4[i],'mouseleave',mouseLeave3);
//         stopBubble(menuitem4[i]);
//     }(i))
// }
// function mouseOver3(){
//     this.className+=" changecolor1";
//     var content3=document.getElementsByClassName('content3')[0];
//     content3.style.display="block";
// }
// function mouseLeave3(){
//     this.className="menuitem4";
// }
// var content3=document.getElementsByClassName('content3')[0];
// addEvent(content3,'mouseleave',mouseLeave4);
// function mouseLeave4(){
//     console.log('aaaaa');
//     this.style.display="none";
// }
// addEvent(document,'click',mouseClick5);
// function mouseClick5(){
//     console.log(22222);
//     var content2=document.getElementsByClassName('content2')[0];
//     content2.style.display="none";
// }

// json 异步 时间线
// json 对象 属性名必须加双引号
// {
//     "属性名":
// }
// JSON.stringify(obj); //json----->string 转换成字符串
// JSON.parse(str) //string ---->json 转化成对象
// domTree+cssTree =reanderTree
// reflow 重排 dom节点的删除，添加 
//        dom节点的高度变化 位置变化 display none---> block
// repaint 重绘 

// js异步加载
// 三种方法
// 1. defer  只能ie用
// 2.aysnc   w3C标准方法
// 3.创建script，插入到DOM中，加载完毕后callBack


// --------封装异步加载------
// function loadScript(url,callback){
//     var script = documnet.createElement('script');
//     script.type = "text/javascript";
    
//     if (script.readyState) {//ie
//         script.onreadystatechange = function () {
//             if (script.readyState == "complete" || script.readyState == "loaded") {
//                 tools[callback]();
//             }
//         }
//     } else {// Safari Opera chrome firefox
//         script.onload = function () {
//             tools[callback]();
//         }
//     }
//     script.src = url;
//     document.head.appendChild(script);
// }

// -------时间线------

// -------正则表达式---------
// \ 将后面的字符强制转换成文本
//  \n 换行  \r 行结束符 \t  Tab
// 正则表达式的作用：匹配特殊字符或有特殊搭配源则的字符的最佳选择
// 两种创建方式：
// 1.直接量  !!!建议用这个
// var reg=/abc/;
// var str="abcd";
// reg.test(str);
// str.match(reg);

// var reg=/abc/i;//忽视大小写
// var reg=/abc/m;//多行匹配
// var reg=/abc/g;//全局匹配

// 2.new RegExp();

// 匹配aabb类型
// var str="aabb";
// var reg=/(\w)\1(\w)\2/g;
// 匹配aaaa类型
// var str="aaaa";
// var reg=/(\w)\1\2\3\4/g;

// 将100000000表示成100,000,000
// var str="100000000";
// var reg=/(?=(\B)(\d{3})+$)/g;
// console.log(str.replace(reg,","));


function captureThreeNumbers(arr) {
    var flag=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i].charCodeAt()>=48&&arr[i].charCodeAt()<=57){
            flag++;
            if(flag==3)
                return arr[i-2]+arr[i-1]+arr[i];
        }
        else flag=0;
    }
    return false;
}


//类数组->数组
//Array.prototype.slice.call(arrayLike)
//jQuery.makeArray(obj)







