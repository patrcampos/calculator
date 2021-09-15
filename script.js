let display = document.querySelector('.display')

function insert(num) {

    display.innerHTML += num;
}

function clean() {

    display.innerHTML = "";
}

function backspace() {

    let apagar = display.innerHTML;
    display.innerHTML = apagar.substring(0, apagar.length -1);
}

function calcular() {

    let resultado = display.innerHTML;
    if(resultado) {
        display.innerHTML = eval(resultado);
    } else {
        display.innerHTML = "0";
    }
}