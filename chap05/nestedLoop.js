"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("外のループ開始");
for (var i = 1; i <= 3; i++) {
    console.log("内のループ開始");
    for (var j = 1; j <= 3; j++) {
        console.log("i:j\u2192".concat(i, ":").concat(j));
    }
    console.log("内のループ終了");
}
console.log("外のループ終了");
