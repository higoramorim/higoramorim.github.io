//input numero - divisivel por 3 => Fizz
//input numero - divisivel por 5 => Buzz
//input numero - divisivel por 3 e 5=> FizzBuzz
//não divisivel por nenhum => retorna numero
//não é um numero => 'Não é um número'

const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
    return 'Não é um número';
    if (entrada % 3 === 0 && entrada % 5 === 0)
    return "FizzBuzz";
    if (entrada % 3 === 0)
    return "Fizz";
    if (entrada % 5 === 0)
    return "Buzz";
    return entrada;

}