var numbers = [15,25,7,5,125,4,89,158];
let new_numbers = numbers;
//new_numbers=[ 15*25, 25*7, 7*5, 5*125, 125*4, 4*89, 89*158]
//new numbers= [0*1, 1*2, ... n*n+1], onde n=indice

//utilize for e push

console.log(new_numbers);
function ordenacao(a){
    var multiplicador;
    do{
      multiplicador = false;
      for (let i = 0; i < a.length -1; i++){
        if(new_numbers[i] = new_numbers[i]*new_numbers[i+1]){
          multiplicador = true;
        }
      }
    }while(multiplicador);
  
  }
console.log(new_numbers);