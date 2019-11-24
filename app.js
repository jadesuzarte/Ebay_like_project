const path = require('path');
const express = require('express');
const app = express();
const port = 8080;
const ejs = require('ejs')
const router = express.Router();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.static('views'))


app.post('/advert', (req, res) => {
    const email = req.body.email
    const condition = req.body.condition
    const price = req.body.price
    const description = req.body.description

    res.render('advert.ejs', {
        data: {
            email: email,
            condition: condition,
            price: price,
            description: description
        }
    });
})









app.listen(port, () => console.log(`Example app listening on port ${port}!`));