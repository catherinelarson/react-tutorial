import './App.css';
import { useState } from "react";
import Axios from 'axios';

function App() {
  const [info, setInfo] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const addItem = () => {
    Axios.post("http://localhost:3001/create", {
      title: title,
      information: info,
      date: date,
      time: time,
    }).then(() => {
      console.log("success");
    });
  };

  return (
    <div className="App">
      <div className="Header">
        To Do List
      </div>
      <div className="Input">
      <label>Title</label>
      <input type="text" onChange={(event) => {
        setTitle(event.target.value);
      }}></input>
      <label>Info</label>
      <input type="text" onChange={(event) => {
        setInfo(event.target.value);
      }}></input>
      <label>Due Date</label>
      <input type="text" onChange={(event) => {
        setDate(event.target.value);
      }}></input>
      <label>Time</label>
      <input type="text" onChange={(event) => {
        setTime(event.target.value);
      }}></input>
      <button onClick={addItem}>Add Item</button>
      </div>
    </div>
  );
}

export default App;
