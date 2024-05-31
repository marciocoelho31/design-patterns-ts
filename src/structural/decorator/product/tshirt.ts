import { ProductInterface } from './product-interface';

export class Tshirt implements ProductInterface {
  private name = 'Camiseta';
  private price = 49.9;

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}
