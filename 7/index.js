const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Objects

// Arrays: They are objects, but they are further defined as an ordered collection of values.

// So now were getting broader...

const someArray = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
}

// The right side of an array is called 'values'

// But now that were in object land, were going to care about two things:
// the left and the right side - we refer to the left side as 'keys' and the right side as 'values'
// 'Keys' open doors to 'values'

// In an array there are some contractual promises about what exactly an arrays keys are: They are numeric indeces representing order
// In objects, we can name keys whatever the heck we want.
// There will be powerful patterns with keys, and weak ones, but first lets cover the basics:

// Empty Object Literal
// 'Literals' refer to any object that is defined inline with an equals sign. We can also think of this as defined at the moment of creation.
const someObj = {};

const anotherObj = {};
anotherObj.anotherThing = 'another thing';

// Bracket vs Dot notation
// Bracket notation is used for special characters and when we want to use a variable for a name, think arr[i]
// Dot notation is PREFERRED but can only be used when we know the exact key, and its not a variable and its not a special character (like a number or a bracket)

// It doesnt really matter which you use when youre defining an object, but the best practice is to use dot notation when possible, and bracket notation when necessary

const classObj = {
  christa: 'popcorn',
  dania: 'unknown',
  jeremy: 'unknown',
};

// Keys are always converted to strings, so we can shorthand it, and not wrap keys in quotes

// c(classObj);

// There is no limitation to what a key can be, or what type or size a value can be... values could even be another object.

// Objects
// Objects are arbitrary collections of key: value pairs.
// Objects seem almost too broad to be useful.
// Until we develop some patterns for using objects to solve practical problems, they are a bit abstract.

// assigning, accessing, changing, deleting

const someObject = {
  name: 'some object',
}

// someObject.other = true;
// c(someObject.other);

// someObject.other = false;
// c(someObject.other);

// delete someObject.other;
// c(someObject);

// I never have to use delete professionally. It can be a scary operator, and I recommend against using it unless youre 100% sure for some reason you cant have that data in memory.

// // Array.isArray
// const isArray = maybeObj => {
//   return typeof maybeObj === 'object' && maybeObj.length && typeof maybeObj.length === 'number';
// }


// Arrays vs Objects
// Feel very comfortorable with arrays. Thats great, they were built to be convenient. So I hope you like them.
// But sometimes, objects are just superior at certain tasks.

// Includes
// Given some collection, tell me if the collection includes a search term.

const arrayToSearch = [1, 'a', {}, 2, 3, 4, 5, 6, 7, 8, 9, 'hi there'];
const objToSearch = {
  1: true,
  2: true,
  3: true,
  4: true,
  'a': true,
  'object Object': true,
  'hi there': true,
};

const arrIncludes = (arr, search) => {
  for (let i = 0; i < arr.length; ++i) {
    c('Array Search Ran!');
    if (arr[i] === search) return true;
  }

  return false;
}

const objIncludes = (obj, search) => {
  c('Obj Search Ran!');
  return !!obj[search];
}

// c(arrIncludes(arrayToSearch, 'bye there'));
// c(objIncludes(objToSearch, 'hi there'));

// Time Complexity
// Time complexity is a measure of how much time a given algorithm takes to complete in THE WORST CASE SCENARIO.

// Searching arrays is always O(n) - O = unit of time, n = number of elements in the array
// The array search will run time x length of any given array

// The object search is always O(1) - this means that the object search is immune to the size of its collection affecting its lookup time.
// Object search would work on any size database.

// How do we deal with large collections of data?
// If we were facebook and we had 3 billion users, we couldnt iterate over an array 3 billion times looking if a user exists or not.

// We hide away 'keys' that are our secret access to a place in memory.
// Thats how objects work. We the human (programmer) hide away a way to get back somewhere immedieatly.

// In arrays, we give that up in exchange for ORDER. We prefer to have a way to always go from one end to another, while maintaining order.
// In objects, there is no order. There is only keys.

// With arrays we know how to 'loop' through them, looking at every single value.
// It feels like weve lost that with objects.

const ourFirstObjectLoop = {
  1: 'a',
  q: 'b',
  hiThere: 'bye',
};

// For in loop
// They provide a way to loop, but they are syntactically different and kind of an edge case
// for (let key in ourFirstObjectLoop) {
//   const value = ourFirstObjectLoop[key];
//   c(`${key}: ${value}`);
// }

// To use patterns were already comfortorable with
// We need to first convert the object to an array, so that we can do all of our array things.

// Object.keys
// Object.keys will take an object as an argument and return an array of its keys.

const keys = Object.keys(ourFirstObjectLoop);

for (let i = 0; i < keys.length; ++i) {
  const key = keys[i];
  const value = ourFirstObjectLoop[key];
  c(`${key}: ${value}`);
}
































