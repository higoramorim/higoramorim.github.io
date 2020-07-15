//criar um método para ler as propriedades de um objeto
//e exibir somente propriedades do tipo string que estão nesse objeto

const filme = {
    titulo : "meu filme",
    ano : 2022,
    diretor : "Higor",
    ator : "meu filho"
}

exibirPropriedades(filme);

function exibirPropriedades(obj){
    for(prop in obj)
        if(typeof obj[prop] === "string")
            console.log(prop, obj[prop])

}