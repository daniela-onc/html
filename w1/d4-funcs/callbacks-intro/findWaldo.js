// The second argument/parameter is expected to be a (callback) function

const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found();   // execute callback
    }
  }
}

const actionWhenFound = function() { //function actionWhenFound =callback function. Is executed when a specific event occurs
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound); //function actionWhenFound - passed as argument in function findWaldo