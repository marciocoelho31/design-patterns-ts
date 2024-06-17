//import { DefaultDiscount } from './shopping-cart/default-discount';
import { ECommerceShoppingCart } from './shopping-cart/ecommerce-shopping-cart';
import { FivePercentDiscount } from './discount-strategy/five-percent-discount';

const shoppingCart = new ECommerceShoppingCart();

//shoppingCart.discount = new DefaultDiscount();
shoppingCart.discount = new FivePercentDiscount();

shoppingCart.addProduct({ name: 'Produto 1', price: 50 });
shoppingCart.addProduct({ name: 'Produto 2', price: 50 });
shoppingCart.addProduct({ name: 'Produto 1', price: 50 });
shoppingCart.addProduct({ name: 'Produto 2', price: 50 });
shoppingCart.addProduct({ name: 'Produto 1', price: 50 });
shoppingCart.addProduct({ name: 'Produto 2', price: 50 });

console.log(shoppingCart.getTotalPrice());
console.log(shoppingCart.getTotalPriceWithDiscount());
