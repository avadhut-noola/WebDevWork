import './App.css'
import Card from "./Card";

function App() {
  return (
    <>
      <div>
        <h1>My Contacts</h1>
        {/* Here the values are being passed to props (which are defined in jsx) */}
        <Card
          name = "Aron Ralston"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Aron_Ralston_on_Capitol_Peak_Winter_2003.JPG/220px-Aron_Ralston_on_Capitol_Peak_Winter_2003.JPG"
          tel = "+123 003 404"
          email = "arontravels@gmail.com"
        />
        <Card
          name = "Chris Gardner"
          image = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/ChrisGardnerSept2011.jpg/220px-ChrisGardnerSept2011.jpg"
          tel = "+123 500 100"
          email = "chrisfighter@gmail.com"
        />
        <Card
          name = "Tom Hanks"
          image = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Kevin_Kline_%26_Tom_Hanks_%28252967475%29_%28cropped%29.jpg/170px-Kevin_Kline_%26_Tom_Hanks_%28252967475%29_%28cropped%29.jpg"
          tel = "+123 200 500"
          email = "tomactswell@gmail.com"
        />
      </div>
    </>
  )
}

export default App
