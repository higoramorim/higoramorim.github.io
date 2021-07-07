//factory functions


function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria ){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log("fazendo ligação...")
        }

    }
}

const celular1 = criarCelular("motorola", "150x75","5000");
console.log(celular1);

const celular2 = criarCelular("motorola", "150x75","5000");
console.log(celular1);