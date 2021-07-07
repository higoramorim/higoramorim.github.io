//criar uma função que exibe a quantidade de asteristicos que a linha possui

exibirAsteristicos(4);

function exibirAsteristicos(linhas){
    let padrao = '';
    for(let linha = 1; linha <= linhas; linha++){
        padrao += '*';
        console.log(padrao);
    }
}