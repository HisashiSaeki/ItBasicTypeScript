export{}

function calcTriangleArea(bottom: number, height: number): number {
  let area = bottom * height / 2;
  return area;
}

const area1 = calcTriangleArea(25, 15);
console.log(`辺25で高さ15の面積は${area1}`);

