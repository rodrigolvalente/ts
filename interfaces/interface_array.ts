interface ICategoria {
    nome: string
    id: number
    categoriaPai?: ICategoria
}

const frontend: ICategoria = {
    nome: "Frontend",
    id: 1
}

const backend: ICategoria = {
    nome: "Backend",
    id: 2
}

interface IMenu {
    categorias: ICategoria[]
}

let menu: IMenu = {
    categorias: [frontend, backend]
}

//-------------//
interface ITodo {
    [indice: number]: string
}

let minhasTarefas: ITodo

minhasTarefas = ["Estudar", "Comer", "Cagar"]