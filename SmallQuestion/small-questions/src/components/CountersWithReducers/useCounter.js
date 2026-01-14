import { useState } from "react";

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  const incre = () => {
    setCount((c) => c + 1);
  };

  const decre = () => {
    setCount((c) => c - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return { count, incre, decre, reset };
}

export default useCounter;
