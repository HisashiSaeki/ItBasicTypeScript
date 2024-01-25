"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcAverage3Score(score1, score2, score3) {
    var average3Score = (score1 + score2 + score3) / 3;
    return average3Score;
}
var scores1 = [87, 77, 89];
console.log("\u4E2D\u7530\u3055\u3093\u306E\u5E73\u5747\u70B9: ".concat(calcAverage3Score.apply(void 0, scores1)));
var scores2 = [68, 87, 74];
console.log("\u4E2D\u5C71\u3055\u3093\u306E\u5E73\u5747\u70B9: ".concat(calcAverage3Score.apply(void 0, scores2)));
