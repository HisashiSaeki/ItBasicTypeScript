export{}

function showGrossProfit(earnings: number, grossMarginRatio = 0.7 ) {
  const comission = 0.1
  let grossProfit = Math.round(earnings * (1 - comission) * grossMarginRatio);
  console.log(`${earnings}の粗利: ${grossProfit}(粗利率${grossMarginRatio})`);
}

showGrossProfit(1245615, 0.8);
showGrossProfit(2214568);
