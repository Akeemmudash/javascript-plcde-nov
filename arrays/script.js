// const myArray = ["Hello", "New", true, false, 2, { identity: "TI employee" }];
// console.log("before", myArray);
// myArray[5] = "last element";
// console.log("after", myArray);
// myArray[6] = "New last element";
// console.log("new update", myArray);
// myArray[8] = "New Element added at position 9";
// console.log("new update", myArray);
// console.log(myArray[10]);

function logUpdatedArr() {
  // console.log("myArray", myArray);
}
const myArray = ["h", "e", "l", "l", "o"];
//get the last index of the array
const lastIndex = myArray.length - 1;
myArray.push("w");
logUpdatedArr();
myArray[0] = "m";

const lastElement = myArray.pop();
// console.log("lastElement", lastElement);

myArray.unshift("p");
logUpdatedArr();
const removedElement = myArray.shift();
// console.log("removedElement", removedElement);
logUpdatedArr();

// add an element 'w' to the end of the array
// change the first element of the array to have the value of 'm'

// Exercise
// Checkout these array methods
// slice
// splice
// concat
// indexOf
// includes

// Saturday 7th, March

// for (let i = 0; i < myArray.length; i++) {
//   console.log("Current Index", i);
//   console.log(myArray[i]);
//   console.log("------------------\n");
// }

const numbersArray = [20, 10, 50, 100, 12, 52];

for (let i = 0; i < numbersArray.length; i++) {
  numbersArray[i] = numbersArray[i] / 2;
}

function divideArrayElementByTwo(arrayArg) {
  for (let i = 0; i < arrayArg.length; i++) {
    arrayArg[i] = arrayArg[i] / 2;
  }
  return arrayArg;
}

function multiplyArrayElementByTwo(arrayArg) {}
function subtractArrayElementByTwo(arrayArg) {}
function addArrayElementByTwo(arrayArg) {}

const array_divided = divideArrayElementByTwo([20, 44, 11, 2, 34]);
console.log(array_divided);

function add(a = 4, b = 5) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
add(10, 5);
const myArray1 = [20, 10, 50, 100, 12, 52];
const myArray2 = [22, 12, 52, 102, 14, 54];

function operateArray(arrArg, operateFn) {
  for (let i = 0; i < arrArg.length; i++) {
    arrArg[i] = operateFn(arrArg[i], 2);
  }
  return arrArg;
}

const result = operateArray(myArray1, subtract);
// console.log("result", result);
