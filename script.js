const add = (num1, num2) => {
  if (typeof num1 !== "number" && typeof num2 !== "number") {
    return null;
  } else if (Math.sign(num1 || num2) === -1) {
    return null;
  }
  return num1 + num2;
};
console.assert(
  add(3, 4) === 7,
  "add should return 7 when given the numbers 3 and 4"
);
console.assert(
  add(-3, -4),
  "add should return null when given two negative number"
);
console.assert(
  add(-2, 6),
  "add should return null when given one negative number"
);
console.assert(
  add("hello", "there"),
  "add should return null when given two strings of words"
);
console.assert(add(), "add should return null when given nothing");

const multiply = (num1, num2) => {
  if (typeof num1 !== "number" && typeof num2 !== "number") {
    return null;
  } else if (Math.sign(num1) === -1 || Math.sign(num2) === -1) {
    return null;
  } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return null;
  } else if (num2 === 0 || num1 === 0) {
    return 0;
  }
  return add(num1, multiply(num1, num2 - 1));
};
console.assert(
  multiply(2, 5) === 10,
  "multiply should return 10 when given the numbers 2 and 5"
);
console.assert(multiply(0, 3), "multiply should return 0 when given 0 and 3");
console.assert(
  multiply(3.5, 0.5),
  "multiply should return null when given two numbers with decimal places"
);
console.assert(
  multiply(-4, 3),
  "multiply should return null when given a negative number"
);
console.assert(multiply(), "multiply should return null when given nothing");
console.assert(
  multiply("Hello"),
  "multiply should return null when given a string with Hello"
);

const power = (x, n) => {
  if (typeof x !== "number" && typeof n !== "number") {
    return null;
  } else if (Math.sign(x) === -1 || Math.sign(n) === -1) {
    return null;
  } else if (!Number.isInteger(x) || !Number.isInteger(n)) {
    return null;
  } else if (x === 0 || n === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 0; i < n; i = add(i, 1)) {
    result = multiply(result, x);
  }
  return result;
};
console.assert(
  power(2, 8) === 256,
  "power should return 256 when given the numbers 2 and 8"
);
console.assert(
  power(-3, -4),
  "power should return null when given negative numbers 3 and 4"
);
console.assert(
  power("Hello"),
  "power should return null when given a string with the word Hello"
);
console.assert(
  power(0, 1),
  "power should return 1 when given the numbers 0 and 1"
);
console.assert(power(), "power should return null when given nothing");
console.assert(
  power(3.5, 0.4),
  "power should return null when given numbers with decimals"
);

// The factorial function (symbol: !) says to multiply all whole numbers from our chosen number down to 1.

// Examples:

// 4! = 4 × 3 × 2 × 1 = 24
// 7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040
// 1! = 1
const factorial = (n) => {
  if (typeof n !== "number" || Math.sign(n) === -1 || !Number.isInteger(n)) {
    return null;
  }
  // I need to loop through the number from n to 1 multiplying each number
  // write a function to subtract to use in loop
  const subtract = (x, y) => {
    if (y === 0) {
      return x;
    }
    return subtract(x ^ y, (~x & y) << 1);
  };
  let result = 1;
  for (let i = n; i > 1; i = subtract(i, 1)) {
    result = multiply(result, i);
  }
  return result;
};
console.assert(
  factorial(7) === 5040,
  "factorial should return 5040 when given the number 7"
);
console.assert(factorial(), "factorial should return null when given nothing");
console.assert(
  factorial(3.5, 0.4),
  "factorial should return null when given numbers with decimals"
);
console.assert(
  factorial(-3, -4),
  "factorial should return null when given negative numbers 3 and 4"
);
console.assert(
  factorial("Hello"),
  "factorial should return null when given a string with the word Hello"
);

// The first number of the pattern is 0, the second number is 1, and each number after that is equal to adding the two
// numbers right before it together. For example 0+1=1 and 3+5=8. This sequence goes on forever.

// F0	  F1	F2	F3	F4	F5	F6	F7	F8	F9	F10	F11	F12	F13	F14	F15	F16	F17	  F18	  F19	  F20
// 0	  1	  1	  2	  3	  5	  8	  13	21	34	55	89	144	233	377	610	987	1597	2584	4181	6765

// The Fibonacci Sequence is the series of numbers:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

// The next number is found by adding up the two numbers before it:

// the 2 is found by adding the two numbers before it (1+1),
// the 3 is found by adding the two numbers before it (1+2),
// the 5 is (2+3),
// and so on!

const fibonacci = (n) => {
  if (typeof n !== "number" || Math.sign(n) === -1 || !Number.isInteger(n)) {
    return null;
  }
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  let n1 = 0,
    n2 = 1,
    nextTerm;
  for (let i = 2; i <= n; i = add(i, 1)) {
    nextTerm = add(n1, n2);
    n1 = n2;
    n2 = nextTerm;
  }
  return n2;
};
console.assert(
  fibonacci(8) === 21,
  "fibonacci should return 21 when given the number 8"
);
console.assert(factorial(), "factorial should return null when given nothing");
console.assert(
  fibonacci(3.5, 0.4),
  "fibonacci should return null when given numbers with decimals"
);
console.assert(
  fibonacci(-3, -4),
  "fibonacci should return null when given negative numbers 3 and 4"
);
console.assert(
  fibonacci(0) === 0,
  "fibonacci should return 0 when given the number 0"
);
console.assert(
  fibonacci("Hello"),
  "fibonacci should return null when given a string with the word Hello"
);
