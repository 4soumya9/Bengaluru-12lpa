import React, { useRef } from "react";
// using useRef
// lastCall.current stores the last execution time and persists across renders without re-rendering the component.

// useRef is used to store mutable values like lastCall.current that persist across renders without triggering a re-render.

const LittleAdvancedThrottle = () => {
  // You cannot use useRef outside a React component
  //   Hooks must be called at the top level of a React component or custom hook
  //  — not inside loops, conditions, or nested functions.
  let lastcall = useRef(0);
  function throttle(func, delay) {
    return function () {
      const now = Date.now();
      if (now - lastcall.current >= delay) {
        lastcall.current = now;
        func();
      }
    };
  }
  const handleClick = throttle(() => {
    console.log("clicked", new Date().toLocaleTimeString());
  }, 1000);
  return (
    <div>
      <h2>Throttle</h2>
      <button onClick={handleClick}>Clickkk</button>
    </div>
  );
};

export default LittleAdvancedThrottle;
