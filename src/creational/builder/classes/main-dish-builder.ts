import { MealBuilderInterface } from '../interfaces/meal-builder-interface';
import { MealBox } from './meal-box';
import { Rice, Beans, Meat, Beverage, Dessert } from './meals';

export class MainDishBuilder implements MealBuilderInterface {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 10);
    const beans = new Beans('Feijao', 12);
    const meat = new Meat('Bife', 20);
    this._meal.add(rice, beans, meat);
    return this;
  }
  makeBeverage(): this {
    const beverage = new Beverage('Bebida', 7);
    this._meal.add(beverage);
    return this;
  }
  makeDessert(): this {
    const dessert = new Dessert('Sobremesa', 11);
    this._meal.add(dessert);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
