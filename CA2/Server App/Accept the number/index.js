const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    res.sendFile('/home/rider/Desktop/js/CA2/Server App/Accept the number/index.html');
})

app.post("/form", (req, res) => {
  const num = req.body.number;
  if(isNaN(num))res.send(`${num} is not number!`);
  else res.send(`${num} is number!`);
  console.log(num)
});

app.listen(4001, () => {
  console.log("Server started on port 4001");
});
