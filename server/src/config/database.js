const mongoose = require("mongoose");

const connectDb = async () => {
    await mongoose.connect("some db string")
}


module.exports = connectDb;