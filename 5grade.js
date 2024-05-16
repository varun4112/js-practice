let marks = prompt("Enter Your Total Marks: ")
let grade = ""
if (marks >= 0 && marks <= 100) {
    if (marks >= 90) {
        grade = "A"
    }
    else if(marks >= 80 && marks <= 89){
        grade = "B"
    }
    else if(marks >= 70 && marks <= 79){
        grade = "C"
    }
    else if(marks >= 60 && marks <= 69){
        grade = "D"
    }
    else if(marks >= 50 && marks <= 59){
        grade = "E"
    }
    else {
        grade = "Failed"
    }
    console.log(`Your Grade is ${grade}`)
}
else {
    console.log("Enter Valid Marks")
}

