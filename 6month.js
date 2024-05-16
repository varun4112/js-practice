// 6.	Write a JavaScript program that uses a switch case to accept an input number from the user and output the corresponding month.The program should prompt the user to enter a number representing a month (1 for January, 2 for February, etc.).Then, using a switch case, it should output the name of the month.If the user enters any other number, the program should display "Invalid Entry".


let number = prompt("Enter the month number: ");
console.log(typeof(number))
number = parseInt(number);
var month = "";
if (number > 12 || number < 1) {
  console.log("Please Enter Valid Number");
} else {
  switch (number) {
    case 1:
      month = "January";
      break;
    case 2:
      month = "Feb";
      break;
    case 3:
      month = "March";
      break;
    case 4:
      month = "april";
      break;
    case 5:
      month = "may";
      break;
    case 6:
      month = "jusne";
      break;
    case 7:
      month = "july";
      break;
    case 8:
      month = "aug";
      break;
    case 9:
      month = "sept";
      break;
    case 10:
      month = "oct";
      break;
    case 11:
      month = "nov";
      break;
    case 12:
      month = "dec";
      break;
  }
  console.log(`your month is:${month} `);
}
