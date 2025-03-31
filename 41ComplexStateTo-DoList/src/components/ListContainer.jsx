import React, { useState } from "react";
import TaskItem from "./TaskItem";

function ListContainer() {

    const [inputText, setInputText] = useState("");
    const [list, setList] = useState([]);

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
        //To check whether this is working Go To React Components in browser Dev tools
    }

    function addTask() {
        setList((prevTasks) => {
            // Using spread and adding current task here:
            return [...prevTasks, inputText];
        });
        setInputText(""); //Clear input field after adding a task
    }

    //id is argument of the task going to be deleted.
    function deleteTask(id) {
        setList( prevTasks => {
            return prevTasks.filter( 
            (task, index) => {
                // Return all elements in array expect the id passed over
                return index !== id;
            });
        })
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
                        // Here for the project purpose I have used index directly, 
                        // Never use index instead, 
                        // use npm packages like UUID for unique ID generation
                        list.map((task, index) => (
                            <TaskItem
                                key={index}
                                id={index}
                                text={task}
                                onChecked={deleteTask}
                            />
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default ListContainer;
