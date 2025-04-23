const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName :{
        type: String,
        required: true,
        minLength: 6,
        kMaxLength: 19
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