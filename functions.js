// Declare

// Functions without parameters

function greetings() {
    console.log("Hello, world!");
} 

greetings();// Call the function to execute its code block

// Functions with parameters

function greetUser(name) {
    console.log("Hello, " + name + "!");
}

greetUser("Babajide"); // Call the function with an argument to execute its code block  

//Static function with parameters
function add() {
    let x = 5;
    let y = 10;
    return x + y;
}
console.log(add()); // Calls the function and prints the returned value

// Dynamic function with parameters
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(5, 10)); // Calls the function with arguments and prints the returned value


function ageCheck(age){
    if (age <= 18) {
        return "please Get Out... You're Underaged"
    } else {
        return "You're Eligible to Vote"
    } 
}

let estherAge =  ageCheck(30)
console.log(estherAge); // true


function luckyNumber(num) {
    if (num === 4) {
        return "Congratulations! You are Lucky";
    } else {
        return "Try Again";
    }
}

let myLuckyNumber = luckyNumber(4);
console.log(myLuckyNumber); 

// Scope of Variables: Global vs Local

// Global variable: accessible throughout the entire program

let score = 75; // Global variable: accessible throughout the entire program

function gradingSystem() {
    if (score >= 50) {
        return "You passed the exam!";
    } else {
        return "You failed the exam!";
    };
}


function deliveryFee() {
    let fee = 5; // Local variable: accessible only within the function
    return fee;
}



function gradeStudent(score) {
    if (score >= 70) {
        return "A";
    } else if (score >= 60 && score <= 69) {
        return "B";
    } else {
        return "F";
    }
}

let studentGrade = gradeStudent(65);
console.log("Student Grade:", studentGrade);  


// Arrow Functions: A concise and modern way to write functions in JavaScript

const minus = (num) => {
    return num - 5
}
let result = minus(75);
console.log("Result:", result);
