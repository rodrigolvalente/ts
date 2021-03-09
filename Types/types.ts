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
