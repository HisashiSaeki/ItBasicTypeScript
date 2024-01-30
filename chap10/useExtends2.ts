export{}

class Greetings {
  protected name: string = "";

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {
    console.log(`${this.name}さん、こんにちは。`);
  }
}

class GoodMorning extends Greetings {
  sayGoodMorning() {
    console.log(`${this.name}さん、おはようございます。`);
  }
}

const taro = new GoodMorning("江口太朗");
taro.sayGoodMorning();
taro.sayHello();
