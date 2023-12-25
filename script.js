const sortedNum = [1, 2, 3, 5, 8, 10, 17, 21, 25, 28, 32];

function binaryRecursiveSearch(target) {
  return recursiveSearch(target);
}

function recursiveSearch(target, start = 0, end = sortedNum.length - 1) {
  const mid = Math.floor((start + end) / 2);
  if (start > end) return -1;

  if (target === sortedNum[mid]) return mid;
  else if (target < sortedNum[mid]) {
    return recursiveSearch(target, 0, mid - 1);
  } else {
    return recursiveSearch(target, mid + 1, end);
  }
}

console.log(binaryRecursiveSearch(3)); // 2
console.log(binaryRecursiveSearch(32)); // 10
console.log(binaryRecursiveSearch(10)); // 5
console.log(binaryRecursiveSearch(1)); // 0
console.log(binaryRecursiveSearch(24)); // -1
