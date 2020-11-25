const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/auth-controller')(app);
require('./controllers/card-invest-controller')(app);
// require('./controllers/index')(app);

app.get('/', (req, res) => {
    res.send('Running')
});

app.listen(3000);