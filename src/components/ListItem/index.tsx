import React, { useContext } from "react";

import * as C from "./styles";

import { TodoType } from "../../types/TodoType";

import { Context } from "../../contexts/Context";

type Props = {
  item: TodoType;
};

export const ListItem = ({ item }: Props) => {
  const { state, dispatch } = useContext(Context);

  const onChange = (id: string, checked: boolean) => {
    const newState = state.todo.todo.map((obj) => {
      if (obj.id === id) {
        return {
          id: obj.id,
          todo: obj.todo,
          boolean: checked,
        };
      } else {
        return obj;
      }
    });

    dispatch({
      type: "CHANGE_TODO",
      payload: {
        todo: newState,
      },
    });
  };

  const handleDelete = (id: string) => {
    const index = state.todo.todo.findIndex((item) => item.id === id);

    const newTodoData = [...state.todo.todo];

    newTodoData.splice(index, 1);

    dispatch({
      type: "CHANGE_TODO",
      payload: {
        todo: newTodoData,
      },
    });
  };

  return (
    <C.Container>
      <C.Button onClick={() => handleDelete(item.id)}>X</C.Button>
      <C.Label>
        <input
          type="checkbox"
          checked={item.boolean}
          onChange={(e) => onChange(item.id, e.target.checked)}
        />
        <C.Paragraph text={item.boolean}>{item.todo}</C.Paragraph>
      </C.Label>
    </C.Container>
  );
};
