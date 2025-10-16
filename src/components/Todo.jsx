import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]); // list of todos
  const [text, setText] = useState(""); // where user type

  function addTodo() {
    const v = text.trim();
    if (!v) return;
    setTodos((prev) => [...prev, {id:crypto.randomUUID(),text: v, done: false }]);
    setText("");
  }

  function toggleDone(id) {
    setTodos((prev) =>
      prev.map(t => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function removeTodo(id) {
    setTodos((prev) => prev.filter(t => t.id!== id));
  }

  return (
    <>
      <h2>Todo</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your list here"
      />
      <button type="button" onClick={addTodo}>Add</button>

      <ul style={{ marginTop: "0,8rem" }}>
        {todos.map(t => (
          <li key={t.id}>
            <input
              type="checkBox"
              checked={t.done}
              onChange={() => toggleDone(t.id)}
            />
            <span
             className="todo-text"
              style={{textDecoration: t.done ? "line-through" : "none",
              }}
            >
            {t.text}
            </span>
            
            <button type="button"
            className="todo-delete"
             onClick={() => removeTodo(t.id)}
             aria-label="Delete todo"
             title="Delete"
             >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
