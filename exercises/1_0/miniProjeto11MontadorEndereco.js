// js - montador de endereço

//cria obj endereço que contenha:
//rua, cidade, cep, exibir endereço
//function exibirEndereço(endereço)

let endereco = {
    rua: 'a',
    cidade: 'b',
    cep: 'c'
};

function exibirEndereço(endereco){
    for (let chave in endereco)
        console.log(chave, endereco[chave]);
}

exibirEndereço(endereco);