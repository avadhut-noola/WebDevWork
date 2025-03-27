import React, { useState } from "react";

function ListContainer() {

    const [inputText, setInputText] = useState("");
    const [list, setList] = useState([]);

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
        //To check whether this is working Go To React Components in browser Dev tools
    }

    function addTask() {
        setList( (prevTasks) => {
            // Using spread and adding current task here:
            return [...prevTasks, inputText];
        });
        setInputText(""); //Clear input field after adding a task
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input
                    onChange={handleChange}
                    value={inputText}
                    name="task"
                    type="text"
                />
                <button onClick={addTask}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {
                        list.map((task) => {
                            return <li>{task}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default ListContainer;
