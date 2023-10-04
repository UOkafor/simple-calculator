let display = document.getElementById('display');
let currentValue = '';
let operator = '';
let result = '';

function appendToDisplay(value) {
    currentValue = currentValue + value;
    display.value = currentValue;
}

function clearDisplay() {
    currentValue = '';
    operator = '';
    result = '';
    display.value = '';
}
function calculateResult() {
    try {
        currentValue = currentValue.replace(/%/g, '/100');
        currentValue = currentValue.replace(/\+\/\-/g, '-1*');
        currentValue = currentValue.replace(/x/g, '*'); 
        currentValue = currentValue.replace(/÷/g, '/'); 
        result = eval(currentValue);
        display.value = result;
        currentValue = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
}
