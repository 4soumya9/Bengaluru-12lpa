import React, { useEffect, useRef, useState } from "react";
const dummyData = [
  "Apple",
  "Banana",
  "Cherry",
  "Mango",
  "Orange",
  "Grapes",
  "Pineapple",
  "Papaya",
  "Kiwi",
  "Strawberry",
  "Guava",
  "Blueberry",
  "Peach",
  "Plum",
  "Watermelon",
];

function throttle(fn, delay) {
  let lastcall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastcall >= delay) {
      lastcall = now;
      fn(...args);
    }
  };
}
const Infinite = () => {
  const [items, setItems] = useState(dummyData.slice(0, 3));
  const indexRef = useRef(3);
  const throttledFn = useRef(null);

  useEffect(() => {
    throttledFn.current = throttle(() => {
      console.log("Called at:", new Date().toLocaleTimeString()); // 👈 ADD HERE
      if (
        window.innerHeight + document.documentElement.scrollTop + 10 >=
        document.documentElement.scrollHeight
      ) {
        if (indexRef.current < dummyData.length) {
          setItems((prev) => [...prev, dummyData[indexRef.current]]);
          indexRef.current += 1;
        }
      }
    }, 2000);

    const handleScroll = () => {
      throttledFn.current();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ minHeight: "200vh" }}>
      <h4>Infinite</h4>
      {items.map((item, i) => (
        <div key={i} style={{ minHeight: "50px" }}>
          {item}
        </div>
      ))}

      {indexRef.current >= dummyData.length && <p>No more items</p>}
    </div>
  );
};

export default Infinite;

// Why useRef(null) and NOT useRef(0) here?
// const throttledFn = useRef(null);

// Because this ref is meant to store a function, not a number.
// | What you want to store | useRef initial value |
// | ---------------------- | -------------------- |
// | Function               | `useRef(null)`       |
// | Number                 | `useRef(0)`          |
// | String                 | `useRef("")`         |
// | Boolean                | `useRef(false)`      |
// | Object                 | `useRef({})`         |
// | Array                  | `useRef([])`         |

// 🔄 How This Works (Simple Flow)

// User scrolls ⬇️

// handleScroll() runs

// Throttled function executes (once per second)

// It checks if the user reached near bottom

// If yes → loads 1 more item

// UI updates

// Repeats
