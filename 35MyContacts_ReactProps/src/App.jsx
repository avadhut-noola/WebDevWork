import './App.css'
import Avatar from './Avatar'
import Card from './Card'
 import contacts from './contacts'

function App() {
  return (
    <>
      <div>
        <h1 className="heading">My Inspirations</h1>

        <Avatar
          imgURL={"https://avatars.githubusercontent.com/u/110377567?v=4"} 
        />

        <Card
          name = {contacts[0].name}
          imgURL = {contacts[0].imgURL}
          tel = {contacts[0].tel}
          email = {contacts[0].email}
        />

        <Card
          name = {contacts[1].name}
          imgURL = {contacts[1].imgURL}
          tel = {contacts[1].tel}
          email = {contacts[1].email}
        />

        <Card
          name = {contacts[2].name}
          imgURL = {contacts[2].imgURL}
          tel = {contacts[2].tel}
          email = {contacts[2].email}
        />
      </div>
    </>
  )
}

export default App
