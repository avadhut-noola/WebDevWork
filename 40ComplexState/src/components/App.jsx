import React, { useState } from "react";

function App() {
  // check the naming convention closely before accessing variables.
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    // Don't ever access the event values inside the setState method it will lead to app crash
    // Instead use it like this outside of setState.
    const { value, name } = event.target;

    //Using spread operator to reduce the line of code
    // While managing the complex states
    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  //Above [name] is used in array syntax because we're accessing the property of input element not an string
  // Read more about it here: https://stackoverflow.com/questions/11508463/javascript-set-object-key-by-variable?noredirect=1&lq=1

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email} </p>
      <form>
        <input
          onChange={handleChange}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
