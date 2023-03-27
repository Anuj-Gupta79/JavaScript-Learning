var fs = require("fs")

fs.writeFileSync("read.txt", "welcome my world!")
fs.writeFileSync("read.txt", "welcome my world! Anuj")
fs.appendFileSync("read.txt", " I am a student")

const buf_data = fs.readFileSync("read.txt")
console.log(buf_data);
console.log(buf_data.toString());

fs.renameSync("read.txt", "write.txt");

// fs.mkdirSync("Anuj12017818")
// fs.writeFileSync("./Anuj12017818/bio.txt", "Name :- Anuj")
// fs.appendFileSync("./Anuj12017818/bio.txt", "\nRegistration NUmber :- 12017818")
// fs.renameSync("./Anuj12017818/bio.txt", "./Anuj12017818/lpu.txt")

// var data = fs.readFileSync("./Anuj12017818/lpu.txt", "utf8")
// console.log(data)


// fs.rmSync("./Anuj12017818/lpu.txt")
// fs.rmdirSync("./Anuj12017818")

