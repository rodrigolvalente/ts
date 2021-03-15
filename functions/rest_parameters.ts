function somarRenda(...meses: number[]): number {
    return meses.reduce((rendaTotal, rendaAtual) => rendaAtual + rendaTotal, 0)
}

console.log(somarRenda(10, 15, 20))
