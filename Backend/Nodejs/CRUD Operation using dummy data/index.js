import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const Port = 4100;

app.use(bodyParser.json());


app.get(('/'), (req, res)=>{
    console.log("working fine");
    res.send("Server is running fine!")
})



app.listen(Port, () => {
    console.log(`Server is Running on port : http://localhost:${Port}`)
})