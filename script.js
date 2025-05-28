
const display = document.getElementById('display');

function appendValue(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = '0';
}


function calculate() {
  try {
    let expression = display.innerText;
    let result = eval(expression);
    display.innerText = result;
  } catch (error) {
    display.innerText = 'Error';
  }
}

function squareNumber() {
  try {
    let num = parseFloat(display.innerText);
    let squared = num * num;
    display.innerText = squared;
  } catch (error) {
    display.innerText = 'Error';
  }
}
