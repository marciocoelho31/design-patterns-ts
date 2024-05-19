import { MealBuilderInterface } from '../interfaces/meal-builder-interface';
import { MealBox } from './meal-box';
import { Rice, Beans, Mushrooms } from './meals';

export class VeganDishBuilder implements MealBuilderInterface {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 10);
    const beans = new Beans('Feijao', 12);
    const mushrooms = new Mushrooms('Cogumelos', 18);
    this._meal.add(rice, beans, mushrooms);
    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
