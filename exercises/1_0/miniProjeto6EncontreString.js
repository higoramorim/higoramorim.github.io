//crie uma funçao que leia as propriedades de um objeto
//exibir somente as propriedades do tipo [string] que estão nesse objeto

const filme = {
    titulo : "Vingadores",
    ano : 2008,
    diretor : "soy jo",
    personagem : "Iron man"
}

console.log(typeof(filme));
var i = 7
console.log(typeof(i));

const movie = {
    titulo: "Matrix",
    ano: 2008,
    diretor: "Me",
    personagem: "Neo" 
}

exibirPropriedades(filme);
function exibirPropriedades(obj){
    for(prop in obj)
        if(typeof obj[prop] === "string")
            console.log(prop, obj[prop])

}

exibirPropriedades2(movie);
function exibirPropriedades2(obj){
    for(prop in obj)
        if(typeof obj[prop] === "number")
            console.log(prop, obj[prop])

}