/**
 * OBJECT CONSTRUCTOR
 * OBJECT ITERATOR
 * MEMORIZATION
 * Uniques Values by 1 loop without any method
 * call, apply, bind
 */

/********************************************************
 *                   OBJECT CONSTRUCTOR
 ********************************************************/

//  example of object constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.about = `${this.name} is ${this.age} years old.`;
}

const rahim = new Person("Rahim", 55);
console.log("🚀 ~ rahim:", rahim);

//  example with normal function
function MakePerson(name, age) {
  return {
    name,
    age,
    about: `${this.name} is ${age} years old.`,
  };
}

const karim = MakePerson("Karim", 25);
console.log("🚀 ~ karim:", karim);

// why I use object constructor instead of normal function?

/********************************************************
 *                   OBJECT ITERATOR
 ********************************************************/
const numbers = [10, 20, 30, 40, 50];
// console.log(numbers[Symbol.iterator]().next());

const myObj = {
  name: "Sagor",
};

myObj[Symbol.iterator] = function () {
  let n = 0;
  let finish = false;

  console.log("this", this);
  return {
    next: () => {
      n += 10;
      if (n > 50) finish = true;
      return { value: n, done: finish };
    },
  };
};

for (const i of myObj) {
  console.log(i);
}

/********************************************************
 *                   Uniques Values
 ********************************************************/
const mixedValues = [
  10,
  20,
  30,
  40,
  50,
  20,
  25,
  30,
  "a",
  "a",
  0,
  0,
  "10",
  false,
  false,
  true,
  true,
];

function getUniques(arr) {
  const numObj = {};
  const numArr = [];

  for (const i of arr) {
    const type = typeof i; // get type

    if (numObj[i + type]) continue; // skip if already present

    // add if new unique value
    numObj[i + type] = String(i);
    numArr.push(i);
  }

  return numArr;
}

console.log("getUniques", getUniques(mixedValues)); // [10, 20, 30, 40, 50, 25, 'a', 0, '10', false, true]

/********************************************************
 *                   MEMORIZATION
 ********************************************************/

function memorize() {
  const memory = {};

  return (x, y, z) => {
    const property = `${x}${y}${z}`;
    if (memory[property]) return memory[property];

    console.log("new calculated");
    memory[property] = x * y * z;
    return memory[property];
  };
}

const calculate = memorize();

console.log(calculate(20, 31, 2));
console.log(calculate(20, 31, 2)); // from memory
console.log(calculate(20, 34, 2));
console.log(calculate(1, 1, 1));
console.log(calculate(20, 34, 2)); // from memory

console.dir(calculate);

/********************************************************
 *                   This
 ********************************************************/
const myObj = {
  name: "IKS",
  thisFunc: function (x) {
    console.log(this);
    console.log(x);
  },
};

const secondObj = {
  name: "second",
};

myObj.thisFunc.call(secondObj, x); // call
myObj.thisFunc.apply(secondObj, [x]); // apply - sends parameter by array
const bindResult = myObj.thisFunc.bind(secondObj, x); // bind - sends parameter by array

/********************************************************
 *                   Tagged Template Literals
 ********************************************************/
function TaggedTemplateLiterals(string, frontend, backend) {
  console.log("string:", string);
  console.log("frontend:", frontend);
  console.log("backend:", frontend);
  console.log(arguments);
}

TaggedTemplateLiterals`I know ${"React.js"} and ${"Node.js"} by javascript`;
