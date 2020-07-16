//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

//Exemplo de palíndromo: arara.
    const palavra = "arara"
    let ehPalindromo = false;
//verificaPalindrome("arara");
    function verificaPalindrome(palavra){
        if(palavra === palavra.split('').reverse().join(''))
            console.log(!ehPalindromo)
        else 
            console.log(ehPalindromo);

    }
//Retorno esperado: true

//verificaPalindrome("desenvolvimento");

//Retorno esperado: false

let letras = "Higor";
console.log(letras.split('').reverse().join(''));

verificaPalindrome(palavra);