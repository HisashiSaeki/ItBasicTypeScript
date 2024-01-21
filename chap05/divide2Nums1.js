"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("外の処理開始");
for (var i = 1; i <= 5; i++) {
    var num1 = Math.round(Math.random() * 100);
    if (num1 == 0) {
        console.log("num1が0のため、全ての処理を終了");
        break;
    }
    for (var j = 1; j <= 5; j++) {
        var num2 = Math.round(Math.random() * 100);
        console.log("内の処理開始");
        console.log("num1: ".concat(num1, ", num2: ").concat(num2));
        console.log("num2\u00F7num1 = ".concat(num2 / num1));
    }
    console.log("内の処理終了");
}
console.log("外の処理終了");
