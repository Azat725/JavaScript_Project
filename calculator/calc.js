// Получаем ссылки на DOM-элементы //
const resultElement = document.getElementById("result");
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
let action = '+';

// Определяем обработчики событий для кнопок операций //
plusBtn.addEventListener('click', () => {
    action = '+';
});

minusBtn.addEventListener('click', () => {
    action = '-';
});

multiplyBtn.addEventListener('click', () => {
    action = 'x';
});

divideBtn.addEventListener('click', () => {
    action = '/';
});

// Функция для вывода результата с учетом знака //
function printResult(result) {
    resultElement.style.color = result < 0 ? 'red' : 'green';
    resultElement.textContent = result;
}

// Функция для выполнения операций с числами//
function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value);
    const num2 = Number(inp2.value);
    if (actionSymbol === '+') {
        return num1 + num2;
    } else if (actionSymbol === '-') {
        return num1 - num2;
    } else if (actionSymbol === 'x') {
        return num1 * num2;
    } else if (actionSymbol === '/') {
        return num1 / num2;
    }
}

// Обработчик события для кнопки "Вычислить" //
submitBtn.addEventListener('click', () => {
    const result = computeNumbersWithAction(input1, input2, action);
    printResult(result);
});