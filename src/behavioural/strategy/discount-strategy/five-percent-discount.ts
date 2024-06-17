import { DiscountStrategy } from './discount-strategy';
import { ECommerceShoppingCart } from '../shopping-cart/ecommerce-shopping-cart';

export class FivePercentDiscount extends DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    const total = cart.getTotalPrice();

    if (total >= 150) {
      this.discount = 5;
    }

    return total - (total * this.discount) / 100;
  }
}
