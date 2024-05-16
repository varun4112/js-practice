let number = prompt("Enter Your Number:");
let div = [];
for (let i = 1; i <= number; i++) {
  if (number % i == 0) {
    div.push(i);
  }
}
console.log(div);

if (div.length <= 2) {
  console.log("primenumber");
} else {
  console.log("not a prime number");
}
