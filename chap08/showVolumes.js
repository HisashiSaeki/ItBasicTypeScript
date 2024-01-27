"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcVolume(num1, num2, num3) {
    var area = 0;
    if (typeof num2 == "number" && typeof num3 == "number") {
        area = num1 * num2 * num3;
    }
    else {
        area = Math.pow(num1, 3);
    }
    return area;
}
var result1 = calcVolume(4);
console.log("\u4E00\u8FBA\u304C4\u306E\u7ACB\u65B9\u4F53\u306E\u4F53\u7A4D: ".concat(result1));
var result2 = calcVolume(4, 5, 6);
console.log("\u5404\u8FBA\u306E\u9577\u3055\u304C4\u30015\u30016\u306E\u76F4\u65B9\u4F53\u306E\u4F53\u7A4D: ".concat(result2));
