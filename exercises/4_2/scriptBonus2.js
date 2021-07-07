//Ordene o array numbers em ordem 
//decrescente e imprima seus valores;
var a = [15,25,7,5,125,4,89,158];

function ordenacao(a){
  var trocado;
  do{
    trocado = false;
    for (let i = 0; i < a.length -1; i++){
      if(a[i] > a[i+1]){
        let temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        trocado = true;
      }
    }
  }while(trocado);

}
ordenacao(a);
a.reverse();
console.log(a);