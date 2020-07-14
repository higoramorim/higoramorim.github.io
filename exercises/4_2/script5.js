//Utilizando for, descubra qual o 
//maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    Array.max = function(numbers){
        return Math.max.apply(Math, numbers);
    }
console.log(Array.max(numbers));


for (i = 0; i < numbers.length; i++){
    if (numbers[0] > numbers[1]){
        console.log(numbers[0]);
    }else if (numbers[0] > numbers[2]){
        console.log(numbers[0]);
    }else if (numbers[0] > numbers[3]){
        console.log(numbers[0]);
    }else if (numbers[0] > numbers[4]){
        console.log(numbers[0]);
    }else if (numbers[0] > numbers[5]){
        console.log(numbers[0]);
    }else if (numbers[0] > numbers[6]){
        console.log(numbers[0]);
    }else if (numbers[0] > numbers[7]){
        console.log(numbers[0]);
    }else if (numbers[0] > numbers[8]){
        console.log(numbers[0]);
    }else if (numbers[0] > numbers[9]){
        console.log(numbers[0]);
}
}