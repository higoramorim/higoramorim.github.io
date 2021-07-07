//realizar tarefa e não devolver nada

function dizerNome(){
    console.log('e aí');
}

dizerNome();

//faz o calculo e retorna o valor para quem o invoca
function multiplarPorDois(valor){
    return valor * 2;
}

//console.log(multiplarPorDois(5));

let resultado = multiplarPorDois(15);
console.log(resultado);