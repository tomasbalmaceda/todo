import React, { createContext, useReducer } from "react";

import {
  todoType,
  todoInitialState,
  todoReducer,
} from "../reducers/todoReducer";

import { reducerActionType } from "../types/reducerActionType";

type initialStateType = {
  todo: todoType;
};

type ContextType = {
  state: initialStateType;
  dispatch: React.Dispatch<any>;
};

const initialState = {
  todo: todoInitialState,
};

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
  todo: todoReducer(state.todo, action),
});

type ComponentWithChildrenProps = {
  children: React.ReactNode;
};

export const ContextProvider = ({ children }: ComponentWithChildrenProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
