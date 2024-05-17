import { MyDatabaseFunction } from './db/my-database-function';
// import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Roberto', age: 49 });
myDatabaseClassic.add({ name: 'Luciana', age: 35 });
myDatabaseClassic.add({ name: 'Fabio', age: 19 });
myDatabaseClassic.show();
