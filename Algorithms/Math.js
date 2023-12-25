/********************************************************
 *                 FIBONACCI SEQUENCE
 ********************************************************/

function fibonacci(num) {
  const result = [];

  // functionality
  for (let i = 0; i < num; i++) {
    const arrLength = result.length;

    if (arrLength < 2) {
      result.push(i);
    } else {
      const sumOfLastTwoNumbers = result[arrLength - 2] + result[arrLength - 1];
      result.push(sumOfLastTwoNumbers);
    }
  }

  return result;
}

console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8];

// ******** BEST THINK FOR FIBONACCI SEQUENCE ********

function fibonacci(num) {
  const result = [0, 1];

  // functionality
  for (let i = 2; i < num; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result;
}

console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13];

/********************************************************
 *                FACTORIAL OF A NUMBER
 ********************************************************/
function factorial(n) {
  if (isNaN(n) || n < 1) return "Please enter a valid number!";

  const num = parseInt(n);
  let result = 1;

  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(3)); // 3*2*1 = 6
console.log(factorial(5)); // 120

// ******************* recursive *******************
function recursiveFactorial(n) {
  if (n < 2) return 1;
  console.log(n);
  return n * recursiveFactorial(n - 1);
}

console.log("recursiveFactorial", recursiveFactorial(5)); // 120

/********************************************************
 *                PRIME NUMBER
 ********************************************************/
function isPrimeNum(n) {
  if (isNaN(n) || n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log(isPrimeNum(10)); // false
console.log(isPrimeNum(5)); // true

/********************************************************
 *                POWER OF THREE
 ********************************************************/
// Big O = O(logn)
function isPowerOfThree(n) {
  if (isNaN(n) || n < 1) return false;

  while (n > 1) {
    if (n % 3 !== 0) return false;
    n = n / 3;
  }

  return true;
}

console.log(isPowerOfThree(30)); // false
console.log(isPowerOfThree(27)); // true
