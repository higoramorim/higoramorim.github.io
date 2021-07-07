//criar função para mostrar os números primos

//primos divisiveis por 1 e ele próprio
//2 é primos
//não multiplo de outros números

exibirNumerosPrimos(27);
function exibirNumerosPrimos(limite){
    for(let numero = 2; numero <= limite; numero++){
        if (NumeroPrimo(numero)) console.log(numero);
    }
}

function NumeroPrimo(numero){
    for (let divisor = 2; divisor < numero; divisor++){
        if (numero % divisor === 0){
            return false;
        }
    }
    return true;
}