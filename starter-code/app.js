const express = require('express');
const Chuck  = require('chucknorris-io');

const app = express();
const pepe = new Chuck();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


// First iteration
app.get('/random', (req, res, next) => {
  console.log('La request está llegando')
  pepe.getRandomJoke()
    .then((responseRandomJoke) => {
      // console.log(response)
      res.render('index', {
        joke: responseRandomJoke})
    }).catch((err) => {
      // console.log(err)
      console.log('Error en la 1 iteration')
    });
});

//Second iteration
app.get('/categories', (req, res, next) => {
  console.log('La request 2 está llegando')
  pepe.getJokeCategories()
  .then((responseJokeCategorie)=>  {
    // use the response here
    res.render('categories', {
      categories: responseJokeCategorie
    })
  })
  .catch((err)=> {
    // handle error
    console.log('Error en la 2 iteration')
  });
});


// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});
