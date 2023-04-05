const express = require('express');
const app = express();
const PORT = 1101;
app.use(express.urlencoded({extended : true}));
app.use(express.json());

import {cookies} from './cookies.js';

var users = [];
app.get('/', (req, res)=>{
    res.send("Server is running fine");
})

app.get('/get', (req, res)=>{
    res.send(users);
})

app.post('/create', (req, res) => {
    const data = req.body;
    users.push(data);
    res.send(data);
    console.log('User created successfully!')
})

app

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})