"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcAverageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var totalScore = 0;
    for (var _a = 0, scores_1 = scores; _a < scores_1.length; _a++) {
        var score = scores_1[_a];
        totalScore += score;
    }
    var averageScore = totalScore / scores.length;
    return averageScore;
}
var averageScore1 = calcAverageScore(87, 77, 89, 54, 90);
console.log("\u4E2D\u7530\u3055\u3093\u306E\u5E73\u5747\u70B9: ".concat(averageScore1));
var averageScore2 = calcAverageScore(68, 87, 74, 91, 69, 73, 85);
console.log("\u4E2D\u5C71\u3055\u3093\u306E\u5E73\u5747\u70B9: ".concat(averageScore2));
