import React, { useState, useRef, Fragment } from "react";

const ToDo = () => {
  const [items, setItems] = useState([]);
  const [todo, setTodo] = useState("");

  return (
    <div style={{ textAlign: "left" }}>
      <form
        onSubmit={event => {
          event.preventDefault();
          if (items.includes(todo)) {
            return;
          }
          setItems([...items, todo]);
          setTodo("");
        }}
      >
        <input
          type="text"
          value={todo}
          onChange={event => setTodo(event.target.value)}
          style={{
            outlineColor: items.includes(todo) ? "red" : "green"
          }}
        />
        <button type="submit">+</button>
      </form>

      <ul>
        {items.map(item => (
          <li key={item}>
            {item}
            <button type="button" onClick={() => setItems(items.filter(i => i !== item))}>
              -
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
