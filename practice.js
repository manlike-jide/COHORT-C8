// ===================================
// Section A: Data Types Practice
// ===================================

// 1. Variables for name, age, and student status
let name = "Babajide";
let age = 24;
let isStudent = true;

console.log("Name:", name, "| typeof:", typeof name);
console.log("Age:", age, "| typeof:", typeof age);
console.log("Is Student:", isStudent, "| typeof:", typeof isStudent);

// 2. Array of shopping items
let shoppingList = ["Milk", "Bread", "Eggs", "Butter"];
console.log("Shopping List:", shoppingList);
console.log("typeof shoppingList:", typeof shoppingList);
// Notice: typeof an array returns "object", NOT "array".
// Arrays are technically a special type of object in JavaScript.
// (If you need to confirm it's an array, use Array.isArray(shoppingList))

console.log("--------------------------------------");

// ===================================
// Section B: Arithmetic Operators
// ===================================

// 3. Basic arithmetic
let num1 = 20;
let num2 = 4;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);

// 4. Remainder (modulo)
console.log("17 % 5 =", 17 % 5);

// 5. Price after discount
let price = 1500;
let discount = 200;
let finalPrice = price - discount;
console.log("Final Price after discount:", finalPrice);

console.log("--------------------------------------");

// ===================================
// Section C: Comparison Operators
// ===================================

// 6. Loose vs strict equality
let a = 10;
let b = "10";

console.log("a == b:", a == b);   // true
console.log("a === b:", a === b); // false

// Comment explaining the difference:
// == (loose equality) converts the values to the same type before comparing.
// Since "10" (string) can be converted to 10 (number), a == b is true.
// === (strict equality) checks BOTH value and type without converting.
// Since a is a number and b is a string, a === b is false.

// 7. Score comparison
let score = 75;
console.log("Is score >= 50?", score >= 50);

console.log("--------------------------------------");

// ===================================
// Section D: Logical Operators
// ===================================

// 8. AND (&&) - needs BOTH conditions true
let hasTicket = true;
let hasID = false;

let canEnterBoth = hasTicket && hasID;
console.log("Can enter (needs ticket AND ID)?", canEnterBoth);

// 9. OR (||) - needs AT LEAST ONE condition true
let canEnterEither = hasTicket || hasID;
console.log("Can enter (needs ticket OR ID)?", canEnterEither);

console.log("--------------------------------------");

// ===================================
// Section E: Mini Project
// ===================================

// 10. Password check
let password = "1234";
let correctPassword = "1234";
console.log("Password correct?", password === correctPassword);

// 11. Challenge: affordability check
let budget = 5000;
let itemPrice = 1200;

let canAfford = itemPrice <= budget && budget > 0;
console.log("Is item affordable AND budget > 0?", canAfford);