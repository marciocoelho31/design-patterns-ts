import { MyDataStructure } from './my-data-structure';
import { MyReverseIterator } from './my-reverse-iterator';

const dataStructure = new MyDataStructure();
dataStructure.addItem('a', 'b', 'c', 'd', 'e', 'f', 'g');
console.log(dataStructure);

const [a, b] = dataStructure;
console.log('ROUBADOS:', a, b);
console.log('Executei varias coisas e depois usei o iterator');
const [c, ...rest] = dataStructure;
console.log(c, rest);
console.log();
console.log();
console.log();
console.log();

dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}
// console.log('Nao tem mais dados!');
// for (const data of dataStructure) {
//   console.log(data);
// }
console.log();
console.log();

dataStructure.changeIterator(new MyReverseIterator(dataStructure));
for (const data of dataStructure) {
  console.log(data);
}
console.log();
console.log();

console.log('Aqui preciso resetar o iterator:');
dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}
console.log();
console.log();
