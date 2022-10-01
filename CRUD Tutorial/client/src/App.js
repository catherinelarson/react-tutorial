import './App.css';
import { useState } from "react";
import Axios from 'axios';
function App() {

  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const addItem = () => {
    Axios.post("http://localhost:3000/create", {title: title, info: info, date: date, time:time}).then(console.log("sent")); //this is the buddy object, sending this to the backend when this is called
  }
  return (
    <div className="App">
      <div className = "header">To-Do List</div>
      <div className="information">
      <label>Title</label>
      <input type="text" onChange={(event) => {
        setTitle(event.target.value);
      }}></input>
      <label>Info</label>
      <input type="text" onChange={(event) => {
        setInfo(event.target.value);
      }}></input>
      <label>Due date</label>
      <input type="text" onChange={(event) => {
        setDate(event.target.value);
      }}></input>
      <label>Time due</label>
      <input type="text" onChange={(event) => {
        setTime(event.target.value);
      }}></input>
      <button onClick={addItem()}>Add Item</button>
      </div>
    </div>
  );
}

export default App;
