import React, { useEffect, useState } from "react";
// https://jsonplaceholder.typicode.com/posts

// here i fetched all the data once and then filtered out
const DebounceLocal = () => {
  const [allposts, setAllposts] = useState([]);
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      console.log("Api caleed once");
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setAllposts(data);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Debounced value:", query);
      setDebounced(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);
  const filteredPosts = allposts.filter(
    (p) => (
      console.log("Filtering..."),
      p.title.toLowerCase().includes(debounced.toLowerCase())
    )
  );
  return (
    <div>
      <h2>Debounced</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          console.log("User typing ", e.target.value);
        }}
      />
      <ul>
        {filteredPosts.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DebounceLocal;
