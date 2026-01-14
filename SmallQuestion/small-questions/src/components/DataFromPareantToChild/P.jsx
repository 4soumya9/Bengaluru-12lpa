import React, { useState } from "react";
import C from "./C";

const P = () => {
  const [data, setData] = useState(0);

  const incre = () => {
    setData((c) => c + 1);
  };
  return (
    <div>
      <button onClick={incre}>Add</button>
      <C num={data} />
    </div>
  );
};

export default P;
