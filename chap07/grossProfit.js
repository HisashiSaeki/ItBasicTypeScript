"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showGrossProfit(earnings, grossMarginRatio) {
    if (grossMarginRatio === void 0) { grossMarginRatio = 0.7; }
    var comission = 0.1;
    var grossProfit = Math.round(earnings * (1 - comission) * grossMarginRatio);
    console.log("".concat(earnings, "\u306E\u7C97\u5229: ").concat(grossProfit, "(\u7C97\u5229\u7387").concat(grossMarginRatio, ")"));
}
showGrossProfit(1245615, 0.8);
showGrossProfit(2214568);
