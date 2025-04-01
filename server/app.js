const express = require("express");
const connectDb = require("./config/database")
const app = express();
const User = require("./models/user")
require("./src/config/database")

app.use((req, res) => {
    res.send("Hello from the server");
})

app.post("/signup", async (req, res) => {
    const userObj = {
        firstName: "xyz",
        lastName: "abc",
        email: "dummySus@gmail.com",
        passWord: "abcdef"
    }

    const user = new User(userObj)
    await user.save();
    res.send("user added")
})


connectDb.then(() => {
    console.log("Db connection sucess");
    app.listen(3000, () => {
        console.log("server is listing on port 3000");
    }); app.listen(3000, () => {
        console.log("server is listing on port 3000");
    });
}).catch((err) => {
    console.log(err);
}
)


