import React, { useState } from "react";

const data = [
  { title: 1, data: "Soumya" },
  { title: 2, data: "Sooooo" },
];
const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <h2>accordian</h2>
      {data.map((t, index) => (
        <div key={index}>
          <button onClick={() => toggleIndex(index)}>{t.title}</button>
          {openIndex === index ? t.data : ""}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
