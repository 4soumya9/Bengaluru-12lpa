import React, { useRef } from "react";

const SimpleThrottle = () => {
  const lastCall = useRef(0);

  const handleClick = () => {
    const now = Date.now();

    if (now - lastCall.current >= 2000) {
      lastCall.current = now;
      console.log("Clicked at", new Date().toLocaleTimeString());
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default SimpleThrottle;
