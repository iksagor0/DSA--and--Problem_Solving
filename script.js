function fibonacciNoAlg(num) {
  const result = [0, 1];

  // functionality
  for (let i = 2; i < num; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result;
}

console.log(fibonacciNoAlg(7)); // [0, 1, 1, 2, 3, 5, 8, 13];
