import React, { useState } from "react";
import "./M.css";
const MultiSelectDrop = () => {
  const [selected, setSelected] = useState([]);
  const [filter, setFilter] = useState("");

  const options = [
    "Thor",
    "Tony",
    "Steve",
    "Bruce",
    "Natasha",
    "Wanda",
    "Vision",
    "Loki",
    "Peter",
    "Strange",
    "TChalla",
    "Clint",
    "Scott",
    "Hope",
    "Sam",
  ];

  const handleRemove = (item) => {
    setSelected((prev) => prev.filter((t) => t !== item));
  };

  const hanldeSelect = (option) => {
    setSelected((prev) => [...prev, option]);
    setFilter("");
  };
  const filteredOptions = options.filter(
    (t) =>
      t.toLowerCase().includes(filter.toLowerCase()) && !selected.includes(t)
  );
  return (
    <div>
      <h1>MultiSelectDrop</h1>
      {/* selected chips  */}
      {selected.map((item) => (
        <div key={item.id}>
          <span>{item}</span>
          <button onClick={() => handleRemove(item)}>X</button>
        </div>
      ))}

      {/* input  */}
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      {/* dropdown  */}
      <ul className="floww">
        {filteredOptions.map((option) => (
          <li key={option}>
            <button onClick={() => hanldeSelect(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultiSelectDrop;
