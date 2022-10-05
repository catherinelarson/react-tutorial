const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "todolist",
    host: "localhost",
    password:"password          ",
    database: "todolist",
});

app.post("/create", (req, res) => {
    const title = req.body.title;
    const info = req.body.information;
    const time = req.body.time;
    const date = req.body.date;

    db.query("INSERT INTO todo_items (Title, Info, Date, Time) values (?,?,?,?)", 
    [title, info, date, time], (err, result) => {
        if(err) {
            console.log(err);
        } else {
            console.log("heya hiya howdy");
            res.send("how are you today??");
            ++indx;
        }
    });
});



app.listen(3001, () => {console.log("howdy");});