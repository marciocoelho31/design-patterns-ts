import { DiscountStrategy } from '../discount-strategy/discount-strategy';
import { ECommerceProductInterface } from './ecommerce-product-interface';

export class ECommerceShoppingCart {
  private products: ECommerceProductInterface[] = [];
  private _discountStrategy: DiscountStrategy = new DiscountStrategy();

  addProduct(...products: ECommerceProductInterface[]): void {
    products.forEach((product) => this.products.push(product));
  }

  getProducts(): ECommerceProductInterface[] {
    return this.products;
  }

  removeProduct(product: ECommerceProductInterface) {
    this.products = this.products.filter((p) => p.name !== product.name);
  }

  getTotalPrice(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }

  getTotalPriceWithDiscount(): number {
    return this._discountStrategy.getDiscount(this);
  }

  set discount(discount: DiscountStrategy) {
    this._discountStrategy = discount;
  }
}
