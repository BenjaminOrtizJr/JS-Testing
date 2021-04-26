/* 
We will be implementing a function that will pass in interger as in input, 

function will return:

 “fizz” if the passed in number is multiple of “3” , 
 “buzz” if the pass in number is multiple of “5”, and “fizzbuzz” if the passed in number is multiple of “3” & “5”.
*/

// Original Code:

// function fizzBuzz(num) {
//     if (num % 5 === 0 && num % 3 === 0) return "FizzBuzz";
//     if (num % 5 === 0) return "Buzz";
//     if (num % 3 === 0) return "Fizz";
//     return num;
// }

// module.exports = fizzBuzz;

// Refactored Code:

function fizzBuzz(num) {
    let string = '';
    if (num % 3 === 0) string += 'Fizz';
    if (num % 5 === 0) string += 'Buzz';
    return string.length ? string : num;
}

module.exports = fizzBuzz;