import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useSelector((state) => state.todoList);

  useEffect(() => {
    console.log("useEffect", todoList);
  });

  if (todoList.length === 0) {
    return <h4 className="text-muted text-center">no todos added yet</h4>;
  }

  return (
    <div>
      {todoList.map((t) => (
        <TodoItem todo={t.todo} key={t.id} id={t.id} />
      ))}
    </div>
  );
};

export default React.memo(TodoList);
