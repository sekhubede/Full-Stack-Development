const datatypes = "Datatypes in JavaScript";
console.log(datatypes);

// There are 7 datatypes in JavaScript

// Premitive Datatypes
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol (exremely, rarely used)

// Complex Datatypes
// 7. Object (most important and forms the building blocks of modern JavaScript)

const strings = "Strings in JavaScript";
const numbers = 100;
const booleans = true;
const nulls = null;
const undefineds = undefined;
const symbols = Symbol();
const objects = {
  name: "John Doe",
  age: 30,
  isMarried: true,
  skills: ["HTML", "CSS", "JavaScript"],
  address: {
    street: "123 Main St",
  },
};

// using template literals
console.log(`hello ${objects.name}`);

console.log(strings);
console.log(numbers);
console.log(booleans);
console.log(nulls);
console.log(undefineds);
console.log(symbols);
console.log(objects);
