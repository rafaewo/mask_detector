var mongoose = require('mongoose')

var door = mongoose.Schema({
    open: Boolean
})

module.exports =  mongoose.model('door', door)