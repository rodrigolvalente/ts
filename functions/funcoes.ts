function mostrarMensagem(texto: string): boolean {
    console.log(texto)
    return true
}

mostrarMensagem("Eu")

// Arrow Function
const show = (codigo: number): number => {

    return codigo
}

show(10)

// Valor padrao
function sendEmail(
    para: string,
    assunto: string = "sem assunto",
    remetente?: string
): void {

    console.log({ para, assunto, remetente })
}
sendEmail("rodrigo@email.com")
