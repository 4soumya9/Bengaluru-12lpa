<!-- Great question 👍 Let’s understand why we use throttledFn.current.

What is throttledFn?
const throttledFn = useRef(null);


This creates a ref object that looks like this:

{
  current: null
}


React stores this object and does not reset it on re-render.

Why .current?

In React, useRef always stores its value inside a property called .current.

So:

throttledFn.current


means:
👉 “Give me the current value stored in this ref.”

Why not use throttledFn directly?

Because useRef() returns an object:

const throttledFn = useRef(null);


You CANNOT do this:

throttledFn(); ❌


You must do:

throttledFn.current(); ✅


Because the actual value (your function) is stored in .current.

In your code

You do:

throttledFn.current = throttle(() => { ... }, 1000);


Now .current holds the throttled function.

Later:

const handleScroll = () => throttledFn.current();


This calls the throttled function. -->

<!-- Short answer (2 lines):
useRef stores values inside .current, so your throttled function is saved as throttledFn.current.
We use .current() to call it because the ref itself is an object, not the function. -->
