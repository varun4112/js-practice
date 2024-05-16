num = 6;
let arr = [1, 6, 5, 4, 3, 8, 11, 2, 7];

const binary = (arr, num) => {
  let low = 0;
  let high;
  let mid;
  arr.sort((a, b) => a - b);
  while (high >= low) {
    high = arr.length - 1;
    mid = low + Math.floor((high - low) / 2);
    if (arr[mid] == num) {
      console.log(mid);
    } else if (arr[mid] < num) {
      low = mid - 1;
    } else if (arr[mid] > num) {
      high = mid + 1;
    }
    console.log("not found");
  }
};
