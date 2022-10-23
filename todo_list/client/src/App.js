import './App.css';
import { useState } from "react";
import Axios from 'axios';

function App() {
  const [info, setInfo] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [itemList, setItemList] = useState([]);

  const addItem = () => {
    Axios.post("http://localhost:3001/create", {
      title: title,
      information: info,
      date: date,
      time: time,
    }).then(() => {
      setItemList([
        ...itemList, {
        Title: title,
        Info: info,
        Date: date,
        Time: time,
      },
    ])
    });
  };

  const getItems = () => {
    Axios.get("http://localhost:3001/items").then((response) => {
      console.log("success");
      console.log(response.data);
      setItemList(response.data);
    });
  };

  const deleteItem = (ID) => {
    Axios.delete(`http://localhost:3001/delete/${ID}`).then((response) => {
      setItemList(itemList.filter((val) => {
        return val.ID !== ID
      }))
    })
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
      <br></br>
      <br></br>
      <hr></hr>

      <div className="showItems">
        <button onClick = {getItems}>Show Items</button>
        {itemList.map((val, key) => {
        return (
        <div className="item"> 
        <h3>Title: {val.Title}</h3>
        <h3>Info: {val.Info}</h3>
        <h3>Date Due: {val.Date}</h3>
        <h3>Time Due: {val.Time}</h3>
        <button onClick= {()=>deleteItem(val.ID)}>Done!</button>
        </div>);
      })}
      </div>
      </div>
    </div>
  );
}

export default App;
