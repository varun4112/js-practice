let arr1 = [1, 5, 6, 4, 9, 3];
let arr2 = [1, 6, 5, 8, 7, 2, 0];
let arr3 = [];

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] == arr1[j]) {
      arr3.push(arr1[i]);
    }
  }
}
console.log(arr3);
