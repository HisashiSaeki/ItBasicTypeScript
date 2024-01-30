export{}

enum Rgb {RED, GREEN, BLUE}

function showColorSelection(name: string, color: Rgb) {
  let colorStr = "";
  if(color == Rgb.RED) {
    colorStr = "赤";
  } else if(color == Rgb.BLUE) {
    colorStr = "青";
  } else {
    colorStr = "緑";
  }
  console.log(`${name}さんが選んだ色: ${colorStr}`);
}

showColorSelection("美智恵", Rgb.RED);
