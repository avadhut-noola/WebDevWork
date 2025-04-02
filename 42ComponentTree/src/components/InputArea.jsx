import { React, useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
    //To check whether this is working Go To React Components in browser Dev tools
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={() => {
        props.onAdd(inputText);
        setInputText(""); //Clear input field after adding a task
      } }>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
