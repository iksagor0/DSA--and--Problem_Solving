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
