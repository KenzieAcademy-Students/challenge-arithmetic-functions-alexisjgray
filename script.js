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
