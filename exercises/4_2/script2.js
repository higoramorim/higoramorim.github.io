let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers);
let total = 0;
for (let i=0; i < numbers.length; i++){
    total += numbers[i]
}
console.log(total);

let tot = numbers.reduce(function(tot, numbers){
    return tot + numbers;
},0);
console.log(tot);