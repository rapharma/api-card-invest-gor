const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/authController')(app);
require('./controllers/cardInvestController')(app);
// require('./controllers/index')(app);

app.get('/', (req, res) => {
    res.send('Running')
});

app.listen(3000);