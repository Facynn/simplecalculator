const resultScreen = document.querySelector('.calculator__result-screen');
const buttonEraser = document.querySelector('.eraser');
const buttons = document.querySelectorAll('.calculator__column button');

const buttonsArray = Array.from(buttons);

buttonsArray.forEach(button => {
    button.addEventListener('click', () => {
       calculator(button, resultScreen);
    })
})

function calculator(button, resultScreen) {
    switch (button.innerHTML) {
        case '%':
            resultScreen.innerHTML = resultScreen.innerHTML+'/';
        break;
        case 'x':
            resultScreen.innerHTML = resultScreen.innerHTML+'*';
        break;
        case '=':
            calculate(resultScreen);
        break;
        default:
            update(resultScreen, button)
        break;
    }
}

function calculate(resultScreen) {
    try {
        resultScreen.innerHTML = eval(resultScreen.innerHTML);
    } catch {
        resultScreen.innerHTML = 'Error';
    }
}

function update(resultScreen, button) {
    if(resultScreen.innerHTML == 0) {
        resultScreen.innerHTML = '';
    }

    if(resultScreen.innerHTML === 'Error') {
        resultScreen.innerHTML = '';
    }
    resultScreen.innerHTML += button.innerHTML;
}

buttonEraser.addEventListener('click', () => {
    resultScreen.innerText = '0';
})

