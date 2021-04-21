import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../actions/todos";

import TodoItem from "./TodoItem";
import FilterItem from "./FilterItem";

function TodoList() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => {
    return state.todos;
  });

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div>
      <div className="content">
        <ul className="todo-list">
          {(todos ? todos : []).map((todo, id) => (
            <li key={id} className="todo-item">
              <TodoItem todo={todo}></TodoItem>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <FilterItem></FilterItem>
      </div>
    </div>
  );
}

export default TodoList;
