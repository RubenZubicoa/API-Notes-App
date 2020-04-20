const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


const app = express();

//settings
app.set('port', process.env.PORT || 4000);


//midlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes

app.use('/users', require('./routes/users'));
app.use('/notes', require('./routes/notes'));

module.exports = app;