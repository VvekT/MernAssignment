
// JavaScript Declarations are Hoisted:--

//                           In JavaScript, a variable can be declared after it has been used.
//                           In other words; a variable can be used before it has been declared.
//  Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope 
// (to the top of the current script or the current function).
// Hoisting is a JavaScript mechanism where variables and function declarations are moved
//  to the top of their respective scopes before the code is executed.

x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x

// Hoisting does not occur with let or const , using them will increase the chances of your code being bug free (a lot).


// Using a let variable before it is declared will result in a ReferenceError.
// The variable is in a "Temporal dead zone" from the start of the block until it is declared:
// This will result in a ReferenceError:
// carName = "Volvo";
// let carName;

// Using a const variable before it is declared, is a syntax error, so the code will simply not run.

// This code will not run - SyntaxError
// carName = "Volvo";
// const carName;

// Spread & Rest operators
// Spread Operator expands collected elements such as arrays into single elements.

 
const numbers = [1, 3, 5, 7];

function addNumbers(a, b, c, d) {
  return a + b + c + d;
}

console.log(addNumbers(...numbers));

// The invocation above will return:
16

//Rest Parameter collects all remaining elements into an array.

// Define a destructuring object with two regular variables and one rest variable:
const { firstName, lastName, ...otherInfo } = {
  firstName: "Vivek",
  lastName: "Tiwari", 
  companyName: "xyz",
  profession: " Developer",
  gender: "Male"
}

// Invoke the otherInfo variable:
console.log(otherInfo);

// The invocation above will return:
//y{companyName: "Xyz", profession: "Developer", gender: "Male"}

// Take any no of Arguments return there sum-
function sum(){
    var a=0;
    for(var i=0;i<arguments.length;i++){
        a+=arguments[i];
    }
    return a;
}
console.log(sum(2,3));     // 5


function isPrime(p){
    if (p<2){
        return `${p} is not a prime no.`
    }
        for(let i=2;i<p;i++){
            if(p%i==0){
                return `${p} is not a prime no`
            }
          
        }
        return `${p} is a prime no`;
    
}
console.log(isPrime(29));  

//output:- 29 is prime no

// * Differance b/w == and === ?

// == performs type conversion if needed and returns true if the operands have the same value after conversion, otherwise, it returns false. 
// === does not perform type conversion and returns true only if both operands are of the same data type and have the same value, otherwise, it returns false.

// example-
                 const a = 100;
                 const b = '100';

             console.log(a == b) // true

                  const x = 100;
                   const y = '100';

               console.log(x === y); // False (compare both value and its datatype a=number, b=String )

// spread operator-
const myCar = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
   
    }
                const myNewCar = {
       type: 'car',
       year: 2021, 
       color: 'yellow'
      
     }
    const result1={...myCar,...myNewCar};
    const result={...myNewCar,...myCar};
    console.log(result1);
  output:-
{brand: 'Ford', model: 'Mustang', color: 'yellow', type: 'car', year: 2021}

    console.log(result);
output:-
{type: 'car', year: 2021, color: 'red', brand: 'Ford', model: 'Mustang'}

//* only duplicate value is overide .


    //WAP that converts temperature given in degree Celcius to degree fahrenheit and vice versa
const n=20;
    const celcToFar=(n)=> `${n} Celsious is Equal to ${n*9/5+32} Fahrenheit`
console.log(celcToFar(n));

//output;-    20 Celsious is Equal to 68 Fahrenheit

// Fahrenhiet to celcious

const f=45;
    const farToCel=(f)=> `${f} Fahrenhiet is Equal to ${(f-32)*5/9} Celcious`
console.log(farToCel(f));

//output;- 
          //  Fahrenhiet is Equal to 7.222222222222222 Celcious

