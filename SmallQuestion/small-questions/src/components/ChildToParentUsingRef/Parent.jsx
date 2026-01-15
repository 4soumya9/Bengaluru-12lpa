import React, { useRef } from "react";
import Childdddd from "./Child";

const Parenttttt = () => {
  const valueRef = useRef("");

  return (
    <div>
      <Childdddd value={valueRef} />
      <button onClick={() => console.log(valueRef.current)}>Get</button>
    </div>
  );
};

export default Parenttttt;

// What are we doing in this example?

// You are:imp
// ➡️ Typing inside a child component (textarea)
// ➡️ Storing the value in a ref
// ➡️ Accessing that value from the parent
// ➡️ Without causing re-renders

// Purpose of this pattern
// 1️⃣ Share data without re-rendering

// If you used useState, every keystroke would cause a re-render.

// But with useRef:

// Value updates

// UI does NOT re-render

// Parent can still access latest value

// This is useful for performance.

// 2️⃣ Access child data from parent

// This pattern allows:
// ➡️ Child updates value
// ➡️ Parent reads value when needed (on button click)

// Without lifting state.

// 3️⃣ Useful for uncontrolled components

// This is an example of uncontrolled input.

// React is NOT controlling the value.
// You are directly reading from the DOM-like structure using ref.
