let japaoBandeiraCorPredominante = "vermelho";
let brasilBandeiraCorPredominante = "verde";

console.log(japaoBandeiraCorPredominante);
console.log(brasilBandeiraCorPredominante);

let troca = japaoBandeiraCorPredominante;
japaoBandeiraCorPredominante = brasilBandeiraCorPredominante;

brasilBandeiraCorPredominante = troca;

console.log("cor predominante nova do japão é: "+japaoBandeiraCorPredominante);
console.log("cor predominante nova do brasil é: "+brasilBandeiraCorPredominante);