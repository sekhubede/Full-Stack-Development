const arrays = "Arrays in JavaScript";
console.log(arrays);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

// Accessing Array Elements
console.log(numbers[0]); // 1
console.log(numbers[1]); // 2
console.log(numbers[2]); // 3
console.log(numbers[3]); // 4
console.log(numbers[4]); // 5

// Modifying Array Elements
numbers[0] = 11;
numbers[1] = 12;
numbers[2] = 13;
numbers[3] = 14;
numbers[4] = 15;
console.log(numbers);

// Adding New Array Elements
const names = ["John", "Jane", "Bob", "Alice", "Mike"];
const names2 = [...names, "Jack", "Jill"];
console.log(names2);
numbers.push(16);
numbers.push(17);
numbers.push(18);
numbers.push(19);
numbers.push(20);
console.log(numbers);

// Removing Array Elements
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
console.log(numbers);

// Destructuring Arrays
const [a, b, c, d, e] = numbers;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
console.log(e); // 5
