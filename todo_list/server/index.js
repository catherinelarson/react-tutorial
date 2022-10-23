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
            res.send("Values inserted");
            console.log("worked!");
        }
    });
});

app.get("/items", (req, res) => {
    db.query("SELECT * FROM todo_items",
    (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.delete("/delete/:ID", (req, res) => {
    const ID = req.params.ID
    db.query("DELETE FROM todo_items WHERE ID = ?", [ID], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});



app.listen(3001, () => {console.log("howdy");});