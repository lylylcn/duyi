// Ajax的核心：XMLHttpRequest对象

// 1.首先需要创建XMLHttpRequest对象； var xhr=new XMLHttpRequest();注意：IE7之前的版本不支持 如果需要支持IE7之前的版本，可以自己封装函数
function createXHR() {
    if (typeof (XMLHttpRequest) != "undefined") {
        return new XMLHttpRequest();
    } else if (typeof (ActiveXObject) != "undefined") {
        if (typeof (arguments.callee.activeXString != "string")) {
            var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"];
            var i, len;
            for (i = 0, len = versions.length; i < len; i++) {
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    break;
                } catch (ex) {}
            }
        }
        return new ActiveXObject(arguments.callee.activeXString);
    } else {
        throw new Error("No XHR object available.");
    }
}
// 2. XHR的使用

// 创建完XHR对象之后，第一步是使用open()方法，open可以传入三个参数，请求方式，url ，是否异步请求

// 注意：只能向同一个域中使用相同端口号和协议的url发送请求，如果url与启动请求的页面有任何差别，都会引发错误，这涉及到跨域问题

// send()接收一个参数，作为请求主体发送的数据，如果不需要发送数据，需要传入null，服务器在收到响应之后，相应的数据就会自动填充XHR对象的属性

// 1)responseText :响应主题返回的文本；

// 2)responseXML: 如果响应的内容是XML，这个属性将保存着响应数据的XMLDOM文档

// 3)status：响应的HTTP状态

//        部分HTTP状态码：200：浏览器得到服务器的消息，完成了一次http请求

//                                       304：浏览器多次访问同一个资源，服务器的缓存还没有过期，为了减少网络传输的消耗，可以放浏览                                                    器继续使用缓存的内容

//                                       301：永久转移

//                                       302：临时重定向

//                                       303：临时重定向，必须用get方式请求

//                                       401协议格式出现问题

//                                       403：服务器拒绝了请求

//                                       404：找不到系统资源

//                                       500：服务器程序出现了错误

//                                       503：服务器繁忙

// 4)statusText:HTTP状态说明

// 为了确保接收到响应，可以检查status属性

// 在异步请求中，我们需要检测readystatechange属性判断请求/响应过程的当前活动阶段

// 属性值如下：0 未初始化（尚未调用open()方法） 1 启动（已经调用open()方法，尚未调用send()方法）

//                       2 发送（已经调用send()方法） 3 接收 已经接收到部分响应数据   4 完成  已经完成全部响应数据的接收

// 每次readyState属性值发生改变都会触发onreadystatechange事件


var xhr = new createXHR();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || !xhr.status) {
            alert(xhr.readyState);
        } else {
            alert("fail");
        }
    }
};
xhr.open("get", "../a.txt", false);
xhr.send(null);

// post请求：通常用于向服务器发送应该被保存的数据，post请求的主体可以包含非常多的数据，而且格式不限       