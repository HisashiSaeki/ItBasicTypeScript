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

class MyDo extends Greetings {
  sayHello() {
    console.log(`${this.name}さん、まいど`);
  }
}

const taro = new MyDo("江口太朗");
taro.sayHello();
