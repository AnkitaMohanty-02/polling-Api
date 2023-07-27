const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0/polling_system');

const db = mongoose.connection;
// If error print error message
db.on('error',console.error.bind(console, 'error in connectiong to database'));

// if success the print the message
db.once('open', ()=> {
    console.log("Successfully connected to database");
})

module.exports = db;