import { createStore } from "redux";
import { nanoid } from "nanoid";

const reducer = (state = { todoList: [], todoToEdit: undefined }, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todoList: [{ ...action.payload, id: nanoid() }, ...state.todoList],
      };

    case "DELETE_TODO":
      return {
        ...state,
        todoList: state.todoList.filter((t) => t.id !== action.payload.id),
      };

    case "SAVE_TODO":
      return {
        ...state,
        todoToEdit: undefined,
        todoList: state.todoList.map((t) => {
          if (t.id === action.payload.id) {
            return { ...action.payload };
          }
          return t;
        }),
      };

    case "EDIT_TODO":
      return {
        ...state,
        todoToEdit: state.todoList.filter((t) => t.id === action.payload.id)[0],
      };

    case "ADD_STORE":
      return {
        ...action.state,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
