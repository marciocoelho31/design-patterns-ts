function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Marcio',
  lastName: 'Socorro',
  age: 49,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);

const person1 = new Person('Marcos', 'Silva', 31);
console.log(person1.fullName());
