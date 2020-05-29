const args = process.argv;
const numbers = args.slice(2, args.length);
let reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(typeof numbers[0], numbers[1]);
let sum = parseInt(numbers[0], 10) + parseInt(numbers[1], 10);
//var integer = parseInt(text, 10);//

console.log(sum);
let sumNew = numbers.reduce((accumulator, currentValue) => {
return accumulator + parseInt(currentValue, 10)
}, 0);
console.log(sumNew);