/********************************************************
 *           NORMAL THINK FOR FIBONACCI SEQUENCE
 ********************************************************/

function fibonacciNoAlg(num) {
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

console.log(fibonacciNoAlg(7));

/********************************************************
 *           BEST THINK FOR FIBONACCI SEQUENCE
 ********************************************************/

function fibonacciNoAlg(num) {
  const result = [0, 1];

  // functionality
  for (let i = 2; i < num; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result;
}

console.log(fibonacciNoAlg(8));
