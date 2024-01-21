export{}

const numA = Math.round(Math.random() * 68 + 1950);
const birthdayA = numA;
console.log(`Aさんの生まれ年は、${birthdayA}年です。`);
const numB = Math.round(Math.random() * 68 + 1950);
const birthdayB = numB;
console.log(`Bさんの生まれ年は、${birthdayB}年です。`);

if(birthdayA >= 1989 && birthdayB >= 1989) {
    console.log("AさんもBさんも平成生まれ");
} else if(birthdayA >= 1989 || birthdayB >= 1989) {
    console.log("どちらかが平成生まれ");
} else {
    console.log("両方とも昭和生まれ");
}

console.log("処理終了");