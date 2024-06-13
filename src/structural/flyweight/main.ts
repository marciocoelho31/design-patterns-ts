import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Marcio', '123', 'Rua 1', 'Cidade 1');
deliveryContext(factory, 'Joao', '123', 'Rua 1', 'Cidade 1');
deliveryContext(factory, 'Maria', '200', 'Rua 1', 'Cidade 1');
deliveryContext(factory, 'Jose', '200', 'Rua 2', 'Cidade 1');
deliveryContext(factory, 'Paulo', '200', 'Rua 2', 'Cidade 1');
deliveryContext(factory, 'Paula', '200', 'Rua 2', 'Cidade 1');

console.log('---');
console.log(factory.getLocations());
