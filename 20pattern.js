let num = 5;
let count = 1;
let str = "";
for (let i = 1; i < num; i++) {
  for (let j = 1; j <= i; j++) {
    str += count + " ";
    count++;
  }
  str += "\n";
}
console.log(str);
