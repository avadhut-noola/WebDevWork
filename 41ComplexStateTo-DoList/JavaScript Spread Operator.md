# JavaScript Spread Operator
The spread operator (...) is an ES6 feature that allows you to expand iterables (arrays, objects) into individual elements.  
It provides a concise way to copy, merge, and manipulate collections.

# Array Operations with Spread

Array Spreading
```
const fastestCars = ["Bugatti Veyron", "Devel Sixteen", "Hennessey Venom F5", "McLaren Speedtail"];
const cars = ["Maybach Landaulet", "Pagani Zonda C12 F", "Lamborghini Reventon", ...fastestCars];
```

**Key Points:**

- Creates a new array combining elements
- Original arrays remain unchanged (immutable operation)
- Order matters - spread elements are inserted at the operator's position

**Use Cases:**

- Combining arrays without mutating originals
- Inserting elements at specific positions
- Copying arrays (shallow copy): const copy = [...original]
- Converting iterables to arrays (e.g., NodeList to Array)

# Object Operations with Spread
```
    const fullName = {
    firstName: "Avadhut",
    lastName: "Noola"
    };

    const user = {
    ...fullName,  // Spread properties into new object
    id: 1,
    email: "avadhutnoola@gmail.com"
    };
```

# Important Behaviors

**Nested Objects Warning**

```
// Without spread - creates nested object
    const user = {
    fullName, // Creates nested fullName property
    id: 1
    };

    // With spread - flattens properties
    const user = {
    ...fullName, // Copies firstName/lastName directly
    id: 1
};
```

**Computed Property Names**  
    When dynamically setting object keys:  
    Square brackets ([]) in object literals create dynamic keys, while spread operators expand properties.
```
    const key = 'dynamicProp';
    const obj = {
    [key]: value // NOT {...[key]: value}
};
```

# Best Practices

- Readability: Avoid excessive nesting of spread operations
- Performance: Be mindful with large datasets (spread creates new objects/arrays)
- Immutability: Always use spread for state updates in React
- Clarity: Consider named variables over complex spread chains
- Shallow Copies: Remember nested objects aren't deeply copied

# React State Example

```javascript
// Good: Immutable update with spread
const [user, setUser] = useState({ name: "", age: 0 });

setUser((prev) => ({
  ...prev,
  name: "New Name", // Updates only 'name' while preserving 'age'
}));

// Bad: Direct mutation (won't trigger re-render)
user.name = "New Name"; // ❌ Never do this!
```

# Common Mistakes

- Direct Event Usage: Never use event objects directly in setState
- Over-spreading: Don't spread unnecessarily (e.g., primitives)
- Order Matters: Later spreads overwrite earlier ones
- Deep Copies: Spread doesn't handle nested structures deeply

# Shallow vs Deep Copies
```javascript
// Shallow copy (spread operator)
const original = { a: 1, nested: { b: 2 } };
const shallowCopy = { ...original };

shallowCopy.nested.b = 99; 
console.log(original.nested.b); // 99 (original modified!)

// Deep copy alternatives:
// 1. JSON.parse/stringify (limited)
const deepCopy1 = JSON.parse(JSON.stringify(original));

// 2. structuredClone (modern browsers)
const deepCopy2 = structuredClone(original);
```

**Read the [MDN Spread Syntax (...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)**
