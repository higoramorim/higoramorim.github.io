//recebe uma quantidade de valores para avaliar se o valor é par ou impar

exibirTipo(10)
    function exibirTipo(limite){
        for(let i = 0; i <= limite; i+= 1){
            if( i % 2 === 0)
                console.log(i, "é par");
            else
                console.log(i, "é impar");
        }
    }
