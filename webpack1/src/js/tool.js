// define (function() {
//     function hello(str) {
//         console.log(str);
//     }
//     return {
//         hello: hello
//     };
// });


module.exports = function() {
    var obj = {
        hello:"hello",
        a: "123"
    };
    console.log(obj);
    return obj;
}

