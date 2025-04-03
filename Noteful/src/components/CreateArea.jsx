import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    // Debug: if it's passing correct note data:
    // console.log(note);

    // This is to protect the default form behavior to prevent page refresh
    event.preventDefault();
    
    //Pass current generated note back to App
    props.onAdd(note);
  }
  return (
    <div>
      <form>
        <input
          name="title"
          value={note.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote} onAdd={props.note}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
