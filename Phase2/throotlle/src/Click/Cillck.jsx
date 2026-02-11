import React from "react";
import { useThrottle } from "./useThrottle";
// I simulate rapid events and verify that the function executes at a fixed interval.
//  I also log timestamps to ensure calls are spaced correctly according to the throttle delay.
const Cillck = () => {
  const handleCLick = () => {
    console.log("Button clicked at", new Date().toLocaleTimeString());
  };
  const throttled = useThrottle(handleCLick, 2000);
  return <button onClick={throttled}>Cillck me </button>;
};

export default Cillck;
