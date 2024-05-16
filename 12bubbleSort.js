let n = prompt("Enter the array length: ");
let arrInput = prompt("Enter Array Elements: ");
let arr1 = arrInput.split(" ");
console.log(arr1);
// arr2= arr1.sort((a,b)=>b-a)
for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    if (arr1[j] > arr1[j + 1]) {
      let temp = arr1[j];
      arr1[j] = arr1[j + 1];
      arr1[j + 1] = temp;
    }
  }
}
console.log(arr1);
