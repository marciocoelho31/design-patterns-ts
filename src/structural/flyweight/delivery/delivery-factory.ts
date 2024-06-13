import { DeliveryFlyweightInterface } from './delivery-flyweight-interface';
import { DeliveryLocation } from './delivery-location';
import {
  DeliveryLocationData,
  DeliveryLocationDictionary,
} from './delivery-types';

export class DeliveryFactory {
  private locations: DeliveryLocationDictionary = {};

  private createId(data: DeliveryLocationData): string {
    return Object.values(data)
      .map((item) => item.replace(/\s+/, '').toLocaleLowerCase())
      .join('_');
  }

  makeLocation(
    intrinsecState: DeliveryLocationData,
  ): DeliveryFlyweightInterface {
    const key = this.createId(intrinsecState);
    if (key in this.locations) {
      return this.locations[key];
    }
    this.locations[key] = new DeliveryLocation(intrinsecState);
    return this.locations[key];
  }

  getLocations(): DeliveryLocationDictionary {
    return this.locations;
  }
}
