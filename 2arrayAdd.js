// 1.	Write a JavaScript function that takes an array of numbers as input and returns the sum of all the numbers in the array.

let arr1 = [];
let input = prompt("enter an array of numbers: ");
arr1 = input.split(" ");
arr1 = arr1.map(Number);
let sum = 0;
for (i = 0; i < arr1.length; i++) {
  sum += arr1[i];
}
console.log(`sum of array [${arr1}] is `,sum);
