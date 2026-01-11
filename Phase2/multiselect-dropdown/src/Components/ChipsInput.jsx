import React, { useState } from "react";

const ChipsInput = () => {
  const [chips, setChips] = useState([]);
  const [value, setValue] = useState();

  const handleSave = () => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      return;
    }

    const exists = chips.some(
      (t) => t.toLowerCase() === trimmedValue.toLowerCase()
    );

    if (!exists) {
      setChips((prev) => [...prev, trimmedValue]);
    }
    setValue("");
  };
  const handleRemove = (chip) => {
    setChips((prev) => prev.filter((t) => t !== chip));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleSave}>Add</button>
      </div>

      <div>
        {chips.map((t) => (
          <div key={t.id}>
            <span>{t}</span>
            <button onClick={() => handleRemove(t)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChipsInput;
