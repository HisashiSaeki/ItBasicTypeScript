export{}

function calcAverageScore(...scores: number[]) {
  let totalScore = 0;
  for(const score of scores) {
    totalScore += score;
  }
  const averageScore = totalScore / scores.length
  return averageScore
}

const averageScore1 = calcAverageScore(87, 77, 89, 54, 90);
console.log(`中田さんの平均点: ${averageScore1}`);
const averageScore2 = calcAverageScore(68, 87, 74, 91, 69, 73, 85);
console.log(`中山さんの平均点: ${averageScore2}`);
