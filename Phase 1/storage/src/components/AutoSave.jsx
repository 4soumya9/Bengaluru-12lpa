import React, { useEffect, useState } from "react";

const AutoSave = () => {
  const [text, setText] = useState("");
  const clearText = () => {
    setText("");
    localStorage.removeItem("save-text");
  };

  useEffect(() => {
    const saved = localStorage.getItem("save-text");
    if (saved) {
      setText(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("save-text", text);
  }, [text]);

  return (
    <div>
      <form>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={clearText}>Clear</button>
      </form>
    </div>
  );
};

export default AutoSave;
