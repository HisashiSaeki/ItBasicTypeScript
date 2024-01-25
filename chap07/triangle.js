"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showTriangle(bottom, height) {
    var area = bottom * height / 2;
    console.log("\u8FBA".concat(bottom, "\u3067\u9AD8\u3055").concat(height, "\u306E\u9762\u7A4D\u306F").concat(area));
}
console.log(showTriangle(25, 15));
