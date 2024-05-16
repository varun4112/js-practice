// 8.	Create a program to find the factorial of a given number using recursion in JavaScript.

const factorial = (number) => {
  if (number != 0) {
    if (fact == 0) {
      fact = number;
      factorial(number - 1);
    } else {
      fact *= number;
      factorial(number - 1);
    }
  }
};

let number = prompt("Enter Your Number");
let fact = 0;
factorial(number);
console.log(fact);
