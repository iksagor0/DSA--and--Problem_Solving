function factorial(n) {
  if (isNaN(n) || n < 1) return "Please enter a valid number!";

  const num = parseInt(n);
  let result = 1;

  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log("Normal: ", factorial(5)); // 120

function recursiveFactorial(n) {
  if (n < 2) return 1;
  console.log(n);
  return n * recursiveFactorial(n - 1);
}

console.log("recursiveFactorial", recursiveFactorial(5));
