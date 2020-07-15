//escreva uma função que use 2 números e retorne o maior deles

let valorMaior = maiorValor(5,47);
console.log(valorMaior);

function maiorValor(valor1, valor2){
    if(valor1 > valor2)
    return valor1;
    else
    return valor2;
}

//or

let biggerValue = biggerNum(1,2);
console.log(biggerValue);

function biggerNum(value1, value2){
    return value1 > value2 ? value1: value2 ;
}