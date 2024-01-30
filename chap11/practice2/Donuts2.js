"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showOrder = void 0;
function showOrder(donuts) {
    console.log("".concat(donuts.name, "\u304C").concat(donuts.quantity, "\u500B\u3067\u5408\u8A08").concat(donuts.price * donuts.quantity, "\u5186"));
}
exports.showOrder = showOrder;
