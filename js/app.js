

function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    if (pin < 999) {
        return pin;
    }
    else {
        document.getElementById('display-pin').value = pin;
    }
}
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})

function verifyPin(event) {
    const pin = document.getElementById('display-pin').value;
    const typed = document.getElementById('typed-numbers').value;
    if (pin == typed) {
        document.getElementById('matched').style.display = "block";
        document.getElementById('notMatched').style.display = "none";

    }
    else {
        document.getElementById('matched').style.display = "none";
        document.getElementById('notMatched').style.display= "block";

    }
}