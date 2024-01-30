"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var DonutsWithDrink = /** @class */ (function (_super) {
    __extends(DonutsWithDrink, _super);
    function DonutsWithDrink(name, price, quantity, drinkName, drinkPrice) {
        var _this = _super.call(this, name, price, quantity) || this;
        _this._drinkName = "";
        _this._drinkPrice = 0;
        _this._drinkName = drinkName;
        _this._drinkPrice = drinkPrice;
        return _this;
    }
    Object.defineProperty(DonutsWithDrink.prototype, "priceWithDrink", {
        get: function () {
            return this.totalDonutsPrice + this._drinkPrice;
        },
        enumerable: false,
        configurable: true
    });
    DonutsWithDrink.prototype.showOrder = function () {
        console.log("\u30C9\u30FC\u30CA\u30C4\u3068".concat(this._drinkName, "\u3068\u306E\u30BB\u30C3\u30C8\u3067\u5408\u8A08").concat(this.priceWithDrink, "\u5186"));
    };
    return DonutsWithDrink;
}(Donuts));
var order1 = new DonutsWithDrink("オールドファッション", 120, 3, "アイスコーヒー", 150);
order1.showOrder();
