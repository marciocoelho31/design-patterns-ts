import { TaxVisitorInterface } from './tax-visitor-interface';
import { VisitableProduct } from './visitable-product';

export class Food extends VisitableProduct {
  constructor(protected price: number) {
    super('Food', price);
  }

  getPriceWithTaxes(visitor: TaxVisitorInterface): number {
    return visitor.calculateTaxesForFood(this);
  }
}
