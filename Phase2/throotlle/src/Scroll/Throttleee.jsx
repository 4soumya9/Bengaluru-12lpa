import React, { useEffect } from "react";

function throttle(fn, delay) {
  let lastcall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastcall > delay) {
      lastcall = now;
      fn(...args);
    }
  };
}
const Throttleee = () => {
  useEffect(() => {
    const handleScroll = throttle(() => {
      console.log("Scrolling...", new Date().toLocaleTimeString());
    }, 2000);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <div style={{ height: "200vh" }}>Scroll me</div>;
};

export default Throttleee;

/*1️⃣ window

Represents the browser window.

2️⃣ addEventListener

This is a JavaScript method that says:

“Hey browser, when something happens, call this function.”

3️⃣ "scroll"

This is the event type.

It means:
👉 When the user scrolls the page

4️⃣ handleScroll

This is the callback function that runs when the scroll happens.*/

// why no useRef
/*🔹 Why This Works Without useRef
useEffect(() => {
  const handleScroll = throttle(() => {
    console.log("Scrolling...");
  }, 1000);

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

Key point: useEffect([]) runs only ONCE

Because your dependency array is empty []:

This effect runs only on mount

throttle() is called only once

lastCall is created once

Closure keeps lastCall alive

So lastCall persists in memory → throttle works ✅


🔹 Why useRef Is NOT Required Here

You are NOT:

❌ Updating React state
❌ Causing re-renders
❌ Recreating the throttled function

This is a pure DOM side effect (scroll listener), so closure is enough*/
