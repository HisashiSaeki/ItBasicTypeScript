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

class HelloWithNice extends Greetings {
  sayHello() {
    super.sayHello();
    console.log("よろしくお願いします!");
  }
}

const taro = new HelloWithNice("江口太朗");
taro.sayHello();
