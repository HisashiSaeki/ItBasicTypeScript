export{}

const list: {[key: string]: number;} =
{
  "い組" : 35, 
  "ろ組" : 36, 
  "は組" : 37, 
  "に組" : 34, 
  "ほ組" : 36, 
}

let sum = 0;
for(const key in list) {
  sum += list[key];
}
console.log(`合計: ${sum}人`);

