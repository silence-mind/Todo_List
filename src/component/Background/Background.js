import TodoList from "../TodoList/TodoList";
import classes from "./Background.module.css";
import React from "react";

const Background = () => {
  return (
    <div className={classes.background_container}>
      <TodoList />
    </div>
  );
};

export default Background;
