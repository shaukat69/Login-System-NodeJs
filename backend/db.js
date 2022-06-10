const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/Login';

const connectToMongo = () => {
    mongoose.connect(mongoURL, () => {
        console.log("Connected To Mongo Successfully");
    })
}

module.exports = connectToMongo;