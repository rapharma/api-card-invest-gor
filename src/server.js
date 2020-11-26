const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/auth-controller')(app);
// require('./controllers/card-invest-controller')(app);

let port = process.env.PORT || 3000;    

app.get('/', (req, res) => {
    res.send('Running api')
});

app.listen(port, () => {
    console.log(`Running api on port ${port}`)
});
