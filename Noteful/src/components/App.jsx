import React, {useState}  from "react";
import './App.css'
import Heading from './Heading'
import Note from './Note'
import Footer from './footer'
// import notes from './notes'
import CreateArea from './CreateArea'

//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render separate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

function App() {

  const [notes, setNotes] = useState([]);
  function addNote(note) {

    setNotes(prevNotes => {
      return [...prevNotes, note];
    })
  }
  return (
    <>
        <Heading />
        <CreateArea  onAdd={addNote} />
        {/* For each note in JSON file */}
        {notes.map( note => <Note
            key = {note.key}
            title = {note.title}
            content = {note.content}
          />
        )}
        <Footer />
    </>
  )
}

export default App;
