"use strict";
function mostrarMensagem(texto) {
    console.log(texto);
    return true;
}
mostrarMensagem("Eu");
// Arrow Function
var show = function (codigo) {
    return codigo;
};
show(10);
// Valor padrao
function sendEmail(para, assunto, remetente) {
    if (assunto === void 0) { assunto = "sem assunto"; }
    console.log({ para: para, assunto: assunto, remetente: remetente });
}
sendEmail("rodrigo@email.com");
