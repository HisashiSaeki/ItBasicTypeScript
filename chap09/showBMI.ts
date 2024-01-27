export{}

class BodyMass {
  name: string = "";
  height: number = 0;
  weight: number = 0;

  constructor(name: string, height: number, weight: number) {
    this.name = name;
    this.height = height;
    this.weight = weight;
  }

  showBMI() {
    const bmi = Math.round(this.weight / (this.height / 100) ** 2 * 10) / 10;
    console.log(`${this.name}さんのBMI値: ${bmi}`);
  }

  showIdealWeight() {
    const bestWeight = Math.round(22 * (this.height / 100) ** 2);
    console.log(`${this.name}さんの理想体重: ${bestWeight}kg`);
  }
}

const nakatani = new BodyMass("中谷和弘", 171.4, 68.4);
nakatani.showBMI();
nakatani.showIdealWeight();

