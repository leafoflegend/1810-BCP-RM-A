const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Find a thing!

// const anArray = [1, 2, 3, 4, 5];

// const findAThing = (anArr, aThing) => {
//   for (let i = 0; i < anArr.length; ++i) {
//     const currentElement = anArr[i];

//     if (currentElement === aThing) return true;
//   }

//   return false;
// }

// Arrays

// What do you think an array is?

// Something that holds things for me.
// A list of elements.
// "Indexes"
// Order is promised to us through the use of indexes

// An ordered collection of values.
// Arrays can store any type of value.

const someArray = [[], {}, function(){}, 1, '', null, undefined, new Date()];
// They promise us something we can refer to as a 'contract'

// Arrays promise us three things:
// 1. They promise us order.
// 2. They promise us a length property, which will always describe how many values it is currently holding.
// 3. They promise us some "helper methods"

// Arrays are lies.

// console.log(typeof []);
// Arrays arent their own thing, they are in fact just a sub type of an object - even saying sub type is being disingenious.
// What I mean is that we could in fact "roll our own arrays"


// const testArr = [1, 2, 3];
// const testArr = {
//   0: 1,
//   1: 2,
//   2: 3,
//   length: 3,
//   push: function (elem) {
//     // Inserting a new element, at the NEXT INDEX.
//     this[this.length] = elem;
//     // IT UPDATES THE LENGTH TO REPRESENT ITS NEW SIZE.
//     ++this.length;
//   },
// };

// testArr.push(4);

// Arrays really are just objects.
// You all probably are atleast aware of the 'push' method.

// for (let i = 0; i < testArr.length; ++i) {
//   const currentElem = testArr[i];

//   console.log(currentElem);
// }

// The reason arrays come in JS as a pre-built thing is very simple to explain: Laziness
// JS developers want to be the laziest people ever, because less time spent coding, means more time living life, so every single tool that we can reasonably provide you to make operations we do often - we do.
// Arrays are the ultimate tool of convenience.
// Instead of having to write some custom crazy object every time we need a collection that represents an ordered sequence of values, we can just use an array, and it comes with every single helper we could possibly want.

// 'contracts' go both ways, JS is promising us some things an array will do, but in exchange we promise some things back...
// Our promise back is that we will only use arrays the ways that they are intended to be used.
// 'intention' probably sounds crazy and vague - the way they implement this, is by forcing us to use their methods.
// When we want to add something, we push
// To remove, we pop

// We are not supposed to try to do it ourselves.

// const dontMessWithArrays = [1, 2, 3];

// dontMessWithArrays[10] = 10;

// console.log(dontMessWithArrays[4]);

// delete dontMessWithArrays[1];

// console.log(dontMessWithArrays);

// TLDR: Please use array methods to play with arrays. Otherwise, youre going to give yourself, and the future programmer who will look at your code a big headache.

// Methods - Properties

// The only property you care about is length - a property with a number value that represents how many total values are in the array.

// arrays start at 0, not 1. 0/1 - We call this zero-indexing. It is the de facto way to have collections in any programming language. If you run into a language that starts at 1, run as far away as you can.

// Methods
const methodArr = [1, 2, 3];
// console.log('Normal: ', methodArr);

// Push/Pop are for the right side.

// Push
// Push takes an element, and appends it to the end of the array. It accordingly updates the length.
// It can take infinite arguments.
const pushReturn = methodArr.push(4);
// console.log('Push Return Val: ', pushReturn);
// console.log('Push: ', methodArr);

// Pop
// Pop removes the last element from the array and returns it. It then updates the length.
const poppedElement = methodArr.pop();
// console.log('Pop Return Val: ', poppedElement);
// console.log('Pop: ', methodArr);

// Shift/unshift are for the left side of the array.

// Unshift
// Insert something at the beginning of the array, it will then return the length.
const unshiftReturn = methodArr.unshift(0);
// console.log('Unshift Return Val: ', unshiftReturn);
// console.log('Unshift: ', methodArr);

// Shift
// Removes the first element from the array and returns the element that was removed.
const shiftedElement = methodArr.shift();
// console.log('Shift Return Val: ', shiftedElement);
// console.log('Shift: ', methodArr);

// Four building blocks of any sort of array in any language.
// There are in fact much more complex methods for arrays, but each and every one of those complex methods, uses these methods to do what it needs to do.

// Brackets

// Bracket Notation is an alternative to dot notation...

// console.log(methodArr[0]);
// console.log(methodArr.length);

// We use bracket access is because its the only way to access properties on an object that are special characters.

const someObject = {
  christa: 'red couch',
  dania: 'robe on a hook',
  0: 'not a number',
  '[]': 'brackets are cool',
}

const brackets = '[]';

// c(someObject.christa);
// c(someObject.dania);
// c(someObject[0]);
// c(someObject[brackets]);

// For loops

// const forArray = [1, 2, 3];

// for (let i = 0; i < forArray.length; ++i) {
//   c('i: ', i);
//   c(forArray[i]);
// }

// Bracket Notation allows us to access properties using variables. Anything we put in a bracket will be coerced into a string.
// Every single time we put a key on the left side of an object we are also coercing that into a string.

// ++i vs i++

// const increment = num => {
//   // Return num
//   // Pre increment num
//   return ++num;
// }
// console.log(increment(1));

// var++
// Is called post-incrementation
// In languages post-incrementation means: "I will increment this variable AFTER every other operation in this statement is complete"

// ++var
// Is called pre-incrementation
// In languages pre-incrementations means: "I will increment this variable BEFORE every other operation in this statement is complete"

// You should always preincrement, itll just save you future headaches.

// Treat your code as if the person who ends up maintaining it (all code ends up maintained by someone else) is a serial killer who knows your address.

// indexOf

// indexOf searches an array for a strict equality match.
// indexOf returns the index of the space it finds an equality match, it will stop at the first element that matches and not search any further.
// If it does not find an element, it will (somewhat oddly) return -1 The thinking here was: if we return a number on success, we should also return a number on failure.

// const searchArr = [1, 'a', null, []];

// c(searchArr.indexOf([]));

// slice
// Pass by Value vs Pass by Reference
// Pointers
// Slice creates a shallow copy of whatever array you give it.
// It can be configured, to start to copy the array from a different start index, and to only go a certain distance from there.

const copyArr = [1, 2, 3, 4, 5];
// c(copyArr.slice());
// c(copyArr.slice(2));
// c(copyArr.slice(1, 3));

// One of the most powerful functions in JavaScript.

const mySlice = (anArr, startIdx = 0, endIdx = anArr.length) => {
  const myArr = [];

  for (let i = startIdx; i < endIdx; ++i) {
    const currentElem = anArr[i];
    myArr.push(currentElem);
  }

  return myArr;
}

// c(mySlice(copyArr, 1, 4));

// Includes
// indexOf but instead of returning the index, it returns true or false.

// c(copyArr.includes(10));

// Reverse

// Reverse surprise: reverses an array.

console.log(copyArr.reverse());











