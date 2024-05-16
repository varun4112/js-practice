// 1.	Write a JavaScript program that prompts the user to enter their age and then displays a message on the console indicating whether they are old enough to vote (consider the legal voting age as 18).

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your age: ', (age) => {
  if(age>18){
    console.log("You are Eligible to vote")
  }
  else{
    console.log("You are NOT Eligible to vote")
  }
  rl.close();
});

const ageVerification=  (age) => {
  if(age>18){
    console.log("You are Eligible to vote")
  }
  else{
    console.log("You are NOT Eligible to vote")
  }}