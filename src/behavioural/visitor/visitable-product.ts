import { TaxVisitorInterface } from './tax-visitor-interface';

export abstract class VisitableProduct {
  constructor(
    protected name: string,
    protected price: number,
  ) {}

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  abstract getPriceWithTaxes(v: TaxVisitorInterface): number;
}
