"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var min = 100;
for (var i = 1; i <= 10; i++) {
    var num = Math.round(Math.random() * 100);
    console.log("".concat(i, "\u56DE\u76EE\u306E\u4E71\u6570: ").concat(num));
    if (num < min) {
        min = num;
    }
}
console.log("\u6700\u5C0F\u5024: ".concat(min));
