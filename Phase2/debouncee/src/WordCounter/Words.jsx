import React, { useEffect, useState } from "react";

const Words = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState([]);
  function handleCount() {
    const cleanedText = text.replace(/[^a-zA-Z\s]/g, "").trim();

    const words = cleanedText.split(/\s+/).filter((w) => w.length > 0);

    const wordMap = new Map();
    for (let w of words) {
      wordMap.set(w, (wordMap.get(w) || 0) + 1);
    }

    const sortedarray = Array.from(wordMap.entries()).sort(
      (a, b) => b[1] - a[1]
    );
    setCount(sortedarray);
  }

  useEffect(() => {
    handleCount();
  }, [text]);

  return (
    <div>
      <div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        {count.length > 0 && (
          <div>
            <h3>words freq</h3>
            <ul>
              {count.map(([word, count], index) => (
                <li key={word}>
                  {word} count {count}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Words;
