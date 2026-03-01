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
  console.log("myArray", myArray);
}
const myArray = ["h", "e", "l", "l", "o"];
//get the last index of the array
const lastIndex = myArray.length - 1;
myArray.push("w");
logUpdatedArr();
myArray[0] = "m";

const lastElement = myArray.pop();
console.log("lastElement", lastElement);

myArray.unshift("p");
logUpdatedArr();
const removedElement = myArray.shift();
console.log("removedElement", removedElement);
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
