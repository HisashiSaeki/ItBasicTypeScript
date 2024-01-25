export{}

function calcRectangleArea(height: number, width = height): number {
  let area = height * width;
  return area;
}

const area1 = calcRectangleArea(11, 24);
console.log(`縦11で横24の長方形の面積: ${area1}`);
const area2 = calcRectangleArea(13);
console.log(`1辺が13の正方形の面積: ${area2}`);
