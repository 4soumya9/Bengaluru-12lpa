import React, { useState } from "react";
import Chilldd from "./Chilldd";

const Paremntt = () => {
  const [data, setData] = useState("");
  const handleData = (value) => {
    setData(value);
  };
  return (
    <div>
      {" "}
      <h3>Data from Child : {data}</h3>
      <Chilldd onData={handleData} />
    </div>
  );
};

export default Paremntt;
