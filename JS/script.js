function add(num1, num2 = 0) {
  const adding = num1 + num2;
  return adding;
}
// console.log(add(4));

// Arrow function

const subtr = (num1, num2) => {
  return num1 - num2;
};
// console.log(subtr(100, 30));

const multiply = (x) => x * x;
// console.log(multiply(4));

const stringAdd = () => "hello" + " world";
// console.log(stringAdd());

// spread, array max, copy array

// spread (...)
const numbersMax = Math.max(3, 5, 6, 6, 3, 8, 12);
const numbers = [3, 5, 6, 6, 3, 8, 12];

// console.log(numbersMax);
// console.log(Math.max(...numbers));

// copy
const nums1 = [1, 2, 3, 4, 9];
const nums2 = [...nums1];

nums2.push(100);
// console.log(nums1);
// console.log(nums2);

// Destructuring
const values = [2, 5, 9];
const [a, , b] = values;
// console.log(a);
// console.log(b);

const card = {
  name: "Shoes",
  price: 13000,
  size: {
    large: 43,
    medium: 36,
    small: 32,
  },
};

const {
  name: cardName,
  price,
  size: { large },
} = card;
// console.log(cardName);
// console.log(price);
// console.log(large);
// console.log(card.size?.large);

// keys, values, entries, delete, seal, freeze
const person = {
  name: "Rimi",
  age: 20,
  height: "4'9",
  skin: "Dark",
};
Object.seal(person);
Object.freeze(person);
person.hobby = "Watching movies";
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

person.skin = "fair";
delete person.skin;
// console.log(person);

// rest operator (To hide password in UI, we use rest operator)
const { skin, ...rest } = person;
// console.log(rest);

const evenNum = (first, ...restEven) => {
  // console.log(first); // first card would be in featured list
  // console.log(restEven);
};
evenNum(2, 24, 4, 6, 6, 88);

const evenNum2 = (...restEven) => {
  // console.log(restEven);
};
evenNum2(2, 24, 4, 6, 6, 88);

// forEach , find , filter, map, reduce
const namesArr = ["Rimi", "Yeasmin", "Farjana"];

namesArr.forEach((element) => {
  // console.log(element);
});

const numberArr = [2, 4, 6, 7];
numberArr.forEach((element) => {
  // console.log(element * element);
});

// map
const prices = [22, 44, 66];
const vatPlus = prices.map((p) => p + p * 0.15);
// console.log(vatPlus);

const findValue = prices.find((n) => n >= 22); //only gives the first value which match the condition
const filterValue = prices.filter((n) => n >= 22); //return the array of matching element of the condition
// console.log(findValue);
// console.log(filterValue);

// reduce method

const costs = [12, 44, 52, 65, 23, 56];
let totalCost = 0;
const sum = costs.reduce((acc, num) => {
  return acc + num;
}, 0);

// console.log(sum);

// Closure

function outerFun() {
  let defaultSum = 0;

  function innerFun() {
    defaultSum++;
    console.log(defaultSum);
  }
  // return innerFun;
  return innerFun;
}
//
// const outPut = outerFun();
// outPut();
// outPut();
// outPut();

// pass by value and pass by reference

const doMultiply = (a, b) => {
  const result = a * b;
  return result;
};
const x = 8;
const y = 2;
// console.log(doMultiply(2, 4));
// console.log(doMultiply(x, y));
// console.log(x, y);

const arrNum = (arr) => {
  arr.push("Mango");
};

let fruits = ["Apple", "Orange"];
// console.log(fruits);
// arrNum(fruits);
// console.log(fruits);

// Increment

let firstN = 2;
let lastN = firstN++;

let altFirst = 5;
let altSec = ++altFirst;

// console.log(firstN, lastN);
// console.log(altFirst, altSec);
