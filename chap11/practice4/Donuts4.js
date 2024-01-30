"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Donuts = /** @class */ (function () {
    function Donuts(name, price, quantity) {
        this._name = "";
        this._price = 0;
        this._quantity = 0;
        this._name = name;
        this._price = price;
        this._quantity = quantity;
    }
    Object.defineProperty(Donuts.prototype, "totalDonutsPrice", {
        get: function () {
            return this._price * this._quantity;
        },
        enumerable: false,
        configurable: true
    });
    Donuts.prototype.showOrder = function () {
        console.log("".concat(this._name, "\u304C").concat(this._quantity, "\u500B\u3067\u5408\u8A08").concat(this.totalDonutsPrice, "\u5186"));
    };
    return Donuts;
}());
exports.default = Donuts;
