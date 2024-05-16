
function removeDuplicate(input){
let arr1 = input.split(" ")
let arr2 = [];

for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      arr2.push(arr1[i]);
    }
  }

console.log(arr2);
}

let input = prompt("Enter array")
removeDuplicate(input)
