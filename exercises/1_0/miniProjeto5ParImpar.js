//valor é par ou impar

exibirTipo(20);
function exibirTipo(limite){
    for(let i = 0; i <= limite; i+=1){
        if(i % 2 === 0 ){
            console.log(i, " é par");
        }else{
            console.log(i, " é impar");
        }
    }
}