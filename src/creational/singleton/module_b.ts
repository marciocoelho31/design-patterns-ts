import { MyDatabaseModule } from './db/my-database-module';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: 'Roberto', age: 49 });
myDatabaseClassic.add({ name: 'Luciana', age: 35 });
myDatabaseClassic.add({ name: 'Fabio', age: 19 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
