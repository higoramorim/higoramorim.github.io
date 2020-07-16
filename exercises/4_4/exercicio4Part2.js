//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

//Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

//Valor esperado no retorno da função: Fernanda.

let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

const imprimeString = arrayTeste[0].length;
console.log(imprimeString);

const arrayTeste2 = ['José', 'Lucas'];
arrayTeste[0].length > arrayTeste[1].length ? console.log(arrayTeste[0].length): console.log(arrayTeste[1].length)

function imprimeMaiorString(arrayTeste){
    for(let i = 0; i < arrayTeste.length; i++){
        if (arrayTeste[i].length > arrayTeste[i+1].length){
            return arrayTeste[i].length
        }else{
            return arrayTeste[i+1].length
        }
    }
}

imprimeMaiorString(arrayTeste);
console.log(imprimeMaiorString(arrayTeste));


