const path = require('path');
const express = require('express'); 
const app = express(); 
const port = 8080;
const cors = require('cors')
const bodyParser = require('body-parser')
const router = express.Router();
app.use(express.json());
app.use(cors());
app.use(express.static('public')); 
app.use( express.static('views'))

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// app.get('/', function (req,res) {
//     res.send('index')
// })
app.get('/advert', function(req, res) {
    res.send('advert');
});


app.post('/advert', function (req, res) {
    console.log(req.body);
    res.send(req.body)
});








app.listen(port, () => console.log(`Example app listening on port ${port}!`));
