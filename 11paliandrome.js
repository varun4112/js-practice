// Write a function in JavaScript to check if a given string is a palindrome or not.
const paliandrome = (string) => {
  let arr1 = [];
  let arr2 = [];
  arr1 = string.split("");
  for (let i = arr1.length - 1; i >= 0; i--) {
    arr2.push(arr1[i]);
  }
  let revstring = arr2.join("");
  if (string == revstring) {
    console.log(`${string} is a paliandrome`);
  } else {
    console.log(`${string} is NOT a paliandrome`);
  }
  return revstring;
};

let string = prompt("Enter A String: ");
console.log(`"${string}" reversed is:`, paliandrome(string));
