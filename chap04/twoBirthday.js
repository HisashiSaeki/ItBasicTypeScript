"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numA = Math.round(Math.random() * 68 + 1950);
var birthdayA = numA;
console.log("A\u3055\u3093\u306E\u751F\u307E\u308C\u5E74\u306F\u3001".concat(birthdayA, "\u5E74\u3067\u3059\u3002"));
var numB = Math.round(Math.random() * 68 + 1950);
var birthdayB = numB;
console.log("B\u3055\u3093\u306E\u751F\u307E\u308C\u5E74\u306F\u3001".concat(birthdayB, "\u5E74\u3067\u3059\u3002"));
if (birthdayA >= 1989 && birthdayB >= 1989) {
    console.log("AさんもBさんも平成生まれ");
}
else if (birthdayA >= 1989 || birthdayB >= 1989) {
    console.log("どちらかが平成生まれ");
}
else {
    console.log("両方とも昭和生まれ");
}
console.log("処理終了");
