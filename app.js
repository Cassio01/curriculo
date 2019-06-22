const express = require('express');
const port = 3000;
const path = require('path');

const indexRoute = require('./routes/index');
const curriculoRoute = require('./routes/curriculo');

const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('/',indexRoute);
app.get('/curriculo', curriculoRoute);

app.listen(port, err => {
    console.log(`Server is listening on ${port}`);
});