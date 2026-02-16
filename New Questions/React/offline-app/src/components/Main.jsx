import React, { useEffect, useState } from "react";
import { saveTodoToServer } from "./api";
import { dbPromise } from "./db";

const Mainn = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [online, setOnline] = useState(navigator.onLine);

  // Check real internet connectivity
  const checkOnlineStatus = async () => {
    try {
      await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "HEAD",
        cache: "no-store",
      });
      return true;
    } catch {
      return false;
    }
  };

  const updateOnlineStatus = async () => {
    const status = await checkOnlineStatus();
    setOnline(status);
  };

  // Load todos from IndexedDB
  const loadTodos = async () => {
    const db = await dbPromise;
    const allTodos = await db.getAll("todos");
    setTodos(allTodos);
  };

  useEffect(() => {
    loadTodos();
    updateOnlineStatus();
  }, []);

  // Listen to online/offline changes
  useEffect(() => {
    const onlineHandler = async () => {
      const status = await checkOnlineStatus();
      setOnline(status);

      if (status) {
        syncPending();
      }
    };

    const offlineHandler = () => setOnline(false);

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);

  // Add todo
  const addTodo = async () => {
    if (!text.trim()) return;

    const todo = {
      id: Date.now(),
      text,
      synced: online,
    };

    const db = await dbPromise;

    // Save locally
    await db.put("todos", todo);

    if (!online) {
      // Save to pending if offline
      await db.add("pending", todo);
    } else {
      // Save to server if online
      await saveTodoToServer(todo);
    }

    setTodos((prev) => [...prev, todo]);
    setText("");
  };

  // Sync pending todos when back online
  const syncPending = async () => {
    const db = await dbPromise;
    const pendingTodos = await db.getAll("pending");

    for (const todo of pendingTodos) {
      await saveTodoToServer(todo);

      // Mark todo as synced
      const updatedTodo = { ...todo, synced: true };
      await db.put("todos", updatedTodo);
    }

    await db.clear("pending");

    // Reload UI
    loadTodos();
    console.log("All pending todos synced");
  };

  return (
    <div style={{ padding: "20px" }}>
      {!online && <h3 style={{ color: "red" }}>Offline</h3>}

      <input
        type="text"
        placeholder="Enter todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={addTodo} style={{ marginLeft: "10px" }}>
        Add
      </button>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            {t.text}
            {!t.synced && (
              <span style={{ color: "orange", marginLeft: "6px" }}>
                (offline)
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mainn;
