export{}

const radiusList = [1, 3, 5, 7, 9];
radiusList.forEach(
  function(radius: number, index: number, array: number[]) {
    const circleArea = radius * radius * 3.14;
    console.log(`半径${radius}の円の面積: ${circleArea}`);
  }
)
