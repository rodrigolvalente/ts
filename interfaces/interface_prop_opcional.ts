interface IProdutos {
    nome: string
    preco: number
    descricao?: string /* <==== propriedade opcional*/
    dataValidade: Date
}

const produtoDados: IProdutos = {
    nome: "PS5",
    preco: 5000,
    descricao: "Playstation 5 4K",
    dataValidade: new Date()
}

const produto2Dados: IProdutos = {
    nome: "XBox Series X",
    preco: 4500,
    dataValidade: new Date()
}

console.log(produtoDados)
console.log(produto2Dados)