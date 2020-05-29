const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
//Write code to filter this list down to only passing grades.

//Use the Array filter function to print out only the passing grades
    //Start by declaring the callback function and then later refactor it to be inline and anonymous, or start with an anonymous function to begin with.
//Convert the anonymous function into an arrow function in order to get some practice with them.

const passingGradesOnly = grades.filter(function(num) {
  return (num >= 70);
});
console.log('List of passing Grades:', passingGradesOnly);