//criar função somar que retorna a soma de todos os multiplos de 3 e 5 dentro de um limite

//multiplos de 3: 3,6,9...
// multiplos de 5: 5,10...
//somando os multiplos
//guarde os multiplos de 3 
//guarde os multiplos de 5
//some ambos

somar(10);
function somar(limite){
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;
    for(i = 0; i <= limite; i+=1){
        if(i % 3 === 0)
            multiplosDe3 += i;
        if(i % 5 === 0)
            multiplosDe5 += i;
    }
    console.log(multiplosDe3 + multiplosDe5);
}
