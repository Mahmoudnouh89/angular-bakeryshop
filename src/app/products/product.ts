export class Product {

  constructor(name: string, price: number, quantity: number, store: string) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.store = store;
  }

  name: string;
  price: number;
  quantity: number;
  store: string;
}
