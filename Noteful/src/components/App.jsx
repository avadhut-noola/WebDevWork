import './App.css'
import Heading from './Heading'
import Note from './Note'
import Footer from './footer'
import notes from './notes'

function App() {

  return (
    <>
        <Heading />
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

export default App
