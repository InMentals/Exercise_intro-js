
// create your function here
const reformat = (input) => input.toString().split('').join('-');


const input = 10;
//yourFunction(input); // '1-0'

const secondInput = 1;
//yourFunction(input); // '1'

const thirdInput = 11234;
//yourFunction(input); // '1-1-2-3-4'


//test
console.log(reformat(input));
console.log(reformat(secondInput));
console.log(reformat(thirdInput));