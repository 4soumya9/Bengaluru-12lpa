import React, { useEffect, useState } from "react";

const data = [
  { title: 1, content: "Hi this  is 1" },
  { title: 2, content: "Hi this  is 2 " },
  { title: 22, content: "Hi this  is  22" },
  { title: 24, content: "Hi this  is  24" },
  { title: 12, content: "Hi this  is  12" },
];
const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);

  const next = (index) => {
    setIndex(index === data.length - 1 ? 0 : index + 1);
  };

  const prev = (index) => {
    setIndex(index === 0 ? data.length - 1 : index - 1);
  };

  useEffect(() => {
    if (!autoPlay) {
      return;
    }

    const interval = setInterval(() => {
      next();
    }, 2000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  let card = data[index];

  return (
    <div>
      <h3>Carousel</h3>
      <div>{card.content}</div>
      <button onClick={() => next(index)}>Next</button>
      <button onClick={() => prev(index)}>Prev</button>
      <button onClick={() => setAutoPlay(true)}>Start</button>
      <button onClick={() => setAutoPlay(false)}>End</button>
    </div>
  );
};

export default Carousel;
