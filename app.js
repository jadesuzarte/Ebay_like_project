const path = require('path');
const express = require('express'); 
const app = express(); 
const port = 8080;
const cors = require('cors')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static('public')); 
app.use(express.static('views'));

app.get('/', (req, res) => res.send("index"));

app.post('/advert', function (req, res) {
    console.log(req.body)
    res.send(req.body)
});












app.listen(port, () => console.log(`Example app listening on port ${port}!`));
