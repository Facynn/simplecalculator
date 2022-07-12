const resultScreen = document.querySelector('.result');
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
        case '÷':
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

// Funciones con teclado.
window.onkeydown = pressKey;

function pressKey() {
    if(resultScreen.innerHTML == 0) {
        resultScreen.innerHTML = '';
    }
    switch(event.keyCode) {
        case 8:
            resultScreen.innerHTML = '0';
        break;
        case 13:
            calculate(resultScreen)
        break;
        case 48:
            resultScreen.innerHTML = resultScreen.innerHTML+'0';
        break;
        case 49:  
            resultScreen.innerHTML = resultScreen.innerHTML+'1';
        break;
        case 50:
            resultScreen.innerHTML = resultScreen.innerHTML+'2';
        break;
        case 51:
            resultScreen.innerHTML = resultScreen.innerHTML+'3';
        break;
        case 52:
            resultScreen.innerHTML = resultScreen.innerHTML+'4';
        break;
        case 53:
            resultScreen.innerHTML = resultScreen.innerHTML+'5';
        break;
        case 54:
            resultScreen.innerHTML = resultScreen.innerHTML+'6';
        break;
        case 55:
            resultScreen.innerHTML = resultScreen.innerHTML+'7';
        break;
        case 56:
            resultScreen.innerHTML = resultScreen.innerHTML+'8';
        break;
        case 57:
            resultScreen.innerHTML = resultScreen.innerHTML+'9';
        break;
        case 67:
            resultScreen.innerHTML = '0';
        break;
        case 88:
            resultScreen.innerHTML = resultScreen.innerHTML+'*';
        break;
        case 96:
            resultScreen.innerHTML = resultScreen.innerHTML+'0';
        break;
        case 97:
            resultScreen.innerHTML = resultScreen.innerHTML+'1';
        break;
        case 98:
            resultScreen.innerHTML = resultScreen.innerHTML+'2';
        break;
        case 99:
            resultScreen.innerHTML = resultScreen.innerHTML+'3';
        break;
        case 100:
            resultScreen.innerHTML = resultScreen.innerHTML+'4';
        break;
        case 101:
            resultScreen.innerHTML = resultScreen.innerHTML+'5';
        break;
        case 102:
            resultScreen.innerHTML = resultScreen.innerHTML+'6';
        break;
        case 103:
            resultScreen.innerHTML = resultScreen.innerHTML+'7';
        break;
        case 104:
            resultScreen.innerHTML = resultScreen.innerHTML+'8';
        break;
        case 105:
            resultScreen.innerHTML = resultScreen.innerHTML+'9';
        break;
        case 106:
            resultScreen.innerHTML = resultScreen.innerHTML+'.';
        break;
        case 107:
            resultScreen.innerHTML = resultScreen.innerHTML+'+';
        break;
        case 109:
            resultScreen.innerHTML = resultScreen.innerHTML+'-';
        break;
        case 111:
            resultScreen.innerHTML = resultScreen.innerHTML+'/';
        break;
        case 187:
            resultScreen.innerHTML = resultScreen.innerHTML+'+';
        break;
        case 189:
            resultScreen.innerHTML = resultScreen.innerHTML+'-';
        break;
        case 190:
            resultScreen.innerHTML = resultScreen.innerHTML+'.';
        break;
    }
    console.log(event.keyCode)
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

// emojis
twemoji.parse(document.body);
