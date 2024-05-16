// 9.	Implement a JavaScript function to reverse a string without using the built-in reverse() method

const reverseString = (string) => {
  let arr1 = [];
  let arr2 = [];
  arr1 = string.split("");
  for (let i = arr1.length - 1; i >= 0; i--) {
    arr2.push(arr1[i]);
  }
  let revstring = arr2.join("");
  return revstring;
};

let string = prompt("Enter A String: ");
console.log(`"${string}" reversed is:`, reverseString(string));
