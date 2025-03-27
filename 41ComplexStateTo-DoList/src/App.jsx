import "./App.css";
import ListContainer from "./components/ListContainer";

function App() {
  //1. When new text is written into the input, its state should be saved.
  //2. When the add button is pressed, the current data in the input should be
  //added to an array.
  //3. The <ul> should display all the array items as <li>s
  return (
    <>
      <ListContainer />
    </>
  );
}

export default App;