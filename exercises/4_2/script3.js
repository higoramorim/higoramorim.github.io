let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers);

let tot = numbers.reduce(function(tot, numbers){
    return tot + numbers;
},0);
console.log(tot);

let media_numbers = tot / numbers.length
console.log(media_numbers);