const strings = "Strings in JavaScript";
console.log(strings);

let fullname = "John Doe";
let age = 30;
let message = `My fullname is ${fullname} and I am ${age} years old.`;
console.log(message);

// Accessing String Characters
console.log(fullname[0]); // "J"
console.log(fullname[1]); // "o"
console.log(fullname[2]); // "n"
console.log(fullname[3]); // " "
console.log(fullname[4]); // "D"

// Adding New String Characters
fullname += " Smith";
console.log(fullname);

// Removing String Characters
fullname = fullname.slice(0, -5);
console.log(fullname);

// Destructuring Strings
const [firstfullname, lastfullname] = fullname.split(" ");
console.log(firstfullname); // "John"
console.log(lastfullname); // "Smith"

// String Methods
console.log(fullname.toUpperCase()); // "JOHN DOE"
console.log(fullname.toLowerCase()); // "john doe"
console.log(fullname.includes("ohn")); // true
console.log(fullname.startsWith("Jo")); // true
console.log(fullname.endsWith("e")); // true
