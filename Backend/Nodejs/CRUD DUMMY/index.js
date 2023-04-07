import express from 'express';

const app = express();
const Port = 4001;

app.listen(Port, ()=>{
    console.log("port is running");
})