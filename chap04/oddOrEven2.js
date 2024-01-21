"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var num = Math.round(Math.random() * 100);
console.log("num\u306E\u5024: ".concat(num));
var rem = num % 2;
var cond = (rem == 0);
console.log(cond);
if (cond) {
    console.log("偶数");
}
else {
    console.log("奇数");
}
console.log("処理終了");
