"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list = {
    "い組": 35,
    "ろ組": 36,
    "は組": 37,
    "に組": 34,
    "ほ組": 36,
};
var sum = 0;
for (var key in list) {
    sum += list[key];
}
console.log("\u5408\u8A08: ".concat(sum, "\u4EBA"));
