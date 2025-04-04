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

app.get("/user", async (req, res) =>{
    const userEmail = req.body.email;
    try {
       const user =  await User.find({emailId : userEmail})
       if(user.length() === 0) res.send(400)
       else res.send(user)
    } catch (error) {
        res.send(400).send("Not working")
    }
    
})

app.patch("/user", async(req, res)=>{
    const userId = req.body.userId;
    const data = req.body;
    try {
        await User.findByIdAndUpdate({_id: userId} ,data);
        res.send("User Changed")
    } catch (error) {
        res.send(400);
    }    
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


