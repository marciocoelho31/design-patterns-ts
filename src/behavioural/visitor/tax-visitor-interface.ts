import { AlcoholicDrink } from './alcoholic-drink';
import { Cigarette } from './cigarette';
import { Food } from './food';

export interface TaxVisitorInterface {
  calculateTaxesForFood(food: Food): number;
  calculateTaxesForCigarette(cigarette: Cigarette): number;
  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number;
}
