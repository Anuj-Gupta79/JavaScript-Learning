import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Router working fine!!");
});

const path = "/home/rider/Desktop/js/Backend/Nodejs/CRUD DUMMY/userData.json";

router.get('/get', (req, res) => {
  const userData = JSON.parse(fs.readFileSync(path));
  res.send(userData);
});

router.post('/create', (req, res) => {
    let userData = JSON.parse(fs.readFileSync(path));
    userData.push(req.body);
    userData = JSON.stringify(userData);
    fs.writeFileSync(path, userData);
    res.send(req.body);
    console.log(req.body);
})

export default router;
