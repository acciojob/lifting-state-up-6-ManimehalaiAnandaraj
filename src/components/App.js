import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { todo: "Learn React", state: false },
    { todo: "Build a React app", state: false },
    { todo: "Deploy the React app", state: false },
  ]);
  
  
  function handleComplete(idx) {
    const updatedTodos = todos.map((todo, index) =>
      index === idx ? { ...todo, state: true } : todo
    );
    setTodos(updatedTodos);
  }
  
  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;