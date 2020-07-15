//velocidade maxima de até 70km/h
//a cada 5km/h acima de 70km/h => o motorista recebe 1 ponto na CNH de sanção
//Math.Floor() arredondar valores para baixo
//caso pontuação seja maior do que 12 => carteira retida

verificarVelocidade(300);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5
    if(velocidade <= velocidadeMaxima )
    console.log('ok');
    else{
        const pontos= Math.floor(((velocidade - velocidadeMaxima)/kmPorPonto));
        if (pontos >= 12)
        console.log("carteira retida");
        else
        console.log('Pontos',pontos);
    }
}
