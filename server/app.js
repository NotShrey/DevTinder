const express = require("express");

const app = express();
require("./src/config/database")

app.use((req, res) => {
    res.send("Hello from the server");
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


