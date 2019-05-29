import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";

function App() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    document.getElementById("counter_comment").innerText = `${count}` + ' updated by useEffect';
  });

  return (
    <React.Fragment>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <div id="counter_comment"></div>
      </div>

      <TodoList />
    </React.Fragment>
  );
}

export default App;
