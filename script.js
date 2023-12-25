/********************************************************
 *                POWER OF THREE
 ********************************************************/
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
