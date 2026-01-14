import React, { useRef } from "react";
import Child from "./Child";

// forwardRef allows a parent component to pass a ref to a child component
// so that the parent can directly access the child’s DOM element.

// Normally, refs don’t work on custom components directly. forwardRef fixes that.
const Parent = () => {
  const inputRef = useRef();
  const handleRef = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <Child ref={inputRef} />
      <button onClick={handleRef}>From pareant to c</button>
    </div>
  );
};

export default Parent;

// 🧠 What’s happening here?

// Parent creates a ref → useRef()

// Parent passes it to child → <Chh ref={inputRef} />

// Child receives it using forwardRef

// Child attaches it to <input ref={ref} />

// Parent can now control child’s input (focus, blur, etc.)
