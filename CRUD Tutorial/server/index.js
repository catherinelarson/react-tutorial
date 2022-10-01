const express = require('express');
const app = express();
const mysql = require('mysql');
//const cors = require('cors');


const db = mysql.createConnection({
    user: "root",
    host: "todolist",
    password: "todolist",
    database: "todo_list",

});

app.post("/create", (req, res) => {
    const title = req.body.title;
    const info = req.body.info;
    const date = req.body.date;
    const time = req.body.time;

    db.query("INSERT INTO todo_items (Title, Info, Date, Time) VALUES (?,?,?,?)", 
    [title, info, date, time], (err, result) => {
        if(err) {
            console.log(err);
            console.log(error.response.data);
        } else {
            res.send("Values inserted");
        }
    });
});

app.listen(3001, () => {
    console.log("running");
});
