import React, { useState } from "react";
import "./Star.css";
const Star = () => {
  const [rating, setRating] = useState(0);

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <div
          key={star}
          onClick={() => setRating(star)}
          className={`${star <= rating ? "gold" : "gray"}`}
        >
          ☆
        </div>
      ))}
      <h2>{rating}</h2>
    </div>
  );
};

export default Star;
