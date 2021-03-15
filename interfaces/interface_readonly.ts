interface ICursos {
    readonly titulo: string
    descricao?: string
    preco: number
    cargaHoraria: number
    classificacao: number
}

const curso: ICursos = {
    titulo: "TS",
    descricao: "Curso de Ts",
    preco: 100,
    cargaHoraria: 40,
    classificacao: 10
}
console.log(curso)

// curso.titulo = "Typescript" // Vai dar erro
console.log(curso)