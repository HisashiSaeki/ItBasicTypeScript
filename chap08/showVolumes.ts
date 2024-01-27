export{}

function calcVolume(num1: number): number;
function calcVolume(num1: number, num2: number, num3: number): number;
function calcVolume(num1: number, num2?: number, num3?: number): number {
  let area = 0;
  if(typeof num2 == "number" && typeof num3 == "number") {
    area = num1 * num2 * num3;
  } else {
    area = num1 ** 3;
  }
  return area
}

const result1 = calcVolume(4);
console.log(`一辺が4の立方体の体積: ${result1}`);
const result2 = calcVolume(4, 5, 6);
console.log(`各辺の長さが4、5、6の直方体の体積: ${result2}`);
