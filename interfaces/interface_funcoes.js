"use strict";
var primeiraSoma;
primeiraSoma = function (num1, num2) {
    return num1 + num2;
};
console.log(primeiraSoma(2, 3));
function adicao(num1, num2) {
    return num1 + num2;
}
var retirar = function (num1, num2) { return num1 + num2; };
var calculadora;
calculadora = {
    somar: adicao,
    subtrair: retirar,
    multiplicar: function (num1, num2) { return num1 * num2; },
    dividir: function (num1, num2) { return num1 / num2; },
};
