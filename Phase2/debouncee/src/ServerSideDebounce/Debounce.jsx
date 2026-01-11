import React, { useEffect, useState } from "react";
// https://dummyjson.com/products/search?q=phone

const Debounce = () => {
  const [res, setRes] = useState([]);
  const [debounced, setDebounced] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Api called with:", debounced);
      const ress = await fetch(
        `https://dummyjson.com/products/search?q=${debounced}`
      );
      const data = await ress.json();
      setRes(data.products);
    };
    fetchData();
  }, [debounced]);

  return (
    <div>
      <h2>Debounce</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          console.log("user typing :", e.target.value);
        }}
      />

      <ul>
        {res.map((t) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Debounce;
