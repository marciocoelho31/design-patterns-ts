import { Customer } from '../customer/customer';
import { Vehicle } from './vehicle';

export class IndividualCar implements Vehicle {
  constructor(
    public name: string,
    private readonly customer: Customer,
  ) {}
  pickUp(): void {
    console.log(
      `O individual car ${this.name} está buscando ${this.customer.name}`,
    );
  }
}
