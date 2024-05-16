function overallGrade(written, lab, assignment) {
  total = written * 0.7 + lab * 0.2 + assignment * 0.1;
  console.log("Your Overall Grade is", total);
}

let written = prompt("Enter Written Exam marks: ");
let lab = prompt("Enter Lab Exam marks: ");
let assignment = prompt("Enter Assignment Exam marks: ");
overallGrade(written, lab, assignment);
