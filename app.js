

const path = require('path');
const express = require('express'); 
const app = express(); 
const port = 8080;
const cors = require('cors')

const email = req.body.email
const condition = req.body.condition
const price = req.body.price 
const description = req.body.description
// const bodyParser = require('body-parser')
const router = express.Router();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(cors());
app.use(express.static('public')); 
app.use( express.static('views'))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// res.render ('/advert.ejs', { email: email, condition: condition, price: price, description: description});

// app.get('/advert', function(req, res) {
//     res.send('advert.ejs');
// });
// these two functions are not talking to each other

app.get('/advert.ejs', function (req, res) {
    console.log(req.body);
    res.render({email: email, condition: condition, price: price, description: description})
});








app.listen(port, () => console.log(`Example app listening on port ${port}!`));
