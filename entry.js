document.getElementById('app').innerHTML = "这是我第一个打包成功的程序";
// add
require("./first.js");
require("!style!css!./style.css");

var Vue = require("vue");
    new Vue({
       el: "body",
       data: {
           message: "hello vue.js"
       } 
    });