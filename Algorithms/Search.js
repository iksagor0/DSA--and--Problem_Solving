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

/********************************************************
 *                   BINARY SEARCH
 ********************************************************/
const numbers = [1, 2, 3, 5, 8, 10, 17, 21, 25, 28, 32];

function binarySearch(arr, num) {
  if (isNaN(num) || !Array.isArray(arr)) return "Please input valid data!";

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log("mid: ", mid);

    if (arr[mid] === num) return mid;
    else if (num < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

console.log(binarySearch(numbers, 32)); // 10
// console.log(binarySearch(numbers, 2)); // 1
// console.log(binarySearch(numbers, 10)); // 5

// Big O = O(logn)
