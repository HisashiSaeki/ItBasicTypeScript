"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var radiusList = [1, 3, 5, 7, 9];
radiusList.forEach(function (radius, index, array) {
    var circleArea = radius * radius * 3.14;
    console.log("\u534A\u5F84".concat(radius, "\u306E\u5186\u306E\u9762\u7A4D: ").concat(circleArea));
});
