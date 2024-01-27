"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BodyMass = /** @class */ (function () {
    function BodyMass(name, height, weight) {
        this.name = "";
        this.height = 0;
        this.weight = 0;
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
    BodyMass.prototype.showBMI = function () {
        var bmi = Math.round(this.weight / Math.pow((this.height / 100), 2) * 10) / 10;
        console.log("".concat(this.name, "\u3055\u3093\u306EBMI\u5024: ").concat(bmi));
    };
    BodyMass.prototype.showIdealWeight = function () {
        var bestWeight = Math.round(22 * Math.pow((this.height / 100), 2));
        console.log("".concat(this.name, "\u3055\u3093\u306E\u7406\u60F3\u4F53\u91CD: ").concat(bestWeight, "kg"));
    };
    return BodyMass;
}());
var nakatani = new BodyMass("中谷和弘", 171.4, 68.4);
nakatani.showBMI();
nakatani.showIdealWeight();
