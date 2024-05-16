const calcTax = (income) => {
  let tax = 0;
  if (income < 250000) {
    tax = 0;
  } else if (income > 250000 && income <= 500000) {
    tax = (income * 5) / 100;
  } else if (income > 500000 && income <= 1000000) {
    tax = (income * 20) / 100;
  } else if (income > 1000000 && income <= 5000000) {
    tax = (income * 30) / 100;
  }
  console.log(`Your Income Tax for the Amount ${income} is ${tax}`);
};

let income = prompt("Please Enter Your Income: ");
calcTax(income);