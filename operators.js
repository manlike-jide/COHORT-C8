 let x = 50
 let y = 20

 console.log("x + y =", x + y)
 console.log("x - y =", x - y)
 console.log("x * y =", x * y)
 console.log("x / y =", x / y)
 console.log("x % y =", x % y)   // Modulus operator returns the remainder of a division operation

// Comparison Operators: for comparing values and answering true or false questions

let a = 10;
let b = 5;

console.log(a == b)  // Equality operator checks if two values are equal
console.log(a !== b)  // Inequality operator checks if two values are not equal
console.log(a === b) // Strict equality operator checks if two values are equal and of the same type
console.log(a > b) // Greater than operator checks if the left value is greater than the right value
console.log(a < b) // Less than operator checks if the left value is less than the right value
console.log(a >= b) // Greater than or equal to operator checks if the left value is greater than or equal to the right value
console.log(a <= b) // Less than or equal to operator checks if the left value is less than or equal to the right value


// Logical Operators: for combining multiple conditions
let c = true;
let d = false;

console.log(c && d) // Logical AND operator returns true if both conditions are true
console.log(c || d) // Logical OR operator returns true if at least one condition is true
console.log(!c) // Logical NOT operator returns true if the condition is false


// Assignment Operators: for assigning values to variables
let e = 10; // Assignment operator assigns a value to the variable
console.log("e =", e);

e += 5; // Addition assignment operator adds a value to the variable and reassigns the result to the variable
console.log("e after += 5:", e);

e -= 3; // Subtraction assignment operator subtracts a value from the variable and reassigns the result to the variable
console.log("e after -= 3:", e);

e *= 2; // Multiplication assignment operator multiplies the variable by a value
console.log("e after *= 2:", e);

e /= 4; // Division assignment operator divides the variable by a value
console.log("e after /= 4:", e);

e %= 3; // Modulus assignment operator assigns the remainder of the variable divided by a value
console.log("e after %= 3:", e);

e ++; // Increment operator increases the variable by 1
console.log("e after increment:", e);

e --; // Decrement operator decreases the variable by 1
console.log("e after decrement:", e);
