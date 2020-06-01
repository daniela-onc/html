
//this code print: first array as an simple array and the second array as nested arrays
//  const printItems = function(array) {
//  for (let item of array) {
//    console.log(item);
//  }
//}

//  const array = ["😎", "💩", "🤗", "😼", "😂"];
//  printItems(array);


//Recursion code to print the array below same as an unested array 
const printItems = function(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      // Print out all it's items individually
      printItems(item);
    } else {
      console.log(item);
    }
  });
}
const array = ["😎", ["💩", "🤗"], "😼", "😂"];
printItems(array);



//logic:
//  printItems(["😎", ["💩", "🤗"], "😼", "😂"]) {

  // Item is not an array, so just log it
//   console.log("😎")

  // Item is an array so call the function again
//    printItems(["💩", "🤗"]) {
    // Item is not an array, so just log it
 //    console.log("💩")
    // Item is not an array, so just log it
 //      console.log("🤗")
 // }

  // Item is not an array, so just log it
  //   console.log("😼")

  // Item is not an array, so just log it
  //   console.log("😂")
//}