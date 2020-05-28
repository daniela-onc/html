const movies = [
  { title: 'Black Panther', year: 2018, genre: 'action', rating: 7.4 },
  { title: 'Avengers Infinity War', year: 2018, genre: 'action', rating: 8.5 },
  {
    title: 'Spider-Man: Into the Spider-Verse',
    year: 2018,
    genre: 'Fantasy/Science Fiction',
    rating: 8.7
  },
  {
    title: 'Incredibles 2',
    year: 2018,
    genre: 'Science Fiction/Action',
    rating: 7.8
  },
  { title: 'Deadpool 2', year: 2018, genre: 'action', rating: 7.8 },
  { title: 'Ant-Man and the Wasp', year: 2018, genre: 'action', rating: 7.2 },
  {
    title: 'Venom',
    year: 2018,
    genre: 'Thriller/Science Fiction',
    rating: 6.8
  },
  {
    title: 'Ralph Breaks the Internet',
    year: 2018,
    genre: 'Comedy',
    rating: 7.3
  }
];

// Create the filter function
// Input parameters: movieArr, callback
// Returns a new array filtered with the use of the callback fct

const filter = function(movieArr, callback) {
  
}

// Use the filter function to get the movies with highest ratings (rating >= 8)

// Use the filter function to get the movies where the genre is 'comedy'

const filter = function(movieArr, callback) {
  let result = [];
  for (let i = 0; i < movieArr.length; i++) {
    if (callback(movieArr[i])) {
      result.push(movieArr[i]["title"]);
    }
  }
  return result;
};
const highestRating = function(movie) {
  return movie["rating"] >= 8;
};
const ifComedy = function(movie) {
  return movie["genre"] === "Comedy";
}
console.log(filter(movies, ifComedy));
