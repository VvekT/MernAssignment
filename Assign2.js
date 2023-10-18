// WAP to find sum of numbers at even places in an array of integers using 
// for in loop
let numStr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumEvens = (numStr) => {
 let sum = 0;
 for (let i = 0; i < numStr.length; i++) {
 if (i % 2 === 0){ 
 sum = sum + numStr[i];
 }
 }
 return sum;
}
console.log(sumEvens(numStr));
//WAP to reverse an integer
// WAP to reverse an integer
// function reverseInteger(number) {
//     const numStr = number.toString();
  
//     const reversedStr = numStr.split('').reverse().join('');
  
//     const reversedNumber = parseInt(reversedStr);
  
//     return reversedNumber;
//   }
  
//   const originalNumber = 12345;
//   const reversedNumber = reverseInteger(originalNumber);
//   console.log("Original Number: " + originalNumber);
//   console.log("Reversed Number: " + reversedNumber);
// What is the difference between forEach and map
// The forEach() method does not returns a new array based on the given array. 
// The map() method returns an entirely new array. The forEach() method returns 
// “undefined“. The map() method returns the newly created array according to 
// the provided callback function.
// WAP to remove duplicates from a string (for eg: “Hello Yellow” -> “Helo 
// Yw” )
// JavaScript program to remove duplicate character
// from character array and print in sorted
// order
function removeDuplicate(str, n)
    {
        // Used as index in the modified string
        var index = 0;
        // Traverse through all characters
        for (var i = 0; i < n; i++)
        {
            // Check if str[i] is present before it 
            var j;
            for (j = 0; j < i; j++) 
            {
                if (str[i] == str[j])
                {
                    break;
                }
            }
            // If not present, then add it to
            // result.
            if (j == i) 
            {
                str[index++] = str[i];
            }
        }
         
        return str.join("").slice(str, index);
    }
    
        var str = "geeksforgeeks".split("");
        var n = str.length;
        document.write(removeDuplicate(str, n));
     
// WAP to that takes year (number) and month (number) as input and prints 
// the month, year and number of days in that month in this format -> 
// dayCount:month:year using switch case. Cover the edge case where the 
// user enters rubbish input.
const currentMonth = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", 
"August", "September", "October", "November", "December"];
console.log(months[currentMonth.getMonth()]);
//WAP to sort an array of objects on the basis of age
// program to sort array by property name
function compareName(a, b) {
 // converting to uppercase to have case-insensitive comparison
 const name1 = a.name.toUpperCase();
 const name2 = b.name.toUpperCase();
 let comparison = 0;
 if (name1 > name2) {
 comparison = 1;
 } else if (name1 < name2) {
 comparison = -1;
 }
 return comparison;
}
const students = [{name: "John", age: 26},{name: "Alice", age: 30}, {name: 
"Bob", age: 29},{name: "Steve", age: 35}];
console.log(students.sort(compareName));

//WAP to print elements > 50 in an array of integers using array.filter

// const numbers = [12, 65, 47, 89, 34, 51, 78, 90];
// const result = numbers.filter(function (number) {
//   return number > 50;
// });
// console.log("Elements greater than 50:", result);