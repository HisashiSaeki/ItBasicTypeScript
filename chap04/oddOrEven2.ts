export{}

const num = Math.round(Math.random() * 100);
console.log(`numの値: ${num}`);
const rem = num % 2;
const cond = (rem == 0);
console.log(cond);
if(cond) {
    console.log("偶数");
} else {
    console.log("奇数");
}
console.log("処理終了");
