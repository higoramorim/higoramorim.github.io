let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

Array.min = function(numbers){
    return Math.min.apply(Math, numbers);
}
console.log(Array.min(numbers));

