import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const [todos,setTodos] = useState([
    {id:1,text:'Learn React',completed:false},
    {id:2,text:'Build a React app',completed:false},
    {id:3,text:'Deploy the React app',completed:false},
  ]);
  
  const handlecomplete =(id) => {
    setTodos(
      todos.map((todo) =>
      todo.id === id ? {...todo,completed:true}:todo)
    );
  }
  
    return (
      <div>
         <h1>Parent Component</h1>
         <ChildComponent todos={todos} handleComplete={handlecomplete} />
      </div>
    )
  }
  
  function ChildComponent({ todos, handleComplete }) {
    return (
      <div>
        <h2>Child Component</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text} {todo.completed && <span>(Completed)</span>}
              {!todo.completed && (
                <button onClick={() => handleComplete(todo.id)}>Complete</button>
              )}
            </li>
            ))}
          </ul>
        </div>
      )
    }
  
  export default App
  
