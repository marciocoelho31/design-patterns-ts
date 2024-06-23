import { AlcoholicDrink } from './alcoholic-drink';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { TaxVisitorInterface } from './tax-visitor-interface';

export class BrazilTaxVisitor implements TaxVisitorInterface {
  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.getPrice() + alcoholicDrink.getPrice() * 0.5;
  }
  calculateTaxesForCigarette(cigarette: Cigarette): number {
    return cigarette.getPrice() + cigarette.getPrice() * 1.5;
  }
  calculateTaxesForFood(food: Food): number {
    return food.getPrice() + food.getPrice() * 0.05;
  }
}
