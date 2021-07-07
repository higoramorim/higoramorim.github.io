//verbo + substantivo

let corParede = "branca"; //cor default
function resetaCor(cor, tonalidade){
    corParede = cor + tonalidade;
}
console.log(corParede);
resetaCor("cor: vermelho"," tonalidade: ferrari");
console.log(corParede);