const express = require("express")
const app = express()
// app.get('/api/get',(req,res)=>{
//     res.send({message:"hello this is CICd server"})
// })
// app.listen(8000,()=>{
//     console.log('srerver is runing🐿')
// })



app.get('/api/get', (req, res) => {
    res.send({ message: "hello this is CICd server" });
});
app.get('/api/get_user_details', (req, res) => {
    res.send({
        name: "shubhi",
        age:22,
        contact:23345643
    });
});


app.listen(8000, (err) => {
    if (err) {
        console.error("Error starting server:", err);
    } else {
        console.log('Server is running on port 8000 🐿');
    }
});
