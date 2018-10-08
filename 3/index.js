const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);


// Types

// strings
// booleans
// numbers
// undefined
// null
// objects
// symbol

// const mysteriousThing = 1 + '1' - '1';

// 1 the number
// console.log('What will we get?', mysteriousThing);

// Something is very strange when we mix types interacting.
// How does a computer understand what to do when we give it a mixture of types?
// It has no idea.

// Brandon Eich (the guy who made JavaScript) had some ideas about this, his ideas are what ended up being implemented in JS (because he did make the thing). Are pretty controversial and not exactly something everyone agrees on across the board.

// Types
// Problem Statement: How to mix types?

// You cant in other languages.

// Statically Typed Languages

// int myFirstInt = 1;
// string myString = 'a string';
// null myNull = null;

// Type Safety
// If a computer knows AHEAD OF TIME what TYPE a given variable is, it can protect us against idiocy like:
// What is the expectation of the programmer about what should happen here?

// Ok 1 + '1' must be 11, because why else would you use a string?
// Ok '11' - '1' makes no sense because you cant subtract letters (characters) from each other... so you must want these to be numbers? Ill just subtract 1 from 11 and give you 10 the number.
// 1 + '1' - '1'

// TYPE ERROR CANNOT ADD STRINGS AND NUMBERS

// Errors are a good thing because they tell us when were being an idiot or when we made an honest mistake, in this case, i think an error is more understandable then what javascript did do.

// Coercion - What JavaScript does to reconcile different types.
// A rule of thumb: When given a choice between convenience for the developer and performance and sensibility of the application, JavaScript always picks convenience for the developer.

// Numbers

/*
  Numbers are just numbers. In some languages you have to be specific about the kind of number, e.g. a float, or an integer, or something very large, but in JavaScript, we dont care. You write your number however you want. You can store a decimal in a variable, a integer, a negative number, some absurdly large number, it doesnt matter.

  Trade Off

  How numbers are stored in computers:
  0 - 0
  1 - 1
  00 - 2
  01 - 3
  10 - 4
  11 - 5
  000 - 6

  The larger our numbers get, the more bits they take up. The more bits they take up, the less memory our computer has. So part of the advantage of other languages using types that specify different kinds of numbers, enables those languages to optimize memory for those numbers. In JavaScript because we give up typing the numbers, we are restricted in how large numbers can be.

  var a = 1;
  var b = 1092730917293618923.123123;

  32 bits
*/

// console.log(Number.MAX_SAFE_INTEGER);

// Scientific applications, and large financial transactions
// We cant really do those kind of operations because we chose, CONVENIENCE OVER PERFORMANCE.

/*
  We interact with every type except objects using something called operators
  *
  /
  +
  -
  ===
  ==
  ^
  %

  These operators have predefined behavior when they are used between TWO NUMBERS.
*/

// Strings
// Strings are seemingly just letters and numbers expressed as things to be seen, not necessarily interacted with.
// Strings are a little strange for one of the primitive types (any type not an object) because they arent actually one thing, but a collection of smaller things, those things are called characters.
// Characters are not supplied by JavaScript - the computer you are running JavaScript on has its own understanding of characters. Thats why smilies look different on windows and mac, even if youre writing the same javascript - your computer is the overall decider of if it understands a character.

// const aString = 'a string 🤠';
// for (let i = 0; i < aString.length; ++i) {
//   const currentChar = aString[i];
//   console.log(currentChar.charCodeAt(0));
// }

// Strings, weirdly, are a collection of numbers that correspond to characters our computer is aware of.

// Strings also have operators that are allowed

// + and plus here means 'concatenate'
// concatenation is very different from addition. This should only happen when we add TWO STRINGS TOGETHER.

// console.log('hi ' + 'eliot');

// null vs undefined

// Null is something you have to write - it represents the absence of value.
// Undefined is something the computer uses - it represents the human programmer forgetting to assign any value (a value also being the absence of value e.g. null)

// null is good - you are properly stating that value will come later to a variable.
// undefined is bad - you are forgetting to express that a variable will be used later, and the computer is now confused.

// Boolean
// true or false
// && - || > Logical Operators: they are ways for us to express arithmetic logic.

// Objects
// We spend 2 weeks covering objects.

// Two types of coercion

// Implicit
// Implicit coercion is how I started the class:
1 + '1' - '1'

// We have no idea what decision javascript is going to make to have the operators work seamlessly. This is implicit because we are not in control of the types javascript will choose to use.
// BAD


// Explicit
// Explicit Coercion is us properly using JavaScripts syntax and semantics to express what types should be used at any given moment.
// console.log(1 + parseInt('1') - parseInt('1'));
// If we wanted the string version:
// console.log((1).toString() + '1');

// This is explicit coercion.
// The expectation from me for you guys is that you will always use explicit coercion, because you dont want the headache i gave you using implicit coercion.

// ===
// ==


// === means strict equality. Strict Equality means that a match has been found for both the value and the types of values
// == is loose equality. Loose Equality attempts to convert both to one type, it then compares values

// console.log(1 == '1');

// We should only use strict equality for our sanity.


// Test Expression
// Whatever we put in a test expression, it needs to evaluate to either true or false. If true, we run the body of the if statement, if false, we skip the if statement.
// if (function(){}) {
//   console.log('I ran!');
// }

// Test Expressions HAVE TO RUN. They will do everything in their power to force the thing you give it into true or false.
// This is implicit coercion - but secondly, its forceful coercion.

// Truthy - any value that when forcibly coerced, returns true
// Falsy - any value that when forcibly coerced, returns false

// That there are only 6 falsy values in all of JS.

/*
  1. false
  2. undefined
  3. null
  4. 0
  5. NaN
  6. ''
*/

// Memorize those and youre good for the rest of your life on test expressions

// More advanced JavaScript programmers are going to abuse truthy/falsy to write less code.
// Its strictly a matter of laziness.
// So you might run into strange things like this:

// if (someNum && aString && object && object.property) {

// }

// Youre going to run into code written like this, and we just want you to be able to read that code.

// !
// The bang operator or (!) is useful in JavaScript because it forcibly coerces a value to a boolean OF THE INVERTED VALUE.

// console.log(!'askjbdd');

// A good ol trick of JS developers is the !! trick. This means invert, then invert the inversion.
// It shows us the underlying true/false value for any value in JS

// console.log(!!function(){});



























