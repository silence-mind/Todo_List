import React, { useState, useEffect } from "react";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const formattedDate = currentDate.toLocaleString();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    } else {
      setError("Todo cannot be empty");
    }
    setTimeout(() => {
      setError("");
    }, 5000);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleResetAll = (e) => {
    e.preventDefault();
    setTodos([]);
  };

  return (
    <div className={classes.container}>
      <div className={classes.todo_container}>
        <div className={classes.title}>
          <h1 className={classes.title}>ToDoList</h1>
        </div>
        <div className={classes.date}>
          <h4>Date </h4>
          <p>{formattedDate}</p>
        </div>
        <form className={classes.form_Todo}>
          <input
            style={{ fontWeight: "bold", fontSize: "16px", color: "#555" }}
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            type="text"
            placeholder="Add The New Task"
          />
          <button onClick={handleAddTodo} className={classes.bn39}>
            Add
          </button>
          <button onClick={handleResetAll} className={classes.bn39}>
            Reset
          </button>
        </form>
        {error && <h4 style={{ color: "red" }}>{error}</h4>}

        <table className={classes.table}>
          <thead className={classes.thead}>
            <tr>
              <th>List</th>
            </tr>
          </thead>
          <tbody className={classes.tbody}>
            {todos.map((todo, index) => (
              <tr>
                <td key={index}>
                  <ul>
                    <li key={todo.id}>{todo}</li>
                  </ul>
                  <button
                    className={classes.deletebtn}
                    onClick={() => handleDeleteTodo(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
