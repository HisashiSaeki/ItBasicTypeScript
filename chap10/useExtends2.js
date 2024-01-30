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
var Greetings = /** @class */ (function () {
    function Greetings(name) {
        this.name = "";
        this.name = name;
    }
    Greetings.prototype.sayHello = function () {
        console.log("".concat(this.name, "\u3055\u3093\u3001\u3053\u3093\u306B\u3061\u306F\u3002"));
    };
    return Greetings;
}());
var GoodMorning = /** @class */ (function (_super) {
    __extends(GoodMorning, _super);
    function GoodMorning() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoodMorning.prototype.sayGoodMorning = function () {
        console.log("".concat(this.name, "\u3055\u3093\u3001\u304A\u306F\u3088\u3046\u3054\u3056\u3044\u307E\u3059\u3002"));
    };
    return GoodMorning;
}(Greetings));
var taro = new GoodMorning("江口太朗");
taro.sayGoodMorning();
taro.sayHello();
