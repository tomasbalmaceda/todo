import { reducerActionType } from "../types/reducerActionType";

import { TodoType } from "../types/TodoType";

export type todoType = {
  todo: TodoType[];
};

export const todoInitialState: todoType = {
  todo: [],
};

export const todoReducer = (state: todoType, action: reducerActionType) => {
  switch (action.type) {
    case "CHANGE_TODO":
      return { ...state, todo: action.payload.todo };
      break;
  }

  return state;
};
