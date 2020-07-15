//criar uma função de soma para somar todos os elementos multiplos de 3 e 5 
//dentro de uma varivel, denominada limite

//multiplos de 3 => x % 3 === 0
// multiplos de 5 => y % 5 === 0

somar(100);
function somar(limite){
    let Multiplo3 = 0;
    let Multiplo5 = 0;
    for(let i = 0; i <= limite; i += 1){
        if(i % 3 === 0)
            Multiplo3 = Multiplo3 + i;
        else (i % 5 === 0)
            Multiplo5 = Multiplo5 + i;
    }
    console.log(Multiplo5 + Multiplo3);

}