export{}

console.log("外の処理開始")
for(let i = 1; i <= 5; i++) {
  const num1 = Math.round(Math.random() * 100);
  if(num1 == 0) {
    console.log("num1が0のため、全ての処理を終了");
    break;
  }
  for(let j = 1; j <= 5; j++) {
    const num2 = Math.round(Math.random() * 100);
    console.log("内の処理開始");
    console.log(`num1: ${num1}, num2: ${num2}`);
    console.log(`num2÷num1 = ${num2 / num1}`);
  }
  console.log("内の処理終了");
}
console.log("外の処理終了");