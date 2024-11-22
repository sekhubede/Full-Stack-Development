const functions = "Functions in JavaScript";
console.log(functions);

// A function is a block of code that performs a specific task
// A function is a block of code that can be reused
// A function is a block of code that can be parameterized
// A function is a block of code that can be returned
// A function is a block of code that can be nested

// Function declaration
function squre(number) {
  return number * number;
}

// Function expression
const squre2 = function (number) {
  return number * number;
};

// Arrow function
const squre3 = (number) => number * number;
const squre4 = (number) => {
  return number * number;
};

// Function Call/Invokation/Execution
console.log(squre(2));
console.log(squre(3));
console.log(squre(4));
console.log(squre(5));

// Function Call/Invokation/Execution
console.log(squre2(2));
console.log(squre2(3));
console.log(squre2(4));
console.log(squre2(5));

// Function Call/Invokation/Execution
console.log(squre3(2));
console.log(squre3(3));
console.log(squre3(4));
console.log(squre3(5));

// Function Call/Invokation/Execution
console.log(squre4(2));
console.log(squre4(3));
console.log(squre4(4));
console.log(squre4(5));
