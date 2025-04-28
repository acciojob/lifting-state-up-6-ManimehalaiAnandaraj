import React from "react";
import "./../styles/App.css";

const TodoList = ({ todos, handleComplete }) => {
  return (
    <div>
        <h3>Child Component</h3>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo.todo} {!todo.state && <button onClick={()=>handleComplete(index)}>Complete</button>}
        </li>
      ))}
    </div>
  );
};

export default TodoList