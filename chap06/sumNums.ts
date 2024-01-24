export{}

const list: number[] = [15, 36, 21, 48, 59, 7];
let ans = 0;

for(let i = 0; i < list.length; i++) {
  ans += list[i];
}

console.log(`listの合計: ${ans}`);
