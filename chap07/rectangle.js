"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcRectangleArea(height, width) {
    if (width === void 0) { width = height; }
    var area = height * width;
    return area;
}
var area1 = calcRectangleArea(11, 24);
console.log("\u7E2611\u3067\u6A2A24\u306E\u9577\u65B9\u5F62\u306E\u9762\u7A4D: ".concat(area1));
var area2 = calcRectangleArea(13);
console.log("1\u8FBA\u304C13\u306E\u6B63\u65B9\u5F62\u306E\u9762\u7A4D: ".concat(area2));
