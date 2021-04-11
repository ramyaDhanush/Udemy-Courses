// const check = false;

// const promise = new Promise((resolve, reject)=>{
//   if(check) resolve("DONE");
//   else reject("UNDONE");
// });

// console.log(promise);

// promise.then((res)=> console.log(res))
//        .catch((err)=> console.log(err));
       
const users = require(`../callBack/users.json`)
const movies = require(`../callBack/movies.json`)
const reviews = require(`../callBack/reviews.json`)

const getMovie = (id) => { 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find((movie) => movie.id === id);
      if(movie) resolve(movie);
      else reject("Movie Not Found")
    }, 1000);
  })
};

const getReview = (movieId) => {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      const review = reviews.find((review) => review.movie_id === movieId);
      if(review) resolve(review);
      else reject("Review Not Found");
    }, 1000);
  })
};

const getUser = (name, cb) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.name === name);
      if(user) resolve(user);
      else reject("User Not Found");
    }, 1000);
  })
};

getMovie(1).then(movie => getReview(movie.id)
           .then(review => getUser(review.reviewer)
           .then(user => console.log(user))))  
          .catch(err => console.log(err));