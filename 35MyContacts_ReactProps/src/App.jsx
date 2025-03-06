import './App.css'
import Avatar from './Avatar'
import Card from './Card'
 import contacts from './contacts'

// Creating a function to work on mapped data
function createCard(contact) {
  return ( <Card
    key = {contact.id}
    name = {contact.name}
    imgURL = {contact.imgURL}
    tel = {contact.tel}
    email = {contact.email}
  /> );
}

function App() {
  return (
    <>
      <div>
        <h1 className="heading">My Inspirations</h1>

        <Avatar
          imgURL={"https://avatars.githubusercontent.com/u/110377567?v=4"} 
        />

        {/* Data mapping through map function */}
        {contacts.map(createCard)}

      </div>
    </>
  )
}

export default App
