import { TYPE_TODOS } from "../actions/types";

export function rootReducer(state, action) {
  switch (action.type) {
    case TYPE_TODOS.FETCH_TODOS:
      return {
        ...state,
        todos: action.todos,
      };

    case TYPE_TODOS.FETCH_UPDATE_TODOS:
      let todosUpdated = state.todos.map((item) =>
        item.id === action.todo.data.id ? action.todo.data : item
      );
      return { todos: todosUpdated };

    default:
      console.log("ERROR reducers");
      return {
        ...state,
        error: "ERROR",
      };
  }
}
