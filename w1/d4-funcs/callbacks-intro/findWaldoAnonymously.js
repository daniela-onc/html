
const findWaldo = function(array, found) {
  for (let i = 0; i < array.length; i++) {
     if(array[i] === 'Waldo') {
      return found(i);   // execute callback with argument (index)
     } else {
  }
}
console.log ('Waldo not found!')
}
const actionWhenFound = function(index) { 
 console.log('Found him!'); 
 console.log("Found Waldo at index" + index + " !");
}

//findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound); //function actionWhenFound - passed as argument in function findWaldo (function <> anonymous)


//Refactor the code by making the callback anonymous.
findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Waldo is located at:", index);
});
