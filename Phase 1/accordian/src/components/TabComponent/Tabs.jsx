import React, { useState } from "react";
import "./Tabs.css";
const tabsData = [
  {
    id: 1,
    content: "This is the first tab content. It shows general information.",
  },
  {
    id: 2,
    content: "This is the second tab content. It contains user details.",
  },
  {
    id: 3,
    content: "This is the third tab content. Settings are managed here.",
  },
];

const Tabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {tabsData.map((t, index) => (
        <div
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`tab ${activeIndex === index ? "active " : ""}`}
        >
          {t.id}
        </div>
      ))}
      <div>{tabsData[activeIndex]?.content}</div>
    </div>
  );
};

export default Tabs;
