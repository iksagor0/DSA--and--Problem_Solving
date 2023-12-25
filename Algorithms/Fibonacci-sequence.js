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
