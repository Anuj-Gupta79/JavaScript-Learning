import express from "express";
import fs from "fs";

const router = express.Router();

const path = "/home/rider/Desktop/js/Backend/Nodejs/CRUD DUMMY/userData.json";

// save the data 
const saveUserData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(path, stringifyData)
}

//getting all teh data
const getUserData = () => {
    const jsonData = fs.readFileSync(path)
    return JSON.parse(jsonData)   
}

router.get("/", (req, res) => {
  res.send("Router working fine!!");
});


router.get('/get', (req, res) => {
    res.send(getUserData());
});

router.post('/create', (req, res) => {
    var userData = getUserData()
    const id = Math.floor(100000 + Math.random() * 900000)
    userData[id] = req.body;
    console.log(userData);
    saveUserData(userData);
    res.send({success: true, msg: 'user added successfully'})
})

router.put('/update/:id', (req, res) => {
    const id = req.params['id'];
    var userData = getUserData();
    userData[id] = req.body;
    console.log(userData[id]);
    saveUserData(userData);
    res.send(`User with id ${id} has been updated!`);
})

router.delete('/delete/:id', (req, res) => {
    const id = req.params['id'];
    let userData = getUserData();
    delete userData[id];
    saveUserData(userData);
    res.send(`User with id ${id} has been deleted!`);
})

export default router;
