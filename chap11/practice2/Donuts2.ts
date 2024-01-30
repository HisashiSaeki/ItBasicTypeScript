export interface Donuts {
  name: string;
  price: number;
  quantity: number;
}

export function showOrder(donuts: Donuts) {
  console.log(`${donuts.name}が${donuts.quantity}個で合計${donuts.price * donuts.quantity}円`);
}
