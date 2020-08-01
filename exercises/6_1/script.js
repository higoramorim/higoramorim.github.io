const states = ['AM', 'AC', 'MG', 'RJ', 'SP', 'TO', 'RO', 'RR', 'PA', 'RS', 'PR', 'PA', 'MA', 'PI','GO', 'DF','BA', 'CE', 'MT','MS','ES','SC','AL','AP','PB','RN','SE'];
const orderedStates = states.sort();

const list = document.getElementById("option-states")

function statesTarget(){
for (let index = 0; index < orderedStates.length; index++) {
    element = document.createElement('option');
    element.innerHTML = orderedStates[index];
    list.appendChild(element);
}
}






window.onload =  ()=>{
    statesTarget();
}