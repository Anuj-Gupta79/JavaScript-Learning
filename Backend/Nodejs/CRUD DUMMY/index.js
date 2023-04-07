import express from 'express';
import userRoutes from './Routes/user.js';


const app = express();
const Port = 4001;
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use('/users', userRoutes);

app.listen(Port, ()=>{
    console.log(`port is running on http://localhost:${Port}`);
})