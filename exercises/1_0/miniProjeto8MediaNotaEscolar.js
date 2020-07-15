//exercicio nota escolar
//obter media array

//0-59: E
//60-69: D
//70-79: C
//80-89: B
//90-100: A

const array = [70,0,90] //notas do aluno

function calcularMedia(array){ //calcula media
    let soma = 0;
    for (let valor of array){
        soma += valor;
    }
    return soma / (array.length);
}


function mediaDoAluno(notas){
    const media = calcularMedia(notas);
    if (media < 59) return 'E';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A';
}

console.log("média final do aluno é: " + mediaDoAluno(array));



