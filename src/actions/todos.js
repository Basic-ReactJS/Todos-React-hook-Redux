import { TYPE_TODOS } from "./types";
import { todosAPI } from "../api/todosAPI";

export const refetchingTodos = (todos) => {
  return {
    type: TYPE_TODOS.FETCH_TODOS,
    todos,
  };
};

export const refetchingUpdatedTodos = (todo) => {
  return {
    type: TYPE_TODOS.FETCH_UPDATE_TODOS,
    todo,
  };
};

export const fetchTodos = () => {
  return (dispatch) => {
    return todosAPI.getTodos().then((data) => {
      return dispatch(refetchingTodos(data));
    });
  };
};

export const createTodo = (todo) => ({
  type: TYPE_TODOS.createTodos,
  payload: todo,
});

export const updateTodo = (todo) => {
  return (dispatch) => {
    return todosAPI.updateTodo(todo).then((data) => {
      return dispatch(refetchingUpdatedTodos(data));
    });
  };
};

export const deletedTodo = (id) => ({
  type: TYPE_TODOS.deleted_todo,
  payload: id,
});
