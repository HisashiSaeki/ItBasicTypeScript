export{}

function calcAverage3Score(score1: number, score2: number, score3: number) {
  const average3Score = (score1 + score2 + score3) / 3
  return average3Score
}

const scores1 = [87, 77, 89] as const;
console.log(`中田さんの平均点: ${calcAverage3Score(...scores1)}`);
const scores2 = [68, 87, 74] as const;
console.log(`中山さんの平均点: ${calcAverage3Score(...scores2)}`);
