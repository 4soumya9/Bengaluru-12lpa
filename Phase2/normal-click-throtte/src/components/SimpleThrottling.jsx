import React from "react";

function throttle(func, delay) {
  let lastcall = 0;
  return function () {
    let now = Date.now();
    if (now - lastcall >= delay) {
      lastcall = now;
      func();
    }
  };
}
const SimpleThrottling = () => {
  const handleClick = throttle(() => {
 console.log("clicked at", new Date().toLocaleTimeString());
  }, 2000);
  return (
    <div>
      <button onClick={handleClick}>Click me </button>
    </div>
  );
};

export default SimpleThrottling;
