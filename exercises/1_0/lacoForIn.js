//laço for in

const pessoa = {
    nome: "Higor",
    idade: 35,
    país: "Brasil",
    cidade: "São Paulo"
};

//key-value
for(let chave in pessoa){
    console.log(pessoa[chave]);//somente valores das chaves
}

for(let chave in pessoa){
    console.log(chave); //spmente as chaves
}

const imprimePessoa = console.log(pessoa);

//com arrays
const palhetaCores = ['azul', 'branco','cinza','laranja', 'marrom','verde', 'vermelho','violeta'];
for(let indice in palhetaCores){
    console.log(indice, palhetaCores[indice]);
}