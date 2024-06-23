import { TaxVisitorInterface } from './tax-visitor-interface';
import { VisitableProduct } from './visitable-product';

export class AlcoholicDrink extends VisitableProduct {
  constructor(protected price: number) {
    super('Alcoholic Drink', price);
  }

  getPriceWithTaxes(visitor: TaxVisitorInterface): number {
    return visitor.calculateTaxesForAlcoholicDrink(this);
  }
}
