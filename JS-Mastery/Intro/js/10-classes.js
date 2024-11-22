const classes = "Classes in JavaScript";
console.log(classes);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person = new Person("John Doe", 30);
person.greet();

const person2 = { ...person, fullname: "Joe Smith" };

// Inheritance
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  study() {
    console.log(`${this.name} is studying in grade ${this.grade}.`);
  }
}

// Instantiating a subclass
const student = new Student("Jane Doe", 25, "A");
student.greet(); // "Hello, my name is Jane Doe and I am 25 years old."
student.study(); // "Jane Doe is studying in grade A."

// Polymorphism
const people = [person, student];
people.forEach((person) => {
  person.greet();
});

// Encapsulation
class BankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds.");
    }
  }
}

// Instantiating a class
const account = new BankAccount("John Doe", 1000);
account.deposit(500);
account.withdraw(2000);

// Abstraction
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  start() {
    console.log("Starting the car.");
  }
  stop() {
    console.log("Stopping the car.");
  }
}
