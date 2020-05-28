// The second argument/parameter is expected to be a (callback) function

//const findWaldo = function(names, found) {
  //for (let i = 0; i < names.length; i++) {
    //let name = names[i];
    //if (name === "Waldo") {
      //found();   // execute callback
    //}
  //}
//}

//const actionWhenFound = function() {
  //console.log("Found him!");
//}
//findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

//  1.Modify the actionWhenFound function to let it receive and use the index
//  2.Modify the findWaldo function so that it passes the index array to the callback
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

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound); //function actionWhenFound - passed as argument in function findWaldo

