// String
const nome = "Rodrigo"
let sobrenome: string
sobrenome = "Valente"
let profissao: string = "analista"
let empresa = new String("Picpay")

console.log(nome, sobrenome, profissao, empresa, typeof nome)

// Number
const dia = 30
let mes: number
mes = 4
let ano: number = 1986
let idade = Number(34)

console.log(dia, mes, ano, idade, typeof dia)

// Boolean
const admin = true
let alive: boolean
alive = true
let isWoman: boolean = false
let isTrue: boolean
isTrue = Boolean("0")

console.log(admin, alive, isWoman, isTrue, typeof admin)


// Array
const categorias: string[] = ["RH", "TI", "Fin", "Adm"]
categorias.push("Sec")

const qtdPessoas: Array<number> = [1, 3, 5, 2, 2, 1]
qtdPessoas.pop()

const coisas: Array<number | string> = []
coisas.push("umaString")
coisas.push(123)

console.log(categorias, typeof categorias[1], typeof categorias)
console.log(qtdPessoas, typeof qtdPessoas[1], typeof qtdPessoas)
console.log(coisas, typeof qtdPessoas)

// Tuples
let superset: [string, number, string]
superset = ["Typescript", 2011, "Anders"]

console.log(superset, typeof superset)

// Object

const serverConf: object = {
    serverProvider: "AWS",
    ip: "1.2.3.4",
    hostname: "myServer",
    senha: 12345
}

console.log(serverConf, typeof serverConf)

// Enum

enum Permission {
    ADMIN,
    USER,
    READONLY
}
console.log(Permission)
console.log(Permission.ADMIN)
console.log(Permission.USER)
console.log(Permission.READONLY)
console.log(typeof Permission)

// null

//const meuElemento: HTMLHeadingElement | null = document.querySelector("h2")

let db: string | null = "mysql, 127.0.0.1, pass"
db = null


// undefined
// Quando a variavel é criada e nao foi declarado o valor, ela é automaticamente "undefined"

let variavel
console.log(variavel)

let outraVariavel: string | undefined
if (new Date().getDate() === 15) {
    outraVariavel = "hoje é dia 15"
}
console.log(outraVariavel)

// any
let valor: any;

valor = true
valor = 10
valor = "Rodrigo"
console.log(typeof valor)

// unknown
// Parecido com o any, porem o unknown nao pode ser atribuida a outras variaveis.
let result: unknown;
//let result2: number = result // essa atribuição da erro

// void
const meuConsole: void = console.log("Hello Typescript")
console.log(meuConsole)


// never
let n = 0
function loopInfinito(): never {
    while (true) {
        console.log(n++)
    }
}
//loopInfinito() // Essa função nunca (never) tera retorno


