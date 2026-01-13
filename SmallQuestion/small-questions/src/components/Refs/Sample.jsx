import React, { useRef } from "react";

// What your code is doing:

// useRef() creates a reference → inputRef
// That ref is attached to the <input> using ref={inputRef}
// When the button is clicked, handleFocus() runs
// inputRef.current.focus() focuses the input field
const Sample = () => {
  const inputRef = useRef();
  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>CLick</button>
    </div>
  );
};

export default Sample;
