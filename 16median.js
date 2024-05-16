const median = (array) => {
  let median = 0;
  arr1 = arr1.sort((a, b) => a - b);
  if (arr1.length % 2 == 0) {
    median =
      (parseInt(arr1[arr1.length / 2 - 1]) + parseInt(arr1[arr1.length / 2])) /
      2;
  } else {
    median = arr1[(arr1.length + 1) / 2 - 1];
  }
  console.log(`Median of [${arr1}] is ${median}`);
};

let input = prompt("Enter The Array Elements seperated by space: ");
let arr1 = input.split(" ");
median(arr1);
