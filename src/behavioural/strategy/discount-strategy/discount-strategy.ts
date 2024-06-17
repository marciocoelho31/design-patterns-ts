import { ECommerceShoppingCart } from '../shopping-cart/ecommerce-shopping-cart';

export class DiscountStrategy {
  protected discount = 0;

  getDiscount(cart: ECommerceShoppingCart): number {
    return cart.getTotalPrice();
  }
}
