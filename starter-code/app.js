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
    .then((response) => {
      // console.log(response)
      // res.send(response.value)
      res.render('index', {response})
    }).catch((err) => {
      // console.log(err)
      console.log('Esto esta dando error')
    });
});

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});
