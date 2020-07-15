// 3- Agora inverta o lado do triângulo. 
//Por exemplo:

//n = 5

//     *
//    **
//   ***
//  ****
// *****

let padrao = '';
let resultado = '*';
console.log(' '+' '+' '+' '+resultado);

for( i = 1; i <= 2; i += 1){
    padrao += '*';
}
console.log(' '+padrao);

for( i = 1; i <= 3; i += 1){
    padrao += '*';
}
console.log(' '+' '+padrao);

for( i = 1; i <= 4; i += 1){
    padrao += '*';
}
console.log(padrao);

for( i = 1; i <= 5; i += 1){
    padrao += '*';
}
console.log(padrao);