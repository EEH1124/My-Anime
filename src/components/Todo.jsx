import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]); // list of todos
  const [text, setText] = useState(""); // where user type

  function addTodo() {
    const v = text.trim();
    if (!v) return;
    setTodos((prev) => [...prev, { text: v, done: false }]);
    setText("");
  }

  function toggleDone(index) {
    setTodos((prev) =>
      prev.map((t, i) => (i === index ? { ...t, done: !t.done } : t))
    );
  }

  function removeTodo(index) {
    setTodos((prev) => prev.filter((t, i) => i !== index));
  }

  return (
    <>
      <h2>Todo</h2>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your list here"
      />
      <button onClick={addTodo}>Add</button>

      <ul style={{ marginTop: "0,8rem" }}>
        {todos.map((t, i) => (
          <li key={i}>
            <input
              type="checkBox"
              checked={t.done}
              onChange={() => toggleDone(i)}
            />
            <span
             className="todo-text"
              style={{textDecoration: t.done ? "line-through" : "none",
              }}
            >
            {t.text}
            </span>
            <button
            className="todo-delete"
             onClick={() => removeTodo(i)}
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
