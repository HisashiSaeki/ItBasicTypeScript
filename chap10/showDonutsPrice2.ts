export{}

interface Donuts {
  name: string;
  price: number;
  quantity: number;
}

function showOrder(donuts: Donuts) {
  console.log(`${donuts.name}が${donuts.quantity}個で合計${donuts.price * donuts.quantity}円`);
}

const myDonuts: Donuts =
{
  name: "チョコファッション",
  price: 140,
  quantity: 2,
}

showOrder(myDonuts);
