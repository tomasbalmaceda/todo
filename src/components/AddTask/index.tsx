import React, { useContext, useState } from "react";
import * as C from "./styles";
import { Context } from "../../contexts/Context";
import { v4 as uuidv4 } from "uuid";

export const AddTask = () => {
  const { state, dispatch } = useContext(Context);
  const [tempName, setTempName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempName(e.target.value);
  };

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const NewTempData = {
      id: uuidv4(),
      todo: tempName,
      boolean: false,
    };

    const NewState = [...state.todo.todo, NewTempData];

    dispatch({
      type: "CHANGE_TODO",
      payload: {
        todo: NewState,
      },
    });
  };

  return (
    <div>
      <C.Form onSubmit={handleForm}>
        <C.InputForm
          placeholder="Task"
          required
          onChange={handleChange}
        ></C.InputForm>
        <C.ButtonForm type="submit">+</C.ButtonForm>
      </C.Form>
    </div>
  );
};
