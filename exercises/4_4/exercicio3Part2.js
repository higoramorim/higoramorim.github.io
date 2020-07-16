//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

//Array de teste: [2, 4, 6, 7, 10, 0, -3];.

//Valor esperado no retorno da função: 6.

let myArray = [2,5,47,0,8];

let min = myArray.reduce(function(a,b,){
    return Math.min(a,b);
});

console.log(min);