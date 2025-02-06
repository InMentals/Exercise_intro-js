// create your function here
const lengthReverse = (input) => 
    [input.length, input.split('').reverse().join('')].join(' ');



const input1 = 'string';
//yourFunction(input); // '6 gnirts'
const input2 = 'variable';
//yourFunction(input); // '8 elbairav'
const input3 = 'pointer';
//yourFunction(input); // '7 retniop'


//test
console.log(lengthReverse(input1));
console.log(lengthReverse(input2));
console.log(lengthReverse(input3));