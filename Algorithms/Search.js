/********************************************************
 *                   LINEAR SEARCH
 ********************************************************/
const values = [5, 3, 8, 3, 10, 2, 1, 17, 21, 25, 28, 32];

function linearSearch(num) {
  if (isNaN(num)) return "Please input valid number!";
  const lengthOfValues = values.length;

  for (let i = 0; i < lengthOfValues; i++) {
    const isMatchWithNum = values[i] === num;

    if (isMatchWithNum) return i;
  }

  return -1;
}

console.log(linearSearch(32)); // 11
console.log(linearSearch(10)); // 4

// Big O = O(n)
