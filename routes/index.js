const notes = require('./notes');
const app = require('express').Router()



app.use('/notes', notes);

module.exports = app;