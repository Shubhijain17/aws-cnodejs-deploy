const express = require("express")
const app = express()
require("dotenv").config()
app.use(express.json())
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
        deg:"micro",
        role:"full Stack"
        },name,
        
    });
});
app.get('/api/get_users', (req, res) => {
    const users = [
        { id: 1, name: "shubhi", age: 22, contact: 12345678, address: "bhopal", role: "Backend Developer" },
        { id: 1, name: "shubhi", age: 22, contact: 12345678, address: "bhopal", role: "Backend Developer" },
    ];

    res.send({users});
});

app.listen(port, (err) => {
    if (err) {
        console.error("Error starting server:", err);
    } else {
        console.log('Server is running on port 8000 🐿');
    }
});
