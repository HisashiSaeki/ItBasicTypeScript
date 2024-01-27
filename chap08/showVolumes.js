"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcVolume(edge, height, depth) {
    var volume = 0;
    if (typeof height == "number" && typeof depth == "number") {
        volume = edge * height * depth;
    }
    else {
        volume = Math.pow(edge, 3);
    }
    return volume;
}
var volumeCube = calcVolume(4);
console.log("\u4E00\u8FBA\u304C4\u306E\u7ACB\u65B9\u4F53\u306E\u4F53\u7A4D: ".concat(volumeCube));
var volumeCuboid = calcVolume(4, 5, 6);
console.log("\u5404\u8FBA\u306E\u9577\u3055\u304C4\u30015\u30016\u306E\u76F4\u65B9\u4F53\u306E\u4F53\u7A4D: ".concat(volumeCuboid));
