// 4.	Write a JavaScript program to convert temperature from Celsius to Fahrenheit.The program should prompt the user to enter a temperature in Celsius.Then, it should convert the temperature to Fahrenheit using the formula: F=9/5c+32.Display the converted temperature in Fahrenheit on the console, rounded to two decimal places

let tempC= prompt("Enter Temprature in Celsius: ")
let tempF= (9/5*tempC+32).toFixed(2)
console.log(`${tempC}°C is ${tempF}°F `)