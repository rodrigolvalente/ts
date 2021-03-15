"use strict";
// String
var nome = "Rodrigo";
var sobrenome;
sobrenome = "Valente";
var profissao = "analista";
var empresa = new String("Picpay");
console.log(nome, sobrenome, profissao, empresa, typeof nome);
// Number
var dia = 30;
var mes;
mes = 4;
var ano = 1986;
var idade = Number(34);
console.log(dia, mes, ano, idade, typeof dia);
// Boolean
var admin = true;
var alive;
alive = true;
var isWoman = false;
var isTrue;
isTrue = Boolean("0");
console.log(admin, alive, isWoman, isTrue, typeof admin);
// Array
var categorias = ["RH", "TI", "Fin", "Adm"];
categorias.push("Sec");
var qtdPessoas = [1, 3, 5, 2, 2, 1];
qtdPessoas.pop();
var coisas = [];
coisas.push("umaString");
coisas.push(123);
console.log(categorias, typeof categorias[1], typeof categorias);
console.log(qtdPessoas, typeof qtdPessoas[1], typeof qtdPessoas);
console.log(coisas, typeof qtdPessoas);
// Tuples
var superset;
superset = ["Typescript", 2011, "Anders"];
console.log(superset, typeof superset);
// Object
var serverConf = {
    serverProvider: "AWS",
    ip: "1.2.3.4",
    hostname: "myServer",
    senha: 12345
};
console.log(serverConf, typeof serverConf);
// Enum
var Permission;
(function (Permission) {
    Permission[Permission["ADMIN"] = 0] = "ADMIN";
    Permission[Permission["USER"] = 1] = "USER";
    Permission[Permission["READONLY"] = 2] = "READONLY";
})(Permission || (Permission = {}));
console.log(Permission);
console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READONLY);
console.log(typeof Permission);
// null
//const meuElemento: HTMLHeadingElement | null = document.querySelector("h2")
var db = "mysql, 127.0.0.1, pass";
db = null;
// undefined
// Quando a variavel é criada e nao foi declarado o valor, ela é automaticamente "undefined"
var variavel;
console.log(variavel);
var outraVariavel;
if (new Date().getDate() === 15) {
    outraVariavel = "hoje é dia 15";
}
console.log(outraVariavel);
// any
var valor;
valor = true;
valor = 10;
valor = "Rodrigo";
console.log(typeof valor);
// unknown
// Parecido com o any, porem o unknown nao pode ser atribuida a outras variaveis.
var result;
//let result2: number = result // essa atribuição da erro
// void
var meuConsole = console.log("Hello Typescript");
console.log(meuConsole);
// never
var n = 0;
function loopInfinito() {
    while (true) {
        console.log(n++);
    }
}
//loopInfinito() // Essa função nunca (never) tera retorno
