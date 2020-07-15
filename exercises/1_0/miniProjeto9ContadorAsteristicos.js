//criar uma função que exibe a quantidade  de (*) que aquela linha possui


exibirAsteristicos(8);
function exibirAsteristicos(linhas){
    let padrao = '';
    for(let asteristico = 1; asteristico <= linhas; asteristico +=1){
        padrao += '*';
        console.log(padrao);
    }
}