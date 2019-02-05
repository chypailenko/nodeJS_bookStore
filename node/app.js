const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const bookRoute = require('./routes/books');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const db = require('./config/db');
db.authenticate()
    .then(() => console.log('db connected'))
    .catch(err => console.log(err));


app.use('/books', bookRoute);

app.listen(5000, () => console.log('app is running on port 3000'));