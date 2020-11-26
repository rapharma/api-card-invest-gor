const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admito:m1234567@clus-card-invest-gor.dalez.mongodb.net/<nodedatadb>?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
} );

mongoose.Promise = global.Promise;

module.exports = mongoose;
