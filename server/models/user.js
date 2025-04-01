const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName :{
        type: String,
    },
    lastName:{
        type: String
    },
    EmailId:{
        type: String
    },
    PassWord:{
        type: String
    },
    age:{
        type: Number
    },
});

const User = mongoose.model("user", userSchema);
module.export = User;