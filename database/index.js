const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pledges', {useNewUrlParser: true});

var db = mongoose.connection
db.on('error', console.error.bind(console, 'error connection'));
db.once('open', () => {console.log(`<========== db says hello ==========>`)});

module.exports = db;