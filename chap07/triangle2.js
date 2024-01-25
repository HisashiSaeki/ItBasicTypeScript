"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcTriangleArea(bottom, height) {
    var area = bottom * height / 2;
    return area;
}
var area1 = calcTriangleArea(25, 15);
console.log("\u8FBA25\u3067\u9AD8\u305515\u306E\u9762\u7A4D\u306F".concat(area1));
