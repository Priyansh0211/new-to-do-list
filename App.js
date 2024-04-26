import React, { useState } from "react";
import TodoList from './ToDoLists'
import ToDoLists from "./ToDoLists";
const App = () => {

const [inputList,setInputList] = useState("");

const [Items,setItems] = useState([]);

const itemEvent = (evevt)=>{
  setInputList(evevt.target.value);
};

const listItem = () =>{
  setItems((oldItems) => {
    return [... oldItems,inputList]; 
  });
  setInputList(""); 
};

const deleteItems = (id) =>{
    console.log("deleted");

    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !==id ;
      });
    });
};
return (
  <>
    <div className="main-div">
      <div className="center-div">
        <br></br>
        <h1>ToDo List</h1>
        <br></br>
        <input type="text" className="input" value={inputList} placeholder="Add Your Task" onChange={itemEvent}></input>
        <button onClick={listItem}>+</button>

        <ol>
          {/* <li>{inputList}</li> */}

          {Items.map((itemval,index) => {
            return <ToDoLists key={index} id={index} text = {itemval}
            onSelect = {deleteItems}
            />;
          })}
        </ol>
      </div> 
    </div>
  </>
);

};

export default App;
