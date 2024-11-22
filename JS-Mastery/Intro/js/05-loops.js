const loops = "Loops in JavaScript";
console.log(loops);

for (let i = 10; i > 0; i--) {
  console.log(i);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((number) => {
  console.log(number);
});

let i = 0;

while (i <= 10) {
  console.log(i);
  i += 2;
}
