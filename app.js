require('./models/db');
const port = process.env.PORT || 3000;

const express = require ('express');
const path = require('path');
const exphbs =require('express-handlebars');
const bodyparser = require('body-parser');


const customerController = require('./controllers/customerController');
const homeControler =require('./controllers/homeControler');

var app = express();
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());

app.set('views', path.join(__dirname,'/views/'));
app.engine('hbs',exphbs.engine({ extname: '.hbs',defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layout/'}));
app.set('view engine','hbs');
app.use(express.static(__dirname + '/css'));


app.listen(port, () => { 
    console.log(`Express server started at port : ${port}`);
});

app.use('/',homeControler);

app.use('/customer', customerController);
