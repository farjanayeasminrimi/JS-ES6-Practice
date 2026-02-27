function add(num1, num2 = 0) {
  const adding = num1 + num2;
  return adding;
}
console.log(add(4));

// Arrow function

const subtr = (num1, num2) => {
  return num1 - num2;
};
console.log(subtr(100, 30));

const multiply = (x) => x * x;
console.log(multiply(4));

const stringAdd = () => "hello" + " world";
console.log(stringAdd());

// spread, array max, copy array

// spread (...)
const numbersMax = Math.max(3, 5, 6, 6, 3, 8, 12);
const numbers = [3, 5, 6, 6, 3, 8, 12];

console.log(numbersMax);
console.log(Math.max(...numbers));

// copy
