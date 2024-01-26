const resultElement = document.getElementById("result")
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'

// console.log(resultElement.textContent)
// resultElement.textContent = 12

plusBtn.onclick = function () {
    action = '+'

}

minusBtn.onclick = function () {
    action = '-'

}

function printResult() {
    
}

submitBtn.onclick = function () {
    if (action == '+') {
        const resultPlus = Number(input1.value) + Number(input2.value)
        if (resultPlus < 0) {
            resultElement.style.color = 'red'
        } else {
            resultElement.style.color = 'green'
        }
        resultElement.textContent = resultPlus
    } else if (action == '-') {
        const resultMinus = Number(input1.value) - Number(input2.value)
        if (resultMinus < 0) {
            resultElement.style.color = 'red'
        } else {
            resultElement.style.color = 'green'
        }
        resultElement.textContent = resultMinus
    }   
}