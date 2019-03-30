// 1.语法：（1）简单值：string，number，boolean，null

//         （2）对象   必须要给属性加上引号，与js中的对象字面量相比，json中的对象没有声明变量，末尾没有分号

{
    "name":"xiaoming",
    "age":18
}
//        （3）数组  JSON数组也没有变量和分号

// [18,"xiaoming",true]
// JSON不支持变量，函数，或对象实例

// 2.JSON对象

// JSON对象有两个方法：

// （1）JSON.stringify();可以将JS对象序列化为JSON字符串，它可以传入三个参数JSON.stringify(JS对象，过滤器[数组/函数]，是否保留缩进)，第一个必须有，后两个可选

// 第二个参数为数组时，那么JSON.stringify()的结果中将只包含数组中列出的属性

var people={
    name:"xiaoming",
    age:18,
    sex:"male"
};
var jsonPeople=JSON.stringify(people,["name","age"]);
//在返回的字符串中显示{"name":"xiaoming","age":18}
// 第二个参数为函数时，传入的函数接收两个参数，属性名和属性值，属性名只能是字符串，函数返回的值就是相应属性的值，但是如果函数返回了undefined，那么相应的属性会被忽略

var people = {
    name: "xiaoming",
    age: 18,
    sex: "male"
};
var jsonPeople = JSON.stringify(people, function (key, value) {
    switch (key) {
        case "name":
            return "xiaotian";
        case "age":
            return undefined;
        default:
            return value;
    }
});
//jsonPeople显示 {"name":"xiaotian","sex":"male"}
// 第三个参数用于控制结果中的缩进和空白符，如果这个参数是一个数值，那么它表示的是每个级别缩进的空格数

var people = {
    name: "xiaoming",
    age: 18,
    sex: "male"
};
var jsonPeople = JSON.stringify(people,null,4);
//jsonPeople显示 
//{
//    "name": "xiaoming",
//    "age": 18,
//    "sex": "male"
//}
// 如果设置为字符，那么缩进将用字符表示

var people = {
    name: "xiaoming",
    age: 18,
    sex: "male"
};
var jsonPeople = JSON.stringify(people,null,"--");
 //jsonPeople显示
//{
//--"name": "xiaoming",
//--"age": 18,
//--"sex": "male"
//}

// 需要注意的是无论使用数字或者字符串都不能超过10，所有大于10的值都会自动转换成10


// 自定义序列化 toJSON()方法
var people = {
    name: "xiaoming",
    age: 18,
    sex: "male",
    toJSON:function(){
        return this.name;
    }
};
var jsonPeople = JSON.stringify(people);
// //jsonPeople显示"xiaoming"

// 对象传入JSON.stringfy(),序列化该对象的顺序

// 1）存在toJSON()方法而且能通过它取到有效的值，则调用该方法，否则返回对象本身

// 2）如果提供了第二个参数，应用这个函数过滤器

// 3）对  2）返回的值进行相应的序列化

// 4）如果提供了第三个参数，执行相应的格式化

//  

// （2）JSON.parse()方法，该方法将JSON字符串转化为JS值，可以接收两个参数JSON.parse(JSON字符串,还原函数)；

// 还原函数接收两个参数，属性名和属性值，并且返回一个值，如果还原函数返回undefined，表示要删除相应的属性名，如果为其他值，则将该值插入到结果中
