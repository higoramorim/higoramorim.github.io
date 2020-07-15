//2- Para o segundo exercício, faça o mesmo que 
//antes, mas que imprima um triângulo retângulo 
//com 5 asteriscos de base. Por exemplo:

//n = 5

// *
// **
// ***
// ****
// *****

exibirAsteristicos(5);

function exibirAsteristicos(linhas){
    let padrao = ''; //vazio
    for(let linha = 1; linha <= linhas; linha += 1){
        padrao += '*';
        console.log(padrao);
    }
}

//ou

asteristicosExibir(5);

function asteristicosExibir(linhas){
    for(let linha = 1; linha <= linhas; linha += 1){
        let padrao = '';
        for(let i = 0;i < linha; i+=1){
            padrao += '*';
        }
        console.log(padrao);   
    }
}