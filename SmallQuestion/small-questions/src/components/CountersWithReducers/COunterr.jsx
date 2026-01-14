import React from "react";
import useCounter from "./useCounter";

const COunterr = () => {
  const { count, incre, reset, decre } = useCounter(5);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={incre}>Add</button>
      <button onClick={reset}>reset</button>
      <button onClick={decre}> Decrease</button>
    </div>
  );
};

export default COunterr;
