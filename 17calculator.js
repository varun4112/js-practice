let num1 = parseInt(prompt("Enter The First Number: "));
let num2 = parseInt(prompt("Enter The Second Number: "));
let operator = prompt("Enter one of these for operator (+ - * /) :");
let res = 0;

switch (operator) {
  case "+":
    res = num1 + num2;
    break;
  case "-":
    res = num1 - num2;
    break;
  case "*":
    res = num1 * num2;
    break;
  case "/":
    res = num1 / num2;
    break;
}
console.log(res);
