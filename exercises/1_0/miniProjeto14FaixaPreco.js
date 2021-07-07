//mini projeto - faixa de preço

//crie um array de obj de faixa de preços para que ela possa ser 
//usada em um site como por exemplo um mercado livre

//primeira opção
let faixas = [
    {tooltip: 'ate $700', minimo: 0, máximo: 700},
    {tooltip: 'de $701 ate $1000', minimo:701, máximo:1000},
    {tooltip: 'de $1001 ou mais', minimo: 1001, máximo: 999999}
]

//segunda opção
function criaFaixaPreco (tooltip, minimo, maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixaPreco('faixa 1: ',1, 700),
    criaFaixaPreco('faixa 2: ', 701, 1000),
    criaFaixaPreco('faixa 3: ', 1001, 99999)
]

//terceira opcao

function FaixaPreco(tooltip, minimo, maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}
let faixas3 = [
    new FaixaPreco('a', 10, 20),
    new FaixaPreco('b', 20, 30),
    new FaixaPreco('c',30, 40)
]

console.log(faixas);
console.log(faixas2);
console.log(faixas3);