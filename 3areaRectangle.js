// 3.	Write a JavaScript program to calculate the area of a rectangle.The program should accept two inputs from the user: the length and width of the rectangle.Then, it should calculate the area using the formula: Area = Length * Width.Display the calculated area on the console.

let length = prompt("Enter Length: ");
let breadth = prompt("Enter Breadth: ");
if (length == 0 || breadth == 0) {
  console.log("Please Enter Valid Values");
} else {
  console.log(`Area of the rectangle is ${length * breadth}`);
}
