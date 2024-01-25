export{}

const list: {[key: string]: number;} =
{
  "い組" : 35, 
  "ろ組" : 36, 
  "は組" : 37, 
  "に組" : 34, 
  "ほ組" : 36, 
}

for(const key in list) {
  console.log(`${key}: ${list[key]}人`);
}

