import React, { useState } from "react";
import uuid from "uuid/v4";

const initialTodos = [
  {
    id: uuid(),
    task: "Dance in the rain",
    complete: true
  },
  {
    id: uuid(),
    task: "Laugh",
    complete: true
  },
  {
    id: uuid(),
    task: "Buy lamp",
    complete: false
  }
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [item, setItem] = useState("");

  const handleChangeInput = event => {
    setItem(event.target.value);
  };

  const handleSubmit = event => {
    if (item) {
      setTodos([...todos, { id: uuid(), task: item, complete: false }]);
    }

    setItem("");

    event.preventDefault(); // prevent browser refresh
  };

  const handleChangeCheckbox = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="todoList">
      <label> Todo List </label>
      <ul>
        {todos.map(item => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.complete}
                onChange={() => handleChangeCheckbox(item.id)}
              />
              {item.task}
            </label>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" value={item} onChange={handleChangeInput} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoList;
