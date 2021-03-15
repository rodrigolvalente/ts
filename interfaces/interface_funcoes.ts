interface ISoma {
    (num1: number, num2: number): number
}

let primeiraSoma: ISoma
primeiraSoma = (num1: number, num2: number): number => {
    return num1 + num2
}
console.log(primeiraSoma(2, 3))



function adicao(num1: number, num2: number) {
    return num1 + num2
}

const retirar = (num1: number, num2: number): number => { return num1 + num2 }

interface ICalculos {
    somar(a: number, b: number): number
    subtrair(a: number, b: number): number
    multiplicar(a: number, b: number): number
    dividir(a: number, b: number): number
}

let calculadora: ICalculos
calculadora = {
    somar: adicao,
    subtrair: retirar,
    multiplicar: (num1: number, num2: number): number => { return num1 * num2 },
    dividir: (num1: number, num2: number): number => { return num1 / num2 },
}


