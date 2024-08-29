const express = require("express")
const app = express()
require("dotenv").config()

let port = process.env.PORT
let name = process.env.NAME

app.get('/api/get', (req, res) => {
    res.send({ message: "hello this is CICd server" });
});
app.get('/api/get_user_details', (req, res) => {
    res.send({
        user:{
        name: "shubhi",
        age:22,
        contact:23345643,
        address:"bhopal",
        deg:"micro"
        },name
    });
});


app.listen(port, (err) => {
    if (err) {
        console.error("Error starting server:", err);
    } else {
        console.log('Server is running on port 8000 🐿');
    }
});
