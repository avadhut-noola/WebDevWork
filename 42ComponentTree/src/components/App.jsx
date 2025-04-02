import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [list, setList] = useState([]);

  function addTask(inputText) {
    setList((prevTasks) => {
      // Using spread and adding current task here:
      return [...prevTasks, inputText];
    });
  }

  function deleteItem(id) {
    setList(prevItems => {
      return prevItems.filter((list, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        onAdd={addTask}
      />
      <div>
        <ul>
          {list.map((task, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={task}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
