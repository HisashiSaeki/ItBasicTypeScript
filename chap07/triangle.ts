export{}

function showTriangle(bottom: number, height: number) {
  let area = bottom * height / 2;
  console.log(`辺${bottom}で高さ${height}の面積は${area}`);
}

console.log(showTriangle(25, 15));
