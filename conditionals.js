// Conditional Statements: for making decisions based on conditions (if, else if, else)
let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// else if statement: for checking multiple conditions

let gender = "male";

if (gender === "female") {
console.log("You are a female.");
}
if (gender === "male") {
    console.log("You are a male.");
}
else if (gender === "non-binary") {
    console.log("You are non-binary.");
}
else if (gender === "transgender") {
    console.log("You are transgender.");
}
else {
    console.log("You have not specified a gender.");
}

// The "for" loop: for executing a block of code a specific number of times

// for (start; condition; increment/decrement){
//     // code block to be executed
// }

for (let i = 1; i <= 5; i++) {
    console.log("Iteration: " + i);
} 

let arrayOfNames = ["John", "Jane", "Alice", "Bob"];

for (let i = 0; i < arrayOfNames.length; i++) {
    console.log("Name:", "TechCrush,", arrayOfNames[i]);
}

let arrOfNames = ["John", "Jane", "Alice", "Bob", "Jide", "Babajide", "Tunde"];
console.log(arrOfNames.length);
for (let names = 0; names < arrOfNames.length; names++) {
    console.log("Name:", arrOfNames[names]);
}

// Run a loop to print a two times table from 0 to 36 (inclusive) 
for (let x = 1; x <= 36; x++) {
    console.log(x * 2);
}

// Class Work: Run a loop to print a three times table from 1 to 12
for (let x = 1; x <= 12; x++) {
    console.log(x * 3);
}

// The "while" loop: for executing a block of code as long as a specified condition is true

 
// Syntax for While Loop:
// while (condition) {
//     // code block to be executed
// }

let loginAttempts = 0;
while (loginAttempts < 3) {
    console.log("Login attempt:", `${loginAttempts + 1}`);
    loginAttempts++;
}

// Add 20 to each number in the scores array and print the new values
let scores = [85, 90, 78, 92, 88];

for (let newScore = 0; newScore < scores.length; newScore++) {
    scores[newScore] += 20;
    console.log("New Score:", scores[newScore]);
}

