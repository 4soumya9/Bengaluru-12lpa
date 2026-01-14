import React from "react";

const Chilldd = ({ onData }) => {
  return (
    <div>
      <button onClick={() => onData("hi from child")}>Sent to Parent</button>
    </div>
  );
};

export default Chilldd;
