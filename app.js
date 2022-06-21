let num1 = prompt("First number:");
let num2 = prompt("Second number:");
let operation = prompt("Pick operation [+, -, *, /]:");

if (operation == "+" || operation == "add") {
  let answer = Number(num1) + Number(num2);
  alert("Answer: " + answer);
} else if (operation == "-" || operation == "sub") {
  let answer = Number(num1) - Number(num2);
  alert("Answer: " + answer);
} else if (operation == "*" || operation == "mul") {
  let answer = Number(num1) * Number(num2);
  alert("Answer: " + answer);
} else if (operation == "/" || operation == "div") {
  let answer = Number(num1) / Number(num2);
  alert("Answer: " + answer);
} else {
  alert("Invalid Input");
}
