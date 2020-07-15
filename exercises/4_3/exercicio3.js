// 3- Agora inverta o lado do triângulo. 
//Por exemplo:

//n = 5

//     *
//    **
//   ***
//  ****
// *****

/*
    for(let linha = 0; linha <= linhas; linha += 1){
        let padrao = ''+'*';
        for(let i = 0;i < linha; i+=1){
            padrao += '';
        }
        console.log(padrao);   
    }*/

let padrao = '';
let resultado = '*';
asteristicosExibir(5);

function asteristicosExibir(linhas){
    for(let i = 0; i < linhas; i += 1){
        padrao += '';
        for(let linha = 0; linha <= linhas; linha +=1){
            let padrao = ''+'*';
        console.log(padrao);
        
    }
}
    