const output = document.getElementById('output');

function appendToDisplay(input) {
    output.value += input;
}
function clearDisplay() {
    output.value = '';
}
function calculate() {
    try {
        output.value = eval(output.value)
    } catch (error) {
        output.value = 'Error'
    }
    
}