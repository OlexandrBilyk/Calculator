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

const calculate = function () {
  try {
    const expression = enterPole.textContent;
    const result = math.evaluate(expression);
    enterPole.textContent = result;
  } catch (error) {
    enterPole.textContent = "Erorr";
  }
};

clearAll.addEventListener("click", function () {
  enterPole.textContent = "0";
  currentOperation = "";
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
  const lastNumber = enterPole.textContent.split(/[\+\-\*\/]/).pop();
  if (!lastNumber.includes(".")) {
    enterPole.textContent += ".";
  }
});

interest.addEventListener("click", function () {
  enterPole.textContent = (Number(enterPole.textContent) / 100).toString();
});

[plus, minus, multiply, divide].forEach((operator) => {
  operator.addEventListener("click", function () {
    const lastOppeartion = enterPole.textContent.slice(-1);
    const operators = ["+", "-", "*", "/"];

    if (operators.includes(lastOppeartion)) {
      return;
    }

    currentOperation = operator.textContent.trim();
    enterPole.textContent += currentOperation;
  });
});

equal.addEventListener("click", function () {
  calculate();
  currentOperation = "";
});
