import React, { useEffect, useState } from "react";

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    loadTodos();
  }, []);

  useEffect(() => {});
  const addTodo = () => {};
  const syncPending = async () => {};
  return (
    <div>
      {!online && <h2 style={{ color: "red" }}> Offline </h2>}
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.text} {!t.synced && "(offline)"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
