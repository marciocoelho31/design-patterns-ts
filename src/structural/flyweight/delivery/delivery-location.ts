import { DeliveryLocationData } from './delivery-types';
import { DeliveryFlyweightInterface } from './delivery-flyweight-interface';

export class DeliveryLocation implements DeliveryFlyweightInterface {
  constructor(private readonly intrinsecState: DeliveryLocationData) {}
  deliver(name: string, number: string): void {
    console.log(`Entrega para ${name}`);
    console.log(
      `Em ${this.intrinsecState.street}, ${this.intrinsecState.city}`,
    );
    console.log(`Número: ${number}`);
    console.log('###');
  }
}
