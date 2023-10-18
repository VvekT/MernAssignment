// What are first class citizens
// If any programming language has the ability to treat functions as values, to 
// pass them as arguments and to return a function from another function 
// then it is said that programming language has First Class Functions and the 
// functions are called as First Class Citizens in that programming language.
// Functions are very important and powerful in JavaScript. JavaScript has all 
// those abilities or features that are required to be a language having First 
// Class Functions, hence functions are treated as First Class Citizens. Let’s 
// look at all the abilities of functions being a First Class Citizen.
// Ability to treat functions as values: Functions in JavaScript can be 
// treated as values, i.e. a function can be stored as a value in a variable.

var greet = function() { console.log("welcomes Team");
}
greet();
// In the above example, a function is stored in a variable greet, and the 
// variable with parenthesis, i.e. greet() calls the body of the function and 
// shows the output in the console.
// Ability to pass a function as arguments: Functions in JavaScript also 
// has the ability to be passed as arguments to another function. Let’s 
// see an example
function teacher(){
return "Teacher";
}
function student(){
return "Student";
}
function greet(user){ console.log("Welcome", user());
}
// Prints "Welcome Teacher"
var message = greet(teacher);
// Prints "Welcome Student"
var message = greet(student);
// In the above example, when we pass the argument in
// ●
// 1.
// function greet() as teacher, it passes the body of function teacher() and 
// returns the string “Teacher” but when we pass the argument in
// function greet() as student, it passes the body of function student() and 
// returns the string “Student”.
// Difference between
// parameters and arguments
// The Javascript Function Parameters are the names that are defined in the
// function definition and real values passed to the function in the function 
// definition are known as arguments.
// function Name(paramet1, paramet2, paramet3,...) {
// // Statements
// }
// //(Example 2)
// function foo(param1, param2)
// { do something } foo(10, 20);
// In this function, param1 and param2 are function parameters, and the 
// values passed to the function (10 and 20) are arguments.
// function statement and function expression
// function expressions and function statements are very similar in JavaScript, the 
// difference is how the browser loads them into the execution context.
// // function statement
function foo() {
}
// function expression
var foo = function() {
};
//WAP to determine someone’s age using their dob and the current year.
// Javascript program for age calculator
  
// function to calculate current age
function findAge(current_date, current_month, current_year, birth_date,
             birth_month, birth_year)
{
    // days of every month
    month = [31, 28, 31, 30, 31, 30, 31,
                        31, 30, 31, 30, 31 ] 
  
    // if birth date is greater than current date
    // then do not count this month and add 30
    // to the date so as to subtract the date and
    // get the remaining days
    if (birth_date > current_date) {
        current_date = current_date + month[birth_month - 1];
        current_month = current_month - 1;
    }
  
    // if birth month exceeds current month, then do
    // not count this year and add 12 to the month so
    // that we can subtract and find out the difference
    if (birth_month > current_month) {
        current_year = current_year - 1;
        current_month = current_month + 12;
    }
  
    // calculate date, month, year
    var calculated_date = current_date - birth_date;
    var calculated_month = current_month - birth_month;
    var calculated_year = current_year - birth_year;
  
    // print the present age
    document.write("Present Age<br>Years: "+(calculated_year)+" "); 
    document.write("Months: "+calculated_month+" "); 
    document.write("Days: "+calculated_date+" "); 
}
  
// driver code to check the above function
// current dd// mm/yyyy
var current_date = 7;
var current_month = 12;
var current_year = 2017;
// birth dd// mm// yyyy
var birth_date = 16;
var birth_month = 12;
var birth_year = 2009;
// function call to print age
// findAge(current_date, current_month, current_year,
//             birth_date, birth_month, birth_year);
// Write a JavaScript function that capitalizes the first letter of each word in 
// a sentence.
function capitalizeFLetter() {
 let string = 'mnjikhkhkhjkjjjjjjjjjjjj';
 console.log(string[0].toUpperCase() +
 string.slice(1));
}
capitalizeFLetter()
// Write a JavaScript function that counts the occurrences of a specified 
// element in an array.
let arr = [
 'Vivek', 2, 'Sachin', 2, 'Javascript', 4,
 'Javascript', 5, 'form', 6, 'Javascript', 1,
 'form', 5, 7, 8, 'form'
];
const counter = {};
arr.forEach(ele => {
 if (counter[ele]) {
 counter[ele] += 1;
 } else {
 counter[ele] = 1;
 }
});
console.log(counter);

//Write a JavaScript function that generates a random password of a specified length.
function generateRandomPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=";
    let password = '';
  
    if (length < 1) {
      throw new Error("Password length must be at least 1 character.");
    }
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
      }
    
      return password;
    }
    
    const password = generateRandomPassword(12);
    console.log("Random Password: " + password);