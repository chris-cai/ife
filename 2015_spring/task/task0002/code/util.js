//2.1
// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    // your implement
    return typeof arr === "object" && Object.prototype.toString.call(arr) === "[object Array]";
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    // your implement
    return Object.prototype.toString.call(fn) === '[object Function]';
}

//
function showPropsWithoutFun(obj, objName) {
    var result = "";
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) {       //跳过继承属性
            continue;
        }
        if (typeof obj[i] === "function") { //跳过这个对象的方法
            continue;
        }
        result += objName + "." + i + "=" + obj[i] + "\n";
    }
    return result;
}

//2.2
// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    // your implement
    var o = null;
    if(src instanceof Array){
        o = [];
        for(var i in src){
            o[i] = cloneObject(src[i]);
        }
        return o;
    }
    if(src instanceof Object){
        o = {};
        for(var i in src){
            if(src.hasOwnProperty(i)){
                o[i] = cloneObject(src[i]);
            }
        }
        return o;
    }
    return src;
}

function cloneObject1(obj){
    var o = obj.constructor === Array ? [] : {};
    for(var i in obj){
        if(obj.hasOwnProperty(i)){
            o[i] = typeof obj[i] === "object" ? cloneObject(obj[i]) : obj[i];
        }
    }
    return o;
}


// 测试用例：
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"

//2.3
// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    // your implement
    var data = [];
    for(var i=0,len=arr.length; i<len; i++){
        var flag = true;
        for(var j=0,length=arr.length; j<length; j++){
            if(i === j){
                continue;
            }
            if(arr[i] === arr[j]){
                flag = false;
                break;
            }
        }
        if(flag || data.indexOf(arr[i]) === -1){
            data.push(arr[i]);
        }
    }
    return data;
}

function uniqArray1(arr) {
    var data = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i] !== '' && data.indexOf(arr[i]) < 0 ) {
            data.push(arr[i]);
        }
    }
    return data;
}

// 使用示例
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray1(a);
console.log(b); // [1, 3, 5, 7]

// 中级班同学跳过此题
// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    // your implement
    function isEmpty(c){
        return /\s/.test(c);
    }
    var len = str.length;
    for (var i = 0; i < len && isEmpty(str.charAt(i)); i++);
    if (i === len) {
        return '';
    }
    for (var j = len; j && isEmpty(str.charAt(j - 1)); j--);
    return str.substring(i, j);
}

// 很多同学肯定对于上面的代码看不下去，接下来，我们真正实现一个trim
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
function trim(str) {
    // your implement
    return str.replace(/^\s+|\s+$/g,"");
}

// 使用示例
var str = '   hi!  ';
str = trim(str);
console.log(str); // 'hi!'

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    // your implement
    for(var i=0,len=arr.length; i<len; i++){
        fn(arr[i],i);
    }
}

// 其中fn函数可以接受两个参数：item和index

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output(item) {
    console.log(item)
}
each(arr, output);  // java, c, php, html

// 使用示例
var arr = ['java', 'c', 'php', 'html'];
function output1(item, index) {
    console.log(index + ': ' + item)
}
each(arr, output1);  // 0:java, 1:c, 2:php, 3:html

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
    var count = 0;
    for(var i in obj){
        if(obj.hasOwnProperty(i)){
            count++;
        }
    }
    return count;
}

// 使用示例
var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
console.log(getObjectLength(obj)); // 3

//////////////////////////////////////////////////////////////////////////////////////////////////////
//2.4
// 判断是否为邮箱地址
function isEmail(emailStr) {
    return emailStr.search(/^[a-z0-9]([-_\.]?[a-z0-9]+)*@([-_]?[a-z0-9]+)+[\.][a-z]{2,7}([\.][a-z]{2})?$/i) !== -1;
}

// 判断是否为手机号
function isMobilePhone(phone) {
    phone = phone + '';
    return phone.search(/^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/) !== -1;
}

/**********************************
* 3 DOM
**********************************/
// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    // your implement
    var oldClass = element.className;
    element.className = oldClass==="" ? newClassName : oldClass + " " + newClassName;
    //className setAttribute
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    // your implement
    var old = element.className;
    var now = old ? " " + old + " " : old;
    if(now){
    	if(now.indexOf(oldClassName) > -1){
    		now = now.replace(" " + oldClassName + " "," ");
    	}
    	//trim 处理一下now  实现trim函数 和 String两边添加" "函数
    	if(now !== old){		
			element.setAttribute("class",now);
    	}
    }
    //考虑正则表达式实现
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    // your implement
    return element.parentNode === siblingNode.parentNode;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    // your implement
}
// your implement