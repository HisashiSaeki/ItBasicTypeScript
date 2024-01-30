import {Donuts} from "./Donuts";

class DonutsWithDrink extends Donuts {
  private _drinkName: string = "";
  private _drinkPrice: number = 0;

  constructor(name: string, price: number, quantity: number, drinkName: string, drinkPrice: number) {
    super(name, price, quantity);
    this._drinkName = drinkName;
    this._drinkPrice = drinkPrice;
  }

  get priceWithDrink() {
    return this.totalDonutsPrice + this._drinkPrice;
  }

  showOrder() {
    console.log(`ドーナツと${this._drinkName}とのセットで合計${this.priceWithDrink}円`);
  }
}

const order1 = new Donuts("オールドファッション", 120, 3);
order1.showOrder()