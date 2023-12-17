const obj = {
  v1: 1,
  v2: 2,
  v3: 3,
};

function* generator(obj) {
  // yield 1;
  // yield 2;
  // yield 3;
  const entries = Object.entries(obj);

  for (const iterator of entries) {
    yield iterator[1];
  }
}

const iterator = generator(obj);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
