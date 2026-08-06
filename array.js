let students = ["Esther", "Tunde", "Jide", "Babajide", "John", "Jane"];
// console.log(students[0]); // Accessing the first element (index 0) of the array
// console.log(students[1]); // Accessing the second element (index 1) of the array
// console.log(students.length); // Getting the length of the array

students[2]= "Alice"; // Modifying the third element (index 2) of the array
// console.log(students[2]); // Accessing the modified third element (index 2) of the array

//adding new elements to the array
students.push("Teniola"); // Adding a new element to the end of the array
console.log(students); // Accessing the modified array

students.unshift("Oyinkansola"); // Adding a new element to the beginning of the array
// console.log(students); // Accessing the modified array

//removing elements from the array
students.pop(); // Removing the last element from the array
// console.log(students); // Accessing the modified array

students.shift(); // Removing the first element from the array
// console.log(students); // Accessing the modified array

//includes, indexOf, and slice methods
// console.log(students.includes("Jide")); // Checking if the array includes a specific element
// console.log(students.indexOf("Babajide")); // Getting the index of a specific element in the array
// console.log(students.slice(1, 4)); // Getting a subset of the array from index 1 to 3


// reverse and sort methods
students.reverse(); // Reversing the order of the elements in the array
// console.log(students); // Accessing the modified array

students.sort(); // Sorting the elements of the array in ascending order
// console.log(students); // Accessing the modified array

// splice method
students.splice(2, 1, "Chinedu"); // Removing one element at index 2 and adding a new element
// console.log(students); // Accessing the modified array

// higher order array methods
// map , filter, reduce, forEach, find, findIndex, some, every, and sort methods

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(num => num * 2); // Using map to create a new array with doubled values
console.log(doubledNumbers); // Accessing the new array with doubled values

const marketList = ["apple", "banana", "orange", "grape", "kiwi"];
const addedPrefix = marketList.map(item => "I will buy " + item); // Using map to add a prefix to each element in the array
console.log(addedPrefix); 

// filter method 

const evenNumbers = numbers.filter(num => num % 2 === 0); // Using filter to create a new array with even numbers
console.log(evenNumbers); 


const complexion = ["light", "medium", "dark", "fair", "deep"];
const darkComplexion = complexion.filter(color => color === "dark"); // Using filter to create a new array with specific elements
console.log(darkComplexion);