import React from "react";

const Childdddd = ({ value }) => {
  return (
    <div>
      <textarea
        onChange={(e) => (value.current = e.target.value)}
      ></textarea>
    </div>
  );
};

export default Childdddd;
