"use strict";
function somarRenda() {
    var meses = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        meses[_i] = arguments[_i];
    }
    return meses.reduce(function (rendaTotal, rendaAtual) { return rendaAtual + rendaTotal; }, 0);
}
console.log(somarRenda(10, 15, 20));
