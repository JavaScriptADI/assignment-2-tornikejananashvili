let stringVariable = "asdfgh";
let stringNumber5 = "5";
let number5 = 5;

console.log(stringVariable);

console.log(stringNumber5); // string data type
console.log(number5); // number data type

console.log(stringNumber5 += 5); // prints 55
console.log(number5 += 5); // prints 10

// ------------------------ //

let numberNine = 9;
let booleanFalse = false;

console.log(numberNine);
console.log(booleanFalse);

let is9HigherThan5 = numberNine < number5;
/* we can also use
>, ==, ===, >=, <= */

console.log(is9HigherThan5);

// ------------------------ //

let hello = "Hello";
hello = String(hello).toUpperCase();

console.log(hello);

let world = "World";
world = String(world).toLowerCase();

console.log(world);

// ------------------------ //

let text = 'Hello'; // value is "Hello" 
text.toUpperCase();
console.log(text); // value becomes "HELLO"

let text1; // value is undefined
console.log(text1);

let text2 = 'Hello';
// console.log(text2.toLowercase()); -- its missing String()

let age = Number(prompt('How old are you?')); // since prompt returns string, we should covert it into a number
let nextAge = age + 1; // it will now do number + number, not string + number
console.log(`Next year you will be ${nextAge}`);

let name = prompt('What is your name?');
let age1 = Number(prompt('How old are you?'));
let isInSixties = age1 >= 60;// finish the code so that it prints true if the age is in 60s
console.log(`${name} is in sixties: ${isInSixties}`);

let x = 5; // value of x is 5
console.log(x++); // prints 6
console.log(x); // prints 5

let y = 5;// value of y is 5
console.log(++y); // prints 6
console.log(y); // prints 5

// x++ adds 1 to x
// x-- minuses 1 to x

// ++x 
// --x 

let undeclaredVariable;
console.log(undeclaredVariable); // prints undefined

let numberOne = 1;
let numberTwo = 2;

console.log(numberOne == numberTwo);
console.log(numberOne != numberTwo)

let text3 = "1"
let number2 = "2"

console.log(text3 + number2) // it thinks number2 is a string so it does string + string, which in this case is like "1" + "2" which is "12"