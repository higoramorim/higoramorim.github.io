//js mini projeto - montador postagem blog

//crie um obj de postagem de blog que vai conter as seguintes propriedades

//postagem

/*
titulo
mensagem
autor
visualizações
comentarios
    (autor, mensagem)
estaAoVivo
*/

let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizacoes: 1000,
    comentarios :[
        {autor: 'a', mensagem: 'b'},
        {autor: 'a', mensagem: 'b'}
    ],
    estaAoVivo: true
}

console.log(postagem);