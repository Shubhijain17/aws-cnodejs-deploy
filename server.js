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


app.listen(8000, (err) => {
    if (err) {
        console.error("Error starting server:", err);
    } else {
        console.log('Server is running on port 8000 🐿');
    }
});
