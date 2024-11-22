const objects = "Objects in JavaScript";
console.log(objects);

const person = {
  name: "John Doe",
  age: 30,
  isMarried: true,
  skills: ["HTML", "CSS", "JavaScript"],
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: 10001,
  },
};

// Accessing Object Properties
console.log(person.name); // "John Doe"
console.log(person.age); // 30
console.log(person.isMarried); // true
console.log(person.skills); // ["HTML", "CSS", "JavaScript"]
console.log(person.address); // {street: "123 Main St", city: "New York", state: "NY", zipCode: 10001}
console.log(person.address.street); // "123 Main St"
console.log(person.address.city); // "New York"
console.log(person.address.state); // "NY"
console.log(person.address.zipCode); // 10001

// Modifying Object Properties
person.name = "Jane Doe";
person.age = 25;
person.isMarried = false;
person.skills.push("Python");
person.address.street = "456 Elm St";
person.address.city = "Los Angeles";
person.address.state = "CA";
person.address.zipCode = 90001;

// Adding New Object Properties
person.country = "USA";
person.hobbies = ["reading", "hiking", "cooking"];

// Removing Object Properties
delete person.country;

// Nested Objects
const user = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: 10001,
  },
};

// Accessing Nested Object Properties
console.log(user.name); // "John Doe"
console.log(user.age); // 30
console.log(user.address); // {street: "123 Main St", city: "New York", state: "NY", zipCode: 10001}
console.log(user.address.street); // "123 Main St"
console.log(user.address.city); // "New York"
console.log(user.address.state); // "NY"
console.log(user.address.zipCode); // 10001

// Modifying Nested Object Properties
user.address.street = "456 Elm St";
user.address.city = "Los Angeles";
user.address.state = "CA";
user.address.zipCode = 90001;

// Adding New Nested Object Properties
user.country = "USA";
user.hobbies = ["reading", "hiking", "cooking"];

// Removing Nested Object Properties
delete user.country;

// Destructuring Objects
const { name, age } = user;
console.log(name); // "John Doe"
console.log(age); // 30
