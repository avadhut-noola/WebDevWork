# Destructuring
Destructuring is the process of unpacking values from arrays or properties from objects into separate variables.  
It allows seamless access to data, making it easy to manipulate, render, and fetch within components or applications.  

# Forms of Destructuring
1. **Array Destructuring**  
  Extracts elements from arrays into variables.  
  Example:   
  ```
  const [firstName, lastName] = ['John', 'Doe'];
  console.log(firstName); // John
  console.log(lastName);  // Doe
  ```
2. **Object Destructuring**
  Extracts properties from objects into variables.  
  Example:  
  ```
  const user = { name: 'Alice', age: 25 };
  const { name, age } = user;
  console.log(name); // Alice
  console.log(age);  // 25
  ```

# Why Use Destructuring?
- Improves Readability: Simplifies code by reducing repetitive access.
- Access Nested Data: Handles complex data structures like JSON.
- Supports Default Values: Helps avoid errors when values are missing.
- Compact Function Parameters: Simplifies passing and accessing data in functions.

# Additional Notes
Combined destructuring of arrays and objects with iterable items or functions is also possible.    
This enables advanced use cases where arrays or objects are nested within functions or iterables.  
To explore more details and examples of JavaScript restructuring, take a look at the [MDN Documentation on Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring).

Thank you!
