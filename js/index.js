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

const calculate = function () {
  let secondNumber = Number(enterPole.textContent);
  let result;

  switch (currentOperation) {
    case "plus":
      result = firstNumber + secondNumber;
      break;
    case "minus":
      result = firstNumber - secondNumber;
      break;
    case "multiply":
      result = firstNumber * secondNumber;
      break;
    case "divide":
      result = secondNumber === 0 ? "Error" : firstNumber / secondNumber;
      break;
    default:
      result = secondNumber;
  }

  enterPole.textContent = result.toString();
  firstNumber = result === "Error" ? "" : result;
  return result;
}[(plus, minus, multiply, divide)].forEach((operator) => {
  operator.addEventListener("click", function () {
    if (currentOperation && firstNumber !== "") {
      calculate();
    } else {
      firstNumber = Number(enterPole.textContent);
    }
    enterPole.textContent = "0";
    currentOperation = operator.id;
  });
});

equal.addEventListener("click", function () {
  if (currentOperation && firstNumber !== "") {
    calculate();
    currentOperation = "";
  }
});
