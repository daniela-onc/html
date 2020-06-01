//recursive function
//Pseudo Code
//if n > 1: (recursive case)    return n + sum of all nr from 1 to (n - 1)
//if n === 1: (base case)   return 1

function sumToOne(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumToOne(n - 1);
}

console.log(sumToOne(4)); //return 10
