// export{}
const studentList = new Map();
studentList.set("い組", 35);
studentList.set("ろ組", 36);
studentList.set("は組", 37);
studentList.set("に組", 34);
studentList.set("ほ組", 36);
for (const [key, value] of studentList) {
    console.log(`${key}: ${value}人`);
}
