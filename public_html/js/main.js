/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var num1, num2, result;

function init() {
    num1 = document.getElementsByName('num1')[0];
    num2 = document.getElementsByName('num2')[0];
    result = document.getElementsByName('result')[0];
}

function sumar() {
    init();
    if (num1.value.length == 0 && num2.value.length == 0) {
        return;
    }
    result.value = parseInt(num1.value) + parseInt(num2.value);
}

function restar() {
    init();
    if (num1.value.length == 0 && num2.value.length == 0) {
        return;
    }
    result.value = num1.value - num2.value;
}

function multiplicar() {
    init();
    if (num1.value.length == 0 && num2.value.length == 0) {
        return;
    }
    result.value = num1.value * num2.value;
}

function dividir() {
    init();
    if (num1.value.length == 0 && num2.value.length == 0) {
        return;
    }
    result.value = num1.value / num2.value;
}