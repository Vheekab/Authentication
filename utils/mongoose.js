require('dotenv').config()
const mongoose = require('mongoose')
const dblink = `mongodb+srv://${process.env.myUsername}:${process.env.myPassword}@cluster0.fansx3c.mongodb.net/`

// console.log(process.env.secret);
function connectMongoose() {
    // mongoose.connect('mongodb://127.0.0.1:27017/Authentication')
    mongoose.connect(dblink, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = connectMongoose