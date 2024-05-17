import { MyDatabaseModule } from './db/my-database-module';

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: 'Marcio', age: 49 });
myDatabaseClassic.add({ name: 'Joao', age: 35 });
myDatabaseClassic.add({ name: 'Maria', age: 19 });

export { myDatabaseClassic };
