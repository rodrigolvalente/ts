interface IModelo {
    id: number
    created_at: number
    updated_at: Date
}

interface IPessoa extends IModelo {
    nome: string
    idade?: number
}

interface IUsuario extends IPessoa {
    email: string
    senha: string
}

const joao: IUsuario = {
    email: "joao@email",
    id: 1,
    nome: "Joao",
    senha: "123654",
    idade: 20,
    created_at: new Date().getTime(),
    updated_at: new Date()
}

console.log(joao)