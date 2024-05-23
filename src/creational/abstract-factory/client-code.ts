import { EnterpriseCreateCustomerVehicleFactory } from './factories/enterprise-customer-vehicle-factory';
import { IndividualCreateCustomerVehicleFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseCreateCustomerVehicleFactory();
const individualFactory = new IndividualCreateCustomerVehicleFactory();

const car1 = enterpriseFactory.createVehicle('Fusca', 'Joao');
const car2 = individualFactory.createVehicle('Vectra', 'Maria');

car1.pickUp();
car2.pickUp();
