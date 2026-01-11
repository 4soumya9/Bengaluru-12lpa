import React, { useEffect, useState } from "react";
// interview question
const De = () => {
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
      console.log("Api called with :", debounced);
      const ress = await fetch(
        `https://jsonplaceholder.typicode.com/posts?id=${debounced}`
      );
      const data = await ress.json();
      console.log(data);
      setRes(data);
    };
    fetchData();
  }, [debounced]);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          console.log("User typing:", e.target.value);
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

export default De;
