const mongoose = require('mongoose')
const {Schema} = mongoose

const details = new Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    fullname: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Blog', details)