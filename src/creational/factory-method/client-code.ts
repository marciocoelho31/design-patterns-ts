//import { Car } from './vehicle/car';
// const fusca = new Car('Fusca');
// fusca.pickUp('Joao');
// fusca.stop();

// import { CarFactory } from './factories/car-factory';
// const carFactory = new CarFactory();
// const fusca = carFactory.getVehicle('Fusca');
// fusca.pickUp('Joao');
// fusca.stop();

import { CarFactory } from './factories/car-factory';
import { randomCarAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';

const carFactory = new CarFactory();
const customerNames = ['Ana', 'Joana', 'Helena', 'Marcio'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];
  // pickUp do 'produto' da fábrica:
  vehicle.pickUp(name);
  vehicle.stop();

  // pickUp do Factory:
  const newCar = carFactory.pickUp(
    name,
    `CARRO ESPECIAL ${randomNumbers(100)}`,
  );
  newCar.stop();

  console.log('---');
}
