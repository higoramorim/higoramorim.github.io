//exercicio nota escolar
//obter media a partir de um array

const array = [80,85,0] //input de notas

function mediaDoAluno(notas){
    const media = calcularMedia(notas)
    if (media < 59) return 'E';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A';
}

function calcularMedia(array){
    let soma = 0;
    for (let valor of array){
        soma += valor;
    }
    return soma / (array.length);

}

console.log("média do aluno: "+ mediaDoAluno(array));