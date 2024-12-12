let btns = document.querySelectorAll(".calculator__btn--number");

let clearAll = document.getElementById("clearAll");
let clearLast = document.getElementById("clearLast");
let interest = document.getElementById("interest");
let divide = document.getElementById("divide");
let multiply = document.getElementById("multiply");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let comma = document.getElementById("comma");
let equal = document.getElementById("equal");
let enterPole = document.getElementById("enterPole");
let currentOperation = "";
let firstNumber = "";

clearAll.addEventListener("click", function () {
  enterPole.textContent = "0";
  currentOperation = "";
  firstNumber = "";
});

clearLast.addEventListener("click", function () {
  enterPole.textContent = enterPole.textContent.slice(0, -1) || "0";
});

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (enterPole.textContent === "0") {
      enterPole.textContent = btn.textContent.trim();
    } else {
      enterPole.textContent += btn.textContent.trim();
    }
  });
});

comma.addEventListener("click", function () {
  if (!enterPole.textContent.includes(".")) {
    enterPole.textContent += ".";
  }
});

interest.addEventListener("click", function () {
  enterPole.textContent = (Number(enterPole.textContent) / 100).toString();
});

plus.addEventListener("click", function () {
  firstNumber = Number(enterPole.textContent);
  enterPole.textContent = "0";
  currentOperation = "+";
});

minus.addEventListener("click", function () {
  firstNumber = Number(enterPole.textContent);
  enterPole.textContent = "0";
  currentOperation = "-";
});

multiply.addEventListener("click", function () {
  firstNumber = Number(enterPole.textContent);
  enterPole.textContent = "0";
  currentOperation = "*";
});

divide.addEventListener("click", function () {
  firstNumber = Number(enterPole.textContent);
  enterPole.textContent = "0";
  currentOperation = "/";
});

equal.addEventListener("click", function () {
  let secondNumber = Number(enterPole.textContent);
  let result;

  switch (currentOperation) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = secondNumber === 0 ? "Error" : firstNumber / secondNumber;
      break;
    default:
      result = enterPole.textContent;
  }

  enterPole.textContent = result.toString();
  firstNumber = result;
  currentOperation = "";
});
