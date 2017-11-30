var aux = "", label2, r, array = [], num1, num2, signo = "", sw = 0;

function init() {
    label2 = document.getElementById('lbl1');
    r = document.getElementById('lbl2');
}

function insert(data) {
    init();
    if (!isNaN(data.value)) {
        aux += data.value;
    }
    if (sw == 1) {
        label2.innerHTML = r.innerHTML;
        sw = 0;
    }
    label2.innerHTML += data.value;
}

function limpiar() {
    document.getElementById('lbl1').innerHTML = "";
    document.getElementById('lbl2').innerHTML = "0";
    aux = "";
    array = [];
}

function sumar(data) {
    array.push(aux);
    array.push(data.value);
    aux = "";
    insert(data);
}

function multiplicar(data) {
    array.push(aux);
    array.push(data.value);
    aux = "";
    insert(data);
}

function dividir(data) {
    array.push(aux);
    array.push(data.value);
    aux = "";
    insert(data);
}

function restar(data) {
    array.push(aux);
    array.push(data.value);
    aux = "";
    insert(data);
}

function result() {
    var indiceX, indiceY;
    array.push(aux);
    aux = "";
    while (array.includes('x') || array.includes('/')) {
        indiceX = array.includes('x') ? array.indexOf('x') : null;
        indiceY = array.includes('/') ? array.indexOf('/') : null;
        if (indiceX != null && indiceY != null) {
            if (indiceX < indiceY) {
                signo = "x";
                array[indiceX - 1] = simplificar(indiceX);
            } else {
                signo = "/"
                array[indiceY - 1] = simplificar(indiceY);
            }
        } else {
            if (indiceX != null) {
                signo = "x";
                array[indiceX - 1] = simplificar(indiceX);
            } else {
                signo = "/"
                array[indiceY - 1] = simplificar(indiceY);
            }
        }
    }
    while (array.includes('+') || array.includes('-')) {
        indiceX = array.includes('+') ? array.indexOf('+') : null;
        indiceY = array.includes('-') ? array.indexOf('-') : null;
        if (indiceX != null && indiceY != null) {
            if (indiceX < indiceY) {
                signo = "+";
                array[indiceX - 1] = simplificar(indiceX);
            } else {
                signo = "-"
                array[indiceY - 1] = simplificar(indiceY);
            }
        } else {
            if (indiceX != null) {
                signo = "+";
                array[indiceX - 1] = simplificar(indiceX);
            } else {
                signo = "-"
                array[indiceY - 1] = simplificar(indiceY);
            }
        }
    }
    init();
    sw = 1;
    r.innerHTML = array[0];
    aux = array[0];
    array.splice(0);
}

function simplificar(indice) {
    num1 = array[indice - 1];
    num2 = array[indice + 1];
    array.splice(indice, 2);
    return operacion();
}

function operacion() {
    switch (signo) {
        case "+":
            return (parseInt(num1) + parseInt(num2));
            break;
        case "-":
            return (num1 - num2);
            break;
        case "x":
            return (num1 * num2);
            break;
        case "/":
            return (num1 / num2);
            break;
    }
}