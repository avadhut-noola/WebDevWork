import './App.css'
import Entry from './Components/Entry'
import emojipedia from './Components/emojipedia'

function emojiCreator(emojiTerm) {
  return ( <Entry
      key = {emojiTerm.id}
      emoji = {emojiTerm.emoji}
      name = {emojiTerm.name}
      meaning = {emojiTerm.meaning}
    /> );
}

function App() {
  return (
    <>
      <h1>
        <span> Emojipedia </span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(emojiCreator)}
      </dl>
    </>
  )
}

export default App
