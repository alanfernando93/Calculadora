/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var label1 = 0, label2, r;

function init() {
    label2 = document.getElementById('lbl1');
    r = document.getElementById('lbl2');
}

function insert(data) {
    init();
    label2.innerHTML += data.value;
}

function limpiar() {
    document.getElementById('lbl1').innerHTML = "";
    document.getElementById('lbl2').innerHTML = "";
    label1 = 0;
}

function sumar(data) {
    insert(data);
}

function multiplicar(data) {
    insert(data);
}

function dividir(data) {
    insert(data);
}

function restar(data) {
    insert(data);
}

function result(){
    init();
    alert(label2.innerHTML);
    r.innerHTML = parseInt(label2.innerHTML);
}