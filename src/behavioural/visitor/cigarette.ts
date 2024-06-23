import { TaxVisitorInterface } from './tax-visitor-interface';
import { VisitableProduct } from './visitable-product';

export class Cigarette extends VisitableProduct {
  constructor(protected price: number) {
    super('Cigarette', price);
  }

  getPriceWithTaxes(visitor: TaxVisitorInterface): number {
    return visitor.calculateTaxesForCigarette(this);
  }
}
