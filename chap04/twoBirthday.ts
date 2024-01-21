export{}

const numA = Math.round(Math.random() * 68 + 1950);
const birthdayA = numA;
console.log(`Aさんの生まれ年は、${numA}年です。`);
const numB = Math.round(Math.random() * 68 + 1950);
const birthdayB = numB;
console.log(`Bさんの生まれ年は、${numB}年です。`);

if(numA >= 1989 && numB >= 1989) {
    console.log("AさんもBさんも平成生まれ");
} else if(numA >= 1989 || numB >= 1989) {
    console.log("どちらかが平成生まれ");
} else {
    console.log("両方とも昭和生まれ");
}

console.log("処理終了");