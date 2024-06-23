import { AlcoholicDrink } from './alcoholic-drink';
import { BrazilTaxVisitor } from './brazil-tax-visitor';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { UsTaxVisitor } from './us-tax-visitor';

const food = new Food(10);
const cigarette = new Cigarette(5);
const beer = new AlcoholicDrink(3);

const brazilTaxVisitor = new BrazilTaxVisitor();
const usTaxVisitor = new UsTaxVisitor();

const cart = [food, cigarette, beer];
const total = cart.reduce((sum, item) => sum + item.getPrice(), 0);
const totalWithTaxesBr = cart.reduce(
  (sum, item) => sum + item.getPriceWithTaxes(brazilTaxVisitor),
  0,
);

const totalWithTaxesUs = cart.reduce(
  (sum, item) => sum + item.getPriceWithTaxes(usTaxVisitor),
  0,
);

console.log('Total:', total);
console.log('Total com impostos BR:', totalWithTaxesBr);
console.log('Total com impostos US:', totalWithTaxesUs);
