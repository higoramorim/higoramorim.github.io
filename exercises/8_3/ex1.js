    
const assert = require('assert');
//Dada uma matriz de matrizes, transforme em uma única matriz.

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  return arrays.reduce((acc, curr)=> acc.concat(curr), []);
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);